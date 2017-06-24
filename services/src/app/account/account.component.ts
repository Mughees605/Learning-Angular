import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../account.service'
import { LoggingService } from '../logging.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {

  constructor(private accountService:AccountService, private loggingService:LoggingService){}

  @Input() account: {name: string, status: string};
  @Input() id: number;


  onSetTo(status: string) {
    this.accountService.updateAccount(this.id,status,"");
  }
}
