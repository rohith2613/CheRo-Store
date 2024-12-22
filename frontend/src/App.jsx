

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./screens/Home"

import SingleProduct from "./components/SingleProduct"

const App = () => {
  return (
   <BrowserRouter>
   
<Routes>
  <Route path="/" element={<Layout />}>
  <Route  index element={<Home />} />
  <Route path="/house/:id" element={<SingleProduct />} />
  </Route>
  </Routes>   
   </BrowserRouter>
  )
}

export default App