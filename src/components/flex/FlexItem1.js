import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class FlexItem1 extends React.Component {
  render() {
    return (
      <View style={styles.content}>
        <Text>FlexItem1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    margin: 0,
    backgroundColor: 'rgba(255,255,0,0.5)',
    width: 125,
    height: 125,
    borderWidth: 1,
    borderColor: 'red',
    textAlign: 'center'
  }
});
