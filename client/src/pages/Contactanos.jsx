import { useState } from 'react'
import contactsService from '../services/contacts'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import '../styles/contactanos.css' 

const Contactanos = () => {
  const [contacts, setContacts] = useState([])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newContact = { name, phone, email, subject, message }
    const created = await contactsService.create(newContact)
    setContacts(contacts.concat(created))
    setName('')
    setPhone('')
    setEmail('')
    setSubject('')
    setMessage('')
    setShowModal(true)
  }

  return (
    <div>
      <Menu />
      <main>
        <h1>Contáctanos</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Número de teléfono"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Asunto"
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />
          <textarea
            placeholder="Mensaje"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            rows={4}
          />
          <button type="submit">Enviar</button>
        </form>
      </main>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Enviado correctamente</h2>
            <p>Tu mensaje ha sido enviado. Te contactaremos pronto.</p>
            <button onClick={() => setShowModal(false)}>Cerrar</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default Contactanos
