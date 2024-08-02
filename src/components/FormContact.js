import "./FormContact.css"

function FormContact(){
  return (
    <div className="form-container">
      <h1>Send a message to us!</h1>
      <form>
        <input placeholder="Name...."/>
        <input placeholder="Email...."/>
        <input placeholder="MobileNo...."/>
        <input placeholder="Subject...."/>
        <textarea placeholder="Message...." rows="4"/>
        <button>Send Message</button>
      </form>
    </div>
  )
}

export default FormContact
