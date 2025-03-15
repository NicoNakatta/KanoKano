import React from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground, TextInput, Pressable} from 'react-native';
import {Element3, Receipt21, Clock, Message, SearchNormal} from 'iconsax-react-native';
import { fontType, colors, imgList } from './src/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>KanoKano</Text>
      </View>
      <View style={searchBar.container}>
        <TextInput
            style={searchBar.input}
            placeholder="Search"
          />
          <Pressable style={searchBar.button}>
            <SearchNormal size={25} color={colors.white()} />
          </Pressable>
      </View>
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{...category.item, marginLeft: 24}}>
            <Element3 color={colors.black()} variant="Linear" size={55} />
           <Text style={category.title}>All</Text>
          </View>
          <View style={category.item}>
            {imgList.Konosuba(55,55,15)}            
              <Text style={category.title}>Anime</Text>
          </View>
          <View style={category.item}>
            {imgList.Dungeon(55,55,15)}            
              <Text style={category.title}>Manga</Text>
          </View>
          <View style={category.item}>
            {imgList.Ado(55,55,15)}            
              <Text style={category.title}>Music</Text>
          </View>
          <View style={{...category.item, marginRight: 24}}>
            {imgList.JiraiKei(55,55,15)}            
              <Text style={category.title}>Fashion</Text>
          </View>
        </ScrollView>
      </View>
      <View style={{marginTop:3, paddingHorizontal:24}}>
          <Text style={itemList.title}>Berita Terkini</Text>
        </View>
      <ListBlog />
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
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    paddingBottom: 5,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.2),
    marginHorizontal:5,
    
  },
  title: {
    fontFamily: fontType['NS-default'],
    fontWeight:'bold',
    fontSize: 14,
    lineHeight: 18,
    color: colors.black(),
    marginTop: 5,
  },
  image: {
    
  }
});
const searchBar = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    backgroundColor: colors.grey(0.03),
    borderColor: colors.grey(0.2),
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
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

const ListBlog = () => {
  return (
    <View style={itemList.container}>
      <ScrollView>
        <View style={{...itemList.cardBody, marginTop:0}}>
        <ImageBackground
        source={require('./src/assets/images/AdoConcert.png')}
        style={itemList.cardImage}>
          <View style={itemList.cardShadow}></View>
          <Text style={itemList.cardText}>ADO HAS ANNOUNCED HER UPCOMING WORLD TOUR, ADO WORLD TOUR 2025 'HIBANA'</Text>
        </ImageBackground>
        </View>
        <View style={itemList.cardBody}>
        <ImageBackground
         source={require('./src/assets/images/konosuba.png')}
         style={itemList.cardImage}>
          <View style={itemList.cardShadow}></View>
          <Text style={itemList.cardText}>KONOSUBA SEASON 3 WILL HAVE TWO OVA EPISODES</Text>
        </ImageBackground>
        </View>
        <View style={itemList.cardBody}>
        <ImageBackground
         source={require('./src/assets/images/JiraiKei.jpeg')}
         style={itemList.cardImage}>
          <View style={itemList.cardShadow}></View>
          <Text style={itemList.cardText}>JIRAI KEI BECOME POPULAR WORLDWIDE</Text>
        </ImageBackground>
        </View>
        <View style={itemList.cardBody}>
        <ImageBackground
         source={require('./src/assets/images/delidungeon.jpeg')}
         style={itemList.cardImage}>
          <View style={itemList.cardShadow}></View>
          <Text style={itemList.cardText}>DELICIOUS IN DUNGEON WIN MANGA AWARD</Text>
        </ImageBackground>
        </View>
      </ScrollView>
  </View>
  );
}

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