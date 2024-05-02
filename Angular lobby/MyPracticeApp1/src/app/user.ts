import { Company } from "./company"

export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    // You can also create a UDT for address as well
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    // Company here is nothing but a user Defined type
    company: Company
}
