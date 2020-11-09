import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  // component variable
  componentName  = 'Component List';
  serverCreationStatus = 'No server was created!';
  allowNewServer = false;
  serverName = '';
  username = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  isComponentDisabled = () => {
    return true;
  }

  ngOnInit(): void {

  }

  onCreateServer = () => {
    this.serverCreationStatus = 'Server was created! Name is: ' + this.serverName;
  }

  onUpdateServerName = (event: Event) => {

    this.serverName = (event.target as HTMLInputElement).value;
    console.log(this.serverName);
  }

  usernameValidation = () => {
    return this.username === '';
  }
  restartUsername = () => {
    this.username = '';
  }
}
