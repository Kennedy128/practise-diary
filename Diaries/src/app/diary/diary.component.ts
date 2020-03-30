import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  goals:Diary[] = [
    new Diary(1, 'Waking up early in the morning', 'so as to attend the morning stand up in our respective groups',new Date(2020,3,14)),
    new Diary(2,'attending morning standups','so as to be given instructions',new Date(2020,4,9)),
    new Diary(3,'watching the television','so as to get the Corona update',new Date(2017,5,12)),
    new Diary(4,'cooking breakfast','so as to gain energy to do the Ip',new Date(2014,0,18)),
    new Diary(5,'covering the days content','so as to gain knowledge',new Date(2016,5,14)),
    new Diary(6,'talking a walk','so as to relax my mind from the days work',new Date(2016,3,14)),
    
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
