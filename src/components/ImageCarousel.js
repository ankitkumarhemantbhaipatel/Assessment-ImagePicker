import React from "react";
import { View, FlatList, Image, Button } from "react-native";

import { styles } from "./styles";

const Carousel = ({ data, removeImage }) => {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={{ uri: item.uri }} style={styles.image} />
          <Button title="Remove" onPress={() => removeImage(item.uri)} />
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default Carousel;
