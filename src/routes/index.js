import { Router } from "express";
import bodyParser from "body-parser";
const router=Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.get('/', (req, res) => res.render('index' ,{title: 'Inicio'}));
router.get('/about', (req, res) => res.render('SobreNosotros' ,{title: 'Sobre Nosotros'}));
router.get('/carrito', (req, res) => res.render('Carrito' ,{title: 'Carrito'}));

export default router;
