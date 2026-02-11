import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import globalStyles from '../styles';

const Filtro = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Filtrar Gastos</Text>

      <Picker
      // selectedValue={categoria}
      // onValueChange={valor => {
      //   setCategoria(valor);
      // }}
      >
        <Picker.Item label="-- Seleccione --" value="" />
        <Picker.Item label="Ahorro" value="ahorro" />
        <Picker.Item label="Comida" value="comida" />
        <Picker.Item label="Casa" value="casa" />
        <Picker.Item label="Gastos Varios" value="gastos" />
        <Picker.Item label="Ocio" value="ocio" />
        <Picker.Item label="Salud" value="salud" />
        <Picker.Item label="Suscripciones" value="suscripciones" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
    transform: [{ translateY: 0 }],
    marginTop: 80,
  },

  label: {
    fontSize: 22,
    fontWeight: '900',
    color: '#64748B',
  },
});

export default Filtro;
