SELECT * FROM bellaitalia.pedidos;INSERT INTO `bellaitalia`.`pedidos`
(`idpedido`,
`fecha_pedido`,
`hora_pedido`,
`tipo`,
`estado`,
`total`,
`fecha_entrega`,
`hora_entrega`,
`repartidor_idrepartidor`,
`clientes_idcliente`)
VALUES
(1, '2026/10/1', '14:30:00', "A domicilio", "Entregado", '22000', '2026/10/1', '15:00:00', 1, 2),
(2, '2026/10/4', '20:10:00', "Para llevar", "En preparacion", '14400', '2026/10/4', '20:50:00', NULL, 3),
(3, '2026/10/10', '21:10:00', "En el local", "Listo", '12000', '2026/10/10', '21:30:00', NULL, 2);
