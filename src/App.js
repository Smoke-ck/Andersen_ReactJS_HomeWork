import './App.css';
import { Component } from 'react';
import Form from './component/Form/Form';
import Sample from './component/Sample/Sample';

class App extends Component {
  state = {
    stateFromForm: null,
    showForm: true,
  }

  callbackStateFromForm = (dataFromForm) => {
    this.setState({
      stateFromForm: dataFromForm,
    })
  }

  hideForm = () => {
    this.setState({ showForm: false });
  }

  render() {
    if (!this.state.showForm) {
      return <div className="sampleContentWrapper">
        <Sample state={this.state} />
        <button className="toFormButton" onClick={() => this.setState({ showForm: true })}>Back to form</button>
      </div>
    }
    return <div className="content">
      <Form
        hideForm={this.hideForm}
        callbackStateFromForm={this.callbackStateFromForm}
      />
    </div>
  }
}

export default App;