const express = require("express");
const router = express.Router();

const Book = require("../models/book");






router.post("/addBook", (req, res) => {

    const { accession_no, call_no, title, author, publisher, year, copies } = req.body;



    const book = new Book({
        accession_no,
        call_no,
        title,
        author,
        publisher,
        year,
        copies
    })
    book.save().then(result => {
        res.status(201).json({
            message: "Done upload!",

        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })

})
router.get("/allBook", (req, res) => {
    Book.find().sort({ createdAt: -1 }).then(data => {
        res.status(200).json(
            data
        );
    });
});


router.post('/getBook', async(req, res) => {


    // res.json({ name: "sdjhskjfd" });

    await Book.findOne({ accession_no: req.body.searchkey }, (err, data) => {
        if (!err) {
            res.send(data);
        }
    })

})




module.exports = router;