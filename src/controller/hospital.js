import express from 'express';
import * as repoHospital from '../src/repositories/hospitalRepository.js';

const endpoints = express();

endpoints.get('/pacientes', async (req, res) => {
    try {
        const pacientes = await repoHospital.filtrarHospital();
        res.json(pacientes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pacientes' });
    }
});

endpoints.get('/pacientes/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const paciente = await repoHospital.consultarHospital(id);
        res.json(paciente);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar paciente' });
    }
});

endpoints.get('/pacientes', async (req, res) => {
    try {
        const registros = await repoHospital.listarPaciente();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pacientes' });
    }
});

endpoints.post('/pacientes', async (req, res) => {
    try {
        const novoPaciente = req.body;
        const id = await repoHospital.adicionarPaciente(novoPaciente);
        res.status(201).json({ newId: id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar paciente' });
    }
});

endpoints.put('/pacientes/:id', async (req, res) => {
    const id = req.params.id;
    const novosDadosPaciente = req.body;
    try {
        await repoHospital.alterarPaciente(id, novosDadosPaciente);
        res.status(200).json({ message: 'Paciente atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar paciente' });
    }
});

endpoints.delete('/pacientes/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await repoHospital.removerPaciente(id);
        res.status(200).json({ message: 'Paciente removido com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover paciente' });
    }
});

export default endpoints;
