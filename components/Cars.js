import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Cars = ({name}) => {
  return (
    <TouchableOpacity
      value={name}
      style={styles.container}

      //onPress={handlePress}

      >
      <Image style={styles.image} source={require('../assets/redcar.png')} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Cars;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 105,
    backgroundColor: '#fff',
    paddingTop: 13,
    borderRadius: 7,
    marginBottom: 18,
  },
  text: {
    textAlign: 'center',
    marginBottom: 21,
    color: '#673AB7',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 15,
  },
  image: {
    alignSelf: 'center',
    maxWidth: 105,
  },
});
