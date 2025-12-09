import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const NuevoPresupuesto = () => {
  return (
    <View style={styles.contenedor}>
      <Text>Definir Presupuesto</Text>

      <TextInput />

      <Pressable>
        <Text>Agregar Presupuesto</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 40,
    paddingHorizontal: 20,
    transform: [{ translateY: 50 }], // Esto encima el contenedor, para que este como arriba y abajo a la vez
    // Sombras: https://ethercreative.github.io/react-native-shadow-generator/
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});

export default NuevoPresupuesto;
