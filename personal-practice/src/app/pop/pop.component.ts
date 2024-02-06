import { Component, Inject, Input,Output,EventEmitter,OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.css']
})
export class PopComponent implements OnInit {
  //receive data from paren
  //@Input() data:any[];
 //send data to parent
//  @Output() formDataArrayUpdated=new EventEmitter<any[]>();
 constructor(public dialogRef: MatDialogRef<PopComponent>,@Inject(MAT_DIALOG_DATA) public Data: any[]){
// console.log(this.data);
  console.log(this.Data)
 }
  // constructor(public dialogRef: MatDialogRef<PopComponent>, @Inject(MAT_DIALOG_DATA) public data: any[]) {
  //   this.formDataArray = data;
  // }

  ngOnInit(){
//console.log(this.data);
}
onClose(): void {
  this.dialogRef.close();
}
// updateFormDataArray():void{
  //   this.formDataArrayUpdated.emit(this.data.formDataArray);
   }
