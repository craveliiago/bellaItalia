import {conectar}from '../database/conexion.js';
const bdd=await conectar();

export const peAlta=async (pet, resp)=>{
    try{
        //esta es tabla de clientes
        let mostrarClientesSQL="SELECT idcliente,nombre,apellidos FROM bellaitalia.clientes Order by idcliente;";
        const [registros]=await bdd.query(mostrarClientesSQL);
        console.log(registros);

        //y esta de repartidores
        let mostrarRepartidoresSQL="SELECT idrepartidor,nombre,vehiculo FROM bellaitalia.repartidor Order by idrepartidor;";
        const [registros2]=await bdd.query(mostrarRepartidoresSQL);
        console.log(registros2);
        
        resp.render('altaPedidos', {registros, registros2});
    }catch(error){
        console.log('no se pueden mostrar los datos');
        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
    }

}

export const peDalta=async (pet, resp)=>{
    try{
        let mostrarProductosSQL="SELECT idproducto,nombre,precio FROM bellaitalia.productos Order by idproducto;";
        const [registros]=await bdd.query(mostrarProductosSQL);
        console.log(registros);
        resp.render('altaDetallesPedidos', {registros});
    }catch(error){
        console.log('no se pueden mostrar los datos');
        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
    }
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

    try{
        let altaSQL="INSERT INTO pedidos (idpedido, fecha_pedido, hora_pedido, tipo, estado, total, fecha_entrega, hora_entrega, repartidor_idrepartidor, clientes_idcliente) VALUES ('"+id+"','"+fped+"','"+hped+"','"+tip+"','"+est+"','"+tot+"','"+fent+"','"+hent+"','"+rep+"','"+cli+"');";
        const [registros]=await bdd.query(altaSQL);
        console.log(registros);
        resp.render('altaDetallesPedidos');

    }catch(error){
    console.log('Error al crear la sentencia insert ${error}');
}
}


export const peNuevoDetalles=async(pet, resp)=>{
    let cant, sub, prod, idped;
    cant=pet.body.canthtml;
    sub=pet.body.subhtml;
    prod=pet.body.prodhtml;
    idped=pet.body.idpedhtml;

    try{
        let altaDetallesSQL="INSERT INTO detallespedido (cantidad, subtotal, producto_idproducto, pedidos_idpedido) VALUES ('"+cant+"','"+sub+"','"+prod+"','"+idped+"');";
        const [registrosDetalles]=await bdd.query(altaDetallesSQL);
        console.log(registrosDetalles);
        resp.render('altaDetallesPedidos');

        // volver a mostrar el formulario de detalle pedido.
        // si la persona no quiere mas se tiene que ir al menu de pedidos

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