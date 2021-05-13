import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Formal from './pages/Formal'
import Informal from './pages/Informal'
import Documentation from './pages/Documentation'
import Contacts from './pages/Contacts'
import Error404 from './pages/Error404'
import FormalDetail from './pages/FormalDetail'
import InformalDetail from './pages/InformalDetail'
import ProtectedRoute from './pages/ProtectedRoute'
import Admin from './pages/Admin'
import AdminPanel from './pages/AdminPanel'
import AdminEditFormal from './pages/AdminEditFormal'
import AdminEditInformal from './pages/AdminEditInformal'

export const AuthenticationContext = React.createContext()

function App() {

  // State
  const [authenticated, setAuthenticated] = useState(false)

  // Effects
  useEffect(() => {
    if (localStorage.getItem('lsis-auth'))
      setAuthenticated(true)
  }, [])

  return (
    <div className='App'>

      <AuthenticationContext.Provider value={{ authenticated, setAuthenticated }}>

        <Router>
          <Header />
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/apie-mus'><About /></Route>
            <Route exact path='/formalus-ugdymas'><Formal /></Route>
            <Route path='/formalus-ugdymas/:id'><FormalDetail/></Route>
            <Route exact path='/neformalus-ugdymas'><Informal /></Route>
            <Route path='/neformalus-ugdymas/:id'><InformalDetail/></Route>
            <Route exact path='/dokumentacija'><Documentation /></Route>
            <Route path='/kontaktai'><Contacts /></Route>
    
            <ProtectedRoute exact path='/admin'><Admin/></ProtectedRoute>
            <ProtectedRoute path='/admin-panel'><AdminPanel/></ProtectedRoute>
            <ProtectedRoute path='/admin/formalus-ugdymas/:id'><AdminEditFormal/></ProtectedRoute>
            <ProtectedRoute path='/admin/neformalus-ugdymas/:id'><AdminEditInformal/></ProtectedRoute>

            <Route ><Error404 /></Route>
          </Switch>
          <Footer />
        </Router>
      </AuthenticationContext.Provider>
    </div>
  )
}

export default App