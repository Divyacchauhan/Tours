import ImageLeh1 from "../assets/leh1.webp"
import ImageLeh2 from "../assets/leh2.jpg"
import ImageLeh3 from "../assets/havelockIsland1.avif"
import ImageLeh4 from "../assets/havelockIsland2.avif"
import ImageLeh5 from "../assets/amerPalace1.jpg"
import ImageLeh6 from "../assets/amberPalace2.jpeg"
import ImageLeh7 from "../assets/jaisalmer2.jpg"
import ImageLeh8 from "../assets/jaisalmer1.jpg"

import "./Destination.css"
import DestinationData from "./DestinationData"

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot, within a time</p>
            
            <DestinationData 
            className="first-des"
             heading="Leh"
             text="Adakh, located in the northernmost region of India, 
             is a high-altitude desert renowned for its breathtaking
              landscapes, serene monasteries, and unique cultural heritage. 
              Formerly falling in the state of Jammu & Kashmir, Ladakh was
               administered a union territory on 31st October 2019. Extending 
               from the Siachen Glacier to the main Great Himalayas, Ladakh is 
               a land like no other. The region is a riot of intricate murals, 
               fluttering prayer flags, and whitewashed stupas, with red-robed 
               monks adding to its vibrant cultural tapestry. Dominated by dramatic 
               landscapes, Ladakh is known as the world's coldest desert."
               img1={ImageLeh1}
               img2={ImageLeh2}
            />
            <DestinationData 
            className="first-des-reverse"
             heading="Havelock Island"
             text="Havelock Island, situated in the Andaman and Nicobar archipelago of India,
              is a tropical paradise renowned for its stunning natural beauty and pristine beaches.
               Located about 40 kilometres northeast of the capital city, Port Blair, Havelock Island 
               is the largest among the islands that form the Ritchie's Archipelago. Its strategic 
               location in the Bay of Bengal adds to its allure and accessibility."
               img1={ImageLeh3}
               img2={ImageLeh4}
            />
            <DestinationData 
            className="first-des"
             heading="Amber Palace"
             text="One of the top tourist attractions of Jaipur, the huge Amer Palace Fort sits atop
              a small hill, and is located at a distance about 11 km from the main city. 
              The magnificent Amer Fort is an extensive palace complex that has been built with pale 
              yellow and pink sandstone, and with white marble. The fort is divided into four main sections 
              that are graced with their own courtyards."
               img1={ImageLeh5}
               img2={ImageLeh6}
            />
            <DestinationData 
            className="first-des-reverse"
             heading="Jaisalmer"
             text="Jaisalmer nicknamed The Golden city, is a city in the Indian state of Rajasthan, 
             located 575 kilometres (357 mi) west of the state capital Jaipur. It is the administrative 
             headquarters of Jaisalmer District. Before Indian independence, the town served as the capital 
             of the Jaisalmer State, ruled by the Bhati Rajputs. Jaisalmer stands on a ridge of yellowish 
             sandstone and is crowned by the ancient Jaisalmer Fort. This fort contains a royal palace and 
             several ornate Jain temples. Many of the houses and temples of both the fort and of the town below
              are built of finely sculptured yellow sandstone. The town lies in the heart of the Thar Desert 
              (the Great Indian Desert) and has a population, including the residents of the fort, of about 78,000.
               Jaisalmer ranked 9th on Booking.com's Top 10 The Most Welcoming cities in the world. It is the only
                Indian city on the list."
               img1={ImageLeh7}
               img2={ImageLeh8}
            />
        </div>
    )
}

export default Destination
