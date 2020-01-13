import { Component, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-grid',
  templateUrl: './layout-grid.component.html',
  styleUrls: ['./layout-grid.component.css']
})
export class LayoutGridComponent implements OnInit {

  constructor(private renderer: Renderer2 ) {}

  @ViewChild('cell1', {static:true }) cell1:ElementRef;
  @ViewChild('cell2', {static:true }) cell2:ElementRef;
  currentCell: number;
  
 

  ngOnInit() {

    this.currentCell = 1; 
   
    console.log('test');
    console.log(this.cell1);
    console.log(this.cell1.nativeElement);
    this.cell1.nativeElement.focus();
    
  }

  handleKeydownOnGridcells(event, cellNumber: number){
    if(event.keyCode === 39){//right arrow
      if(cellNumber === 1){
        this.cell2.nativeElement.focus();
      }
     
    }

    if(event.keyCode === 37 ){//left arrow
      if(cellNumber === 2){
        this.cell1.nativeElement.focus();
      }
      
    } 

  }


}
