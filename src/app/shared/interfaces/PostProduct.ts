import { IAddtionaFeatur } from "./additonalFeatur"

export interface IProduct {
id:number
           Name :string
            Description :string
           MainImage :string
           Price :number
           Quantity :number
           CategoryId:number
           SellerId :string
           Rate :number
           ProductImages :string []
           AdditionalFeature :IAddtionaFeatur []
     
  }