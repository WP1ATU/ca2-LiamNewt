import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ItemApiService } from '../itemsapi-service';

@Component({
  selector: 'app-list-items',
  imports: [],
  templateUrl: './list-items.html',
  styleUrl: './list-items.css',
})
export class ListItems {
  public api = inject(ItemApiService);

  constructor(private list: ItemApiService){
    this.api.getItems();
  }

  delete(id:string){
    this.api.deleteItem(id);
  }


}
