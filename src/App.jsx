import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import MainTimer from './pages/MainTimer.jsx';

function App() {
    return (
        <Router>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/main-timer' element={<MainTimer />} />
          </Routes>
        </Router>
    );
}

export default App;