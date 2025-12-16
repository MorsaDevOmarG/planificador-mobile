# App Planificador de Presupuestos

- Creación del proyecto:
    - **_`npx react-native init MiProyecto --version 0.70`_**
- Nuevas versiones:
  - **_npx @react-native-community/cli init primerProyecto_**

## Herramientas utilizadas
1. Visual Studio Code 
    - entorno de desarrollo
1. Chocolatey
    - instalar dependencias
1. Node.js
1. JAVA DEVELOPMENT KIT
1. Android Studio
1. Android SDK
1. Emulador Android (AVD) 
    - Una vez creado el Emulador y creado nuestro proyecto, mediante la consola dentro de la carpeta de nuestro proyecto, tenemos que ejecutar el siguiente comando:  `npx react-native run-android`
1. Flipper
    - nos ayuda a debuguear la app
1. Async Storage
    - `npm install @react-native-async-storage/async-storage`

### Tecnologías
1. React Native
1. Stylesheet
1. Sombras
    - ethercreative.github.io/react-native-shadow-generator/
1. Picker
    - **_`npm install @react-native-picker/picker --save`_**
    - **Nota**: después de ejcutar el PICKER, tenemos que cerrar y abrir de nuevo el emulador:
        - `npx react-native run-android`
1. 

#### Notas
1. Si te diera ERROR el formato de las cantidades en ANDROID, tenemos que realizar lo siguiente:
1. Dentro de la siguiente ruta:
    - android / app / build.gradle
1. Debemos buscar la línea: 112 o 113 y cambiar la variable o función por la siguiente:
    - `def jscFlavor = 'org.webkit:android-jsc:+'`
1. Cambiarlo por:
    - **`def jscFlavor = 'org.webkit:android-jsc-intl:+'`**

## Async Storage
1. Sistem de almacenamiento de tipo: llave-valor (key-value) que existe y se puede acceder de forma global.
1. Similar a LocalStorage.
1. En iOS utiliza: diccionarios o archivos, mientras que en Android: SQLite o RocksDB (lo que haya disponible).
1. Métodos:
    - .setItem: Almacenar elementos.
    - .getItem: Obtener elementos.
    - .removeItem: Eliminar un elemento.
    - .clear: Limpia todo el contenido.

### NOTAS
1. En un _MODAL_, siempre siempre es recomendable utilizar:
  - **_onRequestClose_**
1. Esto con la finalidad de tener una experiencia de usuario buena y aparte cuando toca el botón de _back_, cierra el _MODAL_.