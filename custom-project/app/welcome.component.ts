import{Component} from '@angular/core';

@Component({
    moduleId: module.id,
    template: `<h3>{{title}}</h3>`

})

export class WelcomeComponent {
    title: string = 'Welcome';
}
