import React, { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import globalStyles from '../styles';
import { formatearCantidad } from '../helpers';

const ControlPresupuesto = ({ presupuesto, gastos, resetearApp }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => Number(gasto.cantidad) + total,
      0,
    );
    // console.log(totalGastado);

    const totalDisponible = presupuesto - totalGastado;
    // console.log(totalDisponible);

    const nuevoPorcentaje =
      ((presupuesto - totalDisponible) / presupuesto) * 100;

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1000);

    setGastado(totalGastado);
    setDisponible(totalDisponible);
  }, [gastos]);

  return (
    <View style={styles.contenedor}>
      <View style={styles.centrarGrafica}>
        <Image style={styles.imagen} source={require('../img/grafico.jpg')} />

        {/*   
          <CircularProgress 
            //value={50} 
            value={porcentaje} 
            radius={150}             
            duration={1000}            
            valueSuffix={'%}            
            title='Gastado' 
            inActveStrokeColor='#F5F5F5' 
            inActiveStrokeWidth={20} 
            activeStrokeColor='#3B82F6' 
            activeStrokeWidth={20} 
            titleStyle={{  fontWeith: 'bold', fonSize: 20 }}
            titleColor='64748B' 
            /> 
        */}
      </View>

      <View style={styles.contenedorTexto}>
        <Pressable style={styles.boton} onLongPress={resetearApp}>
          <Text style={styles.textoBoton}>Reinicar App</Text>
        </Pressable>

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

        <Text style={styles.valor}>
          <Text style={styles.label}>Porcentaje: {''}</Text>%
          {porcentaje.toFixed(2)}
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
    alignItems: 'center',
  },

  imagen: {
    width: 250,
    height: 250,
  },

  boton: {
    backgroundColor: '#DB2777',
    padding: 10,
    marginBottom: 40,
    borderRadius: 5,
  },

  textoBoton: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  contenedorTexto: {
    marginTop: 50,
  },

  valor: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },

  label: {
    fontWeight: '700',
    color: '#3B82F6',
  },
});

export default ControlPresupuesto;
