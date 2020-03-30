import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  goals:Diary[] = [
    {id:1, name:'walking up in the morning',description:'so as to attend the morning stand up which will be in our groups'},
    {id:2,name:'attending morning stand up',description:'so as to gain instructions'},
    {id:3,name:'prepairing breakfast',description:'to gain enough energy so as to cover the content'},
    {id:4,name:'watching news',description:'so as to get latest corona virus update'},
    {id:5,name:'starting on my Ip',description:'so as to finish it early'},
    {id:6,name:'taking a walk',description:'so as to relax my mind'},
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
