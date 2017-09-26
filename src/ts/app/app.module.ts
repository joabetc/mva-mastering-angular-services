import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { Logger } from "./services/logger";
import { Colors } from "./services/colors";

import "../../scss/styles.scss";

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
    providers: [ Logger, Colors ],
})
export class AppModule { }
