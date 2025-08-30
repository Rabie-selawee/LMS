import Backhome from "./Backhome";
import ContactSection  from "./ContactSection ";
import ContactForm  from "./ContactForm ";
import "./Contact.css"

export default function About() {
  return (
    <div className="contenars">  
<Backhome title={"Contact"}/>
<ContactSection />
<ContactForm />

    </div>
  );
}
