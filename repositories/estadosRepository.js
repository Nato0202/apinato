import { connection } from "./connection.js";

export async function consultarEstados(id) {
  const comando = `
    SELECT *
    FROM estados
    WHERE id = ?
  `
  const [resultado] = await connection.execute(comando, [id])
  return resultado[0];
}

export async function filtrarEstados(nome) {
  const comando = `
    SELECT *
    FROM estados
    WHERE nm_estado LIKE ?
    `
  const [resultado] = await connection.execute(comando, ['%' + nome + '%']);
  return resultado;
}

export async function listarEstados() {
  const comando = `
    SELECT *
      FROM estados
  `

  const [registros] = await connection.query(comando)
  return registros;
}

export async function adicionarEstados(novoEt) {
  const comando = `
    INSERT INTO estados (nm_estado, ddd, qntd_populacao, sigla, naturalidade, dt_fundacao)
               values (?, ?, ?, ?, ?, ?);
  `

  const [info] = await connection.query(comando, [
    novoEt.nm_estado, 
    novoEt.ddd, 
    novoEt.qntd_populacao, 
    novoEt.sigla, 
    novoEt.naturalidade, 
    novoEt.dt_fundacao])
  return info.insertId;
}
