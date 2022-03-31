import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brandForm:any
  
  constructor(private fb:FormBuilder,private brand:BrandService) { 
    
    this.brandForm=this.fb.group({
    vbrandName:['', [Validators.required]],
    estatus : ['Active',[Validators.required]]
    
  });
  
}  
  ngOnInit(): void {
  }
  submit() {
    console.log(this.brandForm.value)
   }
}
