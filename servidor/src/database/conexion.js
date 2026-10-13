import mysql from 'mysql2/promise';
import colors from "colors";
export async function conectar(){
    try{
        const bdd=await mysql.createPool({
            host:"localhost",
            database:"bellaitalia",
            user:"root",
            password:''
        })
        console.log('conectado'.green);
        return bdd;
    }
    catch(error){
        console.log(`error, base no conectada`.red);
    }
}