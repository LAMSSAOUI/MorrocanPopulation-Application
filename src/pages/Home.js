import React from 'react'
import { useState} from 'react'
import Select from 'react-select'
import { useQuery } from 'react-query'




const fetchInfos = async () => {
    const response = await fetch ('http://localhost:3000/cities/') 
    return response.json()
}

const Home = () => {
    const [info , setInfo] = useState(null)
    const { data , status } = useQuery('info'  , fetchInfos)
   
    // onchange take the object 
    const handlechange = (selectedOption) => {
        setInfo(selectedOption)
        console.log(selectedOption)
    }
 
  return  (
    <div className='grid grid-rows-2 h-screen'>
        <div className='bg-slate-100'>
            <h2 className='text-2xl font-extrabold max-w-lg mx-auto mt-6'>Choisissez une ville pour savoir combien de <span className='ml-32'>population contient</span> </h2>
        <Select    options={data}  getOptionLabel={(data) => data['city']} onChange={handlechange} getOptionValue={(data) => data.city} className='max-w-lg mx-auto mt-28 '/>
        </div>
    <div className='bg-slate-100'>
        {info && (
      <div className="overflow-x-auto mt-6">
      <table className="table table-zebra w-full">
        
        <thead>
          <tr>
            <th>Ville</th>
            <th>Pays</th>
            <th>Province</th>
            <th>Nombre de Population</th>
          </tr>
        </thead>
        <tbody>
       
          <tr>
            <th>{info.city}</th>
            <td>{info.country}</td>
            <td>{info.admin_name}</td>
            <td>{info.population}</td>
          </tr>

        </tbody>
      </table>
    </div>
    )}
    </div>
     
    </div>
   
  )
  
  
}

export default Home