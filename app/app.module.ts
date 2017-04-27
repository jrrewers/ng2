import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {EventsAppComponent} from "./events-app.component";
import {NavBarComponent} from "./nav/navbar.component"
import {ToastrService} from "./common/toastr.service"
import {appRoutes} from './routes'
import {RouterModule} from "@angular/router"
import {Error404Component} from "./errors/error.component"
import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent
} from './events/index'
import {AuthService} from "./user/auth.service"
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {CollapsibleWellComponent} from "./common/collapsible-well.component";
import {DurationPipe} from "./events/shared/duration.pipe";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
        EventListResolver,
        AuthService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {
}
// current component is passed as argument to useValue function, so properties and methods of current component can be accessed
function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm('Not saved, sure?')
    } else {
        return true
    }
}