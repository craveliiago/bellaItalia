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

        //muestra la tabla productos (pantalla q se muestra dsp de ingresar pedido)
        let mostrarProductosSQL="SELECT idproducto,nombre,precio FROM bellaitalia.productos Order by idproducto;";
        const [registros2]=await bdd.query(mostrarProductosSQL);
        console.log(registros2);

        resp.render('altaDetallesPedidos', {registros, registros2});
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
        const [registros]=await bdd.query(altaDetallesSQL);
        console.log(registros);

        //muestra la tabla productos (pantalla q se muestra dsp de ingresar primer detalles de pedido)
        let mostrarProductosSQL="SELECT idproducto,nombre,precio FROM bellaitalia.productos Order by idproducto;";
        const [registros2]=await bdd.query(mostrarProductosSQL);
        console.log(registros2);
        
        resp.render('altaDetallesPedidos', {registros, registros2});

        // volver a mostrar el formulario de detalle pedido.
        // si la persona no quiere mas se tiene que ir al menu de pedidos

    }catch(error){
        console.log('Error al crear la sentencia insert ${error}');
    }
}


export const peMenu=(pet, resp)=>{
    resp.render('pedidos');
}

export const peBaja= async(pet, resp)=>{
    try{
        resp.render('bajaPedidos');
    }catch(error){
        console.log(error);
        resp.status(500).send("No se pudo borrar el pedido");
    }
}

export const peBorrar=async(pet, resp)=>{
    let idborrar=pet.params.idborrar;

    try{
        let borrarSQL="DELETE FROM pedidos WHERE idpedido= '"+idborrar+"';"; 
        const [registros]=await bdd.query(borrarSQL, [idborrar]);
        console.log(registros);
        resp.redirect('../baja'); //aca es redirect pq asi se ven estilos sin hacer otro ejs
    }catch(error){
        console.log('Error al crear la sentencia delete ${error}');
        resp.status(500).send("No se pudo borrar el pedido");
    }
}


export const peMod=(pet, resp)=>{
    resp.render('modificarPedidos');
}


export const peBuscar=async(pet, resp)=>{
    try{
        resp.render('consultaPedidos');
    }catch(error){

        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
    } 
    
}

export const peCons=async(pet, resp)=>{
    try{
        let idbuscar=pet.params.idbuscar;
        const consultaSQL="SELECT idpedido,fecha_pedido,hora_pedido,tipo,estado,total,fecha_entrega,hora_entrega,repartidor_idrepartidor,clientes_idcliente FROM bellaitalia.pedidos WHERE idpedido='"+idbuscar+"';";
        const [registro]=await bdd.query(consultaSQL);
        console.log(registro);
        resp.render('consultaPedidos', {registro});
    }catch(error){
        console.log('no se pueden mostrar los datos');
        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
    } 
    
}



export const peTodos=async(pet, resp)=>{
    //resp.render('mostrarTodoPedidos');
    try{
        let mostrarSQL="SELECT idpedido,fecha_pedido,hora_pedido,tipo,estado,total,fecha_entrega,hora_entrega,repartidor_idrepartidor,clientes_idcliente FROM bellaitalia.pedidos Order by idpedido;";
        const [registros]=await bdd.query(mostrarSQL);
        console.log(registros);
        resp.render('mostrarTodoPedidos', {registros});
    }catch(error){
        console.log('no se pueden mostrar los datos');
        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
    }
}

export const peDetallesId=async(pet, resp)=>{ //se accede a esta func. dsp de hacer click en el id del pedido en tabla pedidos
    let idpedido=pet.params.idpedido;
    try{
        let mostrarDetallesIdSQL="SELECT iddetalle,cantidad,subtotal,producto_idproducto,pedidos_idpedido FROM bellaitalia.detallespedido WHERE pedidos_idpedido='"+idpedido+"' Order by iddetalle;";
        const [registrosDetallesId]=await bdd.query(mostrarDetallesIdSQL);
        console.log(registrosDetallesId);
        resp.render('mostrarDetallesPedido', {registrosDetallesId});
    }catch(error){
        console.log('no se pueden mostrar los datos');
        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
    } 
}