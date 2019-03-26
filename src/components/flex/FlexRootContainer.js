import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlexItem1 from './FlexItem1';
import FlexItem2 from './FlexItem2';
import FlexItem3 from './FlexItem3';
import FlexItem4 from './FlexItem4';


export default class FlexRootContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlexItem1 />
        <FlexItem2 />
        <FlexItem3 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    flexWrap: 'wrap'
  }
});
