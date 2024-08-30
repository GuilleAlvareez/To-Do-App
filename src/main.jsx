import { ListTaskProvider } from './contexts/setOfTask.jsx'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <ListTaskProvider>
    <App />
  </ListTaskProvider>,
)
