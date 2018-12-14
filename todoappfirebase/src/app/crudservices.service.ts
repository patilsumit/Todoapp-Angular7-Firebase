import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import {Item} from '../app/item'
@Injectable({
  providedIn: 'root'
})
export class CrudservicesService {
 
  itemsCollection: AngularFirestoreCollection<Item>;
  itemDocument: AngularFirestoreDocument<Item>;

  
  
  // count=0;
  myId:string;
  date =new Date();
  
  

  mydatetime = this.date.toString();
  myreport="Completed";

 
  constructor(private db:AngularFirestore) { 
    this.itemsCollection=this.db.collection('todolist');
  } 

  getItem()
  {
     return this.db.collection('todolist');
  }

   addItem(addTemp,itemName,itemCategory,itemPriority,itemDescription,count,myId)
   {
      
      if(count==0)
      {
        const documentId=this.db.createId();  
         this.mydatetime=this.date.getDate() +"/" + this.date.getMonth() + "/"+ this.date.getFullYear();
        //  debugger;
        this.itemsCollection.doc(documentId).set({name:itemName,category:itemCategory,priority:itemPriority,
          description:itemDescription,datetime:this.mydatetime,report:this.myreport,id:documentId}); 
      }
      else
      {
        this.itemDocument=this.db.doc(`todolist/${myId}`);
        this.itemDocument.update({
           
          name:itemName,category:itemCategory,priority:itemPriority,description:itemDescription,
          datetime:this.mydatetime
        });

         count=0;
         addTemp.innerHTML="Add";    
      }

      return this.db.collection('todolist');
   }
   deleteItem(deleteItem)
   {
    this.itemDocument=this.db.doc(`todolist/${deleteItem.id}`);
    this.itemDocument.delete();
   }
   
}
