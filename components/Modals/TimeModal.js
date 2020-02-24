// import React, {useState} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import Modal from 'react-native-modal';
// import {Item, Input, Label} from 'native-base';
// import {Button} from 'native-base';

// import DateTimePicker from '@react-native-community/datetimepicker';

// const TimeModal = ({
//   modalVisible,
//   handleOutside,
//   handleNext,
//   Show,
//   ShowClock,
//   ShowStopClock,
//   startDate,
//   endDate,
//   handleStartTime,
//   getLocation,
// }) => {
//   return (
//     <Modal
//       isVisible={modalVisible}
//       animationInTiming={600}
//       onBackdropPress={handleOutside}>
//       <View style={styles.container}>
//         <View>
//           <View style={styles.iconset}>
//             <Text style={styles.title}>Choose Pick Up Time & Location</Text>
//           </View>
//           <View style={styles.text}>
//             <View style={styles.Input}>
//               <Item floatingLabel style={{width: '100%'}}>
//                 <Label style={{fontSize: 15}}>Pickup Time</Label>
//                 <Input value={startDate} onFocus={ShowClock} />
//               </Item>

//               <Item floatingLabel style={{width: '100%', marginVertical: 20}}>
//                 <Label style={{fontSize: 15}}>Pickup Location</Label>
//                 <Input multiline={true} onChangeText={getLocation} />
//               </Item>
//             </View>
//             {Show && (
//               <DateTimePicker
//                 value={new Date()}
//                 mode="time"
//                 is24Hour={false}
//                 display="spinner"
//                 onChange={handleStartTime}
//               />
//             )}
//           </View>
//         </View>
//         <View style={styles.bottomModal}>
//           <Button style={styles.button} onPress={handleNext}>
//             <Text style={styles.buttontxt}>Done</Text>
//           </Button>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// export default TimeModal;

// const styles = StyleSheet.create({
//   container: {
//     // height: 400,
//     backgroundColor: '#fff',
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
//   title: {
//     fontSize: 17,
//     fontWeight: 'bold',
//     color: '#673ab7',
//   },
//   iconset: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 33,
//   },
//   text: {
//     marginTop: 22,
//     marginBottom: 28,
//     fontWeight: 'bold',
//     fontSize: 17,
//   },
//   textIn: {
//     fontWeight: 'bold',
//     fontSize: 17,
//     textAlign: 'center',
//     color: '#F98383',
//     paddingTop: 15,
//   },
//   label: {
//     color: '#909090',
//   },
//   input: {
//     width: '86%',
//     borderBottomWidth: 1,
//     alignSelf: 'center',
//     borderBottomColor: '#000',
//   },
//   bottomModal: {
//     display: 'flex',
//     marginVertical: 20,
//   },
//   button: {
//     width: '86%',
//     marginTop: 64,
//     paddingHorizontal: 12,
//     height: 50,
//     backgroundColor: '#673ab7',
//     justifyContent: 'center',
//     borderRadius: 6,
//     fontFamily: 'Roboto',
//     alignSelf: 'center',
//   },
//   buttontxt: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 15,
//   },
//   Input: {
//     // flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 34,
//   },
// });
