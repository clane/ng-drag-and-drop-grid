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
  @ViewChild('cell3', {static:true }) cell3:ElementRef;
  @ViewChild('cell4', {static:true }) cell4:ElementRef;
  @ViewChild('cell5', {static:true }) cell5:ElementRef;
  @ViewChild('cell6', {static:true }) cell6:ElementRef;
  @ViewChild('cell7', {static:true }) cell7:ElementRef;
  @ViewChild('cell8', {static:true }) cell8:ElementRef;
  @ViewChild('dragObj', {static:true }) dragObj:ElementRef;

  dragObjLabel:string;

 

  ngOnInit() {

    this.dragObjLabel = "Hi I'm the drag object"; 
    
  }


  allowDrop($event) {
    $event.preventDefault();
  }

  drag($event) {
    $event.dataTransfer.setData("text", $event.target.id);
  }

  drop($event) {
    $event.preventDefault();
    var data = $event.dataTransfer.getData("text");
    $event.target.appendChild(document.getElementById(data));
  }
  

  

  handleKeydownOnGridcells($event, cellNumber: number){
    if($event.keyCode === 39){//right arrow
      if(cellNumber === 1){
        this.cell2.nativeElement.focus();
        this.dragObjLabel = "dropped in cell 2";
      }
      if(cellNumber === 2){
        this.cell3.nativeElement.focus();
        this.dragObjLabel = "dropped in cell 3";
      }
      if(cellNumber === 3){
        this.cell4.nativeElement.focus();
        this.dragObjLabel = "dropped in cell 4";
      }
      if(cellNumber === 4){
        this.cell5.nativeElement.focus();
        this.dragObjLabel = "dropped in cell 5";
      }

      if(cellNumber === 5){
        this.cell6.nativeElement.focus();
        this.dragObjLabel = "dropped in cell 6";
      }
      if(cellNumber === 6){
        this.cell7.nativeElement.focus();
        this.dragObjLabel = "dropped in cell 7";
      }
      if(cellNumber === 7){
        this.cell8.nativeElement.focus();
        this.dragObjLabel = "dropped in cell 8";
      }
      if(cellNumber === 8){
        this.cell1.nativeElement.focus();//cycling behavior
        this.dragObjLabel = "dropped in cell 1";
      }
     
    }

    if($event.keyCode === 37 ){//left arrow
      if(cellNumber === 1){
        this.cell8.nativeElement.focus();//cycling behavior
        this.dragObjLabel = "dropped in cell 8";
      }
      if(cellNumber === 2){
        this.cell1.nativeElement.focus();
        this.dragObjLabel = "dropped in cell 1";
      }
      if(cellNumber === 3){
        this.cell2.nativeElement.focus();
        this.dragObjLabel = "dropped in cell 2";
      }
      if(cellNumber === 4){
        this.cell3.nativeElement.focus();
        this.dragObjLabel = "dropped in cell 3";
      }

      if(cellNumber === 5){
        this.cell4.nativeElement.focus();//cycling behavior
        this.dragObjLabel = "dropped in cell 4";
      }
      if(cellNumber === 6){
        this.cell5.nativeElement.focus();
        this.dragObjLabel = "dropped in cell 5";
      }
      if(cellNumber === 7){
        this.cell6.nativeElement.focus();
        this.dragObjLabel = "dropped in cell 6";
      }
      if(cellNumber === 8){
        this.cell7.nativeElement.focus();
        this.dragObjLabel = "dropped in cell 7";
      }
      
    } 

  }

  handleKeydownOnDragObject() { 
    this.cell1.nativeElement.focus();
  }


  moveContentWithFocus(cellNumber: number) {

    
    if(cellNumber === 1){
      this.renderer.appendChild(this.cell1.nativeElement, this.dragObj.nativeElement);
    }
    
    if(cellNumber === 2){
      this.renderer.appendChild(this.cell2.nativeElement, this.dragObj.nativeElement);
    }
    if(cellNumber === 3){
      this.renderer.appendChild(this.cell3.nativeElement, this.dragObj.nativeElement);
    }
    if(cellNumber === 4){
      this.renderer.appendChild(this.cell4.nativeElement, this.dragObj.nativeElement);
    }

    if(cellNumber === 5){
      this.renderer.appendChild(this.cell5.nativeElement, this.dragObj.nativeElement);
    }
    
    if(cellNumber === 6){
      this.renderer.appendChild(this.cell6.nativeElement, this.dragObj.nativeElement);
    }
    if(cellNumber === 7){
      this.renderer.appendChild(this.cell7.nativeElement, this.dragObj.nativeElement);
    }
    if(cellNumber === 8){
      this.renderer.appendChild(this.cell8.nativeElement, this.dragObj.nativeElement);
    }

  }

}
