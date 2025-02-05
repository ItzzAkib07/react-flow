import React from 'react';
import { NodeProps } from 'reactflow';

const CustomNode = ({ data, selected }: NodeProps) => {
  return (
    <div
      className="custom-node"
      style={{
        backgroundColor: data.color,
        fontSize: `${data.fontSize}px`,
      }}
    >
      {data.label}
    </div>
  );
};

export default CustomNode;