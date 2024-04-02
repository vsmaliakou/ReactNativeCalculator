import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

export const HistoryScreen = ({route}: any) => {
  const {history} = route.params;

  return (
    <View>
      <FlatList
        data={history}
        keyExtractor={item => item}
        renderItem={({item}) => {
          return <Text style={styles.text}>{item}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 15,
  },
});
