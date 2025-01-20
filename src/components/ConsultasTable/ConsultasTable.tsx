import React from 'react';
import { Table, Button } from 'react-bootstrap';

interface Consulta {
  _id: string;
  pacienteNome: string;
  unidade: string;
  especialidade: string;
  consultaDataHora: string;
}

interface ConsultasTableProps {
  consultas: Consulta[];
  onEdit: (consulta: Consulta) => void;
  onDelete: (consulta: Consulta) => void;
  formatarDataHora: (dataHora: string) => string;
}

const ConsultasTable: React.FC<ConsultasTableProps> = ({ consultas, onEdit, onDelete, formatarDataHora }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Paciente</th>
          <th>Unidade</th>
          <th>Especialidade</th>
          <th>Data/Hora</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {consultas.length > 0 ? (
          consultas.map(consulta => (
            <tr key={consulta._id}>
              <td>{consulta.pacienteNome}</td>
              <td>{consulta.unidade}</td>
              <td>{consulta.especialidade}</td>
              <td>{formatarDataHora(consulta.consultaDataHora)}</td>
              <td>
                <Button className="btn btn-primary me-2 my-2" onClick={() => onEdit(consulta)}>Editar</Button>
                <Button className="btn btn-danger" onClick={() => onDelete(consulta)}>Cancelar</Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5} className="text-center">Nenhuma consulta agendada.</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default ConsultasTable;