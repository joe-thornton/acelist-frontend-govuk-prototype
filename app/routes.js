const express = require('express')
const router = express.Router()
const axios = require('axios')

// Add your routes here - above the module.exports line
router.post('/submit-item', (req, res) => {
//    console.log('in this route')
//    console.log(req)
    console.log(req.body)
//    req.on('end', (data) => {
//    console.log('data has arrived')
//    })
    const {Title, Category, Description, Price} = req.body

    axios.post('http://localhost:9000/adverts', {
        title: Title,
        body: Description,
        subBoard: Category,
        price: Number(Price)
        }
    )
    .then(APIresponse => res.redirect('/confirmation'))
    .catch((error) => {console.log(error)})

})

module.exports = router

