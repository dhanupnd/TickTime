import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './Homepage.jsx';
import MainTimer from './MainTimer.jsx'
import SideBar from './SideBar.jsx';

function App() {
    return (
        <Router>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/main-timer' element={<MainTimer />} />
            <Route path='/sidebar' element={<SideBar />} />
          </Routes>
        </Router>
    );
}

export default App;