import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { updateNodeColor, updateNodeFontSize } from '../redux/actions';
import { CirclePicker } from 'react-color';

const NodeCustomizationPanel = () => {
  const dispatch = useDispatch();
  
  // Get selectedNodeId from UI state
  const selectedNodeId = useSelector((state: RootState) => state.ui.selectedNodeId);
  
  // Get the LATEST node data from present state
  const presentNodes = useSelector((state: RootState) => state.history.present.nodes);
  
  // Find the current version of the selected node
  const selectedNode = presentNodes.find(node => node.id === selectedNodeId);

  if (!selectedNodeId || !selectedNode) {
    return null;
  }

  // Get current properties from the node
  const { color, fontSize } = selectedNode.data;

  return (
    <div style={{ position: 'absolute', right: 20, top: 20, background: 'white', padding: 20 }}>
      <CirclePicker
        color={color}
        onChangeComplete={(colorResult) => 
          dispatch(updateNodeColor(selectedNodeId, colorResult.hex))
        }
      />
      
      <div style={{ marginTop: 20 }}>
        <label>Font Size: </label>
        <input
          type="number"
          min="12"
          max="24"
          value={fontSize}
          onChange={(e) => 
            dispatch(updateNodeFontSize(
              selectedNodeId, 
              Math.max(12, Math.min(24, parseInt(e.target.value) || 16))
            ))
          }
        />
      </div>
    </div>
  );
};

export default NodeCustomizationPanel;