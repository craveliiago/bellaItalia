import {catMenu, catAlta, catNuevo, catBaja, catBorrar, /*catMod,*/ catCons, catTodos, catProductos, catBuscar}from '../controller/categoriasController.js';
import express from 'express';

const rCat=express.Router()
rCat.get('/categorias', catMenu)
rCat.get('/categorias/alta', catAlta)
rCat.post('/categorias/nuevo', catNuevo) //ingresar nueva categoria
rCat.get('/categorias/baja', catBaja)
rCat.get('/categorias/baja/:idborrar', catBorrar)
//rCat.get('/categorias/mod', catMod)
rCat.get('/categorias/conulta', catBuscar)
rCat.get('/categorias/todos', catTodos)
rCat.get('/categorias/consulta/:idbuscar', catCons)
rCat.get('/categorias/todos/productos/:idcategoria', catProductos)
export {rCat}