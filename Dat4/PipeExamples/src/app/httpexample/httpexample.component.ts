import { Component, OnInit, Pipe } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-httpexample',
  template: `<table border="2px">
 
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Mob</th>
        <th>Address</th>
        <th>Company</th>
      </tr>
    <tr *ngFor="let user of users">
      <td>{{ user.name }}</td>
      <td>{{ user.username }}</td>
      <td>{{ user.email }}</td>
      <td>{{user.phone}}</td>
      <td><pre>{{user.address|json}}</pre></td>
      <td><pre>{{user.company|json}}</pre></td>

    </tr>
</table>
  `,
  styles: [
  ]
})
export class HTTPExampleComponent implements OnInit  {
  users:any=[]
  constructor(private httpClient: HttpClient){}

  ngOnInit(){
    this.httpClient.get("https://jsonplaceholder.typicode.com/users").subscribe(data =>{
      console.log(data);
      this.users = data;
    })

    console.log(this.users)
  }


}