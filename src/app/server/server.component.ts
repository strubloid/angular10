import { Component } from '@angular/core';

@Component({
  selector : 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {

  serverId = 10;
  serverStatus = 'offline';

  // This is how to create an arrow property of this component
  getServerStatus = () => {
    return this.serverStatus;
  }

}
