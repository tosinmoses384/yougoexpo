import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//import Envelope from '../assets/envelope.svg';

const HistoryComponent = ({label, details, date}) => {
  return (
    <TouchableOpacity 
        style={styles.container} 
        //onPress={handlePress}
        >

      <View style={styles.labelTop}>

        <View style={styles.label}>

          {/* <Envelope width={20} height={20} /> */}

          <Text style={styles.labelText}>{label}</Text>
        </View>

        <Text style={styles.date}>{date}</Text>
      </View>

      <View>
        <Text style={styles.info} numberOfLines={2} ellipsizeMode="tail">
          {details}
        </Text>
      </View>

    </TouchableOpacity>
  );
};

export default HistoryComponent;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'rgba(0,0,0,0.15)',
    borderBottomWidth: 1,
    paddingBottom: 13,
    paddingTop: 13,
  },
  labelTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {flexDirection: 'row'},
  labelText: {
    marginLeft: 10,
    color: 'black',
    fontWeight: '600',
    fontFamily: 'Roboto',
    fontSize: 15,
  },
  info: {
    fontFamily: 'Roboto',
    fontSize: 13,
    alignSelf: 'center',
    width: '85%',
    color: '#8c8c8c',
  },
  date: {
    color: '#8A8A8A',
    fontSize: 13,
    lineHeight: 24,
  },
});
