import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { GithubProvider } from './components/context/GithubContext';
import {AlertProvider } from './components/context/AlertContext'
import Alert from './components/layouts/Alert';
import User from './components/users/User';
function App() {

  return (
  <GithubProvider>
    <AlertProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar/>
        
        <main className='container mx-auto px-3 pb-10'>
          <Alert/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/*" element={<NotFound/>} />
            <Route path="/user/:login" element={<User/>}/>
          </Routes>
        </main>
        <Footer/>    
      </div>
    </Router>
      </AlertProvider>
    </GithubProvider>
 
  )
}

export default App;
