//este controller es distinto a los otros, pq junta los formularios y los mostrar datos de dos tablas (pedidos y detallespedidos)

import {conectar}from '../database/conexion.js';
const bdd=await conectar();

export const peAlta=(pet, resp)=>{
    resp.render('altaPedidos');
}
export const peNuevo=async(pet, resp)=>{
    let id, fped, hped, tip, est, tot, fent, hent, rep, cli;
    id=pet.body.idhtml;
    fped=pet.body.fpedhtml;
    hped=pet.body.hpedhtml;
    tip=pet.body.tiphtml;
    est=pet.body.esthtml;
    tot=pet.body.tothtml;
    fent=pet.body.fenthtml;
    hent=pet.body.henthtml;
    rep=pet.body.rephtml;
    cli=pet.body.clihtml;

    //tabla detallespedido
    let detalle, cant, sub, prod;
    detalle=pet.body.detallehtml;
    cant=pet.body.canthtml;
    sub=pet.body.subhtml;
    prod=pet.body.prodhtml;
    try{
        let altaSQL="INSERT INTO pedidos (idpedido, fecha_pedido, hora_pedido, tipo, estado, total, fecha_entrega, hora_entrega, repartidor_idrepartidor, clientes_idcliente) VALUES ('"+id+"','"+fped+"','"+hped+"','"+tip+"','"+est+"','"+tot+"','"+fent+"','"+hent+"','"+rep+"','"+cli+"');";
        const [registros]=await bdd.query(altaSQL);
        console.log(registros);


        let altaDetallesSQL="INSERT INTO detallespedido (iddetalle, cantidad, subtotal, producto_idproducto, pedidos_idpedido) VALUES ('"+detalle+"','"+cant+"','"+sub+"','"+prod+"','"+id+"');";
        const [registrosDetalles]=await bdd.query(altaDetallesSQL);
        console.log(registrosDetalles);
}catch(error){
    console.log('Error al crear la sentencia insert ${error}');
}
}
export const peMenu=(pet, resp)=>{
    resp.render('pedidos');
}
export const peBaja=(pet, resp)=>{
    resp.render('bajaPedidos');
}
export const peMod=(pet, resp)=>{
    resp.render('modificarPedidos');
}
export const peCons=(pet, resp)=>{
    resp.render('consultaPedidos');
}
export const peTodos=async(pet, resp)=>{
    //resp.render('mostrarTodoPedidos');
    try{
        let mostrarSQL="SELECT idpedido,fecha_pedido,hora_pedido,tipo,estado,total,fecha_entrega,hora_entrega,repartidor_idrepartidor,clientes_idcliente FROM bellaitalia.pedidos Order by idpedido;";
        let mostrarDetallesSQL="SELECT iddetalle,cantidad,subtotal,producto_idproducto,pedidos_idpedido FROM bellaitalia.detallespedido Order by iddetalle;";
        const [registros]=await bdd.query(mostrarSQL);
        const [registrosDetalles]=await bdd.query(mostrarDetallesSQL);
        console.log(registros);
        console.log(registrosDetalles);
        resp.render('mostrarTodoPedidos', {registros, registrosDetalles});
    }catch(error){
        console.log('no se pueden mostrar los datos');
        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
    }
}