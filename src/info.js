//ASSEST
import imgDashboard from './assets/dashboard.webp'
import imgJobList from './assets/jobList.webp'
import imgBatabit from './assets/Batabit.webp'
import imgPlatziVideohtml from './assets/platzi-video-html.webp'
// import imgPlatziVideoApi from './assets/platzi-video-api.webp'
import imgBlogpost from './assets/BlogPost_blogs.webp'
import imgWebsidecat from './assets/Webside-cat.webp'
import imgPetgram from './assets/petgram.webp'
import imgPlatziConf from './assets/platzi-conf.webp'
import imgReviewsRestaurants from './assets/reviewsrestaurants.webp'
import imgIpAddress from './assets/ipAddress.webp'


const Info = [
    {
        id: 1,
        title: 'Job listings ',
        description: 'Este sitio web permite a los usuarios visualizar una lista de trabajos, y poder filtrarlos por una serie de parametros, los cuales puede elegir dependiendo de sus necesidades. Ademas este se adapta a diferentes resoluciones. Para su construcción se utilizo React y css modules y para su despliegue se utilizo firebase y github actions.',
        src: imgJobList,
        url:'https://jobslist-7ad13.web.app/',
        tags: [ 'REACT', 'CSS', 'JS']
    },
    {
        id: 2,
        title: 'Social media dashboard',
        description: 'Dashboard es la maquetación de un panel de redes sociales con el selector de temas. El usuario puede elegir entre el tema oscuro y claro. Los usuarios pueden visualizar esta pagina en diferentes resoluciones, desde un dispositivo mobil hasta un desktop. El aplicativo fue desarrollado usando React y desplegado en firebase',
        src: imgDashboard,
        url:'https://panelsocialmedia-9f70b.web.app/',
        tags: [ 'REACT', 'CSS', 'JS']
    },
    {
        id: 3,
        title: 'Batabit',
        description: 'Batabit es una pagina web que facilita la comercialización de Bitcoins para todo tipo de usuario. En este proyecto se realizo la landing page, en la cual los usuarios podrán ver las diferentes ofertas; en su elaboración se utilizo html y css . Se aplico la metodología de Mobile-first para su maquetación, y posteriormente se adapto a diferentes resoluciones. ',
        src: imgBatabit,
        url:'https://hahs-92.github.io/Batabit/index',
        tags: [ 'HTML', 'CSS']
    },
    {
        id: 4,
        title: 'Platzi video',
        description: 'Este sitio web permite a los usuarios ver videos en línea y poder agregarlos a su play-list, contiene cuatro paginas, home, login, register y pagina no encontrada, elaboradas usando solo html y css. Esta página esta adaptada para que los usuarios la puedan visualizar desde un desktop y tablet ',
        src: imgPlatziVideohtml,
        url:'https://hahs-92.github.io/Platzi-conf/',
        tags: [ 'HTML', 'CSS', 'JS']
    },
    // {
    //     id: 4,
    //     title: 'Platzi video api',
    //     description: 'Platzi video es la maquetación de un sitio web que permite a los usuarios ver peliculas en linea, clasificadas en tres géneros. En su desarrollo se utilizó html,css y javaScript. Con javaScript vanilla se consumio una api pública para solicitar los datos de las peliculas y así mostrarlas a los usuarios.,',
    //     src: imgPlatziVideoApi,
    //     url:'https://hahs-92.github.io/Platzi-video/'
    // },
    {
        id: 5,
        title: 'BlogPost',
        description: 'Este Blogpost es una plantilla que permite al usuario publicar sus proyectos destacados de una manera creativa, para su maquetación se utilizo html, y css para los estilos, ademas se utilizaron breakpoints para hacer la pagina web responsive, permitiendo a los usuarios, visualizarla desde cualquier dispositivo',
        src: imgBlogpost,
        url:'https://hahs-92.github.io/BlogPost/',
        tags: [ 'HTML', 'CSS', 'JS']
    },
    {
        id: 6,
        title: 'Webside E-comerce',
        description: 'Front-end de una E-commerce website para la compra de geniales cajas de gatitos, esta construida unicamente usando html semantico y css. Es una pagina web responsive, es decir se puede visualizar desde cualquier resolución y se adaptara a cada una de ellas',
        src: imgWebsidecat,
        url:'https://hahs-92.github.io/Proyect.webside-cat/',
        tags: [ 'HTML', 'CSS', 'JS']
    },
    {
        id: 7,
        title: 'Petgram',
        description: 'Maquetación de una aplicación para ver y subir fotos de mascotas desde dispositivos mobiles. En su elaboración se utilizó React y Sass como preprocesador de css. Ademas se mejoró el SEO de la aplicación  con react Helmet, y con la ayuda de Webpack se comprimio los archivos utilizados para mejorar el rendimiento , ',
        src: imgPetgram,
        url:'https://petgram-hahs.vercel.app/',
        tags: [ 'REACT', 'CSS', 'JS']
    },
    {
        id: 8,
        title: 'PlatziConf',
        description: 'PlatziConf (Front-end) es un sitio web para la compra de articulos de la conferencia de platzi 2020, por medio de paypal, y se genera un mapa con la ayuda de la api de google maps. Este proyecto esta construido  usando React y Sass, ademas de webpack como empaquetador. Este sitio web se puede visualizar en resoluciones de 765px en adelante',
        src: imgPlatziConf,
        url:'https://platzi-conf-6a553.web.app/',
        tags: [ 'REACT', 'CSS', 'JS']
    },
    {
        id: 9,
        title: 'ReviewRestaurants',
        description: 'En este proyecto el usuario puede hacer un sencillo login que le permite agregar reseñas a dierentes hoteles, asi como editarla y eliminarlas. Esta pagina fue construida con React.js para la parte del front-end, Node, express y Mongodb para crear el back-end',
        src: imgReviewsRestaurants,
        url:'https://reviewsrestaurants-9de6e.web.app/',
        tags: [ 'REACT', 'CSS', 'JS', 'API']
    },
    {
        id: 10,
        title: 'IP Address Tracker',
        description: 'Este sitio web permite al usuario ver renderizada su dirección al momento de iniciar la aplicación, ademas puede buscar por ip address y dominio. Esta construida usando Html, css, javaScript; y se utilizaron dos Apis(IP Geolocation API by IPify y LeafletJS.',
        src: imgIpAddress,
        url:'https://hahs-92.github.io/IPTracker/',
        tags: [ 'HTML', 'SASS', 'JS', 'API']
    }

]

export default Info