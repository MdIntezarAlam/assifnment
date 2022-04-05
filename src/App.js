import Sidebar from './components/Sidebar'
import Appbar from './components/Appbar'
import AppBar_2 from './components/AppBar_2'
import HomePage from './components/HomePage'


import './App.css'

const App = () => {
  return (
    <div className='app'>
      <div ><Sidebar /></div>
      <div><Appbar /></div>
      <div className='second_appbar'><AppBar_2 /></div>
      <div><HomePage /></div>
    </div>
  )
}

export default App