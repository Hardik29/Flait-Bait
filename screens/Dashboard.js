import React, {Component } from 'react';
import { StyleSheet, View  } from 'react-native';
import { Card, CardItem, Text, Body, Button } from 'native-base';
import axios from 'axios';

export default class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: false,
      workerData:[]
    };
  }

  componentDidMount() {  
    axios.get(`http://192.168.1.5:5000/workers/`)
      .then(response => {
        console.log('Getting data from axios', response.data);
        this.setState({
          loading: false,
          workerData: response.data
        }) 
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {

    const workData = this.state.workerData.map(item=> {
        return (
            <Card style={styles.card} key={item._id}>
                <CardItem header bordered>
                  <Text>{item.name}, {item.occupation}</Text>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Text>{item.description}</Text>
                    <Text>Mob: {item.mob}</Text>
                  </Body>
                </CardItem>
                <CardItem footer bordered>
                  <Text>Available at: {item.timeSlot} {"\n"}Salary: {item.salary}</Text>
                </CardItem>
              </Card>
          );
      })

    return (
      <View>
        <View style={{flexDirection:'column',alignItems:'center'}}>
          {workData}
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
