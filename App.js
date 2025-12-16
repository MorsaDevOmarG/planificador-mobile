import { Alert, Image, Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';

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

  const handleNuevoPresupuesto = (presupuesto) => {
    // console.log('Desde app', presupuesto);

    if (Number(presupuesto) > 0) {
      // console.log('Válido');

      setIsValidPresupuesto(true);
    } else {
      // console.log('Inválido');

      Alert.alert(
        'Error',
        'El presupuesto no puede ser: "0" o menor',
        [{texto: 'Ok'}]
      )
    }
  };

  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        <Header />

        {/* <NuevoPresupuesto
          handleNuevoPresupuesto={handleNuevoPresupuesto}
        /> */}

        {
          isValidPresupuesto
            ? (
              <ControlPresupuesto
                presupuesto={presupuesto}
                gastos={gastos}
              />
            )
            : (
              <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                handleNuevoPresupuesto={handleNuevoPresupuesto}
              />
            )
        }
      </View>

      {
        modal && (
          <Modal
            animationType="slide"
            visible={modal}
            onRequestClose={() => {
              setModal(false)
            }}
          >
            <FormularioGasto
              setModal={setModal}
            />
          </Modal>
        )
      }

      {
        isValidPresupuesto && (
          <Pressable
            onPress={() => setModal(true)}
            style={styles.pressable}
          >
            <Image
              style={styles.imagen}
              source={require('./src/img/nuevo-gasto.png')}
            />
          </Pressable>
        )
      }
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
  },

  pressable: {
  },

  imagen: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 10,
    right: 20
  }
});

export default App;
