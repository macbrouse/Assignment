const {Sequelize}=require('sequelize')

const db = new Sequelize({
    dialect:  'sqlite' ,
    storage: './assignmentdb.db'
    })
    
const COL_ID_DEF = {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
}
const COL_TITLE_DEF = {
    type: Sequelize.DataTypes.STRING(100),
    allowNull: false
}

const COL_CATEGORY_DEF = {
    type: Sequelize.DataTypes.STRING(100),
    allowNull: false
}

const posts = db.define('posts', {
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
    },
    category:COL_CATEGORY_DEF
})

module.exports={db,posts}