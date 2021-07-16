import { Component, OnInit } from '@angular/core';
import {  faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-banner-form',
  templateUrl: './banner-form.component.html',
  styleUrls: ['./banner-form.component.scss']
})
export class BannerFormComponent implements OnInit {
  faInfoCircle = faInfoCircle;

  bannerform = new FormGroup ({
    firstname: new FormControl("", [Validators.required, Validators.minLength(3)]), 
    lastname: new FormControl("", Validators.required), 
    email: new FormControl("", [Validators.required, Validators.email]), 
    phone: new FormControl("", Validators.required), 

  })
  get firstname() {
    return this.bannerform.get("firstname")
  }
  get lastname() {
    return this.bannerform.get("lastname")
  }  
  get email() {
    return this.bannerform.get("email")
  }
  get phone() {
    return this.bannerform.get("phone")
  }  

  onFormSubmit(){
    console.warn(this.bannerform.value)
  }
  constructor() {}

  ngOnInit(): void {
    
  }
}
