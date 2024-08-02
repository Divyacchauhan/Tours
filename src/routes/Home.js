 import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import homeImg from "../assets/home.avif"
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

 function Home (){
    return(
        <>
        <Navbar/>
        <Hero 
        clName = "hero"
        heroImg={homeImg}
        title = " Your journey Story"
        text = "Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    )
 }

 export default Home;