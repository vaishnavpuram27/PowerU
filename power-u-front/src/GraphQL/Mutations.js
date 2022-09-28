import { gql } from '@apollo/client'

export const CREATE_PROVIDER = gql`
mutation add_provider($provider: ProviderInput!){
    add_provider(provider:$provider){
         provider_Email
      provider_Name
     
      provider_Password
    }
  }
  
`
export const CREATE_CUSTOMER = gql`
mutation add_customer($customer:customerInput!){

    add_customer(customer:$customer){
  
      cust_Email
  
      cust_Name
  
      cust_Password
  
    }
  
  }
`
export const REMOVE_PROVIDER = gql`
mutation remove_provider($mail:String!){

  remove_provider(email:$mail)

}

`
export const ADD_BATTERY = gql`
mutation add_battery($battery:batteryInput!){

  add_battery(battery:$battery){

   battery_Id

battery_Brand

battery_Capacity

battery_Price

battery_Count

battery_Charge_status

battery_Provider_Email

  }

}

`