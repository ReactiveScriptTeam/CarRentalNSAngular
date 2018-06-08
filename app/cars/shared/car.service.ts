import { Injectable, NgZone } from "@angular/core";
import { Observable, throwError, of } from "rxjs";

import { Car } from "./car.model";

import { cars } from "./cars-data";

@Injectable()
export class CarService {
    getCarById(id: string): Car {
        if (!id) {
            return;
        }

        return cars.cars.filter((car) => {
            return car.id === id;
        })[0];
    }

    getCars(): Car[] {
        return cars.cars;
    }
}
