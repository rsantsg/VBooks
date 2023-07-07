
import { ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import { Button, Modal, SafeAreaView,StyleSheet, Text, TouchableOpacity,View } from 'react-native';
/**
 * 
 * @param {*} param0 
 * @returns 
 */
export default function Preview({imagePreview, show, close, sent }) {
  //const {imagePreview, show} = useSearchParams()
  //console.log(imagePreview)

    return(
      <View style={styles.container}>
        <ImageBackground source ={{uri: "file://" +imagePreview.path}} style={styles.image}  > 
          <View style={styles.buttonContainer}>
            <Icon style ={styles.button} onPress={close} name="x" size={24} color="white" />
          </View>
        </ImageBackground>    
      </View>
    ) 
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    postContainer:{
      position: 'absolute',
      
      right: 20,
      bottom: 10,
     

    },
    buttonContainer: {
      flex: 1,
      left: 10, 


    },
    button: {
      flex: 0.1,
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: 'black',
    },
    image: {
      width: '100%',
      height: '100%',
    },
    contentModal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      margin: 20,
    },
  
  });
  
module.export = Preview