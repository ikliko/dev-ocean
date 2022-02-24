import React, {Component} from 'react';
import {Business} from "../store/business/models/business";

interface Props {
    businessBulkAdd: (businesses: Business[]) => void;
    getBusinessById: (businessId: string) => void;
    data: Business[];
    selectedBusiness: Business;
}

export default class HomePageComponent extends Component {
    constructor(props: Props) {
        super(props);
    }

    renderTableRows(): JSX.Element | JSX.Element[] {
        const {data, selectedBusiness, getBusinessById} = this.props as Props;

        const openBusiness = (businessId: string) => {
            return () => {
                getBusinessById(businessId);

                window.location.href = '/business/' + businessId
            }
        };

        return data.map((business: Business) => (
            <tr key={business.id} onClick={openBusiness(business.id)}>
                <td>{business.name}</td>
                <td>{business.description}</td>
            </tr>
        ));
    }

    render(): JSX.Element {
        const {data} = this.props as Props;

        return (
            <div className='homepage'>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.renderTableRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}