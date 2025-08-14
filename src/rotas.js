import carrosController from './controller/carros.js'
import crushController from './controller/crush.js'
import desenhoController from './controller/desenho.js'
import estadosController from './controller/estados.js'
import funcionarioController from './controller/funcionario.js'
import hospitalController from './controller/hospital.js'
import mercadoController from './controller/mercado.js'
import pizzasController from './controller/pizzas.js'
import roupaController from './controller/roupas.js'
import turmaController from './controller/turma.js'
import viagemController from './controller/viagem.js'

//import alunoController from './controller/alunoController.js'


export function adicionarRotas(api) {
  api.use(carrosController);
  api.use(crushController);
  api.use(desenhoController);
  api.use(estadosController);
  api.use(funcionarioController);
  api.use(hospitalController);
  api.use(mercadoController);
  api.use(pizzasController);
  api.use(roupaController);
  api.use(turmaController);
  api.use(viagemController);
  // api.use(carrpsController);
}