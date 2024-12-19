import { useCallback } from 'react';
import {
    ReactFlow,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    Connection,
    Edge,
    Node,
} from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes: Node[] = [
    { id: '1', position: { x: 100, y: 100 }, data: { label: 'Server Starts' }, draggable: false },
    { id: '2', position: { x: 400, y: 100 }, data: { label: 'Load NLP Model' }, draggable: false },
    { id: '3', position: { x: 400, y: 250 }, data: { label: 'Precompute Embeddings' }, draggable: false },
    { id: '4', position: { x: 700, y: 100 }, data: { label: 'User Input Sent to Chatbot' }, draggable: false },
    { id: '5', position: { x: 700, y: 250 }, data: { label: 'NLP Model Has Answer?' }, draggable: false },
    { id: '6', position: { x: 1000, y: 100 }, data: { label: 'Return Answer to User' }, draggable: false },
    { id: '7', position: { x: 1000, y: 250 }, data: { label: 'Call generateResponse Function' }, draggable: false },
    { id: '8', position: { x: 1300, y: 100 }, data: { label: 'Call recognizeIntent Function' }, draggable: false },
    { id: '9', position: { x: 1300, y: 250 }, data: { label: 'Match Intent' }, draggable: false },
    { id: '10', position: { x: 1600, y: 100 }, data: { label: 'Return Matched Response' }, draggable: false },
];

const initialEdges: Edge[] = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '2', target: '3' },
    { id: 'e3-4', source: '3', target: '4' },
    { id: 'e4-5', source: '4', target: '5' },
    { id: 'e5-6', source: '5', target: '6', animated: true, label: 'Yes' },
    { id: 'e5-7', source: '5', target: '7', animated: true, label: 'No' },
    { id: 'e7-8', source: '7', target: '8' },
    { id: 'e8-9', source: '8', target: '9' },
    { id: 'e9-10', source: '9', target: '10' },
];

const Chart = () => {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback(
        (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    return (
        <div style={{ width: '90vw', height: '50vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodesDraggable={false}
                nodesConnectable={false}
                zoomOnScroll={false}
                zoomOnPinch={true}
                panOnDrag={true}
                elementsSelectable={false}
            >
                <Controls showInteractive={false} />
                <Background />
            </ReactFlow>
        </div>
    );
};

export default Chart;
