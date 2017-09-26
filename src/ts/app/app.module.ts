import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { Logger, simpleLogger } from "./services/logger";
import { Colors } from "./services/colors";
import { ColorsImmutable } from "./services/colors-immutable";

import "../../scss/styles.scss";

const useImmutable = false;

const colorsFactory = (logger: Logger) => {

    if (useImmutable) {
        return new ColorsImmutable(logger);
    } else {
        return new Colors(logger);
    }
}

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
    providers: [ 
        { provide: Logger, useValue: simpleLogger }, 
        { provide: Colors, useFactory: colorsFactory, deps: [ Logger ] } 
    ],
})
export class AppModule { }
