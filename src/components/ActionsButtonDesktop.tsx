import React, { useContext, useState } from 'react';
import { useGeneratedHtmlId } from '@elastic/eui';
import {
    EuiButton,
    EuiContextMenu,
    EuiIcon,
    EuiPopover,
} from '@elastic/eui';
import { FlowContext } from '../context/FlowContext';
import { ActionsButtonDesktopProps } from '../utils/types';
import { ToastContext } from '../context/ToastContext';
import { exampleFlow } from '../utils/constants';

const ActionsButtonDesktop = ({ openModal }: ActionsButtonDesktopProps) => {

    const [isPopoverOpen, setPopover] = useState(false);

    const { setFlow } = useContext(FlowContext);
    const { addToast } = useContext(ToastContext);

    const contextMenuPopoverId = useGeneratedHtmlId({
        prefix: 'contextMenuPopover',
    });
    const onButtonClick = () => {
        setPopover(!isPopoverOpen);
    };
    const closePopover = () => {
        setPopover(false);
    };
    const panels = [
        {
            id: 0,
            items: [
                {
                    name: 'Add a node or an edge',
                    icon: 'plusInCircleFilled',
                    onClick: () => {
                        openModal('Creation');
                        setPopover(false);
                    },
                },
                {
                    name: 'Calculate shortest path',
                    icon: 'stats',
                    onClick: () => {
                        openModal('Calculation');
                        setPopover(false);
                    },
                },
                {
                    name: 'Load simple example',
                    icon: "listAdd",
                    onClick: () => {
                        setFlow(exampleFlow);
                        setPopover(false);
                    },
                },
                {
                    name: 'Clear Flow',
                    icon: <EuiIcon type="trash" size="m" color="danger" />,
                    onClick: () => {
                        setFlow([]);
                        setPopover(false);
                        addToast({
                            title: 'Action successful',
                            color: 'warning',
                            icon: 'checkInCircleFilled',
                            text: 'Flow Cleared'
                        })
                    },
                },
            ],
        }
    ];
    const button = (
        <EuiButton iconType="arrowDown" iconSide="right" onClick={onButtonClick}>
            Actions
        </EuiButton>
    );
    return (
        <EuiPopover
            id={contextMenuPopoverId}
            button={button}
            isOpen={isPopoverOpen}
            closePopover={closePopover}
            panelPaddingSize="none"
            anchorPosition="downLeft"
        >
            <EuiContextMenu initialPanelId={0} panels={panels as any} />
        </EuiPopover>
    );
};

export default ActionsButtonDesktop;