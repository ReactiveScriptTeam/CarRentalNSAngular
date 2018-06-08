import { Component, OnDestroy, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ListViewEventData } from "nativescript-ui-listview";

import { Car } from "./shared/car.model";
import { CarService } from "./shared/car.service";

@Component({
    selector: "CarsList",
    moduleId: module.id,
    templateUrl: "./car-list.component.html",
    styleUrls: ["./car-list.component.scss"]
})
export class CarListComponent {
    isLoading: boolean = true;
    cars: Car[];

    constructor(
        private service: CarService,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.cars = this.service.getCars();
        this.isLoading = false;
    }

    onCarItemTap(args: ListViewEventData): void {
        const tappedCarItem = args.view.bindingContext;

        this.router.navigate(["/cars/car-detail", tappedCarItem.id],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });
    }
}
