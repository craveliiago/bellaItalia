import {peMenu, peAlta, peNuevo, peNuevoDetalles, /*peBaja, peMod, peCons,*/ peTodos, peDetallesId}from '../controller/pedidosController.js';
import express from 'express';

const rPed=express.Router()
rPed.get('/pedidos', peMenu)
rPed.get('/pedidos/alta', peAlta)
rPed.post('/pedidos/nuevo', peNuevo) //ingresar el pedido y redireccionar a pantalla ingresar detalles de pedido
rPed.post('/pedidos/detallesnuevo', peNuevoDetalles) //ingresar detalle pedido, despues del primer detalle de pedido, limpia campos para ingresar nuevamente
/*rPed.get('/pedidos/baja', peBaja)
rPed.get('/pedidos/mod', peMod)
rPed.get('/pedidos/cons', peCons)*/
rPed.get('/pedidos/todos', peTodos)
rPed.get('/pedidos/todos/detalles/:idpedido', peDetallesId)
export {rPed}