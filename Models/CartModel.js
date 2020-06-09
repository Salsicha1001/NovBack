const db = require('../Conect/conection')

const Cart = db.sql.define('CART',{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
      },
      IDOS:{
        type: db.Sequelize.INTEGER,
        allowNull: false,
        references: {      
          model: 'ordemServices',
          key: 'id'
        }
      },
      NOME:{
          type:db.Sequelize.STRING
      },
      PRECODEVENDA:{
          type:db.Sequelize.DOUBLE
      },
      totalPrice:{
          type:db.Sequelize.DOUBLE
      },
      totalQtd:{
          type:db.Sequelize.INTEGER
      },
      CODVERIF:{
        type:db.Sequelize.INTEGER
    }  ,
    GANHOFUN:{
      type:db.Sequelize.DOUBLE
  },
  LUCRO:{
          type:db.Sequelize.DOUBLE
      },
    });
    
  //Cart.sync({})
    module.exports = Cart