import { connection } from "./connection.js";


export async function listarPizzas() {
  const comando = `
    SELECT *
      FROM pizzas
  `

  const [registros] = await connection.query(comando)
  return registros;
}


export async function adicionarPizzas(novoPz) {
  const comando = `
    INSERT INTO pizzas (nm_sabor, tp_preparo, preco, qtd_estoque, bt_promo)
               values (?, ?, ?, ?, ?);
  `

  const [info] = await connection.query(comando, [novoPz.nm_sabor, novoPz.tp_preparo, novoPz.preco, novoPz.qtd_estoque, novoPz.bt_promo])
  return info.insertId;

}
