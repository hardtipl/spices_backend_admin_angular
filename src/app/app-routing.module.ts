import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './content/brand/brand.component';
import { ProductComponent } from './content/product/product.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path:'',component:BrandComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
