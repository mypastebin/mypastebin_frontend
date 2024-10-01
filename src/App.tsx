import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./components/MainPage.tsx";
import PastePage from "./components/PastePage.tsx";
import LoginPage from "./components/LoginPage.tsx";
import SignUpPage from "./components/SignUpPage.tsx";
import ProfilePage from "./components/ProfilePage.tsx";
import {API_URLS} from "./constants/constants.ts";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path={API_URLS.POST + '/:hash'} element={<PastePage />} />
                <Route path={API_URLS.LOGIN} element={<LoginPage />} />
                <Route path={API_URLS.SIGNUP} element={<SignUpPage />} />
                <Route path={API_URLS.PROFILE} element={<ProfilePage />} />
            </Routes>
        </Router>
    );
};
export default App;
