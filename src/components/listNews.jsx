import {StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {Receipt21} from 'iconsax-react-native';
import { fontType, colors } from '../theme';

const ItemNews = ({item}) => {
    return (
        <View style={itemList.cardBody}>
            <ImageBackground
            source={item.image} style={itemList.cardImage}>
                <View style={itemList.cardShadow}></View>
                <Text style={itemList.cardText}>{item.title}</Text>
            </ImageBackground>
        </View>
    );
  };

  const ListNews = ({data}) => {
    const renderItem = ({item}) => {
      return (
        <ItemNews
          item={item}
        />
      );
    };
    return (
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={item => renderItem({...item})}
        ItemSeparatorComponent={() => <View style={{width: 15}} />}
      />
    );
  };
  export default ListNews;

  const itemList = StyleSheet.create({
    container: {
      paddingHorizontal: 24,
      paddingVertical: 10,
      gap: 15,
      flex: 1,
      borderRadius: 20,
      // backgroundColor: colors.vividPink(),
    },
    title:{
      fontSize: 24,
      fontFamily: fontType['NS-default'],
      fontWeight: '700',
    },
    cardBody: {
      backgroundColor: colors.pink(),
      flexDirection: 'row',
      width: '100%',
      height: 200,
      marginTop:10,
      borderRadius:20,
      overflow: 'hidden'
    },
    cardImage:{
      resizeMode: 'cover',
      width:'100%',
      height:200,
      borderRadius:20,
    },
    cardText:{
      textAlign: "center",
      color: colors.white(),
      fontSize: 24,
      margin:7,
      // top:7,
    },
    cardShadow:{
      opacity: 0.4,
      top: '50%',
      width: '100%',
      height: 100,
      backgroundColor: 'black'
    }
  });