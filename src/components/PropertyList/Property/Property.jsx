import './Property.css';
import PropertyImage from "./PropertyImage/PropertyImage"

const Property = ({
    image,
    bedrooms,
    bathrooms,
    address,
    rent,
    surface,
    available,
    date,
    type,
}) => {
    return (  
        <div className="property-card" 
            style={{opacity: !available ? "0.5" : "1"}}
        >
            <PropertyImage image={image}>
                property details
            </PropertyImage>    
            <div> Property Attributes </div>
        </div>
    );
};
 
export default Property;