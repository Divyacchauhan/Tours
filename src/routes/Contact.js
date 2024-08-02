import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import ContactImg from "../assets/contact.avif"
import Footer from "../components/Footer";
import FormContact from "../components/FormContact";


function Contact(){
    return(
        <>
         <Navbar/>
        <Hero 
        clName = "hero-mid"
        heroImg={ContactImg}
        title = "Contact"

        btnClass="hide"
        />
        <FormContact/>
         <Footer/>
        </>
    )
}
export default Contact;