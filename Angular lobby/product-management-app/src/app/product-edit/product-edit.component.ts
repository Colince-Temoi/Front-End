import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {

  id:number=0;

  /* Injecting ActivatedRoute service 
  - It provides two different properties: paramMap and Params which contain Route Parameter.
  -  paramMap
  -  params
  */
  constructor(private activatedRoute: ActivatedRoute){
  }

  ngOnInit(){
// Accessing route parameters. There are two ways: using snapshots and subscribing to an observable
    /* This is the case of non-observable
    - Nothing but using snapshot
    - Directly we can access the route parameter without subscribing to any Observable.
    */
    const idString= this.activatedRoute.snapshot.paramMap.get('id');

    if (idString !== null) {
      this.id = +idString;
  } else {
      // Handle the case when 'id' is null, such as providing a default value or throwing an error.
      // For example:
      throw new Error("ID parameter is null.");
  }
    // console.log(typeof(this.id));
    

    // console.log(this.id);

     /* The parameter name that you are actually defining while configuring your parameterized route is what excactly you need to use while fetching the parameter value.*/

    // console.log(this.activatedRoute.snapshot.paramMap.has('id'));
    // console.log(this.activatedRoute.snapshot.paramMap.has('xyz'));
    
  /* Alternarive 2: using params
  - It actually returns you an array.
  - Actually we are going to use named index to access the parameter(s) 
   */
    this.id = this.activatedRoute.snapshot.params['id'];
    // console.log(this.id);

     /* This is the case of observable */
     this.activatedRoute.paramMap.subscribe(obj=>{
      this.id=+obj.get('id')!;
      
     })

     console.log(this.id);

     this.activatedRoute.params.subscribe(obj=>{
      this.id=obj['id'];
      // console.log(this.id);
      
     })
    //  console.log(this.id);
    
  }

  // ngOnInit(){
  //   console.log(this.activatedRoute.paramMap);
  //   console.log(this.activatedRoute.params);
  //   console.log(this.activatedRoute.paramMap.subscribe(
  //     data =>{
  //       this.id=data.get('id');
  //     }
  //   ));
  //   console.log(this.id);
    
  //   console.log(this.activatedRoute.params);
    
    
  // }
}
