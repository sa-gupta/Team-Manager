import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  positions: any = ['Forward', 'Mid-Winger', 'Goal Keeper', 'Right-Winger']

  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    jNumber: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
