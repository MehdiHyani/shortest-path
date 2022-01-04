import React from 'react'
import { EuiBottomBar, EuiButton, EuiFlexGroup, EuiFlexItem } from '@elastic/eui'
import { MobileBarProps } from '../utils/types'

function MobileBar({ openCreationModal, openCalculationModal }: MobileBarProps) {
    return (
        <EuiBottomBar>
            <EuiFlexGroup justifyContent="spaceBetween">
                <EuiFlexItem grow={false}>
                    <EuiFlexGroup gutterSize="s">
                        <EuiFlexItem grow={false}>
                            <EuiButton onClick={openCreationModal} color="primary" size="s" iconType="plus">
                                Add edge or node
                            </EuiButton>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiButton onClick={openCalculationModal} color="accent" fill size="s" iconType="check">
                                Calculate Shortest path
                            </EuiButton>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlexItem>
            </EuiFlexGroup>
        </EuiBottomBar>
    )
}

export default MobileBar
