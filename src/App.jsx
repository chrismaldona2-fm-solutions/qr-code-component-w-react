import './styles/App.css'
import QrCard from './components/QrCard'

function App() {
  return (
    <>
      <main className="hero">
        <QrCard
          title="Improve your front-end skills by building projects"
          description="Scan the QR Code to visist Frontend Mentor and take your coding skills to the next level"
        />
      </main>
    </>
  )
}

export default App
