import {
  Alert,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useState } from 'react';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';
import ListadoGastos from './src/components/ListadoGastos';
import Filtro from './src/components/Filtro';
import { generarId } from './src/helpers';

const App = () => {
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [presupuesto, setPresupuesto] = useState(0);
  // const [gastos, setGastos] = useState([
  //   { id: 1, cantidad: 30 },
  //   { id: 2, cantidad: 40 },
  //   { id: 3, cantidad: 50 },
  // ]);
  const [gastos, setGastos] = useState([]);
  const [modal, setModal] = useState(false);
  const [gasto, setGasto] = useState({});

  const handleNuevoPresupuesto = presupuesto => {
    // console.log('Desde app', presupuesto);

    if (Number(presupuesto) > 0) {
      // console.log('Válido');

      setIsValidPresupuesto(true);
    } else {
      // console.log('Inválido');

      Alert.alert('Error', 'El presupuesto no puede ser: "0" o menor', [
        { texto: 'Ok' },
      ]);
    }
  };

  const handleGasto = gasto => {
    // console.log('Gasto', gasto);

    // keys: lee los valores de la izquierda
    // values: lee los valores de la derecha

    // if (Object.values(gasto).includes('')) {
    if ([gasto.nombre, gasto.cantidad, gasto.categoria].includes('')) {
      // console.log('Campos vacíos');

      Alert.alert('Error', 'Todos los campos son obligatorios');

      return;
    }

    if (gasto.id) {
      // Editando el gasto
      const gastosActualizados = gastos.map(gastoState =>
        gastoState.id === gasto.id ? gasto : gastoState,
      );

      setGastos(gastosActualizados);
    } else {
      // Añadir el nuevo gasto al STATE
      gasto.id = generarId();
      gasto.fecha = Date.now();

      setGastos([...gastos, gasto]);
    }

    setModal(false);
  };

  const eliminarGasto = id => {
    // console.log('Eliminando: ', id);

    Alert.alert(
      '¿Deseas eliminar este gasto?',
      'Un gasto eliminado no se puede recuperar',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Si, Eliminar',
          // style: 'default',
          onPress: () => {
            // console.log('Eliminando: ', id);

            const gastosActualizados = gastos.filter(
              gastoState => gastoState.id !== id,
            );

            setGastos(gastosActualizados);
            setModal(false);
            setGasto({});
          },
        },
      ],
    );
  };

  return (
    <View style={styles.contenedor}>
      <ScrollView>
        <View style={styles.header}>
          <Header />

          {/* <NuevoPresupuesto
          handleNuevoPresupuesto={handleNuevoPresupuesto}
        /> */}

          {isValidPresupuesto ? (
            <ControlPresupuesto presupuesto={presupuesto} gastos={gastos} />
          ) : (
            <NuevoPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              handleNuevoPresupuesto={handleNuevoPresupuesto}
            />
          )}
        </View>

        {isValidPresupuesto && (
          <>
            <Filtro />

            <ListadoGastos
              gastos={gastos}
              setModal={setModal}
              setGasto={setGasto}
            />
          </>
        )}
      </ScrollView>

      {modal && (
        <Modal
          animationType="slide"
          visible={modal}
          onRequestClose={() => {
            setModal(false);
          }}
        >
          <FormularioGasto
            setModal={setModal}
            handleGasto={handleGasto}
            gasto={gasto}
            setGasto={setGasto}
            eliminarGasto={eliminarGasto}
          />
        </Modal>
      )}

      {isValidPresupuesto && (
        <Pressable onPress={() => setModal(true)} style={styles.pressable}>
          <Image
            style={styles.imagen}
            source={require('./src/img/nuevo-gasto.png')}
          />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },

  header: {
    backgroundColor: '#3B82F6',
    minHeight: 400,
  },

  pressable: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 40,
    right: 30,
  },

  imagen: {
    width: 60,
    height: 60,
    // position: 'absolute',
    // bottom: 40,
    // right: 30,
  },
});

export default App;
