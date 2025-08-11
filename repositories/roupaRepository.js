import { connection } from "./connection.js";

export async function consultarRoupa(id) {
  const comando = `
    SELECT *
    FROM roupa
    WHERE id = ?
  `
  const [registros] = await connection.query(comando, [id]);
  return registros;
}

export async function filtrarRoupa(nome) {
  const comando = `
    SELECT *
    FROM roupa
    WHERE nm_marca LIKE ?
    `
  const [registros] = await connection.query(comando, [`%${nome}%`]);
  return registros;
}

export async function listarRoupa() {
  const comando = `
    SELECT *
      FROM roupa
  `

  const [registros] = await connection.query(comando)
  return registros;
}


export async function adicionarRoupa(novoRp) {
  const comando = `
    INSERT INTO roupa (nm_marca, nm_modelo, nr_tamanho, qtd_estoque, bt_estoque, qt_preco)
               values (?, ?, ?, ?, ?, ?);
  `

  const [info] = await connection.query(comando, [
    novoRp.nm_marca, 
    novoRp.nm_modelo, 
    novoRp.nr_tamanho, 
    novoRp.qtd_estoque, 
    novoRp.bt_estoque, 
    novoRp.qt_preco])
  return info.insertId;

}
