
import { findAll } from '../mockAPIs/vehicles';

function findAllVehicles() {
    return findAll();
}

export default function VehicleService() {
    return {
        findAllVehicles: findAllVehicles,
    }
};
