import './App.css';
import ice from '../src/img/ice.jpg'



function App() {
  return (
    <div >
      <div>
        <ul className='uuuu'>
          <li><a href="#home">Home</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>

      </div>

      <div>

        <img src={ice} className="logonav" alt="surachet" ></img>
      </div>

    </div>


  );
}

export default App;
