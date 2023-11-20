import { useEffect, useState } from 'react';
import ProductOne from '../images/product/product-01.png';
import ProductTwo from '../images/product/product-02.png';
import ProductThree from '../images/product/product-03.png';
import ProductFour from '../images/product/product-04.png';
import { getTechnologies } from '../lib/getTechnologies';
import Cookies from 'universal-cookie';

const TechTable = () => {

  const [data, setData] = useState(null)
  const cookies = new Cookies()
  let user = cookies.get('user')
  const { jwtToken } = user 

  const fetchTechnologies = async () =>  {
    
    
    const result = await getTechnologies(jwtToken)
    const { data } = result 
    console.log(data)
    setData(data)

  }
  
  useEffect(()=>{

      if(!data){
        fetchTechnologies()
      }
      

  })

 

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
        Available Tech
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Technology Title </p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Actions</p>
        </div>
      </div>

    {data != null && data.length ? data.map((item,index )=>(
         <div key={index} className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
         <div className="col-span-3 flex items-center">
           <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
             <div className="h-12.5 w-15 rounded-md">
               <img src={ProductOne} alt="Product" />
             </div>
             <p className="text-sm text-black dark:text-white">
               {item.technologyTitle}
             </p>
           </div>
         </div>
         <div className="col-span-2 hidden items-center sm:flex">
           <p className="text-sm text-black dark:text-white">Edit or Delete</p>
         </div>
         
       </div>
    ) ): <span> Loading... </span> }
     
    
    </div>
  );
};

export default TechTable;
