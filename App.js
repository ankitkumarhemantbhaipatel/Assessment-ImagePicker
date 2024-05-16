import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import Carousel from './src/components/ImageCarousel';

const App = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    })();
  }, []);

  const pickImages = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
    });

    if (!result.cancelled) {
      setSelectedImages(prevImages => [
        ...prevImages,
        ...result.assets.map(asset => ({ uri: asset.uri })),
      ]);
    }
  };

  const removeImage = uri => {
    setSelectedImages(prevImages => prevImages.filter(image => image.uri !== uri));
  };

  return (
    <View style={styles.container}>
      <Button title="Pick Images" onPress={pickImages} />
      {selectedImages.length > 0 && <Carousel data={selectedImages} removeImage={removeImage} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1, justifyContent: 'center', alignItems: 'center' 
  }
})

export default App;