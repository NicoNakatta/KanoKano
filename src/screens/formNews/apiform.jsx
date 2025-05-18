import React, { useState } from 'react';
import {
  ScrollView, StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, search,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Back } from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import { BlogList } from '../../data';
import axios from 'axios';
import Home from '../Home';

export default function NewAnews() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    news: '',
    image: '',
  });
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleUpload = async () => {
    if (!formData.title || !formData.genre || !formData.news || !formData.image) {
      Alert.alert('Gagal', 'Harap isi semua field terlebih dahulu!');
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      // gunakan metode POST untuk menambahkan blog baru
      const response = await axios.post('https://682308e4b342dce800505ef6.mockapi.io/api/news', {
        title: formData.title,
        genre: formData.genre,
        image: formData.image,
        news: formData.news,
        date: new Date(),
      });
      // jika status response 201 (Created) "Sukses"
      if (response.status == 201) {
        // kembali ke layar home
        Alert.alert('Berhasil Mengunggah Berita');
        navigation.navigate('Home');
      }
    } catch (e) {
      // tampilkan error
      Alert.alert('Gagal Mengunggah Blog', `Status: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

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
            placeholder="News Title..."
            value={formData.title}
            onChangeText={(text) => handleChange('title', text)}
            placeholderTextColor={colors.pink()}
          />
        </View>
        <Text style={styles.title2}>Genre</Text>
        <View style={searchBar.container}>
          <TextInput
            style={searchBar.input}
            placeholder="News Genre..."
            value={formData.genre}
            onChangeText={(text) => handleChange('genre', text)}
            placeholderTextColor={colors.pink()}
          />
        </View>
        <Text style={styles.title2}>Article</Text>
        <View style={searchBar.container}>
          <TextInput
            style={searchBar.input}
            placeholder="News Content..."
            value={formData.news}
            onChangeText={(text) => handleChange('news', text)}
            placeholderTextColor={colors.pink()}
            multiline
          />
        </View>
        <Text style={styles.title2}>Image</Text>
        <View style={searchBar.container}>
          <TextInput
            style={searchBar.input}
            placeholder="Image Link..."
            value={formData.image}
            onChangeText={(text) => handleChange('image', text)}
            placeholderTextColor={colors.pink()}
          />
        </View>
      </View>
      <View style={buttonStyle.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={buttonStyle.button}
          onPress={handleUpload}
        >
          <Text style={buttonStyle.title}>SUBMIT</Text>
        </TouchableOpacity>
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
    height: 52,
    elevation: 8,
    paddingTop: 11,
    paddingBottom: 4
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
  loadingOverlay: {
    flex: 1,
    backgroundColor: colors.black(0.4),
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '100%',
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
  container: {
    marginVertical: 10,
    marginHorizontal: 24,
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