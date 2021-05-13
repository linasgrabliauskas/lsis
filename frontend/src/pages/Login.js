import React, { useState, useContext } from 'react'
import Button from '../components/Button'
import { AuthenticationContext } from '../App'
import './Login.css'
import styleBtn from '../components/Button.module.css'

function Login() {
  //State
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const authentication = useContext(AuthenticationContext)

  //Endpoint
  const endPoint = 'https://lsis.herokuapp.com/api/user/login'

  function handleSubmit(e) {
    e.preventDefault()
    let data = {
      username,
      password,
    }
    fetch(endPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((res) => {
      if (res.status === 200) {
        let token = res.headers.get('token')
        authentication.setAuthenticated(true)
        localStorage.setItem('lsis-auth', token)
        return res.json()
      }
    })
    .then(data =>{
      let username = data.username
      localStorage.setItem('lsis-username', username)
    })
    .catch((err) => console.log(err))
    return
  }

  return (
    <main>
      <div className='login-wrapper'>
        <div className='login-container'>
          <h1>ADMINISTRATORIUS</h1>

          <form>
            <div className='login-inputs'>
              <input type='text' placeholder='Prisijungimo vardas' value={username} onChange={(e) => setUsername(e.target.value)}/>
              <input type='password' placeholder='Slaptažodis' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div onClick={handleSubmit} className='login-button'>
              <Button type='submit' className={`${styleBtn.btn} ${styleBtn.btnLight}`} text={'Prisijungti'}/>
            </div>
          </form>

        </div>
      </div>
    </main>
  )
}

export default Login
