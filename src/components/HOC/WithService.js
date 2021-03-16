import React from 'react';
import {ServiceConsumer} from '../ServiceContext/ServiceContext'

const withService = () => (Wrapped) => {

    return (props) => {
        return (
            <ServiceConsumer>
                {
                    (service) => {
                        return (
                            <Wrapped {...props}
                                     service={service}/>
                        )
                    }
                }
            </ServiceConsumer>
        )
    }
};

export default withService;