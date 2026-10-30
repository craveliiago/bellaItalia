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


export const rBaja= async(pet, resp)=>{
    try{
        resp.render('bajaRepartidor');
    }catch(error){
        console.log(error);
        resp.status(500).send("No se pudo borrar el repartidor");
    }
}

export const rBorrar=async(pet, resp)=>{
    let idborrar=pet.params.idborrar;

    try{
        let borrarSQL="DELETE FROM repartidor WHERE idrepartidor= '"+idborrar+"';"; 
        const [registros]=await bdd.query(borrarSQL, [idborrar]);
        console.log(registros);
        resp.redirect('../baja'); //aca es redirect pq asi se ven estilos sin hacer otro ejs
    }catch(error){
        console.log('Error al crear la sentencia delete ${error}');
        resp.status(500).send("No se pudo borrar el repartidor");
    }
}


export const rMod=(pet, resp)=>{
    resp.render('modificarRepartidor');
}


export const rBuscar=async(pet, resp)=>{
    try{
        resp.render('consultaRepartidor');
    }catch(error){

        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
    } 
    
}


export const rCons=async(pet, resp)=>{
    try{
        let idbuscar=pet.params.idbuscar;
        const consultaSQL="SELECT idrepartidor,nombre,apellidos,telefono,vehiculo FROM bellaitalia.repartidor WHERE idrepartidor='"+idbuscar+"';";
        const [registro]=await bdd.query(consultaSQL);
        console.log(registro);
        resp.render('consultaRepartidor', {registro});
    }catch(error){
        console.log('no se pueden mostrar los datos');
        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
    } 
    
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