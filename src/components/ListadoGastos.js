import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Gasto from './Gasto';

const ListadoGastos = ({ gastos, setModal, setGasto }) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Gastos</Text>

      {gastos.length === 0 ? (
        <Text style={styles.titulo}>No hay gastos aún</Text>
      ) : (
        gastos.map(gasto => (
          <Gasto
            key={gasto.id}
            gasto={gasto}
            setModal={setModal}
            setGasto={setGasto}
          />
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    // marginVertical: 70,
    marginTop: 30,
    marginBottom: 100,
  },

  titulo: {
    color: '#64748B',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
  },

  noGastos: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 20,
  },
});

export default ListadoGastos;
