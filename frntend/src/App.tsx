import './App.css'
import logo from './assets/react.svg'
const vite = '/vite.svg'

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
              <button className='login-btn'>
                Login
              </button>
            </div>
 
          </div>
        </div>
        <div className='main'>
          <div className='main-inner'>
            <div className='img-container'>
              <div className='imgae'>
                <img src={vite} alt="Logo" />
              </div>              
            </div>
            <div className='descript'></div>
            <div className='boxes'></div>
            <div className='boxes-2'></div>
            <div className='create'></div>
          </div>
        </div>
    </>
  )
}

export default App
