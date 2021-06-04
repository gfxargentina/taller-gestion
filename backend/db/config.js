const mongoose = require('mongoose');

const dbConection = async() => {

    try {
        await mongoose.connect( process.env.DB, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        
        console.log('DB conectada')
        
    } catch (error) {
        console.log(error);
        throw new Error('No se puede conectar a la DB');
    }
}

module.exports = {
    dbConection
}