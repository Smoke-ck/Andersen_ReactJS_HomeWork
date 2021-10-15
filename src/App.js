import './App.css';
import { useState } from 'react';
import Form from './component/Form/Form';
import Sample from './component/Sample/Sample';

function App() {

  const [state, setState] = useState({ stateFromForm: null, showForm: true, })

  const callbackStateFromForm = (dataFromForm) => {
    setState({
      ...state,
      stateFromForm: dataFromForm,
      showForm: false,
    });
  }

  if (!state.showForm) {
    return <div className="sampleContentWrapper">
      <Sample state={state.stateFromForm} />
      <button className="toFormButton" onClick={() => setState({ showForm: true })}>Back to form</button>
    </div>
  }
  return <div className="content">
    <Form

      callbackStateFromForm={callbackStateFromForm}
    />
  </div>
}

export default App;