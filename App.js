import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";

import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';

const App = () => {
  const handleNuevoPresupuesto = (presupuesto) => {
    // console.log('Desde app', presupuesto);

    if (Number(presupuesto) > 0) {
      console.log('Válido');
    } else {
      // console.log('Inválido');

      Alert.alert(
        'Error',
        'El presupuesto no puede ser 0',
        [{texto: 'Ok'}]
      )
    }
  };

  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        <Header />

        <NuevoPresupuesto
          handleNuevoPresupuesto={handleNuevoPresupuesto}
        />
      </View>
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
});

export default App;
