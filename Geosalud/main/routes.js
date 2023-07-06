const express = require('express');
const router = express.Router();
const getTabla= require('./getTable');
const tabla = new getTabla();

router.get('/', async (req, res, next) => {
    try {
      const dataIps = await tabla.getTabla('ips');
      const dataEps = await tabla.getTabla('eps');
      const dataDispensarios = await tabla.getTabla('dispensarios_de_medicamentos');
      const dataServicios = await tabla.getTabla('servicios');
      res.render('index', { tablaIps: dataIps, tablaEps: dataEps, tablaDispensarios: dataDispensarios, tablaServicios: dataServicios });
    } catch (err) {
      console.error(err);
      next(err);
    }
  });
  
module.exports = router;