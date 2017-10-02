import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../service/validate.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private validate:ValidateService) { }

  ngOnInit() {
  }

}
