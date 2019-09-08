import Sequelize from 'sequelize';
import mongoose from 'mongoose';

// importa às config da conexao
import databaseConfig from '../config/database';

// importar os models
import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    // Pecorre cada model, chamando o método init do model e passando a conexão para ele
    models
      .map(model => model.init(this.connection))
      // Chama o método assiciate caso exista passando todos os models
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      process.env.MONGO_URL,
      // userFindAndModify é uma configuração para quando tiver procurando e modificando
      { useNewUrlParser: true, useFindAndModify: true },
      () => {
        console.log('MongoDB connected');
      }
    );
  }
}

export default new Database();
