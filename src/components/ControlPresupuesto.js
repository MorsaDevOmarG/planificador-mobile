import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import globalStyles from '../styles'

const ControlPresupuesto = () => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.centrarGrafica}>
        <Image
          style={styles.imagen}
          source={require('../img/grafico.jpg')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    // backgroundColor: '#FFF',
    // marginHorizontal: 10,
    // borderRadius: 10,
    // paddingVertical: 40,
    // paddingHorizontal: 20,
    // transform: [{ translateY: 50 }], // Esto encima el contenedor, para que este como arriba y abajo a la vez
    // // Sombras: https://ethercreative.github.io/react-native-shadow-generator/
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,

    // elevation: 4,

    // De esta forma usamos un estilo que estamos importando y funciona para reutilizarlo
    ...globalStyles.contenedor,
  },

  centrarGrafica: {
    alignItems: 'center'
  },

  imagen: {
    width: 250,
    height: 250
  }
});

export default ControlPresupuesto;
