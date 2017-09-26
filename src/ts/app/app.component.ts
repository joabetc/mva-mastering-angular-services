import { Component } from "@angular/core";

import { Logger } from "./services/logger";
import { Colors } from "./services/colors";

@Component({
    selector: "main",
    template: `<ul>
        <li *ngFor="let color of colors">{{color}}</li>
    </ul>`,
})
export class AppComponent {

    public colors: string[] = [];

    constructor(private colorsSvc: Colors) {
        this.colorsSvc.addColor("red");
        this.colorsSvc.addColor("white");
        this.colorsSvc.addColor("blue");
        this.colors = this.colorsSvc.getAll();
    }
}
