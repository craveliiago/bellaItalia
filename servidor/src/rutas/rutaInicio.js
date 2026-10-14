import express from 'express';
import { rCli } from './rutaClientes.js';
import { rRep } from './rutaRepartidor.js';
import { rCat } from './rutaCategorias.js';
import { rPro } from './rutaProductos.js';
import { rPed } from './rutaPedidos.js';

const rInicio=express.Router();
rInicio.use(rCli);
rInicio.use(rRep);
rInicio.use(rCat);
rInicio.use(rPro);
rInicio.use(rPed);

rInicio.get('/', (pet, resp)=>{
    resp.render('index');
});
export{rInicio};