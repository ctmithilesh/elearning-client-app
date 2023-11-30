import { useEffect, useState } from 'react';
import ProductOne from '../images/product/product-01.png';
import { getTechnologies } from '../lib/getTechnologies';
import Cookies from 'universal-cookie';
import { getCourses } from '../lib/getCourses';

const CoursesTable = () => {

  const [data, setData] = useState(null)
  const cookies = new Cookies()
  let user = cookies.get('user')
  const { jwtToken } = user

  const fetchCourses = async () => {


    const result = await getCourses(jwtToken)
    const { data } = result
    console.log(data)
    setData(data)

  }

  useEffect(() => {

    if (!data) {
      fetchCourses()
    }


  })



  return (
    <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Available Courses
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="flex items-center col-span-3">
          <p className="font-medium">Course Title </p>
        </div>
        <div className="items-center hidden col-span-2 sm:flex">
          <p className="font-medium">Course Description</p>
        </div>
        <div className="items-center hidden col-span-2 sm:flex">
          <p className="font-medium">Actions</p>
        </div>
      </div>

      {data != null && data.length > 0 ? data.map((item, index) => (
        <div key={index} className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="flex items-center col-span-3">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <img src={item.courseImage} alt="Product" />
              </div>
              <p className="text-sm text-black dark:text-white">
                {item.courseName}
              </p>
            </div>
          </div>
          <div className="items-center hidden col-span-2 sm:flex">
            <a href={`/view-lessons/${item.id}`} className="text-sm text-black dark:text-white">View Lessons </a>
          </div>
          <div className="items-center hidden col-span-2 sm:flex">
            <p className="text-sm text-black dark:text-white">Edit or Delete</p>
          </div>


        </div>
      )) : <span> Loading... </span>}


    </div>
  );
};

export default CoursesTable;
