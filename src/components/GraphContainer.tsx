import React from "react";
import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { updateNodePosition, selectNode } from "../redux/actions";
import CustomNode from "./CustomNode";

// Define nodeTypes outside the component
const nodeTypes = { custom: CustomNode };

const GraphContainer = () => {
  const dispatch = useDispatch();
  const nodes = useSelector((state: RootState) => state.history.present.nodes);
  const edges = useSelector((state: RootState) => state.history.present.edges);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <ReactFlow
        key={nodes.length}  // Forces re-render when nodes change
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeDragStop={(e, node) => dispatch(updateNodePosition(node.id, node.position))}
        onNodeClick={(e, node) => dispatch(selectNode(node.id))}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default GraphContainer;
