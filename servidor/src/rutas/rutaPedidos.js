import {peMenu, peAlta, peNuevo, peNuevoDetalles, peBaja, peBorrar, /*peMod,*/ peCons, peTodos, peBuscar, peDetallesId}from '../controller/pedidosController.js';
import express from 'express';

const rPed=express.Router()
rPed.get('/pedidos', peMenu)
rPed.get('/pedidos/alta', peAlta)
rPed.post('/pedidos/nuevo', peNuevo) //ingresar el pedido y redireccionar a pantalla ingresar detalles de pedido
rPed.post('/pedidos/detallesnuevo', peNuevoDetalles) //ingresar detalle pedido, despues del primer detalle de pedido, limpia campos para ingresar nuevamente
rPed.get('/pedidos/baja', peBaja)
rPed.get('/pedidos/baja/:idborrar', peBorrar)
//rPed.get('/pedidos/mod', peMod)
rPed.get('/pedidos/consulta', peBuscar)
rPed.get('/pedidos/todos', peTodos)
rPed.get('/pedidos/consulta/:idbuscar', peCons)
rPed.get('/pedidos/todos/detalles/:idpedido', peDetallesId)
export {rPed}