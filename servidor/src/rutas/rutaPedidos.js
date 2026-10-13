import {peMenu, peAlta, peNuevo, /*peBaja, peMod, peCons,*/ peTodos}from '../controller/pedidosController.js';
import express from 'express';

const rPed=express.Router()
rPed.get('/pedidos', peMenu)
rPed.get('/pedidos/alta', peAlta)
rPed.post('/pedidos/nuevo', peNuevo) //ingresar nuevo pedido
/*rPed.get('/pedidos/baja', peBaja)
rPed.get('/pedidos/mod', peMod)
rPed.get('/pedidos/cons', peCons)*/
rPed.get('/pedidos/todos', peTodos)
export {rPed}