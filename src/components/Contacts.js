// import satoru_gojo2 from "../assets/satoru_gojo2.jfif"

const Contacts = () => {
    return ( 
        <main className="main-blocks">
            <h1 className="space-top">Contact</h1>
            <section className="second-section d-flex">
                <div className="socials col-4">
                    <h4>Contactez moi sur les réseaux sociaux</h4>
                    <div className="links">
                        <a href="https://www.instagram.com/__mathieu__koro__/" target="_blank" rel="noopener noreferrer">Instagram</a><br /><br />
                        <a href="https://twitter.com/HackermanKoro" target="_blank" rel="noopener noreferrer">Twitter</a><br /><br />
                        mon @mail: <br />
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer">cyrmathieu.gda@gmail.com</a><br /><br />
                        mon numéro de téléphone : <br />
                        <button disabled="disabled" id="link-like-button">+33 06 44 94 73 87</button>

                    </div>
                </div>
                <div className="col-2">
                    <p>
                        Ou alors
                    </p>
                </div>
                <div className="col-4 message">
                    <h4>Envoyez moi un message</h4>
                    <fieldset>
                        <form>
                            <input type="text" name="full_name" id="fullName" className="formulaire" placeholder="Nom complet *" />
                            <input type="text" name="phone" id="phone" className="formulaire" placeholder="Numéro de téléphone *" />
                            <input type="text" name="mail_adress" id="mailAdress" className="formulaire" placeholder="@email *" />
                            <input type="text" name="mail_object" id="mailObject" className="formulaire" placeholder="Objet du messge *"/>
                            <textarea name="message" id="mess" cols="30" rows="5" placeholder="Votre message *" />
                            <p className="not-working-yet">Pour des raisons personnelles, cette n'est pas encore disponible</p>
                            <button type="submit" disabled="disabled" id="submit-button">
                                <p>Envoyer !</p>
                            </button>
                        </form>
                    </fieldset>
                </div>
            </section>
        </main>
    );
}
 
export default Contacts;