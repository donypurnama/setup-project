import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

const useDatatable = props => {
    const dispatch  = useDispatch();
    const {modal}   = useSelector(state => state.datatable);
    
    const openModal = () => {
        dispatch({type: 'OPEN_MODAL'});
    }

    return {
        modal: modal,
        openModal: openModal,
    };
}

export default useDatatable;