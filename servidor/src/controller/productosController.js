import {conectar}from '../database/conexion.js';
const bdd=await conectar();

export const pAlta=(pet, resp)=>{
    resp.render('altaProductos');
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
        resp.render('altaProductos');
}catch(error){
    console.log('Error al crear la sentencia insert ${error}');
}
}
export const pMenu=(pet, resp)=>{
    resp.render('productos');
}
export const pBaja=(pet, resp)=>{
    resp.render('bajaProductos');
}
export const pMod=(pet, resp)=>{
    resp.render('modificarProductos');
}
export const pCons=(pet, resp)=>{
    resp.render('consultaProductos');
}
export const pTodos=async(pet, resp)=>{
    //resp.render('mostrarTodoProductos');
    try{
        let mostrarSQL="SELECT idproducto,nombre,descripcion,precio,categoria_idcategoria FROM bellaitalia.productos Order by idproducto;";
        const [registros]=await bdd.query(mostrarSQL);
        console.log(registros);
        resp.render('mostrarTodoProductos', {registros});
    }catch(error){
        console.log('no se pueden mostrar los datos');
        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
    }
}