const db=require('../utils/db');
const table='bill';
module.exports={
    getLastestBillID:async function(){
        const query=` SELECT MAX(billID) as billID from ${table}`;
        const result= await db.getLatestID(query);
        console.log(result);
        return result[0];
    },
    addBill:function(Bill){
        return db.insert(table,Bill);

    },
    addBillInfo:function(billInfo){
        return db.insert('billInfo',billInfo);

    }
    
}