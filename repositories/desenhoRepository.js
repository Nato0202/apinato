import { connection } from "./connection.js";


export async function listarDesenho() {
  const comando = `
    SELECT *
      FROM desenho
  `

  const [registros] = await connection.query(comando)
  return registros;
}


export async function adicionarDesenho(novoDs) {
  const comando = `
    INSERT INTO desenho (nm_desenho, nm_criador, qtd_temp, qtd_eps, dt_lancamento, bt_encerrado)
               values (?, ?, ?, ?, ?, ?);
  `

  const [info] = await connection.query(comando, [
    novoDs.nm_desenho, 
    novoDs.nm_criador, 
    novoDs.qtd_temp, 
    novoDs.qtd_eps, 
    novoDs.dt_lancamento, 
    novoDs.bt_encerrado
  ])
  return info.insertId;
}
