import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Pizza from './recipes/pizza'
import Kebab from './recipes/kebab'
import Potato from './recipes/potato'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Navigate to="/pizza" replace />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/kebab" element={<Kebab />} />
        <Route path="/potato" element={<Potato />} />
        <Route path="*" element={<Navigate to="/pizza" replace />} />
      </Routes>
    </HashRouter>
  )
}
