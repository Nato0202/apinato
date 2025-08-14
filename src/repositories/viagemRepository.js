import { connection } from "./connection.js";

export async function consultarViagem(id) {
  const comando = `
    SELECT *
    FROM viagem
    WHERE id = ?
    `
  const [registros] = await connection.query(comando, [id]);
  return registros;
}

export async function filtrarViagem(nome) {
  const comando = `
    SELECT *
    FROM viagem
    WHERE nm_local LIKE ?
  `
  const [registros] = await connection.query(comando, [`%${nome}%`]);
  return registros;
}

export async function listarViagem() {
  const comando = `
    SELECT *
      FROM viagem
  `

  const [registros] = await connection.query(comando)
  return registros;
}


export async function adicionarViagem(novoVg) {
  const comando = `
    INSERT INTO viagem (nm_local, qtd_malas, dt_saida, dt_chegada, qtd_gastos, bt_bom)
               values (?, ?, ?, ?, ?, ?);
  `

  const [info] = await connection.query(comando, [
    novoVg.nm_local, 
    novoVg.qtd_malas, 
    novoVg.dt_saida, 
    novoVg.dt_chegada, 
    novoVg.qtd_gastos, 
    novoVg.bt_bom])
  return info.insertId;

}

export async function alterar(id, novosDadosViagem) {
  const comando = `
    UPDATE viagem
    SET nm_local = ?, 
    qtd_malas = ?, 
    dt_saida = ?,
    dt_chegada = ?, 
    qtd_gastos = ?, 
    bt_bom = ?,
    where id = ?;
  `

  await connection.query(comando, [
    novosDadosViagem.nm_local,
    novosDadosViagem.qtd_malas,
    novosDadosViagem.dt_saida,
    novosDadosViagem.dt_chegada,
    novosDadosViagem.qtd_gastos,
    novosDadosViagem.bt_bom,
    id]);
}

export async function removerViagem(id) {
  const comando = `
    DELETE FROM viagem
          WHERE id = ?
  `

  const [info] = await connection.query(comando, [id]);
}
