import './App.css'
import FeatureBlock from "./FeatureBlocks";
import ImageFeatureBlock from "./ImageFeatureBlock";
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
            <div className='descript'>
              <h3>
                Why GeMorph?
              </h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ad sed voluptate consectetur, quam tempore nesciunt alias laudantium consequatur labore quis ex soluta rerum consequuntur numquam saepe laboriosam reiciendis enim.</p>
            </div>
            <FeatureBlock />
            <ImageFeatureBlock />
            <div className='create'></div>
          </div>
        </div>
    </>
  )
}

export default App
