import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'starz',
    templateUrl: 'templates/stars.component.html',
    styleUrls: ['css/stars.component.css']

})

export class StarsComponent implements OnChanges {
    @Input() rating: number;
    width: number;
    title: string;

    @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges(): void {
        this.width = 86 * this.rating / 5;
    }

    onClick(): void {
        this.title = 'STARZ';
        this.notify.emit('new rating ' + this.rating);
    }
}
