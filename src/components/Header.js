import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Blog List App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'cornflowerblue',
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    padding: 10,
    paddingLeft: 10,
  },
});
