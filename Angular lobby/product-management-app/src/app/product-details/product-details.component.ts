import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  id:number=0;
  pageNo:number=0;
  color:string='';
  sort:string='';

  constructor(private activatedRoute:ActivatedRoute){
  }

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(data=>{
      this.id=+data.get('id')!;
    })

    this.activatedRoute.queryParams.subscribe(params=>{
      console.log(params);
      
      console.log(params['page']);
      this.color=params['color'];
      this.sort=params['sort'];
      this.pageNo=+params['page'];
      
    })
  }
}
