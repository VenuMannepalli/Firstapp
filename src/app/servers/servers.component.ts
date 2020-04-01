import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server was created!";
  serverName = "Test";
  //userName = "Venubabu";
  serverCreated = false;
  servers = ['Testserver-1','Testserver-2'];
  constructor() {
    setTimeout(()=>{this.allowNewServer = true},2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus ='Server was created! Name is ' + this.serverName;
    //this.userName = "";
  }
  onUpdateServerName(event: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;

  }
}
