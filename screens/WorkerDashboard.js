import React, {Component } from 'react';
import { StyleSheet, View  } from 'react-native';
import { Card, CardItem, Text, Body, Button } from 'native-base';
import axios from 'axios';

export default class WorkerDashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: false,
      customerData:[]
    };
  }

  componentDidMount() {  
    axios.get(`http://192.168.1.5:5000/customers/`)
      .then(response => {
        console.log('Getting data from axios', response.data);
        this.setState({
          loading: false,
          customerData: response.data
        }) 
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {

    const customData = this.state.customerData.map(item=> {
        return (
            <Card style={styles.card} key={item._id}>
                <CardItem header bordered>
                  <Text>{item.name}</Text>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Text>Mail: {item.mail} {"\n"}Mob:{item.mob}</Text>
                  </Body>
                </CardItem>
                
            </Card>
          );
      })

    return (
      <View>
        <View style={{flexDirection:'column',alignItems:'center'}}>
          {customData}
        </View>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  card: {
    width: '100%'
  }
});
