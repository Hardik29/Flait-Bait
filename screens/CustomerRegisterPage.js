import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Button, Text } from 'native-base';
import axios from 'axios';

export default class CustomerRegisterPage extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: '',
      mob: '',
      mail: ''
    };
  }

  onSubmit= event => {
    event.preventDefault();

    const customer = {
      name: this.state.name,
      mob: this.state.mob,
      mail: this.state.mail
    }
    console.log(customer)

    axios.post('http:192.168.1.5:5000/customers/add',customer)
      .then(res=> console.log(res.data));

    // ADD ROUTE
  }

  render() {
    return (
      <View style= {styles.container}>
          <Text style={styles.text}>Regiser Page</Text>
          <TextInput placeholder="E-Mail" onChangeText={text=> this.setState({mail: text})}
            style = {styles.textInput} underlineColorAndroid={'transparent'}/>
          <TextInput secureTextEntry={true} placeholder="password" style = {styles.textInput} />
          <TextInput placeholder="Name" onChangeText={text=> this.setState({name: text})}
            style = {styles.textInput} underlineColorAndroid={'transparent'}/>
          <TextInput placeholder="Mobile" onChangeText={text=> this.setState({mob: text})}
            style = {styles.textInput} underlineColorAndroid={'transparent'}/>  

          {/* <Button title="Submit" onPress= {this.onSubmit} style={styles.button}></Button>   */}
          <TouchableOpacity onPress={ this.onSubmit}>
            <Button rounded dark style={styles.button}>
              <Text>Submit</Text>
            </Button>
          </TouchableOpacity>
          
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
  textInput: {
    alignSelf: 'stretch',
    height:40,
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
    marginBottom: 30
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 26,
  },
  button: {
    width: '100%',
    marginVertical: 30,
  }
});
