const db=require('../utils/db');
const table='product';
module.exports={
    getAll:function(){
        return db.getAll(table);
    },
    getByID:function(id){
        const condition ={
            proID:+id
        }
        return db.getByID(table,condition);
    },
    getNProExcepID:function(id,number){
        const condition=[+id,+number];
        const sql = `SELECT * FROM ${table} where proID !=? limit ?`;
        return db.getAllExcept(sql,table,condition);
    }
}