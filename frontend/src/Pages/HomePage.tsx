import Header from '../Header/Header';
import DreamJob from "../LandingPage/DreamJob";
import Companies from "../LandingPage/Companies";

const HomePage = () => {
    return (
        <div className={'min-h-[100vh] bg-mine-shaft-950 font-[poppins]'}>
            <Header />
            <DreamJob />
            <Companies />
        </div>

    );
}

export default HomePage;