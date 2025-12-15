import React from 'react';
import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const FormularioGasto = () => {
  return (
    <SafeAreaView>
      <View>
        <Pressable>
          <Text>Cancelar</Text>
        </Pressable>
      </View>

      <View>
        <Text>Nuevo Gasto</Text>

        <View>
          <Text>Nombre Gasto</Text>

          <TextInput placeholder="Nombre del gasto. Ej: Comida" />
        </View>

        <View>
          <Text>Categoría Gasto</Text>

          <TextInput
            placeholder="Cantidad del gasto. Ej: 300"
            keyboardType="numeric"
          />
        </View>

        <View>
          <Picker>
            <Picker.Item label="-- Seleccione --" value="" />
            <Picker.Item label="Ahorro" value="ahorro" />
            <Picker.Item label="Comida" value="comida" />
            <Picker.Item label="Casa" value="casa" />
            <Picker.Item label="Gastos Varos" value="gastos" />
            <Picker.Item label="Ocio" value="ocio" />
            <Picker.Item label="Salud" value="salud" />
            <Picker.Item label="Suscripciones" value="suscripciones" />
          </Picker>
        </View>

        <Pressable>
          <Text>Agregar Gasto</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default FormularioGasto;
