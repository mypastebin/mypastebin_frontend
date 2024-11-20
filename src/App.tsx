import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./components/MainPage.tsx";
import PastePage from "./components/PastePage.tsx";
import LoginPage from "./components/LoginPage.tsx";
import SignUpPage from "./components/SignUpPage.tsx";
import ProfilePage from "./components/ProfilePage.tsx";
import { ROUTES } from "./constants/constants.ts";
import OAuth2RedirectHandler from "./components/OAuth2RedirectHandler.tsx";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path={ROUTES.BASE_NET} element={<MainPage />} />
                <Route path={ROUTES.POST + '/:hash'} element={<PastePage />} />
                <Route path={ROUTES.LOGIN} element={<LoginPage />} />
                <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
                <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
                <Route path={ROUTES.OAUTH2_REDIRECT} element={<OAuth2RedirectHandler />} />
            </Routes>
        </Router>
    );
};
export default App;
