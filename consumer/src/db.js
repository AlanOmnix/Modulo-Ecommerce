const mongoose = require('mongoose')

const URI = process.env.DB_URI

mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => console.log('DB is connected'))
.catch(err => console.log(`Error: ${err}`))