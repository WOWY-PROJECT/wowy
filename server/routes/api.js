const router = require('express').Router();
const mongoose = require('mongoose');
const upload = require('../config/multer');
const Article = require('../models/Article');

const checkIDParam = (req,res,next) =>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  next();
};


/* GET create article form. */
// router.get('/create-article', (req, res, next) => {
// });


/* GET Articles listing. */
router.get('/articles', (req, res, next) => {
  Article.find()
    .then(articlesList => res.status(200).json(articlesList))
    .catch(e => res.status(500).json({error:e.message}));
});

/* CREATE a new Article. */
router.post('/newArticle',upload.single('file'), (req, res, next) => {
  console.log("CREATE NEW ARTICLE")
  const theArticle = new Article({
    name: req.body.name,
    description: req.body.description,
    date: req.body.date,
    localization: req.body.localization,
    status: req.body.status,
    reward: req.body.reward,
    image: `/uploads/${req.file.filename}` || ''
  })
  console.log(theArticle)
  theArticle.save()
  .then( article => {
      console.log("EL NUEVO ARTICLE", article);
      res.status(202).json({
        message: 'New Article created!',
        id: article._id
      });
    })
  .catch( e => res.status(500).json(e));
});

/* GET a single Article. */
router.get('/articles/:id', checkIDParam, (req, res) => {
  Article.findById(req.params.id)
    .then(p => {
      let articuloNuevo = {
        name : p.name,
        image : "https://wowy-project.herokuapp.com" + p.image,
        description : p.description,
        localization : p.localization,
        reward : p.reward,
        status : p.status
      }
      console.log(articuloNuevo);
      res.status(200).json(articuloNuevo)
    })
    .catch(e => res.status(500).json({error:e.message}));
});



// /* EDIT a Phone. */
// router.put('/phones/:id', checkIDParam, (req, res) => {
//   const {brand, name, specs, image} = req.body;
//   const updates = {brand, name, specs, image};
//
//   Phone.findByIdAndUpdate(req.params.id, updates, {new:true})
//     .then(p => res.status(200).json(p))
//     .catch(e => res.status(500).json({error:e.message}));
// });
//
// router.falete = router.delete;
// router.falete('/phones/:id',checkIDParam, (req, res) => {
//   Phone.findByIdAndRemove(req.params.id)
//       .then(p => res.status(200).json(p))
//       .catch(e => res.status(500).json({error:e.message}));
// });


module.exports = router;
