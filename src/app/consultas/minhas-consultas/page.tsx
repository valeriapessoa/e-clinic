"use client";

import React, { useEffect, useState } from 'react';
import { Container, Table, Image } from 'react-bootstrap';
import styles from "../../styles/consultas/minhas-consultas.module.css"; 

// Define a interface para os dados da consulta
interface Consulta {
    _id: string; // ID da consulta
    pacienteNome: string; // Nome do paciente
    unidade: string; // Unidade da consulta
    especialidade: string; // Especialidade da consulta
    consultaDataHora: string; // Data e hora da consulta (string para compatibilidade com JSON)
}

const ConsultasAgendadas = () => {
    const [consultas, setConsultas] = useState<Consulta[]>([]); // Define o estado como um array de Consultas

    useEffect(() => {
        const fetchConsultas = async () => {
            try {
                const response = await fetch('/api/consultas'); // Faz uma requisição para obter as consultas agendadas.
                if (!response.ok) {
                    throw new Error('Erro ao buscar consultas');
                }
                const data = await response.json();
                setConsultas(data); // Atualiza o estado com as consultas recebidas da API.
            } catch (error) {
                console.error("Erro ao buscar consultas:", error); // Loga erro caso ocorra durante a requisição.
            }
        };

        fetchConsultas(); // Chama a função para buscar as consultas quando o componente é montado.
    }, []);

    return (
        <Container className={styles.container}>
            <Image src="/images/consultas/banner.jpg" fluid className={styles.bannerImage} alt="Banner de Consultas" />
            <h2 className={styles.title}>Consultas Agendadas</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Nome do Paciente</th>
                        <th>Unidade</th>
                        <th>Especialidade</th>
                        <th>Data/Hora</th>
                    </tr>
                </thead>
                <tbody>
                    {consultas.map(consulta => (
                        <tr key={consulta._id}>
                            <td>{consulta.pacienteNome}</td>
                            <td>{consulta.unidade}</td>
                            <td>{consulta.especialidade}</td>
                            <td>{new Date(consulta.consultaDataHora).toLocaleString()}</td> {/* Formata a data/hora */}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ConsultasAgendadas;