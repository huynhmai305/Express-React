import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Customers from './components/customers';

class App extends Component {
  constructor(){
    super();
    this.state = {
        data: null
      };
  }
  componentWillMount() {
    axios.get('/api/customers')
    .then(res => this.setState({data:res.data}))
  }
  printData = () => {
      if(this.state.data!==null){
          return this.state.data.map((item,key)=>(
            <Customers key={key} first={item.firstName} last={item.lastName}/>
          ))
      }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.printData()}
      </div>
    );
  }  
}

export default App;
