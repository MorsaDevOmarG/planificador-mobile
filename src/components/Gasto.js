import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import globalStyles from '../styles';

const Gasto = ({ gasto }) => {
  const { nombre, categoria, cantidad, id } = gasto;

  return (
    <View style={styles.contenedor}>
      <Text style={styles.nombre}>{nombre}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
  },

  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Gasto;
