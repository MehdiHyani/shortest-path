import React from 'react';
import ReactFlow from 'react-flow-renderer';

function Flow() {

    const elements = [
        {
            id: '1',
            type: 'input', // input node
            data: { label: 'Input Node' },
            position: { x: 250, y: 25 },
        },
        // default node
        {
            id: '2',
            // you can also pass a React component as a label
            data: { label: <div>Default Node</div> },
            position: { x: 100, y: 125 },
        },
        {
            id: '3',
            type: 'output', // output node
            data: { label: 'Output Node' },
            position: { x: 250, y: 250 },
        },
        // animated edge
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e2-3', source: '2', target: '3' },
    ];

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
        <div style={{ height: 300 }}>
            <ReactFlow elements={elements} />
        </div>
    )
}

export default Flow
