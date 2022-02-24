import {Business} from "./business";

export const BUSINESS_BULK_ADD = '[BUSINESS][BULK] ADD BUSINESSES';
export const BUSINESS_GET_BY_ID = '[BUSINESS] GET BUSINESS BY ID';

interface BusinessBulkAddAction {
    type: typeof BUSINESS_BULK_ADD;
    data?: Business[]
}

interface BusinessGetByIdAction {
    type: typeof BUSINESS_GET_BY_ID;
    data?: string
}

export type BusinessActionTypes = BusinessBulkAddAction | BusinessGetByIdAction;