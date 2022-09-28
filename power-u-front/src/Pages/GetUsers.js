import React,{useEffect,useState} from 'react'
import {useQuery,gql} from '@apollo/client';
import{LOAD_PROVIDERS} from '../GraphQL/Queries';

function GetUsers() {
    const {error,loading,data} = useQuery(LOAD_PROVIDERS);
    let providerData=[];
    // const [provider,setProvider] = useState([])
    if(loading) return <p>loading</p>
        if(error)  return <p>error</p>
    // useEffect(()=>{
        
        if(data){
            providerData = data.get_all_providers;
        }
    // },[])
    


   // if(data) return <p>{JSON.stringify(data)}</p>
 
//   useEffect(()=>{
//     const {error,loading,data} = useQuery(LOAD_USERS);
//     console.log(data);
//   })
    return (
    <div>{providerData.map((val)=>{
        return<h1>{val.provider_Name}</h1>
    })}</div>
  )
}

export default GetUsers