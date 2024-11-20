import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./components/MainPage.tsx";
import PastePage from "./components/PastePage.tsx";
import LoginPage from "./components/LoginPage.tsx";
import SignUpPage from "./components/SignUpPage.tsx";
import ProfilePage from "./components/ProfilePage.tsx";
import {API_URLS, ROUTES} from "./constants/constants.ts";
import OAuth2RedirectHandler from "./components/OAuth2RedirectHandler.tsx";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path={API_URLS.POST + '/:hash'} element={<PastePage />} />
                <Route path={ROUTES.LOGIN} element={<LoginPage />} />
                <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
                <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
                <Route path={ROUTES.OAUTH2_REDIRECT} element={<OAuth2RedirectHandler />} />
            </Routes>
        </Router>
    );
};
export default App;
