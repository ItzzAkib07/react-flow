import React from "react";
import './App.css'
import { Provider } from 'react-redux';
import {store}  from './redux/store';
import GraphContainer from './components/GraphContainer';
import NodeCustomizationPanel from './components/NodeCustomizationPanel';
import UndoRedoControls from './components/UndoRedoControls';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
          <GraphContainer />
          <NodeCustomizationPanel />
          <UndoRedoControls />
        </div>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
