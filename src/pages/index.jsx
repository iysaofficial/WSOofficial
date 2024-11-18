import Navigation from "../components/navigation";
import Footer from "../components/footer";

// Content
import MainHero from "../components/mainhero";
import About from "../components/about";
import Criteria from "../components/criteria";
import Category from "../components/category";
import Organized from "../components/organized";
import AfterMovie from "../components/aftermovie";
// import Category from "../components/category";
// import Organized from "../components/organized";
// import About from "../components/about";
// import Backtotop from "../components/back-to-top";

function Home() {
    return (
        <>
        <br />
        <br />
        <br />
        <Navigation />
        <MainHero />
        <About />
        <Criteria />
        <Category/>
        <AfterMovie />
        <Organized />
        <Footer />
    </>
    )
}

export default Home;