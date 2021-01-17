
import MovieGrid from './components/MovieGrid';
import { Container } from 'semantic-ui-react'
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="ui fixed inverted menu">
        <div className="ui container">
          <a href="#" className="header item">
            <img className="logo imageMenu" src="./logo192.png" />
            MovieDb
          </a>
          <a href="#" className="item">
            Home
          </a>
          <div className="ui simple dropdown item">
            Dropdown <i className="dropdown icon"></i>
            <div className="menu">
              <a className="item" href="#">
                Link Item
              </a>
              <a class="item" href="#">
                Link Item
              </a>
              <div className="divider"></div>
              <div className="header">Header Item</div>
              <div className="item">
                <i className="dropdown icon"></i>
                Sub Menu
                <div className="menu">
                  <a className="item" href="#">
                    Link Item
                  </a>
                  <a className="item" href="#">
                    Link Item
                  </a>
                </div>
              </div>
              <a className="item" href="#">
                Link Item
              </a>
            </div>
          </div>
          <a href="#" className="item">
            Top
          </a>
          <a href="#" className="item">
            Dunno
          </a>
        </div>
      </div>

      <MovieGrid/>  
      


      
    </div>
  );
}

export default App;
