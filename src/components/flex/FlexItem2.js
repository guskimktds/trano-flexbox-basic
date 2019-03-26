import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class FlexItem2 extends React.Component {
  render() {
    return (
      <View style={styles.content}>
        <Text>FlexItem2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    margin: 20,
    backgroundColor: 'rgba(255,0,0,0.5)',
    width: 125,
    height: 125,
    borderWidth: 1,
    borderColor: 'red',
    textAlign: 'center'
  }
});
