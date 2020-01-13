import { Component, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-grid',
  templateUrl: './layout-grid.component.html',
  styleUrls: ['./layout-grid.component.css']
})
export class LayoutGridComponent implements OnInit {

  constructor(private renderer: Renderer2 ) {}

  @ViewChild('cell1') cell1:ElementRef;//ignore syntax highlighting for now, this works
 

  ngOnInit() {

   
    console.log('test');
    console.log(this.cell1);
    console.log(this.cell1.nativeElement);
    this.cell1.nativeElement.focus();
    
  }


}
