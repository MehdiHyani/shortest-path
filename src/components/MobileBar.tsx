import React, { useContext, useState } from 'react'
import { EuiBottomBar, EuiButton, EuiFlexGroup, EuiFlexItem, EuiFlyout, EuiFlyoutBody, EuiFlyoutFooter, EuiFlyoutHeader, EuiTitle, useGeneratedHtmlId } from '@elastic/eui'
import { MobileBarProps } from '../utils/types'
import { FlowContext } from '../context/FlowContext';

function MobileBar({ openCreationModal, openCalculationModal }: MobileBarProps) {

    const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);

    const simpleFlyoutTitleId = useGeneratedHtmlId({
        prefix: 'simpleFlyoutTitle',
    });

    const { setFlow } = useContext(FlowContext);

    return (
        <>
            <EuiBottomBar>
                <EuiFlexGroup justifyContent="spaceBetween">
                    <EuiFlexItem grow={false}>
                        <EuiFlexGroup gutterSize="s">
                            <EuiFlexItem grow={false}>
                                <EuiButton onClick={() => setIsFlyoutOpen(true)} color="primary" size="m" iconType="wrench">
                                    More actions
                                </EuiButton>
                            </EuiFlexItem>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiBottomBar>
            {isFlyoutOpen && <EuiFlyout
                ownFocus
                onClose={() => setIsFlyoutOpen(false)}
                aria-labelledby={simpleFlyoutTitleId}
            >
                <EuiFlyoutHeader hasBorder>
                    <EuiTitle size="m">
                        <h2 id={simpleFlyoutTitleId}>Actions</h2>
                    </EuiTitle>
                </EuiFlyoutHeader>
                <EuiFlyoutBody>
                    <EuiFlexGroup justifyContent="spaceBetween">
                        <EuiFlexItem grow={false}>
                            <EuiFlexGroup gutterSize="s">
                                <EuiFlexItem grow={false}>
                                    <EuiButton onClick={openCreationModal} color="primary" size="m" iconType="plusInCircleFilled">
                                        Create a node or an edge
                                    </EuiButton>
                                </EuiFlexItem>
                                <EuiFlexItem grow={false}>
                                    <EuiButton onClick={openCalculationModal} color="primary" size="m" iconType="stats">
                                        Calculate shortest Path
                                    </EuiButton>
                                </EuiFlexItem>
                                <EuiFlexItem grow={false}>
                                    <EuiButton onClick={() => setFlow([])} color="danger" size="m" iconType="trash" fill>
                                        Clear flow
                                    </EuiButton>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlyoutBody>
                <EuiFlyoutFooter>
                    <p>Made by BR4INL3SS</p>
                </EuiFlyoutFooter>
            </EuiFlyout>}
        </>
    )
}

export default MobileBar
