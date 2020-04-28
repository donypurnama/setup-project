import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Datatable from '../_components/Datatable';

const user = props => {

    return(
        <div>
            <h1>Table User</h1>
            <Datatable />
        </div>
    )
}

export default user;