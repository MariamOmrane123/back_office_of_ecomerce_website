import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../shared/services/produit.service';
import { Http } from '@angular/http';
import { Produit } from '../../shared/models/produit';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent{
  produit=new Produit();

  constructor(private http:Http,
    private produitService :ProduitService,
    private route: ActivatedRoute,
    private router: Router) { 
  }

  onSubmit(){
    swal({
      title: "Are you sure?",
      text: "you will change the data of this product!",
      icon: "warning",
      buttons:["concel", true],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! your product has been updated!", {
          icon: "success",
        });
        this.produitService.add(this.produit)
        .subscribe(
          (data)=>{
            this.router.navigate(['gestionProduits/list']);
          },
          (error)=> {
    
          }
        );
      } else {
        swal("Your product data is safe!");
      }
    });
   
  }
}
