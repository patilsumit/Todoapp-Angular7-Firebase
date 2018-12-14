import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, Timestamp } from 'rxjs';
import {CrudservicesService} from '../crudservices.service';
import {AuthserviceService} from '../../app/authservice.service';
import { Router } from '@angular/router';

import {AngularFirestoreDocument} from 'angularfire2/firestore';
@Component({
  selector: 'app-mytodoapp',
  templateUrl: './mytodoapp.component.html',
  styleUrls: ['./mytodoapp.component.css']
})
export class MytodoappComponent implements OnInit {

  itemsCollection: AngularFirestoreCollection<Item>;
  itemDocument: AngularFirestoreDocument<Item>;
  items: Observable<Item[]>;
  GetServicesItem:any[];
  
  itemName;
  temp;
  itemCategory;
  itemPriority='Priority';
  itemDescription;
  count=0;
  myId:string;
  searchtext='';    //Search Text BOx ngModel
  filterPr="select";  
  user:firebase.User;

  constructor(private service:CrudservicesService,private _authserviceService:AuthserviceService,
  private navigate:Router) {
    this._authserviceService.getUser().subscribe(user=>{
      this.user=user;
    })  
   
   }
   
  //  myTodoAdd(gInput,gInput1,gInput2,gInput3)
  //  {
  //    const documentId=this.db.createId();  
  //     this.itemsCollection.doc(documentId).set({name:gInput,category:gInput1,priority:gInput2,
  //       description:gInput3,datetime:this.mydatetime,report:this.myreport,id:documentId}); 
  //  }
  myTodoAdd(addTemp)
   {
      this.service.addItem(addTemp,this.itemName,this.itemCategory,this.itemPriority,this.itemDescription,this.count,this.myId);
      
      this.itemName='';
      this.itemCategory='';
      this.itemPriority='';
      this.itemDescription='';
   }
   myTodoDelete(deleteItem : Item)
   {
     this.service.deleteItem(deleteItem);
   }
   myTodoEdit(updateItem,tempUpdate)
   {
    this.itemName=updateItem.name;
    this.itemCategory=updateItem.category;
    this.itemPriority=updateItem.priority;
    this.itemDescription=updateItem.description;

    this.count=1;

    this.myId=updateItem.id;
    tempUpdate.innerHTML="Update";
       this.service.addItem(this.temp,this.itemName,this.itemCategory,this.itemPriority,this.itemDescription,this.count,this.myId);
   }
   
   
   getUser (){
    this._authserviceService.getUser().subscribe( response => {
      this.user = response;
      console.log(response);
      });
  }
  
  myLogout()
  {
    this._authserviceService.myLogOut();
    // this.navigate.navigate(['/home']);
  }
     ngOnInit() {

    this.items=this.service.getItem().valueChanges();
    console.log(this.items);
    this.items.subscribe(it => { 
        console.log(it); 
    });

    
  }


}

interface Item
{
  name?: string;
  description?: string;
  category?: string;
  priority?: string;
  datetime?: string;
  report ?:string;
  id ?:string;
}