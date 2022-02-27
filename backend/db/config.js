const mongoose = require("mongoose");

const dbConection = async () => {
  const url = "mongodb://127.0.0.1/taller";
  try {
    //Habilitar esto para conectar con mongodb atlas
    // await mongoose.connect( process.env.DB, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useCreateIndex: true
    // });

    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log("DB conectada");
  } catch (error) {
    console.log(error);
    throw new Error("No se puede conectar a la DB");
  }
};

module.exports = {
  dbConection,
};
