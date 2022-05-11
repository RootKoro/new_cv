// import satoru_gojo2 from "../assets/satoru_gojo2.jfif"

const Contacts = () => {
    return ( 
        <main className="main-blocks">
            <h1 className="space-top">Contact</h1>
            <section className="second-section d-flex">
                <div className="socials col-4">
                    <h4>I'm on social medias</h4>
                    <div className="links">
                        <br /> <br /> <br />
                        Like 
                        <a href="https://www.instagram.com/__mathieu__koro__/" target="_blank" rel="noopener noreferrer">Instagram</a><br /><br />
                        Or 
                        <a href="https://twitter.com/HackermanKoro" target="_blank" rel="noopener noreferrer">Twitter</a><br /><br />
                        And you can also mail me! <br /><br /> mail address :
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer">cyrmathieu.gda@gmail.com</a><br /><br />
                        Or call me here : 
                        <button disabled="disabled" id="link-like-button">+33 6 44 94 73 87</button>

                    </div>
                </div>
                <div className="col-2">
                    <p>
                        Or
                    </p>
                </div>
                <div className="col-4 message">
                    <h4>I Make it easy, text me here!</h4>
                    <fieldset>
                        <form>
                            <input type="text" name="full_name" id="fullName" className="formulaire" placeholder="Fullname *" />
                            <input type="text" name="phone" id="phone" className="formulaire" placeholder="Phone number *" />
                            <input type="text" name="mail_adress" id="mailAdress" className="formulaire" placeholder="mail address *" />
                            <input type="text" name="mail_object" id="mailObject" className="formulaire" placeholder="Title *"/>
                            <textarea name="message" id="mess" cols="30" rows="5" placeholder="Message *" />
                            <p className="not-working-yet">Available soon !</p>
                            <button type="submit" disabled="disabled" id="submit-button">
                                <p>S E N D !</p>
                            </button>
                        </form>
                    </fieldset>
                </div>
            </section>
        </main>
    );
}
 
export default Contacts;