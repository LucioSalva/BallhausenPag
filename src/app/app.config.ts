import { ApplicationConfig  } from "@angular/core";
import { provideRouter, withViewTransitions } from "@angular/router";

import { routes } from "./app-routing.module";
import { provideAnimations } from "@angular/platform-browser/animations"
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(
            routes,
            withViewTransitions()
        ),
        provideAnimations(),
        provideHttpClient()
    ]
};