// import logo from './logo.svg';
// import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import Menu from './components/menu/menu'
import Selector from './components/selector/selector'
import TableView from './components/tableview/tableview'
import Statusview from './components/statusview/statusview'

class App extends Component{
  state = {
    DATA:[],//All data
    Timeline:{scan:[]}, //for timeline
    AllCodes:[],//all status code, for selector
    currentCode:'',//current selected code
  }

  //onclick table row
  getShipment = (id) => {
    console.log('shipment id: '+ id)
    //getting record by id
    const Timeline = this.state.DATA.find(record => record._id === id);
    console.log(Timeline)
    
    //setting select record to show in timeline 
    this.setState({Timeline:Timeline})
    
  }


  componentDidMount() {//fetch data from given endpoint
    const endpoint = 'https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch'
    const token = 'Bearer tTU3gFVUdP';
    const body = {email: 'hello@gmail.com'}
    const conf = {headers: { Authorization: token }}
    
    axios.post(endpoint, body, conf)
      .then(response => {//getting from url
        this.setState({DATA:response.data})
        return response
      })
      .then(response => {
        //calculating status codes frequency
        const freq = {}
        response.data.forEach(el => {

          const isext = el.current_status_code in freq 
          // if key exist set +1 else set 1
          if(isext){
            freq[el.current_status_code] = freq[el.current_status_code]+1
          }else{
            freq[el.current_status_code] = 1
          }
        });

        //creating array object from frequency object
        var array = [];
        for (var k in freq) {
            array.push({code:k, count:freq[k]});
        }
        
        //setting default selected status Code 
        this.setState({currentCode:array[0].code})
        
        //updating all status code frequency
        this.setState({AllCodes:array})

        //setting default first row selected in table
        this.setState({Timeline:this.state.DATA[0]})
          // console.log(rec.current_status_code)
        })
  }

  //updating current code
  getSelectedCode = (code) => {
    // console.log('selected code '+ code);
    this.setState({currentCode:code})
  }


  render(){
    
    return (
      <React.Fragment>
        
        <Menu />
        <Selector selectedcode={this.state.currentCode} selectlist={this.state.AllCodes} clicked={this.getSelectedCode} />
 
        <div className="ui grid">
          <div className="six wide column">
            <Statusview status={this.state.Timeline} />
          </div>
          <div className="ten wide column">
            <TableView clicked={this.getShipment} selectedcode={this.state.currentCode} DATA={this.state.DATA}/>
          </div>
        </div>
      
      </React.Fragment>
    );
  }

}

export default App;
