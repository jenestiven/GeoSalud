const express = require('express');
const router = express.Router();
const getTabla= require('./getTable');
const tabla = new getTabla();

router.get('/', (req, res) => {
  res.redirect('/home');
});

router.get('/login', (req, res) => {
  res.render('login');
});


router.post('/login', (req, res) => {
    let login_data = req.body;

    // Aquí puedes hacer lo que quieras con los datos del login

    res.send("/home");
});

router.get('/home', async (req, res, next) => {
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
