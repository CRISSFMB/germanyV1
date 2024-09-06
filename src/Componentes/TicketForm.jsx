import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Importa uuid para generar identificadores únicos
import '../css/ticket.css';

const TicketSystem = () => {
  const [tickets, setTickets] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    cedula: '',
    title: '',
    date: '',
    status: 'Pendiente'
  });

  // Función para generar tickets estáticos
  const generateInitialTickets = () => {
    const initialTickets = Array.from({ length: 19 }, (_, index) => ({
      id: uuidv4(), // Genera un ID único para el ticket
      name: `Nombre ${index + 1}`,
      cedula: `Cédula ${index + 1}`,
      title: `Ticket #${index + 1}`,
      date: new Date().toLocaleString(),
      status: 'Pendiente'
    }));
    setTickets(initialTickets); // Establece los tickets iniciales
  };

  // Crea tickets automáticamente cuando el componente se monta
  useEffect(() => {
    generateInitialTickets();
  }, []); // El array vacío asegura que esto solo se ejecute una vez

  // Función para eliminar un ticket
  const removeTicket = (id) => {
    setTickets(tickets.filter(ticket => ticket.id !== id)); // Filtra los tickets para eliminar el que coincide con el ID
  };

  // Función para manejar el cambio en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Función para agregar un nuevo ticket
  const addTicket = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    if (!formData.title || !formData.date || !formData.name || !formData.cedula) return; // Verifica que los campos no estén vacíos

    const newTicket = {
      id: uuidv4(), // Genera un ID único para el ticket
      ...formData
    };
    setTickets([...tickets, newTicket]); // Añade el nuevo ticket a la lista
    setFormData({
      name: '',
      cedula: '',
      title: '',
      date: '',
      status: 'Pendiente'
    }); // Limpia los campos del formulario
  };

  return (
    <div className="ticket-container">
      <h2>Sistema de Tickets</h2>
      
      <form onSubmit={addTicket} className="ticket-form">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre del titular"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="cedula">Número de Cédula</label>
          <input
            type="text"
            id="cedula"
            name="cedula"
            value={formData.cedula}
            onChange={handleChange}
            placeholder="Número de cédula"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Título del ticket"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="date">Fecha y Hora</label>
          <input
            type="datetime-local"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="status">Estado</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Pendiente">Pendiente</option>
            <option value="En Progreso">En Progreso</option>
            <option value="Completado">Completado</option>
          </select>
        </div>
        
        <button type="submit" className="submit-button">Agregar Ticket</button>
      </form>

      <div className="ticket-grid">
        {tickets.map(ticket => (
          <div className="ticket-card" key={ticket.id}>
            <h3>{ticket.title}</h3>
            <p><strong>Nombre:</strong> {ticket.name}</p>
            <p><strong>Cédula:</strong> {ticket.cedula}</p>
            <p><strong>Fecha y Hora:</strong> {ticket.date}</p>
            <p><em>{ticket.status}</em></p>
            <button className="remove-button" onClick={() => removeTicket(ticket.id)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketSystem;
