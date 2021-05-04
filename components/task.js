import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Task = (props) => {

  return (
    <View style={styles.box}>
      <View style={styles.itemLeft}>
        <View style={styles.folder}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#FFF',
    padding: 15,
    width: 250,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  folder: {
    width: 24,
    height: 24,
    backgroundColor: 'lightblue',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    alignItems: 'center',
  },
  circle: {
    width: 12,
    height: 12,
    borderColor: '#20AFC6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;