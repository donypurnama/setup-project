import React from 'react';

import MainLayout from '../index';

//third party
import 'antd/lib/spin/style/css';
import { Spin } from 'antd';

const loading = props => {

    return(
        <Spin tip="Loading...">
            <MainLayout />
        </Spin>
    )
}

export default loading;