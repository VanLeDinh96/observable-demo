import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 5';

  private init$: Observable<any>;

  public ngOnInit() {
    const observer = {
      next: val => console.log(val),
      error: err => console.log(err),
      complete: () => console.log('complete')
    };
    this.init$ = of('hello');
    this.init$.subscribe(observer);
  }
}
