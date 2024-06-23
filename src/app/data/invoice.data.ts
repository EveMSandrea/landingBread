import { Invoice } from "../models/invoice";

export const invoiceData: any = {
   id: 1,
   name:'Pasteleria y panaderia',
   client :{
      name: 'Andrea',
      lastname:'Doe',
      address:{
        country:'España',
        city:'Almendralejo',
        street:'one street',
        number: 15,
      }
   },
   company:{
     name: 'New PanSpecial',
     fiscalNumber: 123456789,
   },
   items:[
    {
     id: 1,
     product:'Pan de piña',
     price: 2,
     quantity:1
   },
   {
    id: 2,
    product:'Pan de pueblo',
    price: 1,
    quantity:2
  },
  {
    id: 3,
    product:'Pan Baguette',
    price: 2,
    quantity:3
  },
  ]
}
