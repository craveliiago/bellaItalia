import {conectar}from '../database/conexion.js';
const bdd=await conectar();

export const catAlta=(pet, resp)=>{
    resp.render('altaCategorias');
}
export const catNuevo=async(pet, resp)=>{
    let id, nom;
    id=pet.body.idhtml;
    nom=pet.body.nomhtml;
    try{
        let altaSQL="INSERT INTO categorias (idcategoria, nombre) VALUES ('"+id+"','"+nom+"');";
        const [registros]=await bdd.query(altaSQL);
        console.log(registros);
        resp.render('altaCategorias');
}catch(error){
    console.log('Error al crear la sentencia insert ${error}');
}
}
export const catMenu=(pet, resp)=>{
    resp.render('categorias');
}
export const catvBaja=(pet, resp)=>{
    resp.render('bajaCategorias');
}
export const catMod=(pet, resp)=>{
    resp.render('modificarCategorias');
}


export const catBuscar=async(pet, resp)=>{
    try{
        resp.render('consultaCategorias');
    }catch(error){

        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
    } 
    
}

export const catCons=async(pet, resp)=>{
    try{
        let idbuscar=pet.params.idbuscar;
        const consultaSQL="SELECT idcategoria,nombre FROM bellaitalia.categorias WHERE idcategoria='"+idbuscar+"';";
        const [registro]=await bdd.query(consultaSQL);
        console.log(registro);
        resp.render('consultaCategorias', {registro});
    }catch(error){
        console.log('no se pueden mostrar los datos');
        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
    } 
    
}




export const catTodos=async(pet, resp)=>{
    //resp.render('mostrarTodoCategorias');
    try{
        let mostrarSQL="SELECT idcategoria,nombre FROM bellaitalia.categorias Order by idcategoria;";
        const [registros]=await bdd.query(mostrarSQL);
        console.log(registros);
        resp.render('mostrarTodoCategorias', {registros});
    }catch(error){
        console.log('no se pueden mostrar los datos');
        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
    }
}

export const catProductos=async(pet, resp)=>{
    let idcategoria=pet.params.idcategoria;
    try{
        let mostrarCategoriasProductoSQL="SELECT idproducto,nombre,descripcion,precio,categoria_idcategoria FROM bellaitalia.productos WHERE categoria_idcategoria='"+idcategoria+"' Order by idproducto;";
        const [registrosProductosId]=await bdd.query(mostrarCategoriasProductoSQL);
        console.log(registrosProductosId);
        resp.render('mostrarCategoriasProductos', {registrosProductosId});
    }catch(error){
        console.log('no se pueden mostrar los datos');
        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
    } 
}