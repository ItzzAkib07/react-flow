export interface Node {
  id: string;
  position: { x: number; y: number };
  data: {
    label: string;
    color: string;
    fontSize: number;
  };
  type?: string; // Optional property for custom node types
}

export interface Edge {
  id: string;
  source: string;
  target: string;
}

export interface GraphState {
  nodes: Node[];
  edges: Edge[];
}

export interface HistoryState {
  past: GraphState[];
  present: GraphState;
  future: GraphState[];
}

export interface UIState {
  selectedNodeId: string | null;
}