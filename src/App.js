import './App.css';
import Home from './dialy/Home'
import Dialy from './dialy/Dialy'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/'>
        <div className='container'>
          <Home />
        </div>
      </Route>
      <Route path='/dialy'>
        <div className='container'>
          <Dialy />
        </div>
      </Route>
    </BrowserRouter>
  )
}

export default App;
