import { connection } from "./connection.js";


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