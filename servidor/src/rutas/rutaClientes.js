import {cMenu, cAlta, cNuevo, /*cBaja, cMod,*/ cCons, cTodos}from '../controller/clientesController.js';
import express from 'express';

const rCli=express.Router()
rCli.get('/clientes', cMenu)
rCli.get('/clientes/alta', cAlta)
rCli.post('/clientes/nuevo', cNuevo) //ingresar nuevo cliente
/*rCli.get('/clientes/baja', cBaja)
rCli.get('/clientes/modificar', cMod)*/
rCli.get('/clientes/consulta', cCons)
rCli.get('/clientes/todos', cTodos)
export {rCli}