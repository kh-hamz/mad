import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import FeatureBlock from "./components/LandingPage/FeatureBlocks";
import ImageFeatureBlock from "./components/LandingPage/ImageFeatureBlock";
const vite = "/vite.svg";

function App() {
  return (
    <>
      <Navbar />
      {/* Main starts here */}
      <div className="main">
        <div className="main-inner">
          <div className="img-container">
            <div className="imgae">
              <img src={vite} alt="Logo" />
            </div>
          </div>
          <div className="descript">
            <h1>Why GeMorph?</h1>
          </div>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ad
              sed voluptate consectetur, quam tempore nesciunt alias laudantium
              consequatur labore quis ex soluta rerum consequuntur numquam saepe
              laboriosam reiciendis enim.
            </p>
          </div>
          <FeatureBlock />
          <ImageFeatureBlock />
          <div className="create">
            <h1>Ready to get started?</h1>
          </div>
          <div className="btn-container">
            <div className="create-acc-btn">Create an account</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
