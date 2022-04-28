const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb+srv://root:admin@api-elgeladon.fervp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb Connect!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDb, erro: ${error}`),
    );
};

module.exports = connectToDatabase;
