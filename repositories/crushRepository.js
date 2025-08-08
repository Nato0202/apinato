import { connection } from "./connection.js";


export async function listarCrush() {
  const comando = `
    SELECT *
      FROM carros
  `

  const [registros] = await conection.query(comando)
  return registros;
}


export async function adicionarCrush(novoCrush) {
  const comando = `
    INSERT INTO crush (nome, idade, genero, cidade, interesses, data_conheceu, tem_contato, nota_paixao, status_relacionamento)
               values (?, ?, ?, ?, ?, ?, ?, ?, ?);
  `

  const [info] = await conection.query(comando, [
    novoCrush.nome,
    novoCrush.idade,
    novoCrush.genero,
    novoCrush.cidade,
    novoCrush.interesses,
    novoCrush.data_conheceu,
    novoCrush.tem_contato,
    novoCrush.nota_paixao,
    novoCrush.status_relacionamento
  ])

  
  return info.insertId;
}


export async function alterarCrush(id, novosDadosCrush) {
  const comando = `
    UPDATE curso
       SET nome = ?, 
       idade = ?, 
       genero = ?, 
       cidade = ?, 
       interesses = ?, 
       data_conheceu = ?, 
       tem_contato = ?, 
       nota_paixao = ?, 
       status_relacionamento = ?
     WHERE id = ?
  `

  const [info] = await conection.query(comando, [
    novosDadosCrush.nome,
    novosDadosCrush.nome, 
    novosDadosCrush.idade, 
    novosDadosCrush.genero, 
    novosDadosCrush.cidade, 
    novosDadosCrush.interesses, 
    novosDadosCrush.data_conheceu, 
    novosDadosCrush.tem_contato, 
    novosDadosCrush.nota_paixao, 
    novosDadosCrush.status_relacionamento,
    id
  ]
  )
}


export async function removerCrush(id) {
  const comando = `
    DELETE FROM crush
          WHERE id = ?
  `

  const [info] = await conection.query(comando, [id]);
}

