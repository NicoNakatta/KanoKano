import React from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground, TextInput, Pressable, TouchableOpacity, FlatList} from 'react-native';
import {Back} from 'iconsax-react-native';
import { fontType, colors} from '../../theme';
import { profileData } from '../../data';

export default function Account() {
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
            <View style={profile.container}>
                <Image style={profile.imageCard} source={profileData[0].image}/>
                <View style={profile.listData}>
                <Text style={profile.title}>{profileData[0].name}</Text>
                <Text style={profile.title2}>Member Since : {profileData[0].created}</Text>
                <Text style={profile.title3}>Favourite</Text>
                <Text style={profile.title3}>{profileData[0].favourite}</Text>
                <View style={about.container}>
                    <Text style={about.introduce}>{profileData[0].about}</Text>
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

  const profile = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
      },
      imageCard:{
        resizeMode: 'contain',
        width:230,
        height:230,
        borderRadius:115,
      },
      title: {
        fontSize: 35,
        fontFamily: fontType['NS-default'],
        color: colors.vividPink(),
        fontWeight: '700',
      },
      title2: {
        fontSize: 14,
        fontFamily: fontType['NS-default'],
        color: colors.grey(),
      },
      title3: {
        fontSize: 18,
        fontFamily: fontType['NS-default'],
        color: colors.black(),
        textAlign: 'center',
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