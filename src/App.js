import React from 'react';
import Header from './components/Header';
import Aside from './components/Aside';
import Main from './components/Main';
import data from './data/data';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.fetchApi = this.fetchApi.bind(this);

    this.state = {
      dataApi: undefined,
    };
  }

  async fetchApi() {
    const requestApi = await fetch('http://localhost:3001/order', {
      method: 'GET',
      headers: new Headers({ 'content-type': 'application/json' }),
      mode: 'no-cors'
    });
    const result = await requestApi.json();
    this.setState({
      dataApi: result,
    })
  }

  componentDidMount() {
    this.fetchApi();
  }

  
  render() {
    const { dataApi } = this.state;
    console.log('result', dataApi);
    return (
      <div className="App">
        <Aside />
        <header className="App-header">
          <Header />
          <div>
            { !dataApi ? <Main data={ data }/> : <Main data={ dataApi }/>}
          </div>
        </header>
      </div>
    );
  }
};

export default App;
