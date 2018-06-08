import { Injectable, NgZone } from "@angular/core";
import { Observable, throwError, of } from "rxjs";

import { Car } from "./car.model";

import { cars } from "./cars-data";

@Injectable()
export class CarService {
    private _cars: Array<Car> = [];

    constructor() {
        this._cars = cars.cars;
    }

    getCarById(id: string): Car {
        if (!id) {
            return;
        }

        return this._cars.filter((car) => {
            return car.id === id;
        })[0];
    }

    load(): Observable<any> {
        return of(this._cars);
    }
}
