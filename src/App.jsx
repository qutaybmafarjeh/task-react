import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pizza from './recipes/pizza'
import Kebab from './recipes/kebab'
import Potato from './recipes/potato'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/kebab" element={<Kebab />} />
        <Route path="/potato" element={<Potato />} />
      </Routes>
    </BrowserRouter>
  )
}
