import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';

export default function HomeScreen({ navigation}) {
  return (
      <Container>
        <Content>
        </Content>  
        <Content>
          <Text style={styles.text} >Welcome!</Text>
          <TouchableOpacity onPress= {() => navigation.navigate('CustomerLogin')}>
            <Button rounded dark style={styles.button}  >
              <Text>CUSTOMER</Text>
            </Button>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => navigation.navigate('WorkerLogin')}>
            <Button rounded dark style={styles.button} >
              <Text>WORKER</Text>
            </Button>
          </TouchableOpacity> 
        </Content>
        <Content/>
      </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    marginVertical: 30,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 26,
  }
});
