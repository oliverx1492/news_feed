
import Result from "./components/Result"
import Search from "./components/search"
import { Routes, BrowserRouter, Route } from "react-router-dom"


function App() {


  return (
    <div className="h-screen w-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search/>}/>
          <Route path="/result" element={<Result />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
