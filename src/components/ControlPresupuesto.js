import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import globalStyles from '../styles';
import { formatearCantidad } from '../helpers';

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => Number(gasto.cantidad) + total, 0
    );
    // console.log(totalGastado);

    const totalDisponible = presupuesto - totalGastado;
    // console.log(totalDisponible);

    setGastado(totalGastado);
    setDisponible(totalDisponible);
  }, [gastos]);

  return (
    <View style={styles.contenedor}>
      <View style={styles.centrarGrafica}>
        <Image style={styles.imagen} source={require('../img/grafico.jpg')} />
      </View>

      <View style={styles.contenedorTexto}>
        <Text style={styles.valor}>
          <Text style={styles.label}>Presupuesto: {''} </Text>

          {/* {presupuesto} */}
          {formatearCantidad(presupuesto)}
        </Text>

        <Text style={styles.valor}>
          <Text style={styles.label}>Disponible: {''} </Text>

          {formatearCantidad(disponible)}
        </Text>

        <Text style={styles.valor}>
          <Text style={styles.label}>Gastado: {''} </Text>

          {formatearCantidad(gastado)}
        </Text>
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
  },

  contenedorTexto: {
    marginTop: 50
  },

  valor: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10
  },

  label: {
    fontWeight: '700',
    color: '#3B82F6'
  }
});

export default ControlPresupuesto;
