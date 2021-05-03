//the routes js was was modificated to adapt to my project 
//    The original code source is: https://github.com/mikhail-cct/iwa2-test

var express = require('express'),
router = express.Router(),

bookCtrl = require('./book-controller')


//books routes
router.get('/', bookCtrl.getBooks);
router.get('/books', bookCtrl.getBooks);
router.get('/book', bookCtrl.newBook);
router.get('/edit/:id', bookCtrl.editBook)
router.get('/book/:id', bookCtrl.getBookById)
router.get('/book/:title', bookCtrl.getBookByTitle)
router.post('/book', bookCtrl.createBook);
router.put('/book/:id', bookCtrl.updateBook);
router.delete('/book/:id', bookCtrl.deleteBook);



module.exports = router;
