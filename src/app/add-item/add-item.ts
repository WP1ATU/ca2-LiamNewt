import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemApiService } from '../itemsapi-service';

@Component({
  selector: 'app-add-item',
  imports: [FormsModule],
  templateUrl: './add-item.html',
  styleUrl: './add-item.css',
})
export class AddItem {

  make='';
  model='';
  year='';
  image='';

  items=inject(ItemApiService);
  addItem(){
    this.items.addItem(this.make,this.model,this.year,this.image)
  }




  
}
