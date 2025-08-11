import { connection } from "./connection.js";


export async function listarTurma() {
  const comando = `
    SELECT *
      FROM turma
  `

  const [registros] = await connection.query(comando)
  return registros;
}


export async function adicionarTurma(novoTm) {
  const comando = `
    INSERT INTO turma (nm_turma, ds_curso, nr_ano_letivo, qnt_capacidade, bt_ativo, dt_inclusao)
               values (?, ?, ?, ?, ?, ?);
  `

  const [info] = await connection.query(comando, [
    novoTm.nm_turma, 
    novoTm.ds_curso, 
    novoTm.nr_ano_letivo, 
    novoTm.qnt_capacidade, 
    novoTm.bt_ativo, 
    novoTm.dt_inclusao])
  return info.insertId;
}