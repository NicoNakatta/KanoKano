import React from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground, TextInput, Pressable, TouchableOpacity, FlatList} from 'react-native';
import {Back} from 'iconsax-react-native';
import { fontType, colors} from '../../theme';
import { BlogList } from '../../data';

export default function News() {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Back color={colors.black()} variant="Linear" size={24} />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                paddingHorizontal: 24,
                gap: 10,
                paddingVertical: 20,
                }}>
            <View style={news.container}>
                <Image style={news.imageCard} source={BlogList[0].image}/>
                <View style={news.listData}>
                <Text style={news.title}>{BlogList[0].title}</Text>
                <View style={news.dategenre}>
                   <Text style={news.title2}>{BlogList[0].date}</Text>
                   <Text style={news.title3}>{BlogList[0].genre}</Text>
                </View>
                <View style={about.container}>
                    <Text style={about.introduce}>{BlogList[0].news}</Text>
                </View>
                </View>
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.pink(),
    },
    header: {
      paddingHorizontal: 24,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      height:52,
      elevation: 8,
      paddingTop:11,
      paddingBottom:4
    },
  });

  const news = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20
      },
      imageCard:{
          resizeMode: 'cover',
          width:'100%',
          height: 250,
          borderRadius:20,
      },
      title: {
        fontSize: 25,
        textAlign : 'center',
        fontFamily: fontType['NS-default'],
        color: colors.vividPink(),
        fontWeight: '700',
      },
      title2: {
        fontSize: 18,
        flex: 1,
        textAlign: 'left',
        fontFamily: fontType['NS-default'],
        color: colors.black(),
      },
      title3: {
        fontSize: 18,
        flex: 1,
        fontFamily: fontType['NS-default'],
        color: colors.black(),
        textAlign: 'right',
      },
      title4: {
        fontSize: 20,
        fontFamily: fontType['NS-default'],
        color: colors.black(),
      },
      listData: {
        paddingVertical: 10,
        gap: 5,
        alignItems: 'center',
      },
      dategenre: {
        width: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap :'wrap',
      },
      dategenrelist: {
        marginLeft: 0,
        marginRight: 0,
      },
  });

  const about = StyleSheet.create({
    container:{
        flex : 0,
        borderColor: colors.vividPink(),
        borderWidth: 2,
        borderRadius: 6,
        padding: 10,
    },
    introduce:{
        fontSize: 20,
        fontFamily: fontType['NS-default'],
        color: colors.black(),
        fontWeight: 400,
        textAlign: 'justify',
    }
  });