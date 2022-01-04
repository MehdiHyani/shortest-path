import { isWithinBreakpoints } from '@elastic/eui';
import React, { useContext } from 'react';
import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';
import { FlowContext } from '../context/FlowContext';

function Flow() {

    const { flow } = useContext(FlowContext)

    /*
        Example graph:
        
        let graph = {
            start: { A: 5, B: 2 },
            A: { start: 1, C: 4, D: 2 },
            B: { A: 8, D: 7 },
            C: { D: 6, finish: 3 },
            D: { finish: 1 },
            finish: {},
        };
    */

    return (
        <div style={{ height: 400 }}>
            <ReactFlow defaultZoom={isWithinBreakpoints(window.innerWidth, ['xs', 's']) ? 0.25 : 1} nodesConnectable={false} elements={flow}>
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
