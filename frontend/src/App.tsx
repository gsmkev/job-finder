import './App.css';
import {createTheme, Divider, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomePage from "./Pages/HomePage";
import FindJobs from './Pages/FindJobs';
import FindTalents from './Pages/FindTalents';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import TalentProfile from './Pages/TalentProfile';
import UploadJobs from './Pages/UploadJobs';
import JobsDescription from './Pages/JobsDescription';
import ApplyJobs from './Pages/ApplyJobs';
import Companies from './Pages/Companies';
import PostedJobs from './Pages/PostedJobs';

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
                    <Route path={'*'} element={<HomePage/>}/>
                    <Route path={'find-jobs'} element={<FindJobs/>}/>
                    <Route path={'jobs'} element={<JobsDescription/>}/>
                    <Route path={'upload-jobs'} element={<UploadJobs/>}/>
                    <Route path={'apply-jobs'} element={<ApplyJobs/>}/>
                    <Route path={'find-talents'} element={<FindTalents/>}/>
                    <Route path={'talent-profile'} element={<TalentProfile/>}/>
                    <Route path={'companies'} element={<Companies/>}/>
                    <Route path={'posted-jobs'} element={<PostedJobs/>}/>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    </MantineProvider>
    );
}

export default App;
