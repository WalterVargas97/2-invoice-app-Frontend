import { last } from "rxjs";

export const invoice = {
  id:1,
  name:'Componentes de PC',
  clent: {
    name: 'Andres',
    lastName: 'Doe',
    address: {
      country: 'USA',
      city: 'Los Angeles',
      street: 'Av. Insurgentes 123',
      number: '456',
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
      id: 1,
      product:"Procesador Intel i5",
      price: 200,
      quantity: 1
    }
  ]
}

