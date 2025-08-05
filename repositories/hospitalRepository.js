import { connection } from "./connection.js";


export async function listarPaciente() {
  const comando = `
    SELECT *
      FROM hospital
  `

  const [registros] = await connection.query(comando)
  return registros;
}


export async function adicionarPaciente(novoPc) {
  const comando = `
    INSERT INTO hospital (medicamento_nm, bt_medicamentos, qtd_quartos, bt_quartos, nm_paciente, nm_doenca, qd_entrada)
               values (?, ?, ?, ?, ?, ?, ?);
  `

  const [info] = await connection.query(comando, [novoPc.medicamento_nm, novoPc.bt_medicamentos, novoPc.qtd_quartos, novoPc.bt_quartos, novoPc.nm_paciente, novoPc.nm_doenca, novoPc.qd_entrada])
  return info.insertId;

}
