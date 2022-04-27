const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/paletas-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb Connect!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDb, erro: ${error}`),
    );
};

module.exports = connectToDatabase;
