import { EuiButton, EuiPageTemplate, EuiPanel, isWithinBreakpoints } from '@elastic/eui';
import React, { useState } from 'react';
import './App.css';
import CreationModal from './components/CreationModal';
import Flow from './components/Flow';
import MobileBar from './components/MobileBar';

function App() {
  const [state, setState] = useState({
    isCreationModalOpen: false,
    isCalculationModalOpen: false,
  })
  return (
    <EuiPageTemplate
      template="centeredContent"
      pageContentProps={{ paddingSize: 'none' }}
      pageHeader={{
        iconType: 'branch',
        pageTitle: "Shortest Path by BR4INL3SS",
        rightSideItems: isWithinBreakpoints(window.innerWidth, ['xs', 's']) ? [] : [< EuiButton onClick={() => setState({ ...state, isCreationModalOpen: true })} > Add node or Edge</ EuiButton>],
      }}
    >
      <EuiPanel style={{ width: '90vw' }} paddingSize="l">
        <Flow />
        {state.isCreationModalOpen && <CreationModal closeModal={() => setState({ ...state, isCreationModalOpen: false })} />}
      </EuiPanel>
      {isWithinBreakpoints(window.innerWidth, ['xs', 's']) && <MobileBar openCreationModal={() => setState({ ...state, isCreationModalOpen: true })} openCalculationModal={() => setState({ ...state, isCalculationModalOpen: true })} />}
    </EuiPageTemplate>
  );
}

export default App;
