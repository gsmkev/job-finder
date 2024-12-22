import './App.css';
import {createTheme, Divider, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage';
import FindJobPage from './Pages/FindJobPage';
import JobsDescriptionPage from './Pages/JobsDescriptionPage';
import UploadJobPage from './Pages/UploadJobPage';
import ApplyJobPage from './Pages/ApplyJobPage';
import FindTalentPage from './Pages/FindTalentPage';
import TalentProfilePage from './Pages/TalentProfilePage';
import CompanyPage from './Pages/CompanyPage';
import PostedJobPage from './Pages/PostedJobPage';
import JobsHistoryPage from './Pages/JobsHistoryPage';
import AuthPage from './Pages/AuthPage';
import ProfilePage from './Pages/ProfilePage';
import Footer from './Components/Footer/Footer';


function App() {
    const theme = createTheme({
        colors: {
            'mine-shaft': [
                '#f6f6f6',
                '#e7e7e7',
                '#d1d1d1',
                '#b0b0b0',
                '#888888',
                '#6d6d6d',
                '#5d5d5d',
                '#4f4f4f',
                '#454545',
                '#3d3d3d',
                '#2d2d2d',
            ],
            'bright-sun': [
                '#fffbeb',
                '#fff3c6',
                '#ffe588',
                '#ffd149',
                '#ffbd20',
                '#f99b07',
                '#dd7302',
                '#b75006',
                '#943c0c',
                '#7a330d',
                '#461902',
            ],
        },
        fontFamily: 'Poppins, sans-serif',
        focusRing: 'never',
        primaryColor: 'bright-sun',
        primaryShade: 4,
    });
    return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
        <BrowserRouter>
            <div className='relative'>
                <Header />
                <Divider size="xs" mx={'md'} />
                <Routes>
                    <Route path={'*'} element={ <HomePage /> }/>
                    <Route path={'find-jobs'} element={ <FindJobPage /> }/>
                    <Route path={'jobs'} element={ <JobsDescriptionPage /> }/>
                    <Route path={'upload-jobs'} element={ <UploadJobPage /> }/>
                    <Route path={'apply-jobs'} element={ <ApplyJobPage /> }/>
                    <Route path={'find-talents'} element={ <FindTalentPage /> }/>
                    <Route path={'talent-profile'} element={ <TalentProfilePage /> }/>
                    <Route path={'companies'} element={ <CompanyPage /> }/>
                    <Route path={'posted-jobs'} element={ <PostedJobPage /> }/>
                    <Route path={'jobs-history'} element={ <JobsHistoryPage /> }/>
                    <Route path={'login'} element={ <AuthPage /> }/>
                    <Route path={'register'} element={ <AuthPage /> }/>
                    <Route path={'profile'} element={ <ProfilePage /> }/>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    </MantineProvider>
    );
}

export default App;
