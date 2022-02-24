import {BUSINESS_BULK_ADD, BUSINESS_GET_BY_ID} from './models/actions';
import {Business} from "./models/business";

export const bulkAddBusiness = (businesses: Business[]) => ({
    type: BUSINESS_BULK_ADD,
    data: businesses
});

export const getBusinessById = (id: string) => ({
    type: BUSINESS_GET_BY_ID,
    data: id
});
