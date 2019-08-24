import Sequelize from 'sequelize';

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
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    // Pecorre cada model, chamando o método init do model e passando a conexão para ele
    models
      .map(model => model.init(this.connection))
      // Chama o método assiciate caso exista passando todos os models
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
