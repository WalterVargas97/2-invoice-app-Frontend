import { Invoice } from "../models/invoice";


export const InvoiceData : Invoice = {
  id:1,
  total:0,
  name:'Componentes de PC',
  client: {
    name: 'Andres',
    lastName: 'Doe',
    address: {
      country: 'USA',
      city: 'Los Angeles',
      street: 'Av. Insurgentes 123',
      number: 456,
    }
  },
  company:{
    name: 'Tech Solutions',
    fiscalNumber:3456789012
  },
  items: [
    {
      id: 1,
      product:"Procesador Intel i7",
      price: 300,
      quantity: 1
    },
    {
      id: 2,
      product:"Procesador Intel i5",
      price: 200,
      quantity: 1
    },
    {
      id: 3,
      product:"Procesador Ryzen 7",
      price: 150,
      quantity: 1
    },
    {
      id: 4,
      product:"Procesador Ryzen 5",
      price: 100,
      quantity: 1
    }
  ]
}

