import { useState } from 'react'
import advisoriesService from '../services/advisories'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import '../styles/asesorias.css' // Importar el CSS separado

const Asesorias = () => {
  const [advisories, setAdvisories] = useState([])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState('')
  const [description, setDescription] = useState('')
  const [preferredDate, setPreferredDate] = useState('')
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newAdvisory = { name, phone, email, topic, description, preferredDate }
    const created = await advisoriesService.create(newAdvisory)
    setAdvisories(advisories.concat(created))
    setName('')
    setPhone('')
    setEmail('')
    setTopic('')
    setDescription('')
    setPreferredDate('')
    setShowModal(true)
  }

  return (
    <div>
      <Menu />
      <main>
        <h1>Solicitar Asesoría</h1>
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
            placeholder="Tema de asesoría"
            value={topic}
            onChange={e => setTopic(e.target.value)}
            required
          />
          <textarea
            placeholder="Descripción"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
            rows={4}
          />
          <input
            type="date"
            value={preferredDate}
            onChange={e => setPreferredDate(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </main>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Enviado correctamente</h2>
            <p>Tu solicitud ha sido enviada. Nos pondremos en contacto contigo.</p>
            <button onClick={() => setShowModal(false)}>Cerrar</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default Asesorias

