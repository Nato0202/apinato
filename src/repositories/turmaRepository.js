import { connection } from "./connection.js";

export async function consultarTurma(id) {
  const comando = `
    SELECT *
    FROM turma
    WHERE id = ?
  `
  const [registros] = await connection.query(comando, [id]);
  return registros;
}

export async function filtrarTurma(nome) {
  const comando = `
    SELECT *
    FROM turma
    WHERE nome LIKE ?
    `
  const [registros] = await connection.query(comando, [`%${nome}%`]);
  return registros;
}

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

export async function alterar(id, novosDadosTurma) {
  const comando = `
    UPDATE turma
    SET nm_turma = ?, 
    ds_curso = ?, 
    nr_ano_letivo = ?, 
    qnt_capacidade = ?, 
    bt_ativo = ?, 
    dt_inclusao = ?
    WHERE id = ?;
  `

  await connection.query(comando, [
    novosDadosTurma.nm_turma,
    novosDadosTurma.ds_curso,
    novosDadosTurma.nr_ano_letivo,
    novosDadosTurma.qnt_capacidade,
    novosDadosTurma.bt_ativo,
    novosDadosTurma.dt_inclusao,
    id]);
}

export async function removerTurma(id) {
  const comando = `
    DELETE FROM turma
          WHERE id = ?
  `

  const [info] = await connection.query(comando, [id]);
}
