import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProduct(){

return [
  
  {"id":1,
    "name" : "tv",
    "price" : 12345,
    "feedback" : "good"
  },

  {"id":2,
    "name" : "AC",
    "price" : 12345,
    "feedback" : "good"
  },

  {"id":3,
    "name" : "Cooler",
    "price" : 12345,
    "feedback" : " not good"
  },

  
  {"id":4,
    "name" : "Laptop",
    "price" : 123456,
    "feedback" : " Best"
  }






  ];

  }

  constructor() { }
}
