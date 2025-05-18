import React, { useState } from 'react';
import {ScrollView,StyleSheet,Text,View,TextInput,TouchableOpacity,ActivityIndicator,Alert,Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Back, Add, AddSquare } from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import ImagePicker from 'react-native-image-crop-picker';
import { addDoc, collection, getFirestore } from '@react-native-firebase/firestore';

export default function NewAnews() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    news: '',
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleUpload = async () => {
    if (!formData.title || !formData.genre || !formData.news || !image) {
      Alert.alert("Validation", "Please fill all fields and upload an image.");
      return;
    }

    let filename = image.substring(image.lastIndexOf('/') + 1);
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

    setLoading(true);
    try {
      const imageFormData = new FormData();
      imageFormData.append('file', {
        uri: image,
        type: `image/${extension}`,
        name: filename,
      });

      const result = await fetch('https://backend-file-praktikum.vercel.app/upload/', {
        method: 'POST',
        body: imageFormData,
      });

      if (result.status !== 200) {
        throw new Error("Failed to upload image");
      }

      const { url } = await result.json();

      const db = getFirestore();
      const blogRef = collection(db, 'blog');
      await addDoc(blogRef, {
        title: formData.title,
        genre: formData.genre,
        image: url,
        news: formData.news,
        createdAt: new Date(),
      });

      setLoading(false);
      console.log('Berita Ditambahkan!');
      navigation.navigate('Home');
    } catch (error) {
      setLoading(false);
      console.log(error);
      Alert.alert("Upload Error", "Something went wrong during upload.");
    }
  };

  const handleImagePick = async () => {
    ImagePicker.openPicker({
      width: 1920,
      height: 1080,
      cropping: true,
    })
      .then(img => {
        console.log(img);
        setImage(img.path);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back color={colors.black()} variant="Linear" size={24} />
        <Text style={styles.title}>Create New Article</Text>
      </View>

      <ScrollView style={styles.listBlog}>
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
            style={searchBar.inputMultiline}
            placeholder="News Content..."
            value={formData.news}
            onChangeText={(text) => handleChange('news', text)}
            placeholderTextColor={colors.pink()}
            multiline
            numberOfLines={8}
            textAlignVertical="top"
          />
        </View>

        <Text style={styles.title2}>Image</Text>
        {image ? (
          <View style={{ position: 'relative', marginBottom: 20 }}>
            <Image
              style={{ width: '100%', height: 200, borderRadius: 5 }}
              source={{ uri: image }}
              resizeMode="cover"
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                backgroundColor: colors.vividPink(),
                borderRadius: 25,
                padding: 4,
              }}
              onPress={() => setImage('')}
            >
              <Add
                size={20}
                variant="Linear"
                color={colors.white()}
                style={{ transform: [{ rotate: '45deg' }] }}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={handleImagePick}>
            <View
              style={{
                borderWidth: 1,
                borderStyle: 'dashed',
                borderColor: colors.grey(0.4),
                borderRadius: 10,
                paddingVertical: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
              }}
            >
              <AddSquare color={colors.grey(0.6)} variant="Linear" size={42} />
              <Text
                style={{
                  fontFamily: fontType['Pjs-Regular'],
                  fontSize: 12,
                  color: colors.grey(0.6),
                }}
              >
                Upload Thumbnail
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </ScrollView>

      <View style={buttonStyle.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={buttonStyle.button}
          onPress={handleUpload}
        >
          <Text style={buttonStyle.title}>SUBMIT</Text>
        </TouchableOpacity>
      </View>

      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={colors.vividPink()} />
        </View>
      )}
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
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingTop: 11,
    paddingBottom: 4,
    gap: 10,
  },
  title: {
    fontSize: 28,
    fontFamily: fontType['NS-default'],
    color: colors.vividPink(),
  },
  title2: {
    fontSize: 18,
    fontFamily: fontType['NS-default'],
    color: colors.black(),
    marginBottom: 6,
  },
  listBlog: {
    marginHorizontal: 24,
    paddingVertical: 10,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.black(0.3),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const searchBar = StyleSheet.create({
  container: {
    backgroundColor: colors.grey(0.03),
    borderColor: colors.grey(0.2),
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
  },
  input: {
    height: 45,
    padding: 10,
    width: '100%',
    color: colors.black(),
    fontSize: 16,
  },
  inputMultiline: {
    height: 180,
    padding: 10,
    color: colors.black(),
    fontSize: 18,
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
    fontWeight: '700',
  },
});
