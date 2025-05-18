import React, { useState, useRef, useEffect} from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, TextInput, Pressable, TouchableOpacity, FlatList, Animated} from 'react-native';
import {SearchNormal} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import { fontType, colors} from '../../theme';
import { CategoryList, BlogList } from '../../data';
import { ListNews} from '../../components';

export default function Home() {
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
          <FlatListCategory/>
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
  borderItem:{
    marginHorizontal: 5,
    borderRadius:25,
    backgroundColor: colors.vividPink(0.1),
  },
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    paddingBottom: 5,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.pink(0),
    // marginHorizontal:5,
  },
  title: {
    fontFamily: fontType['NS-default'],
    fontWeight:'bold',
    fontSize: 14,
    lineHeight: 18,
    color: colors.black(),
    marginTop: 5,
  },
  imageCard:{
    resizeMode: 'contain',
    width:55,
    height:55,
    borderRadius:10,
  }
});
const searchBar = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    backgroundColor: colors.white(),
    borderColor: colors.white(),
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

const ListBlog = () => {
  return (
    <View style={itemList.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListNews data={BlogList}/>
      </ScrollView>
  </View>
  );
}

const ItemCategory = ({item, onPress, color}) => {
  const borderAnim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(borderAnim, {
            toValue: 2,
            duration: 800,
            useNativeDriver: false,
          }),
          Animated.timing(borderAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: false,
          }),
        ])
      ).start();
    }, [borderAnim]);
  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View style={[
        category.borderItem,
        {
          borderLeftWidth: borderAnim,
          borderRightWidth: borderAnim,
          borderColor: colors.vividPink(0.8), // pink/cute
        },
      ]}
    >
      <View style={category.item}>
        <Image
        source={item.image}
        style={category.imageCard}/>
        <Text style={{...category.title, color}}>{item.categoryName}</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const FlatListCategory = () => {
  const [selected, setSelected] = useState(1);
  const renderItem = ({item}) => {
    const color = item.id === selected ? colors.black() : colors.darkPink();
    return (
      <ItemCategory
        item={item}
        onPress={() => setSelected(item.id)}
        color={color}
      />
    );
  };
  return (
    <FlatList
      data={CategoryList}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      contentContainerStyle={{paddingHorizontal: 24}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};