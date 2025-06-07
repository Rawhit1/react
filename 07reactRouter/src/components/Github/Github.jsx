import React, { useEffect , useState} from 'react'
import { useLoaderData } from 'react-router-dom'

/**
* @author
* @function 
**/

export const  Github= (props) => {
    // useLoaderData is used to get the data from the loader function
    // it is used to get the data from the loader function in the component
    // it is used to get the data from the loader function in the component
    const data = useLoaderData();   // useLoaderData is used to get the data from the loader function
//    const [data, setData] = useState(null);

//  useEffect(() => {
//     fetch('https://api.github.com/users/Rawhit1')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         setData(data);
        
//     })
// }, [])


  return(
    <div className='text-center m-4 p-4 bg-gray-500 text-white text-3xl'>
        Github followers :{data?.followers ?? 'Loading...'} <br />
    </div>
   )
  }


export const gitInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Rawhit1');
    if (!response.ok) {
        throw new Error('Failed to fetch GitHub data');
    } 
    return response.json();
}