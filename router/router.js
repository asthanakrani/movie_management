const express = require('express');
const Controller = require('../controllers/controllers')
const upload = require('../config/multerconfig');
const router = express.Router();

router.get('/', Controller.getMovies);
router.get('/add', Controller.getAddMovie);
router.post('/', upload.single('poster'), Controller.postAddMovie);
router.get('/edit/:id', Controller.getEditMovie);
router.post('/update/:id', upload.single('poster'), Controller.postUpdateMovie);
router.get('/delete/:id', Controller.getDeleteMovie);

module.exports = router;