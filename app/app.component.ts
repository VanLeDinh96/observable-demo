import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators/delay';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private init$: Observable<any>;

  public ngOnInit() {
    const users = [
      {
        id: 'ddfe3653-1569-4f2f-b57f-bf9bae542662',
        username: 'tiepphan',
        firstname: 'tiep',
        lastname: 'phan'
      },
      {
        id: '34784716-019b-4868-86cd-02287e49c2d3',
        username: 'nartc',
        firstname: 'chau',
        lastname: 'tran'
      }
    ];

    const observer = {
      next: value => console.log(value),
      error: err => console.error(err),
      complete: () => console.log('completed')
    };

    // const usersVm = users.map(user => {
    //   return {
    //     ...user,
    //     fullname: `${user.firstname} ${user.lastname}`
    //   };
    // });

    // from(users).pipe(
    //   map(data => {
    //     console.log('inside map ', data);
    //     return data;
    //   })
    // ).subscribe(observer);

    merge(of(users[0]).pipe(delay(2000)), of(users[1]).pipe(delay(4000))).pipe(
      map(user => ({
        ...user,
        fullName: `${user.firstname} ${user.lastname}`
      }))
    ).subscribe(observer);
  }
}
