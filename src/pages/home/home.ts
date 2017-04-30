import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'slides.html'
})
export class HomePage {
	slides = [

    {

      title: "Welcome to Donii",

      description: "<h3> WE GET THE STUFF YOU DONATE TO THE PEOPLE WHO NEED IT MOST </h3> <br> A concierge service for the socially conscious workplace.",

      image: "assets/img/donii.png",

    },
	{

      title: "How Donii Works!",

      description: "<h3> 1. CHOOSE </h3> Use the app at the <b>Donii workstation </b> in your workplace to tell Donii what you want to donate. We'll curate a list of local charities that need it. Choose one with a mission that speaks to you.",

      image: "assets/img/choose.jpg",

    },

    {

      title: "How Donii Works!",

      description: "<h3> 2. GIVE </h3> We <b>print out your donation labels </b> right on-site. Label your goods, put them in the Donii box, and let Donii handle the logistics.",

      image: "assets/img/give.jpg",

    },

    {

      title: "How Donii Works!",

      description: "<h3> 3. BENEFIT </h3> Once Donii delivers your donation, the charity will give your items to a person or family in need. You get a personal note and tax receipt with each donation.",

      image: "assets/img/benefits.jpg",

    }

  ];


  constructor(public navCtrl: NavController) {
	
  }

}
