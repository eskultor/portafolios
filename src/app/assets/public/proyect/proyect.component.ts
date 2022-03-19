import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit 
{
  public proyectos = 
  [
    {id:1, title:"Css", description:"Proyecto echos con hmtl y css" ,img:"https://cdn.pixabay.com/photo/2016/11/19/23/00/css3-1841590_960_720.png"},
    {id:2,title:"Javascript",description:"Proyectos echos con javascript",img:"https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"},
    {id:3,title:"Angular",description:"Proyectos echos con framework",img:"https://media.istockphoto.com/illustrations/balloons-carries-laptop-with-word-angular-illustration-id1367763382?s=612x612"},
    {id:4,title:"GameMarketStudio",description:"Proyectos echos en game market studio 2d",img:"https://wagon-wheel.yoyogames.com/sites/5d75794b3c84c70006700381/theme/images/og/banner_yoyo.png?1640168586"},
    {id:5,title:"Blender",description:"Proyectos echos con blender",img:"https://www.nicepng.com/png/detail/799-7992527_blender-logo-blender-3d.png"}
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
