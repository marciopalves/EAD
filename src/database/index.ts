import { Sequelize } from 'sequelize'

export const database = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'ead_development',
  username: 'postgres',
  password: '123456',
	define: {
    underscored: true
  }
})