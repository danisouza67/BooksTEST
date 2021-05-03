//the controller js was was modificated to adapt to my project 
//    The original code source is: https://github.com/mikhail-cct/iwa2-test
//  also here: https://github.com/WebDevSimplified/Markdown-Blog/blob/master/routes/articles.js

const Book = require('./models/book'), express = require('express'), router = express.Router()


exports.newBook = (req, res) => {
    res.render('book', {book: new Book()})
};

//create new book, i had problem with this at the end, i had to ask my coleages how to solve that problem.  It's working now.
exports.createBook = async(req, res) =>{ 
        const newBook = new Book ({           
            title: req.body.title,
            author: req.body.author,
            gender: req.body.gender,
            desc: req.body.desc,
            year: req.body.year,
            price: req.body.price,             
        });
    try{
        await newBook.save(); 
        console.log(newBook);    
    }catch(error){
        console.log("There was an error with your Book");
        console.log(error);      
    }
    //redirecting to index
    res.redirect('/');
};


//updating user, this is a midificated version os creatBook. With PostMan is possible update the db without problems.
//I manage to get my html form to update de data base too, but i have issues to redirect the page.
//you may need to restart the npm once passing throught here. "/
exports.updateBook = async(req, res, book) =>{ 
        // const newBook = new Book ({           
        //     title: req.body.title,
        //     author: req.body.author,
        //     gender: req.body.gender,
        //     desc: req.body.desc,
        //     year: req.body.year,
        //     price: req.body.price,             
        // });
    try{
        await Book.findById(req.params.id)
        // console.log(newBook); 
        await Book.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err) => {
        if (err) {
            res.status(400).json(err);
        }
        res.redirect('/');
    })
    }catch(error){
        console.log("There was an error with your Book");
        console.log(error);      
    }
    //at least trying to redirect to index page
    res.redirect('/');
};



//edit page
exports.editBook = async (req, res) => {
    const book = await Book.findById(req.params.id)
    res.render('edit', { book: book })
}


//getting all
exports.getBooks = async (req, res) => {
    const books = await Book.find().sort({ createdAt: 'desc' })
    res.render('index', { books: books })
}

//getting book by id (show.ejs)
exports.getBookById = async (req, res) => {
    const book = await Book.findOne({ _id: req.params.id })
    if (book == null) res.redirect('/')
    res.render('show', { book: book })
}


//getting user by title  (postman only)
exports.getBookByTitle = (req, res) => {
    Book.find({ "title": req.params.title }, (err, books) => {
        if (err) {
            res.status(400).json(err);
        }
        res.json(books);
    });
};

//deleting user
exports.deleteBook = async (req, res) => {
    await Book.findByIdAndDelete(req.params.id)
    res.redirect('/')
};

