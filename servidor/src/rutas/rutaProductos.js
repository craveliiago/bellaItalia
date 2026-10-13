import {pMenu, pAlta, pNuevo, /*pBaja, pMod, pCons,*/ pTodos}from '../controller/productosController.js';
import express from 'express';

const rPro=express.Router()
rPro.get('/productos', pMenu)
rPro.get('/productos/alta', pAlta)
rPro.post('/productos/nuevo', pNuevo) //ingresar nuevo producto
/*rPro.get('/productos/baja', pBaja)
rPro.get('/productos/mod', pMod)
rPro.get('/productos/cons', pCons)*/
rPro.get('/productos/todos', pTodos)
export {rPro}