import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./components/MainPage.tsx";
import PastePage from "./components/PastePage.tsx";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/api/posts/:hash" element={<PastePage />} />
            </Routes>
        </Router>
    );
};
export default App;
