import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit
{
  public proyectos = 
  [
    {id:"1",title:"Css",description:"Proyecto echos con hmtl y css",img:"https://cdn.pixabay.com/photo/2016/11/19/23/00/css3-1841590_960_720.png"},
    {id:"2",title:"Javascript",description:"Proyectos echos con javascript",img:"https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"},
    {id:"3",title:"Angular",description:"Proyectos echos con framework",img:"https://media.istockphoto.com/illustrations/balloons-carries-laptop-with-word-angular-illustration-id1367763382?s=612x612"},
    {id:"4",title:"GameMarketStudio",description:"Proyectos echos en game market studio 2d",img:"https://wagon-wheel.yoyogames.com/sites/5d75794b3c84c70006700381/theme/images/og/banner_yoyo.png?1640168586"},
    {id:"5",title:"Blender",description:"Proyectos echos con blender",img:"https://www.nicepng.com/png/detail/799-7992527_blender-logo-blender-3d.png"}
  ];
  public dato;
  public status:boolean=false;

  constructor(private _aRoute:ActivatedRoute){ }

  ngOnInit(): void 
  {
    this._aRoute.params.subscribe(
      params=>
      {
        for(let i =0;i<this.proyectos.length;i++)
        {
          //aqui en la clase despues de indexof el params esta si en el indice (params.id)
          //y me daba error con el indice no me da error en la consola pero si en la de gogle 
          if(this.proyectos[i].id.indexOf(params[i].id)== 0)
          {
            this.dato=this.proyectos[i].id;
            this.status = true;
            console.log(this.dato[i].id);
            break
          }
          else
          {
            this.status = false;
          }
        }
      },err=>{console.log(err);}
    )
  }
}
