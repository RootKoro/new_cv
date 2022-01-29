import React from 'react';
import "./../styles/gda_footer.css"
const Footer = () => {
    const company_name = "Galsen Digital Agency"
    const company_link = "https://www.galsendigitalagency.com"
    const current_year = new Date().getFullYear();
    return (
        <div id="gda_footer">
            Proudly propulsed by <a href={company_link} target="blank"> {company_name} 🚀 </a> {current_year}
        </div>
    );
}
export default Footer;
