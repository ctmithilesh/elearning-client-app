import React, { useEffect, useState } from 'react';
import { getLesson } from '../lib/getLesson';
import Cookies from 'universal-cookie';


const LessonsTable = () => {


    const [data, setData] = useState()
    const cookies = new Cookies()
    let user = cookies.get('user')

    const { jwtToken } = user 

    useEffect(()=>{

                fetchLessons()


    })


    const fetchLessons = async () => {
            const result = await getLesson(jwtToken)
            console.log(result)
            const { data } = result 
            setData(data)

    }
  

  return (
    <>
    {data != null && data.length ? data.map((item, index)=>(

        <div key={index} className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
        <div>
          <h3 className="text-xl font-semibold text-black dark:text-white">
            {item.courseContents.map((item)=>(
                item.contentTitle
            ))}
          </h3>
          {item.courseContents.map((item)=>(
            <img src={item.contentUrl} alt="" />
          ))}
        </div>
  
        <div className="mb-2">
          <div id="chartFour" className="-ml-5">
          </div>
        </div>
      </div>



    )): <span> loading ..... </span>}

    </>
   
  );
 
};

export default LessonsTable;
