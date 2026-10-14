import {conectar}from '../database/conexion.js';
const bdd=await conectar();

export const rAlta=(pet, resp)=>{
    resp.render('altaRepartidor');
}
export const rNuevo=async(pet, resp)=>{
    let id, nom, ape, tel, veh;
    id=pet.body.idhtml;
    nom=pet.body.nomhtml;
    ape=pet.body.apehtml;
    tel=pet.body.telhtml;
    veh=pet.body.vehhtml;
    try{
        let altaSQL="INSERT INTO repartidor (idrepartidor, nombre, apellidos, telefono, vehiculo) VALUES ('"+id+"','"+nom+"','"+ape+"','"+tel+"','"+veh+"');";
        const [registros]=await bdd.query(altaSQL);
        console.log(registros);
        resp.render('altaRepartidor');
}catch(error){
    console.log('Error al crear la sentencia insert ${error}');
}
}
export const rMenu=(pet, resp)=>{
    resp.render('repartidor');
}
export const rBaja=(pet, resp)=>{
    resp.render('bajaRepartidor');
}
export const rMod=(pet, resp)=>{
    resp.render('modificarRepartidor');
}
export const rCons=(pet, resp)=>{
    resp.render('consultaRepartidor');
}
export const rTodos=async(pet, resp)=>{
    //resp.render('mostrarTodoRepartidor');
    try{
        let mostrarSQL="SELECT idrepartidor,nombre,apellidos,telefono,vehiculo FROM bellaitalia.repartidor Order by idrepartidor;";
        const [registros]=await bdd.query(mostrarSQL);
        console.log(registros);
        resp.render('mostrarTodoRepartidor', {registros});
    }catch(error){
        console.log('no se pueden mostrar los datos');
        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
    }
}