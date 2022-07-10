import './App.css'
import { Route, Routes, useLocation } from "react-router-dom"
import { Home } from "./components/home"
import { JSON } from "./components/json"
import { Promises } from "./components/promises"
import { AppNavbar, DBNavbar } from "./components/navbar"
import { RecordList } from "./components/recordList"
import { Edit } from "./components/edit"
import { Create } from "./components/create"
import { Database } from './components/database'

export const App = () => {
  const location = useLocation()
  const { pathname } = location ?? {}
  
  const getDBNavbar = () => {
    if (
      pathname === '/database' ||
      pathname === '/record' ||
      pathname === '/create' ||
      pathname.includes('/edit/')
    ) {
      return <DBNavbar />
    }
  }

  return (
    <>
      <AppNavbar />
      {getDBNavbar()}
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/json" element={<JSON />} />
          <Route path="/promises" element={<Promises />} />
          <Route path="/database" element={<Database />} />
          <Route path="/record" element={<RecordList />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </>
  )
}
