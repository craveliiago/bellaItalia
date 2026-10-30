import {conectar}from '../database/conexion.js';
const bdd=await conectar();

//import Swal from 'sweetalert2'

/* estas lineas son necesarias para usar el aler, desde la pagina sweetalert2 

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

import Swal from 'sweetalert2'

o

const Swal = require('sweetalert2')

Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
});

*/



export const pAlta=async (pet, resp)=>{
    try{
        //mostrar tabla de categorias en la pantalla ingresar productos
        let mostrarCategoriasSQL="SELECT idcategoria,nombre FROM bellaitalia.categorias Order by idcategoria;";
        const [registros2]=await bdd.query(mostrarCategoriasSQL);
        console.log(registros2);
        resp.render('altaProductos', {registros2});
    }catch(error){
        console.log('no se pueden mostrar los datos');
        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
    }
}

export const pNuevo=async(pet, resp)=>{
    let id, nom, des, pre, cat;
    id=pet.body.idhtml;
    nom=pet.body.nomhtml;
    des=pet.body.deshtml;
    pre=pet.body.prehtml;
    cat=pet.body.cathtml;

    try{
        let altaSQL="INSERT INTO productos (idproducto, nombre, descripcion, precio, categoria_idcategoria) VALUES ('"+id+"','"+nom+"','"+des+"','"+pre+"','"+cat+"');";
        const [registros]=await bdd.query(altaSQL);
        console.log(registros);

        let mostrarCategoriasSQL="SELECT idcategoria,nombre FROM bellaitalia.categorias Order by idcategoria;";
        const [registros2]=await bdd.query(mostrarCategoriasSQL);
        console.log(registros2);

        resp.render('altaProductos', {registros, registros2});
}catch(error){


    console.log('Error al crear la sentencia insert ${error}');


}
}
export const pMenu=(pet, resp)=>{
    resp.render('productos');
}

export const pBaja= async(pet, resp)=>{
    try{
        resp.render('bajaProductos');
    }catch(error){
        console.log(error);
        resp.status(500).send("No se pudo borrar el producto");
    }
}

export const pBorrar=async(pet, resp)=>{
    let idborrar=pet.params.idborrar;

    try{
        let borrarSQL="DELETE FROM productos WHERE idproducto= '"+idborrar+"';"; 
        const [registros]=await bdd.query(borrarSQL, [idborrar]);
        console.log(registros);
        resp.redirect('../baja'); //aca es redirect pq asi se ven estilos sin hacer otro ejs
    }catch(error){
        console.log('Error al crear la sentencia delete ${error}');
        resp.status(500).send("No se pudo borrar el producto");
    }
}


export const pMod=(pet, resp)=>{
    resp.render('modificarProductos');
}



export const pBuscar=async(pet, resp)=>{
    try{
        resp.render('consultaProductos');
    }catch(error){

        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
    } 
    
}

export const pCons=async(pet, resp)=>{
    try{
        let idbuscar=pet.params.idbuscar;
        const consultaSQL="SELECT idproducto,productos.nombre,descripcion,precio,categorias.nombre AS nombreCat FROM bellaitalia.productos INNER JOIN bellaitalia.categorias ON categoria_idcategoria = categorias.idcategoria WHERE idproducto='"+idbuscar+"';";
        const [registro]=await bdd.query(consultaSQL);
        console.log(registro);
        resp.render('consultaProductos', {registro});
    }catch(error){
        console.log('no se pueden mostrar los datos');
        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
    } 
    
}

export const pTodos=async(pet, resp)=>{
    //resp.render('mostrarTodoProductos');
    try{
        let mostrarSQL="SELECT idproducto,productos.nombre,descripcion,precio,categorias.nombre AS nombreCat FROM bellaitalia.productos INNER JOIN bellaitalia.categorias ON categoria_idcategoria = categorias.idcategoria Order by idproducto;";
        const [registros]=await bdd.query(mostrarSQL);
        console.log(registros);
        resp.render('mostrarTodoProductos', {registros});
    }catch(error){
        console.log('no se pueden mostrar los datos');
        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
    }
}