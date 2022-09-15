import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
S:Song[]=[
  {Song:"Sar sukhanchi shravani",singer:"Bela shende",release:2002,totalsongs:40},
  {Song:"Sairat",singer:"Ajay-Atul",release:2003,totalsongs:80},
  {Song:"Mai agar kahu",singer:"Sonu nigam",release:2002,totalsongs:120},
  {Song:"Meri avaj hi meri pehchan hai",singer:"Lata Mangeshkar",release:2000,totalsongs:100},
  {Song:"Maza kolhapur",singer:"Avdhut Gupte",release:2005,totalsongs:20},
 

]
  constructor() { }

  ngOnInit() {
  }

}
class Song{
  Song:string;
 
  release:number;
  singer:string;
  totalsongs:number;
}
