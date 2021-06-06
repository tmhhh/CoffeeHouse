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
        return db.getAllExcept(sql,condition);
    },
    search:function(info){
        const condition=info;
        const query=`SELECT * FROM ${table} WHERE proID LIKE "%`+info +`%" OR proName LIKE "%`+info +`%" `;
        console.log(query);
        return db.search(query);
    }
}