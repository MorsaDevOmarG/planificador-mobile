import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Gasto from './Gasto';

const ListadoGastos = ({ gastos }) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Gastos</Text>

      {gastos.length === 0 ? (
        <Text style={styles.titulo}>No hay gastos aún</Text>
      ) : (
          gastos.map(gasto => (
          <Gasto />
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 70,
  },

  titulo: {
    color: '#64748B',
    fontSize: 30,
    textAlign: 'center',
  },

  noGastos: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
  },
});

export default ListadoGastos;
