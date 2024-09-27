const mongoose = require('mongoose');


const connect = async () => {
    await mongoose.connect('mongodb+srv://gautamagrawal542:yeSG1ua2brS8M4mT@cluster0.nhecf.mongodb.net')
}


module.exports = connect