import {rMenu, rAlta, rNuevo, rBaja, rBorrar, /*rMod,*/ rCons, rTodos, rBuscar, rEnviados}from '../controller/repartidorController.js';
import express from 'express';

const rRep=express.Router()
rRep.get('/repartidor', rMenu)
rRep.get('/repartidor/alta', rAlta)
rRep.post('/repartidor/nuevo', rNuevo) //ingresar nuevo repartidor
rRep.get('/repartidor/baja', rBaja)
rRep.get('/repartidor/baja/:idborrar', rBorrar)
//rRep.get('/repartidor/mod', rMod)
rRep.get('/repartidor/consulta', rBuscar)
rRep.get('/repartidor/todos', rTodos)
rRep.get('/repartidor/consulta/:idbuscar', rCons)
rRep.get('/repartidor/todos/pedidos/:idrepartidor', rEnviados)
export {rRep}