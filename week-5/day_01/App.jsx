import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Signin from './Signin.jsx';
import Signup from './Signup.jsx';
import { AppBar } from '@mui/material';
import Appbar from './Appbar';

function App() {
    return (
        <div style = {{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#eeeeee"
        }}>
            <Router>
                <Appbar></Appbar>
                <Routes>
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
