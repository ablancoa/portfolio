export const data = {
  data: [
    {
      id: 1,
      name: 'Avocado Store',
      description: `Proyecto creado mediante NextJS, framework de React, en él se simula el proceso de comprar en una tienda, maquetación de la página de productos, se puede agregar y quitar productos del carrito, ver detalles del producto, revisar la compra, además enviar la informacion de compra al vendedor mediante un email. 
      Presenta un formulario mediante el que se puede comunicar conmigo además de links a mis redes sociales `,
      technology: ['React', 'NextJS', 'Vercel', 'TypeScript', 'MaterialUI', 'NodeJS'],
      image: 'Avocado',
      url: "https://avo-store-phi.vercel.app/"
    },
    {
      id: 2,
      name: 'FakeMadrid Store',
      description: `Proyecto de simulación de un Ecommerce, creando un flujo de trabajo desde la selección de los porductos hasta el pago mediante PayPal, te permite agregar y quitar productos del carrito, ver ubicación de la dirección de entrega con la API de Google Maps y pago seguro mediante PayPal.
      Se desplegó en Firebase y se utilizo Strapi para el almacenamiento de la información, esta fue desplegada en el servicio de Railway`,
      technology: ['React','JavaScript','Paypal','Google Maps', 'Axios', 'React-router-dom', 'Yup', 'NodeJS', 'Strappi', 'Railway', 'Firebase'],
      image: 'Madrid',
      url: "https://store-maps-1585d.web.app/"
    },
    {
      id: 3,
      name: 'Pokedex',
      description: `Pequeña aplicación de Pokedex creada en React Native, la cual permite ver las estadisticas de todos los pokemones existentes en la Pokedex, para ello se empleó la API de PokeApi. Esta app le permite al usuario registrado agregar o quitar pokemones de la sección de favoritos`,
      technology: ['React Native', 'JavaScript', 'Expo','Yup', 'Formik', 'Async-storage', 'React Navigation'],
      image: 'Pokedex',
      url: "",
    },
    {
      id: 4,
      name: 'Juego del Ahorcado',
      description: `Versión del clásico juego del ahorcadito, este juego te permite jugar como usuario no registrado con palabreas ya predeterminadas o con palabras que el jugador indique en el momento. Para los usuarios registrados se le permite agregar palabras a una librería personal, la cual quedará registrada permanentemente, para ello se utilzó firebase como servicio de almacenamiento y la aplicación fue desplegada en GitHub Pages`,
      technology: ['HTML5', 'CSS3', 'JavaScript', 'Cloud-Firebase'],
      image: 'Ahorcado',
    },

    {
      id: 5,
      name: 'Encriptador',
      description: `Challenge No. 1 del Curso de Alura, el cual consistía en crear un encriptador que le permita al usuario pasar un mensaje y que esta página te lo encripte, también permite pasarle el mensaje encriptado para poder desencriptarlo`,
      technology: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'Encriptador',
    }
  ]
}