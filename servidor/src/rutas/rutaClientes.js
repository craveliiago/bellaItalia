import {cMenu, cAlta, cNuevo, cBaja, cBorrar,/* cMod,*/ cCons, cTodos, cBuscar, cPedidos}from '../controller/clientesController.js';
import express from 'express';

const rCli=express.Router()
rCli.get('/clientes', cMenu)
rCli.get('/clientes/alta', cAlta)
rCli.post('/clientes/nuevo', cNuevo) //ingresar nuevo cliente
rCli.get('/clientes/baja', cBaja)
rCli.get('/clientes/baja/:idborrar', cBorrar) //borrar cliente
/*rCli.get('/clientes/modificar', cMod)*/
rCli.get('/clientes/consulta', cBuscar) // la presentacion del formulario
rCli.get('/clientes/todos', cTodos)
rCli.get('/clientes/consulta/:idbuscar', cCons) // toma el valor a buscar con el select
rCli.get('/clientes/todos/pedidos/:idcliente', cPedidos)
export {rCli}

