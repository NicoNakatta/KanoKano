import React from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, TextInput, Pressable, TouchableOpacity, search} from 'react-native';
import {Back} from 'iconsax-react-native';
import { fontType, colors} from '../../theme';
import { BlogList } from '../../data';

export default function NewAnews() {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Back color={colors.black()} variant="Linear" size={24} />
          </View>
          <View style={styles.header}>
            <Text style={styles.title}>Create New Article</Text>
          </View>
          <View style={styles.listBlog}>
            <Text style={styles.title2}>Title</Text>
          <View style={searchBar.container}>
            <TextInput
                style={searchBar.input}
                placeholder="Search"
              />
          </View>
          <Text style={styles.title2}>Date</Text>
          <View style={searchBar.container}>
            <TextInput
                style={searchBar.input}
                placeholder="Search"
              />
          </View>
          <Text style={styles.title2}>Genre</Text>
          <View style={searchBar.container}>
            <TextInput
                style={searchBar.input}
                placeholder="Search"
              />
          </View>
          <Text style={styles.title2}>Article</Text>
          <View style={searchBar.container}>
            <TextInput
                style={searchBar.input}
                placeholder="Search"
              />
          </View>
          <Text style={styles.title2}>Image</Text>
          <View style={searchBar.container}>
            <TextInput
                style={searchBar.input}
                placeholder="Search"
              />
          </View>
          </View>
          <View style={buttonStyle.container}>
          <Pressable
            activeOpacity={0.8}
            style={buttonStyle.button}
          >
            <Text style={buttonStyle.title}>SUBMIT</Text>
          </Pressable>
          </View>
        </View>
      );
    }    

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: colors.white(),
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
        title: {
          fontSize: 35,
          fontFamily: fontType['NS-default'],
          color: colors.vividPink(),
        },
        title2: {
            fontSize: 18,
            fontFamily: fontType['NS-default'],
            color: colors.black(),
          },
        listCategory: {
          paddingVertical: 10,
        },
        listBlog: {
          marginHorizontal: 24,
            paddingVertical: 10,
          gap: 10,
        },
      });
      const searchBar = StyleSheet.create({
        container: {
          marginHorizontal: 0,
          backgroundColor: colors.grey(0.03),
          borderColor: colors.grey(0.2),
          borderRadius: 10,
          borderWidth: 1,
          flexDirection: 'column',
        },
        input: {
          height: 45,
          padding: 10,
          width: '90%',
          color: colors.black(),
          fontSize: 18,
        },
        button: {
          backgroundColor: colors.vividPink(),
          alignItems: 'center',
          justifyContent: 'center',
          height: 45,
          width: 40,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        },
      });

const buttonStyle = StyleSheet.create({
    container:{
        marginVertical: 10,
        marginHorizontal:24,
        alignItems: 'center',
    },
    button: {
        backgroundColor: colors.vividPink(),
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        width: '100%',
        borderRadius: 10,
      },
      title: {
        fontSize: 18,
        fontFamily: fontType['NS-default'],
        color: colors.white(),
        fontWeight: 700,
      },
    });