import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {ISession} from "../shared/event.model"
@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'
})
export class SessionListComponent implements OnChanges{
    @Input() sessions: ISession[]
    @Input() filterBy: string
    visibleSessions: ISession[] = []

    ngOnChanges(changes: SimpleChanges): void {
        console.log(0, changes)
        if(this.sessions) {
            this.filterSessions(this.filterBy);
        }
    }
    filterSessions(filter) {
        this.visibleSessions = filter === 'all'
            ? this.sessions.slice(0)
            : this.sessions.filter(session => {return session.level.toLocaleLowerCase() === filter});
        console.log(filter, this.visibleSessions)
    }

}