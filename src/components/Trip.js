import "./Trip.css"
import TripData from "./TripData";
import Trip1 from "../assets/taj.jpg"
import Trip2 from "../assets/resikesh.jpeg"
import Trip3 from "../assets/otty.jpeg"
import Trip4 from "../assets/Delhi.webp"
function Trip(){
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover 
        unique Destination 
        using Google Map</p>
        <div className="tripcard">
            <TripData
              image={Trip1}
              heading=" Trip In Taj Mahal"
              text="he city of Agra is mostly visited for the beautiful Taj Mahal, 
              but there are many more grand monuments worth seeing when you travel to
               this historic city. Agra was ruled by Mughal dynasty for a long period."
            />
             <TripData
              image={Trip2}
              heading=" Trip In Rishikesh"
              text="Rishikesh is a city in India’s northern state of Uttarakhand,
               in the Himalayan foothills beside the Ganges River. The river is 
               considered holy, and the city is renowned as a center for studying
                yoga and meditation. "
            />
             <TripData
              image={Trip3}
              heading=" Trip In Ooty"
              text="Ooty (short for Udhagamandalam) is a resort town in the Western Ghats  
              mountains, in southern India's Tamil Nadu state. Founded as a British Raj summer
               resort, it retains a working steam railway line. Other reminders of its color."
            />
             <TripData
              image={Trip4}
              heading="Trip In Delhi"
              text="Delhi, India’s capital territory, is a massive metropolitan area in the country’s north.
               In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a 
               symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. "
            />
            
        </div>
    </div>
  )
}

export default Trip;
