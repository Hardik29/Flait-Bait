import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Plate({ navigation}) {
  return (
        <View style= {styles.container}>
            <Text>Customer Login Page</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
