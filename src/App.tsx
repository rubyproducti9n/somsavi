import logoUrl from './assets/logo.png'
import './style/light.css'
import './App.css'
<link rel="icon" type="image/png" href="/favicon.png" />

function App() {
  return (
    <div className="light app-container">
      <img src={logoUrl} alt="Somsavi Logo" className="logo" />
      <p className="status-text">In Development</p>
    </div>
  )
}

export default App
