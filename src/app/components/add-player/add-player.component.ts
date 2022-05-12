import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
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
