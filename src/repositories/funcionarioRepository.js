import { connection } from "../connection.js";

export async function consultarFuncionario(id) {
  const comando = `
    SELECT *
    FROM funcionarios
    WHERE id = ?
  `
  const [registros] = await connection.query(comando, [id]);
  return registros;
}
export async function filtrarFuncionario(nome) {
  const comando = `
    SELECT *
    FROM funcionarios
    WHERE nm_funcionario LIKE ?
  `
  const [registros] = await connection.query(comando, ['%' + nome + '%']);
  return registros;
}

export async function listarFuncionarios() {
  const comando = `
    SELECT *
      FROM funcionarios
  `

  const [registros] = await connection.query(comando)
  return registros;
}


export async function adicionarFuncionarios(novoFc) {
  const comando = `
    INSERT INTO funcionarios (nm_funcionario, horas_diarias, salario, cpf, aposentado)
               values (?, ?, ?, ?, ?);
  `

  const [info] = await connection.query(comando, [
    novoFc.nm_funcionario, 
    novoFc.horas_diarias, 
    novoFc.salario, 
    novoFc.cpf, 
    novoFc.aposentado])
  return info.insertId;

}