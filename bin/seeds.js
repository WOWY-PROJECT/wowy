const mongoose = require('mongoose');
const Article = require('../models/Article');

const dbName = 'wowy';
mongoose.connect(`mongodb://localhost/${dbName}`);

const Articles = [
  {
    name: 'Gafas',
    description: 'Usaba las gafas para ver en las clases de Marc',
    image: 'http://img2.wikia.nocookie.net/__cb20110909205322/inciclopedia/images/6/61/Gafas_dormir_homer.jpg',
    localization: ['Madrid'],
    date: 2017-10-03,
    reward: 40,
    status: 'lost'
  },{
    name: 'Amor',
    description: 'Lo perdí en la cocina de Ironhack',
    image: 'http://elartedesabervivir.com/wp-content/uploads/2017/06/Titanic-horizontal-pareja-amor-sexualidad-prhonesis-arte-saber-vivir.gif',
    localization: ['Madrid'],
    date: 2017-10-02,
    reward: 10,
    status: 'lost'
  },{
    name: 'Llaves',
    description: 'Encontradas en el fondo del río, matarile',
    image: 'http://www.turismodebuceo.com/concentracion-de-buceo/concentracion-cabo-de-palos.jpg',
    localization: ['Bilbao'],
    date: 2017-10-01,
    reward: 20,
    status: 'found'
  },{
    name: 'Teléfono',
    description: 'Perdido en las Ironbeers del viernes',
    image: 'http://www.curiosfera.com/wp-content/uploads/2017/06/Historia-del-tel%C3%A9fono.jpg',
    localization: ['Madrid'],
    date: 2017-09-03,
    reward: 35,
    status: 'lost'
  },{
    name: 'Pipa',
    description: 'Encontrada pipa en la silla de Andrei con la palabra chicuelos en la culata',
    image: 'https://www.vivefiestas.com/img-productos/ampliadas/pistolon-de-pirata-de-420-mm-8250.jpg',
    localization: ['Madrid'],
    date: 2017-09-08,
    reward: 600,
    status: 'found'
  }
]

Article.create(Articles, (err) => {
  if (err) { throw(err); }
});
