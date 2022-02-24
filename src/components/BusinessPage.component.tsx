import {Business} from "../store/business/models/business";
import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

interface Props {
    businessBulkAdd: (businesses: Business[]) => void;
    getBusinessById: (business: string) => void;
    data: Business[];
}

const BusinessPageComponent = (props: Props) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const {data} = props;

    if (!data.length) {
        return <div>No data</div>;
    }
    const business = data.find((business: Business) => business.id === id);

    if (!business) {
        window.location.href = '/404';

        return null;
    }

    const nearbyPlaces = data.filter((_business: Business) => _business.address.zip === business.address.zip);

    const renderBusinessAddress = (_business: Business = business, isInline: boolean = false) => {
        const {
            number,
            street,
            zip,
            city,
            country,
        } = _business.address;

        if (isInline) {
            return `${number} ${street} ${city} ${country} ${zip}`
        }

        return (
            <>
                <p>{number} {street}</p>
                <p>{city} {country} {zip}</p>
            </>
        );
    };

    const renderNearbyPlaces = () => {
        if (!nearbyPlaces || !nearbyPlaces.length) {
            return (<div>
                No places
            </div>)
        }

        return nearbyPlaces.map((business: Business) => (
            <li className="list-group-item d-flex justify-content-between"
                key={business.id}><span>{business.name}</span> <span>{renderBusinessAddress(business, true)}</span></li>
        ));
    };

    return (
        <div className='business'>
            <div className="row">
                <div className="col mb-3">
                    <div className="business-cover"
                         style={{
                             backgroundImage: `url('${business.image}')`
                         }}>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <h2>Address</h2>
                            {renderBusinessAddress()}
                        </div>
                        <div className="col">
                            <h2>Contact</h2>
                            <p>{business.phone}</p>
                            <p>{business.email}</p>
                        </div>
                    </div>
                </div>
                <div className="col bg-white p-3">
                    <h2>Nearby Places</h2>
                    <ul className="list-group">
                        {renderNearbyPlaces()}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BusinessPageComponent;