import { Image } from 'react-native';
const imgList = {
    Ado(lebar,tinggi,tepi){return <Image 
        source={require('../assets/images/AdoConcert.png')}
        style={{resizeMode: 'contain', width:lebar, height:tinggi, borderRadius:tepi}} /> ;},
    Konosuba(lebar,tinggi,tepi){return <Image 
        source={require('../assets/images/konosuba.png')}
        style={{resizeMode: 'contain', width:lebar, height:tinggi, borderRadius:tepi}} /> ;},
    JiraiKei(lebar,tinggi,tepi){return <Image 
        source={require('../assets/images/JiraiKei.jpeg')}
        style={{resizeMode: 'contain', width:lebar, height:tinggi, borderRadius:tepi}} /> ;},
    Dungeon(lebar,tinggi,tepi){return <Image 
        source={require('../assets/images/delidungeon.jpeg')}
        style={{resizeMode: 'contain', width:lebar, height:tinggi, borderRadius:tepi}} /> ;},        
    // Konosuba(){return <Image source={require('../assets/images/konosuba.png')}/>;} ,
    // JiraKei(){return <Image source={require('../assets/images/JiraiKei.jpeg')}/>;},
    // Dungeon(){return <Image source={require('../assets/images/delidungeon.jpeg')}/>;},

}

export default imgList;