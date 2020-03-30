import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {
  newDiary = new Diary(0,"","",new Date());

  constructor() { }

  ngOnInit(): void {
  }

}
