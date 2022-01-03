import { EuiButton, EuiPageTemplate, EuiPanel } from '@elastic/eui';
import React, { useState } from 'react';
import './App.css';
import CreationModal from './components/CreationModal';
import Flow from './components/Flow';

function App() {
  const [state, setState] = useState({
    isCreationModalOpen: false
  })
  return (
    <EuiPageTemplate
      template="centeredContent"
      pageContentProps={{ paddingSize: 'none' }}
      pageHeader={{
        iconType: 'logoElastic',
        pageTitle: 'Shortest Path by BR4INL3SS',
        rightSideItems: [<EuiButton onClick={() => setState({ ...state, isCreationModalOpen: true })} className="text-red-600">Add node or Edge</EuiButton>],
      }}
    >
      <EuiPanel style={{ width: '70rem' }} paddingSize="l">
        <Flow />
        {state.isCreationModalOpen && <CreationModal closeModal={() => setState({ ...state, isCreationModalOpen: false })} />}
      </EuiPanel>
    </EuiPageTemplate>
  );
}

export default App;
