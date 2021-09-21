import Footer from "../../App/Footer/Footer";
import { Alienship } from "./Components/images/alien";
import { ContactStyles, FormContainer } from "./ContactPage.style";

const ContactPage = () => {
  return ( <>
    <Footer/>
    <ContactStyles>
      <FormContainer>
        <div className="imageContainer">
          {Alienship}
        </div>
        <h1 className="form-header">CONTACT</h1>
        
        <form className="contact-form"
          action="https://formsubmit.co/27349118230b4e3485bd1f210c8efaa9" 
          method="POST"
          >
          <textarea type="text" name="message" required placeholder="message" rows="4" cols="50"/>
          <input type="email" name="email" required placeholder="Type Your Email"/>
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_next" value="https://portfolio-jordan-v2.netlify.app/"></input>

          <button class="contact-form-btn" type="submit">
            Send
          </button>
        </form>

      </FormContainer>
    </ContactStyles>
    </>
   );
}
 
export default ContactPage;