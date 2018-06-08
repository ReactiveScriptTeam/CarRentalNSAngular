import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";

import { Car } from "../shared/car.model";
import { CarService } from "../shared/car.service";

/* ***********************************************************
* This is the item details component in the master-detail structure.
* This component retrieves the passed parameter from the master list component,
* finds the data item by this parameter and displays the detailed data item information.
*************************************************************/
@Component({
    selector: "CarDetail",
    moduleId: module.id,
    templateUrl: "./car-detail.component.html"
})
export class CarDetailComponent implements OnInit {
    car: Car;

    constructor(
        private service: CarService,
        private route: ActivatedRoute,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.car = this.service.getCarById(this.route.snapshot.params["id"])
    }

    onBackButtonTap(): void {
        this.router.backToPreviousPage();
    }
}
