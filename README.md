# Marvel Searcher
## Descripción
Buscador de personajes de Marvel realizado en ReactJS durante el Bootcamp de LenioLabs.
Esta aplicación consume los datos de los personajes de la [API oficial de Marvel](https://developer.marvel.com/).
## Demo
**Link:** https://marvel-searcher-app.herokuapp.com/
## Tecnologías y herramientas utilizadas
- [ReactJS](https://es.reactjs.org/)
- [React Hooks](https://es.reactjs.org/docs/hooks-intro.html)
- [React Router](https://reactrouter.com/)
- [Context API](https://es.reactjs.org/docs/context.html)
- [Bootstrap](https://getbootstrap.com/)
- [Trello](https://trello.com/b/RBZt7IE4/marvel-react-challenge)
- [Heroku](https://www.heroku.com/)
### Marvel API
https://developer.marvel.com/
## Funcionalidades
### Funcionalidades implementadas
- Cuando se entra la primera vez en la app web sin ningún personaje en la URL tiene que mostrar un personaje aleatorio y así por cada vez que vuelva a recargar la página.

- Al clickear sobre una card se debe mostrar un modal con el detalle del personaje y un listado de sus cómics ordenados por fecha. 
### Funcionalidades a implementar
Las siguientes features no fueron implementadas por falta de tiempo:

- El buscador tiene que tener la posibilidad de buscar los nombres de los personajes de Marvel en el input pero también por URL.

- La búsqueda tiene que contemplar buscar por similitudes de texto y parecidos de nombre, es decir, con solo buscar “spider” debería de renderizar todas las posibilidades y matches que abarcan.

- La búsqueda tiene que tener la posibilidad de buscar por comic directamente también y si es un link que viene     directamente de la página de marvel (The Amazing Spider-Man #22) tiene que visualizar un preview del cómic.

- La búsqueda tiene que poder guardarse en un listado de favoritos y que persista en el browser para que pueda ser usada en un futuro solo dandole click a la lista de búsquedas favoritas.

## Screenshots
### Homepage
![image](https://user-images.githubusercontent.com/28459482/122104849-7d1e9980-cdee-11eb-9d22-c759aa38df3c.png)

### Cards
![image](https://user-images.githubusercontent.com/28459482/122105045-b5be7300-cdee-11eb-8762-12ad89bc3920.png)

### Cards
![image](https://user-images.githubusercontent.com/28459482/122105790-9116cb00-cdef-11eb-8f96-6c662777cdff.png)

### Descripción y Comics
![image](https://user-images.githubusercontent.com/28459482/122106845-cc65c980-cdf0-11eb-941d-cc6233eddf97.png)  

![image](https://user-images.githubusercontent.com/28459482/122106068-d6d39380-cdef-11eb-84d9-f4fc9154ecb3.png) 
## Instalación
Clonar el repositorio:
```
$ git clone https://github.com/micaelavera/marvel-react-challenge.git
$ cd marvel-react-challenge
```

Instalar las dependencias:
```
$ npm install
```

Ejecutar el proyecto:
```
$ npm start
```
## Autor
[Micaela Vera](https://github.com/micaelavera)


