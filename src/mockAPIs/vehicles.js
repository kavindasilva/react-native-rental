/**
 * vehicle table mock data
 */

export function findAll() {
    return createPromise(vehicles);
}

export function findById(id) {
    return vehicles.find(vehicle => vehicle.id === id);
}


export function findByBrand(brand) {
    return vehicles.filter(vehicle => vehicle.brand === brand);
}


// @TODO: create a common method to return promises for all mocked APIs
const PROMISE_TIMEOUT_MS = 500;
function createPromise(response) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(response);
            // reject('someError')
        }, PROMISE_TIMEOUT_MS)
    });
}

var ID_COUNTER = 0;
function createVehicle(brand, model, YoM, transmission) {
    // @TODO: case-sensitive
    ID_COUNTER++;

    return {
        'id': ID_COUNTER,
        'brand': brand,
        'model': model,
        'yom': YoM,
        'transmission': transmission
    };
}

var vehicles = [
    createVehicle('Toyota', 'Corolla', 2000, 'auto'),
    createVehicle('Nissan', 'Sunny', 1999, 'manual'),
    createVehicle('Toyota', 'Corolla', 2002, 'auto'),
    createVehicle('Suzuki', 'Alto', 2020, 'manual'),
];
