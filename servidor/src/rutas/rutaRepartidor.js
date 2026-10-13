import {rMenu, rAlta, rNuevo, /*rBaja, rMod, rCons,*/ rTodos}from '../controller/repartidorController.js';
import express from 'express';

const rRep=express.Router()
rRep.get('/repartidor', rMenu)
rRep.get('/repartidor/alta', rAlta)
rRep.post('/repartidor/nuevo', rNuevo) //ingresar nuevo repartidor
/*rRep.get('/repartidor/baja', rBaja)
rRep.get('/repartidor/mod', rMod)
rRep.get('/repartidor/cons', rCons)*/
rRep.get('/repartidor/todos', rTodos)
export {rRep}