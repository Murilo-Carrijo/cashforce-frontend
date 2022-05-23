import React from 'react';
import Header from './components/Header';
import Aside from './components/Aside';
import Main from './components/Main';
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
    try {
      const requestHeaders = { headers: { Accept: 'application/json' } }
      const requestApi = await fetch('http://localhost:3001/order', {
        method: 'GET',
        requestHeaders,
        json: true,
      });
      const result = await requestApi.json();
      this.setState({
      dataApi: result,
      })
    } catch (error) {
        console.log(error)
    }    
  }

  componentDidMount() {
    this.fetchApi();
  }

  
  render() {
    const { dataApi } = this.state;
    return (
      <div className="App">
        <Aside />
        <header className="App-header">
          <Header />
          <div>
            { dataApi &&  <Main dataApi={ dataApi }/>}
          </div>
        </header>
      </div>
    );
  }
};

export default App;
