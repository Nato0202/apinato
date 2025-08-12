import cursoController from './controller/cursoController.js'
//import alunoController from './controller/alunoController.js'


export function adicionarRotas(api) {
  api.use(cursoController);
  // api.use(alunoController);
}