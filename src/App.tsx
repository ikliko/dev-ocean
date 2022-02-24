import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {BrowserRouter as Router} from "react-router-dom";


import {AppState} from './store/rootStore';
import {bulkAddBusiness, getBusinessById} from "./store/business/BusinessActions";
import AppRouter from "./AppRouter";
import HeaderComponent from "./components/Header.component";
import {Business} from "./store/business/models/business";


interface AppProps {
    businessBulkAdd: (businesses: Business[]) => void;
    getBusinessById: (businessId: string) => void;
}

const mapStateToProps = (state: AppState) => ({
    data: state.businessReducer.data,
    selectedBusiness: null
});

const mapDispatchToProps = (dispatch: Dispatch): AppProps => ({
    businessBulkAdd: (businesses: Business[]) => dispatch(bulkAddBusiness(businesses)),
    getBusinessById: (businessId: string) => dispatch(getBusinessById(businessId)),
});

class App extends Component<AppProps, AppState> {
    componentDidMount() {
        const {businessBulkAdd} = this.props as AppProps;

        fetch("https://api.jsonbin.io/b/60215a7906934b65f530333a")
            .then(res => res.json())
            .then(
                (result) => {
                    businessBulkAdd(result);
                },

                (error) => {

                }
            )
    }

    render(): JSX.Element {
        return (
            <>
                <HeaderComponent/>

                <Router>
                    <AppRouter {...this.props} />
                </Router>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);