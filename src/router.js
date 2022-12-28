import Cardapiocontroller from "./Controllers/Cardapiocontroller";
import Userscontroller from "./Controllers/Userscontroller";



import { Router } from "express";

const route = new Router();

route.get('/users', Userscontroller.get1)
route.post('/users', Userscontroller.post)
route.put('/users/:_id', Userscontroller.update)
route.get('/estabelecimento', Userscontroller.get)


route.post('/cardapio', Cardapiocontroller.post)
route.put('/cardapio/:_id', Cardapiocontroller.update)
route.delete('/cardapio/:_id', Cardapiocontroller.delete)
route.get('/id', Cardapiocontroller.get)
route.get('/cardapio', Cardapiocontroller.get1)
route.get('/nomerestaurante', Cardapiocontroller.get2)



export default route;