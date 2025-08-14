import { connection } from "./connection.js";

export async function consultarPizzas(id) {
  const comando = `
    SELECT *
    FROM pizzas
    WHERE id = ?
  `
  const [resultado] = await connection.query(comando, [id]);
  return resultado;
}

export async function filtrarPizzas(nome) {
  const comando = `
    SELECT *
    FROM pizzas
    WHERE nm_sabor LIKE ?
    `
    const [resultado] = await connection.query(comando, [`%${nome}%`]);
  return resultado;
}

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

  const [info] = await connection.query(comando, [
    novoPz.nm_sabor, 
    novoPz.tp_preparo, 
    novoPz.preco, 
    novoPz.qtd_estoque, novoPz.bt_promo])
  return info.insertId;

}

export async function removerPizzas(id) {
  const comando = `
    DELETE FROM pizzas
          WHERE id = ?
  `
}

  export async function alterarPizza(id, novosDadosPizza) {
    const comando = `
      UPDATE pizzas
      SET nm_sabor = ?,
      tp_preparo = ?, 
      preco = ?, 
      qtd_estoque = ?, 
      bt_promo = ?
      WHERE id = ?;
    `
  
    await connection.query(comando, [
      novosDadosPizza.nm_sabor,
      novosDadosPizza.tp_preparo,
      novosDadosPizza.preco,
      novosDadosPizza.qtd_estoque,
      novosDadosPizza.bt_promo,
      id]);
  }

  export async function removerPizza(id) {
    const comando = `
      DELETE FROM pizzas
            WHERE id = ?
    `
  
    const [info] = await connection.query(comando, [id]);
  }
  