import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  slideIndex = 1;
  //@ViewChild("myslide",{read:ElementRef}) myslide:ElementRef;
  parent = document.getElementsByClassName("mySlides");
  

 
  public newsdata:any[];
  public newschunk:any=[[]];

  constructor(private renderer:Renderer2) {
   }

  ngOnInit() {
    //this.changecol.send("yes");
    this.getTopNews();
    //console.log(this.newsdiv);
    //console.log(this.parent[0]); 
  

  }
  
  showSlides(n)
  {
      var i;
      if(n>this.parent.length)
      {
        this.slideIndex = 1;
      }
      if(n<1)
      {
        this.slideIndex = this.parent.length;
      }
      for(i=0;i<this.parent.length;i++)
      {
        this.renderer.setStyle(this.parent[i],'display','none');
      }
      this.renderer.setStyle(this.parent[this.slideIndex-1],'display','flex');
      console.log(this.parent);
    

  }
  plusSlides(n)
  {
    this.showSlides(this.slideIndex += n);
  }
  getTopNews() {
    
      this.newsdata=[
    {
      title: 'Card Title 1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 5',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 6',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 7',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 8',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 9',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
  ];
      this.newschunk = this.getChunks(this.newsdata,3);
      this.showSlides(this.slideIndex);
  }

  getChunks(arr,size)
  {
    let chunkarray = [];
    for(let i=0;i<arr.length;i+=size)
    {
      chunkarray.push(arr.slice(i,i+size));
    }
    return chunkarray;
  }
}
