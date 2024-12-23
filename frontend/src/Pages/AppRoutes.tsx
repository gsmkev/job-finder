import { Divider } from "@mantine/core";
import Header from "../Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import FindJobPage from "./FindJobPage";
import JobsDescriptionPage from "./JobsDescriptionPage";
import UploadJobPage from "./UploadJobPage";
import ApplyJobPage from "./ApplyJobPage";
import FindTalentPage from "./FindTalentPage";
import TalentProfilePage from "./TalentProfilePage";
import CompanyPage from "./CompanyPage";
import PostedJobPage from "./PostedJobPage";
import JobsHistoryPage from "./JobsHistoryPage";
import AuthPage from "./AuthPage";
import ProfilePage from "./ProfilePage";
import Footer from "../Components/Footer/Footer";

const AppRoutes = () => {
    return (
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
    );
}

export default AppRoutes;