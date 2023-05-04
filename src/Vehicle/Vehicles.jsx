
import Button from '@mui/material/Button';
import jwt_decode from 'jwt-decode'

import { Navigate } from "react-router-dom";

import AuthService from '../services/AuthService';
import ConfigService from '../services/ConfigService'
import VehicleService from '../services/VehicleService'
import { useEffect, useState } from 'react';

function Vehicles() {
    const [isLoading, setIsLoading] = useState(false);
    const [loadingError, setLoadingError] = useState('');
    const [vehicles, setVehicles] = useState([]);

    const token = AuthService().isUserLoggedIn() && jwt_decode(AuthService().getCurrentToken());

    const loadVehicles = () => {
        setIsLoading(true);

        VehicleService().findAllVehicles().then(vehicles => {
            setVehicles(vehicles);
        }).catch(error =>
            setLoadingError(error)
        ).finally(() =>
            setIsLoading(false)
        );
    }

    useEffect(() => loadVehicles(), [])


    return (
        <>{
            !isLoading ?
                <>
                    {!loadingError ?
                        <div className="vehicle">
                            {
                                vehicles.map(vehicle => <div className="vehicle row" key={vehicle.id}> {vehicle.brand} </div>)
                            }
                        </div>
                        : <div className="error">error {loadingError}</div>
                    }
                </>
                : <div>Loading...</div>
        }</>
    );
}

export default Vehicles;
