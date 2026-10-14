import {peMenu, peAlta, peDalta, peNuevo, peNuevoDetalles, /*peBaja, peMod, peCons,*/ peTodos}from '../controller/pedidosController.js';
import express from 'express';

const rPed=express.Router()
rPed.get('/pedidos', peMenu)
rPed.get('/pedidos/alta', peAlta)
rPed.get('/pedidos/detalles', peDalta) //se redirecciona a este cuando se ingresa datos en tabla pedido
rPed.post('/pedidos/nuevo', peNuevo) //ingresar nuevo pedido
rPed.post('/pedidos/detallesnuevo', peNuevoDetalles) //ingresar nuevo detalle pedido
/*rPed.get('/pedidos/baja', peBaja)
rPed.get('/pedidos/mod', peMod)
rPed.get('/pedidos/cons', peCons)*/
rPed.get('/pedidos/todos', peTodos)
export {rPed}