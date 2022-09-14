import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

class Title extends Component {
  render() {
    return (
      <Text style={styles.title}>Itec Store</Text>
    );
  }
}

export default Title;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        color: 'red',
        fontSize: 25,

    }
  });