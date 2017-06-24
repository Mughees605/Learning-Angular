import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service'
import { AccountService } from '../account.service'
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
 
 constructor(private log:LoggingService, private accountService:AccountService){}
   
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addCount(accountName,accountStatus)
  }
}
