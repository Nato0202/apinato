import { connection } from "./connection.js";


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

  const [info] = await connection.query(comando, [novoVg.nm_local, novoVg.qtd_malas, novoVg.dt_saida, novoVg.dt_chegada, novoVg.qtd_gastos, novoVg.bt_bom])
  return info.insertId;

}