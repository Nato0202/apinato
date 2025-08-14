import { connection } from "./connection.js";

export async function consultarMercado(id) {
  const comando = `
    SELECT *
    FROM mercado
    WHERE id = ?
  `
  const [resultado] = await connection.query(comando, [id]);
  return resultado[0];
}
export async function filtrarMercado(nome) {
  const comando = `
    SELECT *
    FROM mercado
    WHERE nm_produto LIKE ?
  `
  const [resultado] = await connection.query(comando, [`%${nome}%`]);
  return resultado;
}

export async function listarMercado() {
  const comando = `
    SELECT *
      FROM mercado
  `

  const [registros] = await connection.query(comando)
  return registros;
}


export async function adicionarMercado(novoMc) {
  const comando = `
    INSERT INTO mercado (nm_produto, qtd_produtos, preco, validade, dt_compra, estoque)
               values (?, ?, ?, ?, ?, ?);
  `

  const [info] = await connection.query(comando, [
    novoMc.nm_produto, 
    novoMc.qtd_produtos, 
    novoMc.preco, 
    novoMc.validade, 
    novoMc.dt_compra, 
    novoMc.estoque])
  return info.insertId;

}

export async function alterarMercado(id, novosDadosMercado) {
  const comando = `
    UPDATE mercado
    nm_produto = ?, 
    qtd_produtos = ?, 
    preco = ?, 
    validade = ?, 
    dt_compra = ?, 
    estoque = ?
     WHERE id = ?;
  `

  await connection.query(comando, [
    novosDadosMercado.nm_produto,
    novosDadosMercado.qtd_produtos,
    novosDadosMercado.preco,
    novosDadosMercado.validade,
    novosDadosMercado.dt_compra,
    novosDadosMercado.estoque,
    id]);
}

export async function removerMercado(id) {
  const comando = `
    DELETE FROM mercado
          WHERE id = ?
  `

  const [info] = await connection.query(comando, [id]);
}
