import { EuiGlobalToastList, EuiPageTemplate, EuiPanel, isWithinBreakpoints } from '@elastic/eui';
import React, { useContext, useState } from 'react';
import './App.css';
import CreationModal from './components/CreationModal';
import CalculationModal from './components/CalculationModal';
import Flow from './components/Flow';
import MobileBar from './components/MobileBar';
import ActionsButtonDesktop from './components/ActionsButtonDesktop';
import { ToastContext } from './context/ToastContext';
import { RootAppState } from './utils/types';

function App() {

  const { toasts, dismissToast } = useContext(ToastContext)

  const [state, setState] = useState<RootAppState>({
    isCreationModalOpen: false,
    isCalculationModalOpen: false,
  })

  function openModal(type: string) {
    setState({ ...state, [`is${type}ModalOpen`]: true })
  }

  return (
    <>
      <EuiPageTemplate
        template="centeredContent"
        pageContentProps={{ paddingSize: 'none' }}
        pageHeader={{
          iconType: 'branch',
          pageTitle: "Shortest Path by BR4INL3SS",
          rightSideItems: isWithinBreakpoints(window.innerWidth, ['xs', 's']) ? [] : [<ActionsButtonDesktop openModal={openModal} />],
        }}
      >
        <EuiPanel style={{ width: '90vw' }} paddingSize="l">
          <Flow />
          {state.isCreationModalOpen && <CreationModal closeModal={() => setState({ ...state, isCreationModalOpen: false })} />}
          {state.isCalculationModalOpen && <CalculationModal closeModal={() => setState({ ...state, isCalculationModalOpen: false })} />}
        </EuiPanel>
        {isWithinBreakpoints(window.innerWidth, ['xs', 's']) && <MobileBar openCreationModal={() => setState({ ...state, isCreationModalOpen: true })} openCalculationModal={() => setState({ ...state, isCalculationModalOpen: true })} />}
      </EuiPageTemplate>
      <EuiGlobalToastList
        toasts={toasts}
        toastLifeTimeMs={5000}
        dismissToast={dismissToast}

      />
    </>
  );
}

export default App;
