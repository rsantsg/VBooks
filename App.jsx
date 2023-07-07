

import { useState, useEffect,useRef } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather.js';
import {
  useCameraDevices
} from 'react-native-vision-camera';
import Preview from './src/Preview';
import { Camera } from 'react-native-vision-camera';
export default function App () {
  const [camereState, setCameraState] = useState(true)
  const [flash, setFlash] =useState(false)
  const cameraRef = useRef(null);
  const [previewVisible, setPreviewVisible] = useState(false)
  const [imagePreview, setImagePreview] = useState(null)
  let flash_Off_On  = 'on'
  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.getCameraPermissionStatus()  
    })();
  }, []);
  const flashOn = async()=>{
    setFlash(!flash)
    if(flash){
      return <Icon name="zap" size={20} color="white" onPress={flashOn}/>
    
    }
  }
  if(!flash){
    flash_Off_On='off'
  }


  const photo = async ()=>{
    const option =  {    qualityPrioritization: 'quality' ,
    flash: flash_Off_On}


    const data = await cameraRef.current.takePhoto({
      flash:flash_Off_On,
      enableAutoStabilization:true,
       
    });
    setImagePreview(data)
    //console.log(imagePreview)
    setCameraState(!camereState)

  }
  const close = async()=>{
    setCameraState(!camereState)
  }
  const devices = useCameraDevices(
  )
  const device = devices.back

  if (device == null){
    return <ActivityIndicator size={20} color={'red'} />;  }
  return (
    <SafeAreaView style={styles.container}>

    {camereState ? (
      <Camera
        ref={cameraRef}
        style={styles.camera}
        //device={devices.back}
        device={device}
        isActive={true}
        frameProcessorFps={'auto'}
        photo = {true}
        //frameProcessor={frameProcessor}
      >
      <View style={styles.cameraContainer}> 
        <Icon  name="circle" size ={80} color='white' onPress={photo}/>
      </View>
      <View style={styles.rotateContainer}> 
        <Icon name="rotate-cw" size={35} color="white"/>
      </View>
      <View style={styles.flashContainer}>
        {!flash ? (<Icon name="zap-off" size={20} color="white" onPress={flashOn}/>)
        :(<Icon name="zap" size={20} color="white" onPress={flashOn}/>)}
      </View>

    </Camera>
    ) : 
    (
    <Preview imagePreview={imagePreview} show={true} close={close}/>)} 
        </SafeAreaView>

  

  )
  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black'
  },
  flashContainer:{
    position: 'absolute', 
    top:10,
    left:10

  },
  camera: {
    flex: 1,
  },
  rotateContainer: {
    position: 'absolute', 
    bottom: 45, 
    right:20
  },
  cameraContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    height:70,
    width:70
    
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  image: {
    width: '100%',
    height: 400,
  },
  contentModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: 20,
  },

});

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

