import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class FlexItem4 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>FlexItem4</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,0,0.5)'
  }
});
