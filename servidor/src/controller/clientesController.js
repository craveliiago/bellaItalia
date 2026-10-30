import {conectar}from '../database/conexion.js';
const bdd=await conectar();

export const cAlta=(pet, resp)=>{
    resp.render('altaClientes');
}

export const cNuevo=async(pet, resp)=>{
    let id, nom, ape, dir, tel, cor;
    id=pet.body.idhtml;
    nom=pet.body.nomhtml;
    ape=pet.body.apehtml;
    dir=pet.body.dirhtml;
    tel=pet.body.telhtml;
    cor=pet.body.corhtml;
    try{
        let altaSQL="INSERT INTO clientes (idcliente, nombre, apellidos, direccion, telefono, correo) VALUES ('"+id+"','"+nom+"','"+ape+"','"+dir+"','"+tel+"','"+cor+"');";
        const [registros]=await bdd.query(altaSQL);
        console.log(registros);
        resp.render('altaClientes');
}catch(error){

    console.log('Error al crear la sentencia insert ${error}');
}
}

export const cMenu=(pet, resp)=>{
    resp.render('clientes');
}
export const cBaja= async(pet, resp)=>{
    try{
        resp.render('bajaClientes');
    }catch(error){
        console.log(error);
        resp.status(500).send("No se pudo borrar el cliente");
    }
}

export const cBorrar=async(pet, resp)=>{
    let idborrar=pet.params.idborrar;

    try{
        let borrarSQL="DELETE FROM clientes WHERE idcliente= '"+idborrar+"';"; 
        const [registros]=await bdd.query(borrarSQL, [idborrar]);
        console.log(registros);
        resp.redirect('../baja'); //aca es redirect pq asi se ven estilos sin hacer otro ejs
        console.log('Error al crear la sentencia delete ${error}');
    }catch(error){
        console.log('Error al crear la sentencia delete ${error}');
        resp.status(500).send("No se pudo borrar el cliente");
    }
}

export const cMod=(pet, resp)=>{
    resp.render('modificarClientes');
}

export const cBuscar=async(pet, resp)=>{
    try{
        resp.render('consultaClientes');
    }catch(error){

        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
    } 
    
}

export const cCons=async(pet, resp)=>{
    try{
        let idbuscar=pet.params.idbuscar;
        const consultaSQL="SELECT idcliente,nombre,apellidos,direccion,telefono,correo FROM bellaitalia.clientes WHERE idcliente='"+idbuscar+"';";
        const [registro]=await bdd.query(consultaSQL);
        console.log(registro);
        resp.render('consultaClientes', {registro});
    }catch(error){
        console.log('no se pueden mostrar los datos');
        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
    } 
    
}

export const cTodos=async(pet, resp)=>{

    try{
        let mostrarSQL="SELECT idcliente,nombre,apellidos,direccion,telefono,correo FROM bellaitalia.clientes Order by idcliente;";
        const [registros]=await bdd.query(mostrarSQL);
        console.log(registros);
        resp.render('mostrarTodoClientes', {registros});
    }catch(error){
        console.log('no se pueden mostrar los datos');
        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
    }
}

export const cPedidos=async(pet, resp)=>{
    let idcliente=pet.params.idcliente;
    try{
        let mostrarClientePedidoSQL="SELECT idpedido,fecha_pedido,hora_pedido,tipo,estado,total,fecha_entrega,hora_entrega,repartidor.nombre AS nombreRep,clientes.nombre AS nombreCli FROM bellaitalia.pedidos INNER JOIN bellaitalia.clientes ON clientes_idcliente = clientes.idcliente INNER JOIN bellaitalia.repartidor ON repartidor_idrepartidor = repartidor.idrepartidor WHERE clientes_idcliente='"+idcliente+"';";
        const [registroPedidosId]=await bdd.query(mostrarClientePedidoSQL);
        console.log(registroPedidosId);
        resp.render('mostrarClientePedido', {registroPedidosId});
    }catch(error){
        console.log('no se pueden mostrar los datos');
        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
    } 
}