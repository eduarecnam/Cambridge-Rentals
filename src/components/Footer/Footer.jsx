import './Footer.css';
import { Clock } from 'lucide-react';

const Footer = () => {
    /*Define agency opening hours*/
    const openingHour = 9;
    /*define agency closing hours*/
    const closingHour = 17;
    /*Get the current date and time*/
    const now = new Date();
    /*Get the current hour between 0 and 23*/
    const currentHour = now.getHours();
    /*Extract the current day of the week (0 for Sunday, 1 for Monday, etc.)*/
    const currentDay = now.getDay();
    /*Check if the current day is a weekday (Monday to Friday)*/
    const isWeekday = currentDay >= 1 && currentDay <= 5;
    /*Check if the current hour is within the opening hours (hours between 0 and 23*/
    const isOpen = false;
    // isWeekday && currentHour >= openingHour && currentHour < closingHour;
    
    const openElement =(
        <>
            {/*Flex contianer for the opening hours status messages*/}
            <div className="message">
                <Clock  className="icon" />
                {/*Display the opening hours status message*/}
                <span className="status open"> We are open now! </span>
            </div>
            {/*Display the contact information*/}
            <div style={{ marginTop: "0.5rem" }}>
                Call us at: <strong>(555) 123-4567</strong>
            </div>
        </>
    );
    /*Define the closedElement to display when the agency is closed*/
    const closedElement =(
        <>
            {/*Flex contianer for the closed status messages*/}
            <div className="message">
                <Clock className="icon" />
                <span className="status closed"> We are closed now. </span>
            </div>
            {/*Display the Agency opening hours*/}
            <div style={{ marginTop: "0.5rem" }}>
                Opening hours: Monday to Friday, {openingHour}h to {closingHour}h.
            </div>
        </>
    );

    return (  
        <footer className="footer">
            {isOpen ? openElement : closedElement}
        </footer>
    );
};
 
export default Footer;