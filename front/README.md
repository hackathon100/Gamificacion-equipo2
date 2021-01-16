# Kongames

## Estructura

La carpeta **src** del proyecto sigue la siguiente estructura:
l-- app
|-- assets
|-- components
|-- config
|-- constants
|-- containers
|-- features
|-- store
|-- styles
|-- util

### App

En la subcarpeta **routes** se declaran y exportan todas las rutas accesibles en la plataforma. En el caso de este proyecto, hemos declarado la ruta **Demo**. Luego, en el index de la carpeta **App**, se importan todas las rutas para exportar un componente que contiene todo el layout de la aplicación (Sidenav, contenido y rutas).

### Assets

En la subcarpeta **images** se encuentran todas las imagenes que serán utilizadas en la aplicación. En la subcarpeta **vendors** van archivos de estilo y fuentes.

### Components

En esta carpeta sen encuentra cada componente de la aplicación. Cada uno de estos componentes está dentro de una misma subcarpeta con el mismo nombre del componente.

### Config

En esta carpeta se encuentran los archivos de configuración de la aplicación, como **Api.js** para configurar las llamadas a la api con el cliente Axios, o **defaultTheme.js** para configurar el tema de Material-UI.

### Constants

En esta subcarpeta se declaran todas las constantes que puedan ser utilizadas en la aplicación.

### Containers

En esta subcarpeta se encuentran los Container Components, que se conectan directamente con el estado de la aplicación. También se encuentra el container **AppContainer.js**, que es donde sucede la verificación del token para pasar la fase de login.

### Features

Cada feature un hace referencia a un _slice_ o parte distinta del reductor de la aplicación, de manera que la lógica quede separada según se estime conveniente. También hay dos archivos especiales: - **Selectors.js:** contiene selectores para las keys del estado de los distintos slices de la aplicación. Una buena práctica es utilizar **reselect**, ya incluido en el proyecto, para implementar selectores más complejos con memoización. - **Schemas.js:** dentro de este archivo se establecen las relaciones entre entidades a las que hacen referencia los features, tal como si fuera una base de datos. Esto para hacer uso de **normalizr**, también incluido en el proyecto, y así normalizar las respuestas de llamadas a la api.

### Store

En esta subcarpeta se encuentra el store de **redux** de la aplicación. Se importa el reductor principal de **features** y se incluyen middlewares si se requiere.

### Util

Finalmente, en **util** se encuentran todos los archivos de utilidad, que no necesariamente son componentes, sino más bien funciones o métodos helpers.

### Styles

Aquí se ubican los archivos .scss de estilo. Esta carpeta se divide en tres subcarpetas: - **base:** Aquí van los estilos base del proyecto (tipografías, colores, clases y selectores de utilidad global en el proyecto). - **components:** Aquí van los estilos específicos para cada componente. - **layout:** Aquí van los estilos de layout de cada página. Debería haber uno por cada vista, por ejemplo "\_demo-view.scss", donde se establece el layout general de la vista.


<a href='https://www.freepik.es/vectores/tecnologia'>Vector de Tecnología creado por upklyak - www.freepik.es</a>
<a href='https://www.freepik.es/vectores/libro'>Vector de Libro creado por pch.vector - www.freepik.es</a>
<a href='https://www.freepik.es/vectores/arbol'>Vector de Árbol creado por brgfx - www.freepik.es</a>
