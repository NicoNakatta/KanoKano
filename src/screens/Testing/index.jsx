import React, { useRef, useEffect, useState } from 'react';
import { Animated, View, Text, StyleSheet, Image, ScrollView, Button, Touchable, TouchableOpacity,
        FlatList, SectionList, Pressable, Modal, TextInput, Alert
 } from 'react-native';
import { fontType, colors} from '../../theme';

const CuteBorder = () => {
//   const borderAnim = useRef(new Animated.Value(1)).current;

//   useEffect(() => {
//     Animated.loop(
//       Animated.sequence([
//         Animated.timing(borderAnim, {
//           toValue: 3,
//           duration: 800,
//           useNativeDriver: false,
//         }),
//         Animated.timing(borderAnim, {
//           toValue: 1,
//           duration: 800,
//           useNativeDriver: false,
//         }),
//       ])
//     ).start();
//   }, [borderAnim]);
//     <Animated.View
//       style={[
//         styles.box,
//         {
//           borderWidth: borderAnim,
//           borderColor: '#FF69B4', // pink/cute
//         },
//       ]}
//     >
//       <Text style={styles.text}>✨ Hello Cutie! ✨</Text>
//     </Animated.View>
  // const [input, setInput] = useState('');

  const handleSubmit = () => {
    Alert.alert('Input Dikirim', input || '(kosong)');
    setInput('');
  };

return (
    <View style={bg.container}>
      <View style={about.container}>
        <Text style={about.introduce}>Masukkan Pesan Anda:</Text>
        <TextInput
          style={about.input}
          placeholder="Tulis sesuatu..."
          placeholderTextColor={colors.black()}
          value={input}
          onChangeText={setInput}
        />
      </View>
    </View>
  );
};


const about = StyleSheet.create({
    container:{
        flex : 0,
        borderColor: colors.vividPink(),
        borderWidth: 2,
        borderRadius: 6,
        padding: 10,
        margin: 20,
    },
    introduce:{
        fontSize: 20,
        fontFamily: fontType['NS-default'],
        color: colors.black(),
        fontWeight: 400,
        textAlign: 'justify',
    },
    img:{
        width: '100%',
        height: 300,
      },
    btn:{
      width: '100%',
      height: 45,
      backgroundColor: colors.darkPink(),
      margin: 10,
    },
    header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.vividPink(),
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    fontFamily: fontType['NS-default'],
    marginBottom: 20,
    color: colors.black(),
  },

  });
  const bg = StyleSheet.create({
    container:{
        backgroundColor: colors.white(),
        height : '100%',
        width : '100%',
        padding: 20,
    },
  });

// const styles = StyleSheet.create({
//   box: {
//     padding: 20,
//     margin: 50,
//     borderRadius: 20,
//     backgroundColor: '#fff0f5',
//     alignItems: 'center',
//   },
//   text: {
//     color: '#ff1493',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
// });

export default CuteBorder;
