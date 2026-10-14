import {peMenu, peAlta, peNuevo, peNuevoDetalles, /*peBaja, peMod, peCons,*/ peTodos}from '../controller/pedidosController.js';
import express from 'express';

const rPed=express.Router()
rPed.get('/pedidos', peMenu)
rPed.get('/pedidos/alta', peAlta)
rPed.post('/pedidos/nuevo', peNuevo) //ingresar el pedido y redireccionar a pantalla ingresar detalles de pedido
rPed.post('/pedidos/detallesnuevo', peNuevoDetalles) //ingresar detalle pedido, despues del primer detalle de pedido, redireccionar a pantalla ingresar detalle
/*rPed.get('/pedidos/baja', peBaja)
rPed.get('/pedidos/mod', peMod)
rPed.get('/pedidos/cons', peCons)*/
rPed.get('/pedidos/todos', peTodos)
export {rPed}