import { Component } from "@angular/core";

import { Logger } from "./services/logger";

@Component({
    selector: "main",
    template: "<span>{{message}}</span>",
})
export class AppComponent {

    public message: string = "Hello World!";

    constructor(private logger: Logger) {
        this.logger.log(this.message);
    }
}
