import React from 'react';
import { Card,Dimmer,Loader } from 'semantic-ui-react';


export default class BTCTracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading:true,
      bpi: {
        USD:{
          rate:0.00
        },
        EUR :{
          rate:0.00
        },
        GBP :{
          rate:0.00
        }
      },
      lastFetch: ""
    }
  }

  componentDidMount() {
    this.fetch();
  }
  
  fetch() {
    var context = this;

    setInterval(function() {
      
      fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(response => response.json())
        .then(response => context.setState({
          bpi: response.bpi,
          lastFetch: response.time.updated,
          loading:false
        }))
    }, 3000);
  }

  render() {
    return (
      <div className="container">
        <Dimmer active={this.state.loading} inverted>
          <Loader size='large'>Loading...</Loader>
        </Dimmer>
        <Card
          image='/images/dollar.jpg'
          header= {this.state.bpi.USD.rate}
          meta='USD'
          description = {this.state.lastFetch}
        />
        <Card
          image='/images/euro.jpg'
          header= {this.state.bpi.EUR.rate}
          meta='EUR'
          description = {this.state.lastFetch}
        />
        <Card
          image='/images/gbs.jpg'
          header= {this.state.bpi.GBP.rate}
          meta='GBP'
          description = {this.state.lastFetch}
        />
      </div>
      
    );
  }
}