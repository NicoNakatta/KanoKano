import React, { useEffect, useState } from 'react';
import {ScrollView,StyleSheet,Text,View,Image,TouchableOpacity,Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Back, Edit, Trash } from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import { formatDate } from '../../utils/formatDate';
import { getFirestore, doc, getDoc, deleteDoc } from '@react-native-firebase/firestore';

const News = ({ route }) => {
  const { blogId } = route.params;
  const [selectedBlog, setSelectedBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const fetchDetail = async () => {
    setLoading(true);
    try {
      const db = getFirestore();
      const blogDocRef = doc(db, 'blog', blogId);
      const blogSnapshot = await getDoc(blogDocRef);

      if (blogSnapshot.exists()) {
        setSelectedBlog({ id: blogSnapshot.id, ...blogSnapshot.data() });
      } else {
        Alert.alert('Data tidak ditemukan');
        navigation.goBack();
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Gagal memuat detail berita');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = () => {
  Alert.alert(
    'Konfirmasi Hapus',
    'Apakah Anda yakin ingin menghapus berita ini?',
    [
      {
        text: 'Batal',
        style: 'cancel',
      },
      {
        text: 'Hapus',
        onPress: async () => {
          setLoading(true);
          try {
            const db = getFirestore();
            await deleteDoc(doc(db, 'blog', blogId));
            Alert.alert('Berhasil Menghapus');
            navigation.goBack();
          } catch (error) {
            Alert.alert('Gagal Menghapus Berita', error.message);
          } finally {
            setLoading(false);
          }
        },
        style: 'destructive',
      },
    ]
  );
};

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Back color={colors.black()} variant="Linear" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('editNews', { blogId })}>
          <Edit color={colors.black()} variant="Linear" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete}>
          <Trash color={colors.black()} variant="Linear" size={24} />
        </TouchableOpacity>
      </View>

      {loading ? (
        <Text style={{ padding: 20 }}>Memuat konten...</Text>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 24,
            gap: 10,
            paddingVertical: 20,
          }}
        >
          <View style={news.container}>
            <Image style={news.imageCard} source={{ uri: selectedBlog.image }} />
            <View style={news.listData}>
              <Text style={news.title}>{selectedBlog.title}</Text>
              <View style={news.dategenre}>
                <Text style={news.title2}>{formatDate(selectedBlog.createdAt)}</Text>
                <Text style={news.title3}>{selectedBlog.genre}</Text>
              </View>
              <View style={about.container}>
                <Text style={about.introduce}>{selectedBlog.news}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default News;

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
    height: 52,
    elevation: 8,
    paddingTop: 11,
    paddingBottom: 4,
  },
});

const news = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  imageCard: {
    resizeMode: 'cover',
    width: '100%',
    height: 250,
    borderRadius: 20,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
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
  listData: {
    paddingVertical: 10,
    gap: 5,
    alignItems: 'center',
  },
  dategenre: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

const about = StyleSheet.create({
  container: {
    borderColor: colors.vividPink(),
    borderWidth: 2,
    borderRadius: 6,
    padding: 10,
    marginTop: 10,
  },
  introduce: {
    fontSize: 20,
    fontFamily: fontType['NS-default'],
    color: colors.black(),
    fontWeight: '400',
    textAlign: 'justify',
  },
});
