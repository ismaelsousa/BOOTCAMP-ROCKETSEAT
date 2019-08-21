import Sequelize from 'sequelize';

// importa às config da conexao
import databaseConfig from '../config/database';

// importar os models
import User from '../app/models/User';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    // Pecorre cada model, chamando o método init do model e passando a conexão para ele
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
