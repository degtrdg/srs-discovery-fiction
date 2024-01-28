import React from "react";
import ReactFlow, { MiniMap, Controls, Background } from "react-flow-renderer";

const nodeStyle = {
  border: "1px solid #ddd",
  padding: "10px",
  borderRadius: "3px",
};

const nodes = [
  {
    id: "1",
    type: "input", // Start node
    data: { label: "Cell Theory", url: "https://example.com/cell-theory" }, // Add URL here
    position: { x: 0, y: 0 },
    style: {
      border: "1px solid #333",
      padding: "10px",
      borderRadius: "3px",
      cursor: "pointer",
    },
  },
  {
    id: "2",
    data: { label: "Germ Theory" },
    position: { x: 150, y: 100 },
    style: { ...nodeStyle, opacity: 0.6 }, // Muted style for non-clickable nodes
  },
  {
    id: "3",
    data: { label: "Evolution by Natural Selection" },
    position: { x: 300, y: 0 },
    style: { ...nodeStyle, opacity: 0.6 },
  },
  {
    id: "4",
    data: { label: "Endosymbiosis Theory" },
    position: { x: 450, y: 100 },
    style: { ...nodeStyle, opacity: 0.6 },
  },
];

const edges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
];

const onNodeClick = (
  event: any,
  node: { data: { url: string | URL | undefined } }
) => {
  if (node && node.data.url) {
    window.open(node.data.url, "_blank");
  }
};

const DAGFlow = () => (
  <ReactFlow nodes={nodes} edges={edges} onNodeClick={onNodeClick} fitView>
    <MiniMap />
    <Controls />
    <Background />
  </ReactFlow>
);

export default DAGFlow;
