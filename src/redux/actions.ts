export const UPDATE_NODE_COLOR = 'UPDATE_NODE_COLOR';
export const UPDATE_NODE_FONT_SIZE = 'UPDATE_NODE_FONT_SIZE';
export const UPDATE_NODE_POSITION = 'UPDATE_NODE_POSITION';
export const UNDO = 'UNDO';
export const REDO = 'REDO';
export const SELECT_NODE = 'SELECT_NODE';

// Action Creators
export const updateNodeColor = (nodeId: string, color: string) => ({
  type: UPDATE_NODE_COLOR,
  payload: { nodeId, color },
});

export const updateNodeFontSize = (nodeId: string, fontSize: number) => ({
  type: UPDATE_NODE_FONT_SIZE,
  payload: { nodeId, fontSize },
});

export const updateNodePosition = (nodeId: string, position: { x: number; y: number }) => ({
  type: UPDATE_NODE_POSITION,
  payload: { nodeId, position },
});

export const undo = () => ({ type: UNDO });
export const redo = () => ({ type: REDO });
export const selectNode = (nodeId: string | null) => ({
  type: SELECT_NODE,
  payload: { nodeId },
});