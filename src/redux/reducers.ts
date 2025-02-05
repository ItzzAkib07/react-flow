import { Node, Edge, GraphState, HistoryState, UIState } from '../types';
import {
  UPDATE_NODE_COLOR,
  UPDATE_NODE_FONT_SIZE,
  UPDATE_NODE_POSITION,
  UNDO,
  REDO,
  SELECT_NODE,
} from './actions'


// Generate Initial Graph
const generateInitialGraph = (): GraphState => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  const nodeCount = 10;
  const radius = 150;

  for (let i = 0; i < nodeCount; i++) {
    
    const angle = (i * 2 * Math.PI) / nodeCount;
    const nodeId = `node-${i}`;

    nodes.push({
      id: nodeId,
      position: {
        x: radius * Math.cos(angle) + 250,
        y: radius * Math.sin(angle) + 250,
      },
      data: {
        label: `Node ${i}`,
        color: '#ffcc00',
        fontSize: 16,
      },
      type:'custom'
    });

    // Create edges between consecutive nodes
    if (i > 0) {
      edges.push({
        id: `edge-${i-1}-${i}`,
        source: `node-${i-1}`,
        target: `node-${i}`,
      });
    }
  }

  // Connect the last node to the first one to form a circular graph
  edges.push({
    id: 'edge-9-0',
    source: 'node-9',
    target: 'node-0',
  });


  return { nodes, edges };
};


// Graph Reducer
const initialGraphState: GraphState = generateInitialGraph();

const graphReducer = (state = initialGraphState, action: any): GraphState => {
  switch (action.type) {
    case UPDATE_NODE_COLOR:
    case UPDATE_NODE_FONT_SIZE:
    case UPDATE_NODE_POSITION: {
      const updatedNodes = state.nodes.map(node => {
        if (node.id === action.payload.nodeId) {
          return {
            ...node,
            position: action.type === UPDATE_NODE_POSITION ? { ...action.payload.position } : node.position,
            data: {
              ...node.data,  // Create a new object reference for `data`
              ...(action.type === UPDATE_NODE_COLOR && { color: action.payload.color }),
              ...(action.type === UPDATE_NODE_FONT_SIZE && { fontSize: action.payload.fontSize }),
            }
          };
        }
        return node;
      });

      return { 
        ...state, 
        nodes: [...updatedNodes]  // Ensure new array reference
      };
    }
    default:
      return state;
  }
};




// History Reducer
export const historyReducer = (state: HistoryState = { past: [], present: initialGraphState, future: [] }, action: any) => {
  switch (action.type) {
    case UNDO:
      if (state.past.length === 0) return state;
      return {
        past: state.past.slice(0, -1),
        present: state.past[state.past.length - 1],
        future: [state.present, ...state.future],
      };
    case REDO:
      if (state.future.length === 0) return state;
      return {
        past: [...state.past, state.present],
        present: state.future[0],
        future: state.future.slice(1),
      };
    default: {
      const isGraphAction = [UPDATE_NODE_COLOR, UPDATE_NODE_FONT_SIZE, UPDATE_NODE_POSITION].includes(action.type);
      if (isGraphAction) {
        // Wrap the block with curly braces to avoid the error
        {
          const newPresent = graphReducer(state.present, action);
          if (newPresent === state.present) return state;
          return {
            past: [...state.past, state.present],
            present: newPresent,
            future: [],
          };
        }
      }
      return state;
    }
  }
};


// UI Reducer
const initialUIState: UIState = { selectedNodeId: null };

export const uiReducer = (state = initialUIState, action: any): UIState => {
  switch (action.type) {
    case SELECT_NODE:
      return { ...state, selectedNodeId: action.payload.nodeId };
    default:
      return state;
  }
};