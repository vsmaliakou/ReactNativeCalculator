import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {EOperations} from '../interfaces';

interface IOperationButton {
  value: EOperations;
  onPress: (value: EOperations) => void;
}

export const OperationButton: React.FC<IOperationButton> = props => {
  const {value, onPress} = props;

  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
