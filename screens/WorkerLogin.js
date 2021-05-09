import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Form, Content, Button, Text, Item, Input, Label } from 'native-base';

export default function WorkerLogin({ navigation}) {
  const [password, setPassword] = React.useState('');
  
  return (
    <Container>
      <Content>
        <Text style={styles.textHead}>Login</Text>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input name="username"/>
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input secureTextEntry={true}  onChangeText={text=> setPassword(text)}/>
          </Item>
        </Form>  
        {/*  add login funcionality */}
        <TouchableOpacity onPress= {() => { 
            if(password ==="test1234")  navigation.navigate('WorkerDashboard')
            else console.warn("Wrong Credentials")
            }}>
          <Button rounded dark  style={styles.button}>
            <Text>Sign In</Text>
          </Button>
        </TouchableOpacity>
      </Content>


      <Content style={styles.row}>
        <Text style={styles.text} >Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('WorkerRegisterPage')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </Content>
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
  row: {
    marginLeft: 100,
    flexDirection: 'row',
    marginTop: 4,
  },
  textHead: {
    margin: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 26,
  },
  link: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
  },
  button: {
    width: '100%',
    marginVertical: 30,
  },
});
