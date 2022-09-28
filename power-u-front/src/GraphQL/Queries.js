import { gql } from '@apollo/client'

export const LOAD_PROVIDERS = gql`
                    query
                        {
                            get_all_providers{
                                                provider_Name
                                                provider_Email
                                                provider_Password
                                            }
                        }

`
export const LOAD_CUSTOMERS = gql`
                        query{
                            get_all_customers{
                                                cust_Name
                                                cust_Email
                                                cust_Password
                            }
                        }
  
`

export const LOAD_BATTERIES = gql`
                    query
                    {
                    get_all_batteries{
                                        battery_Id
                                        battery_Brand
                                        battery_Price
                                        battery_Count
                                        battery_Capacity
                                        battery_Charge_status
                                        battery_Provider_Email
                                     }
                    }
  
`

export const GET_BATTERIES_BY_EMAIL =gql`
query a($mail :String! ){
    get_transactionsByProviderEmail(email:$mail)
    {
      transaction_Id
      transaction_Date
      transaction_Cust_Name
      transaction_Battery_Id
      transaction_Cust_Email
      transaction_Battery_Brand
      transaction_Provider_Email
      transaction_Battery_Capacity
    }
  }
`