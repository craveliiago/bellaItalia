import {pMenu, pAlta, pNuevo, pBaja, pBorrar, /*pMod,*/ pCons, pTodos, pBuscar}from '../controller/productosController.js';
import express from 'express';

const rPro=express.Router()
rPro.get('/productos', pMenu)
rPro.get('/productos/alta', pAlta)
rPro.post('/productos/nuevo', pNuevo) //ingresar nuevo producto
rPro.get('/productos/baja', pBaja)
rPro.get('/productos/baja/:idborrar', pBorrar)
//rPro.get('/productos/mod', pMod)
rPro.get('/productos/consulta', pBuscar)
rPro.get('/productos/todos', pTodos)
rPro.get('/productos/consulta/:idbuscar', pCons)
export {rPro}