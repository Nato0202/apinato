import { connection } from "./connection.js";

export async function consultarDesenho(id) {
  const comando = `
    SELECT *
    FROM desenho
    WHERE id = ?
  `
  const [registros] = await connection.query(comando, [id]);
  return registros[0];
}

export async function filtrarDesenho(nome) {
  const comando = `
  SELECT *
  FROM desenho
  WHERE nm_desenho LIKE ?
  `
  const [registros] = await connection.query(comando, ['%' + nome + '%']);
  return registros;
}

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

export async function alterarDesenho(id, novosDadosDesenho) {
  const comando = `
    UPDATE desenho
       SET nm_desenho = ?,
       nm_criador = ?,
       qtd_temp = ?,
       qtd_eps = ?,
       dt_lancamento = ?,
       bt_encerrado= ?,
     WHERE id = ?;
  `

  await connection.query(comando, [
    novosDadosDesenho.nm_desenho,
    novosDadosDesenho.nm_criador,
    novosDadosDesenho.qtd_temp,
    novosDadosDesenho.qtd_eps,
    novosDadosDesenho.dt_lancamento,
    novosDadosDesenho.bt_encerrado,
    id]);
}

export async function removerDesenho(id) {
  const comando = `
    DELETE FROM desenho
          WHERE id = ?
  `

  const [info] = await connection.query(comando, [id]);
}
