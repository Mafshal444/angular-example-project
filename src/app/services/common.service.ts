import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() { }
  list(){
    return [
      "Hamza", "Bilal"
    ]
  }
}
