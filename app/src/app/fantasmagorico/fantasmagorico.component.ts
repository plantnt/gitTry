import { Component } from '@angular/core';

@Component({
  selector: 'app-fantasmagorico',
  templateUrl: './fantasmagorico.component.html',
  styleUrls: ['./fantasmagorico.component.css']
})
export class FantasmagoricoComponent {
ghostoName: any;
ghostoHeight: any;
ghostoAge: any;

nameShow: any;
ageShow: any;
heightShow: any;

submitAction(){
this.nameShow=this.ghostoName;
this.ageShow=this.ghostoAge;
this.heightShow=this.ghostoHeight;
}
}
