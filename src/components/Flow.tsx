import { isWithinBreakpoints } from '@elastic/eui';
import React, { useContext } from 'react';
import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';
import { FlowContext } from '../context/FlowContext';
import { emptyFlowNode } from '../utils/constants';

function Flow() {

    const { flow } = useContext(FlowContext)

    return (
        <div style={{ height: 400 }}>
            <ReactFlow defaultZoom={isWithinBreakpoints(window.innerWidth, ['xs', 's']) ? 0.25 : 1} nodesConnectable={false} elements={(flow.length === 0) ? emptyFlowNode : flow}>
                <MiniMap
                    nodeColor={(node) => {
                        switch (node.type) {
                            case 'input':
                                return 'red';
                            case 'default':
                                return '#00ff00';
                            case 'output':
                                return 'rgb(0,0,255)';
                            default:
                                return '#eee';
                        }
                    }}
                    nodeStrokeWidth={3}
                />
                <Controls />
            </ReactFlow>
        </div>
    )
}

export default Flow
