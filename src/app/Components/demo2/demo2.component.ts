import { Component, Input, OnInit } from '@angular/core';
interface emp {
  value: string;
  viewvalue: string;
}
@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {
  @Input() message: any;
  constructor() { }

  ngOnInit(): void {
  }
 
 employee: emp[] = [
  { value: '1', viewvalue: 'carrot' },
  { value: '2', viewvalue: 'beans' },
  { value: '3', viewvalue: 'tomato' }
]
}
