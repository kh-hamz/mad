import './App.css'
import logo from './assets/react.svg' 

function App() {
  return (
    <>
        <div className='navbar'>
          <div className='nav-inner'>
            <div className='left-nav'>
              <div className='logo-bar'>
                <img src={logo} alt="Logo" />
                <p>GeMorph</p>   
              </div>
            </div>
            
            <div className='right-nav'>
              <div className='nav-links'>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
              </div>
              <button className='login-button'>
                Login
              </button>
            </div>

          </div>
        </div>
    </>
  )
}

export default App
