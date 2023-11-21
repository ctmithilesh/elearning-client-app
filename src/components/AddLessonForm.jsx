import { useForm } from 'react-hook-form';
import Breadcrumb from './BreadCrumb'
import { useEffect, useState } from 'react';
import { getTechnologies } from '../lib/getTechnologies';
import Cookies from 'universal-cookie';
import { addNewCourse } from '../lib/addNewCourse';
import { getUserProfile } from '../lib/getProfileDetails';
import { useNavigate } from 'react-router-dom';
import { getCourses } from '../lib/getCourses';

const AddLessonForm = () => {

  const [courses, setCourses] = useState(null)
  const [userProfile, setProfile] = useState(null)
  const navigate = useNavigate()

  // user_id 
  const facultyId = 17

  const [formData, setData] = useState({})
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const cookies = new Cookies()
  let user = cookies.get('user')
  //console.log('user', user)
  const { jwtToken, email } = user 
  //console.log(jwtToken)

  useEffect(()=>{
        
      if(!courses){
        fetchCoursesData()
      }

  
        //fetchUserProfileData()
      
          


  })

  const fetchCoursesData = async () => {

    
    const result = await getCourses(jwtToken)
    const { data } = result 
    setCourses(data)

  }

  // const fetchUserProfileData = async () => {

  //   const result = await getUserProfile(jwtToken, email)
  //   console.log('result', result)
  //   //const { data } = result 
  //  // setProfile(data)

  //   //console.log(data)

  // }


  const submiData = async () => {

      console.log(formData)
      const {
        courseName, 
        courseDescription,
        courseImage,
        startDate,
        endDate,
        technologyId,
      } = formData 


      try{
          const result = await addNewCourse(courseName, courseDescription, courseImage, startDate, endDate, facultyId, technologyId, jwtToken)
          console.log(result)
          if(result.success){
              navigate('/view-courses')
          }
      }
      catch(e){
        console.log(e)
      }


  }

  return (
    <>
      <Breadcrumb pageName="Add Lesson" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Add Lesson
              </h3>
            </div>
            <form method="post" onSubmit={handleSubmit(submiData)}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Lesson Title 
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Course Name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      {...register('lessonTitle',{ required: true})}
                      onChangeCapture={(e)=> setData({...formData, courseName: e.target.value})}
                    />
                    {errors.courseName && <small class="text-danger">Course Name is required!</small>}
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Lesson Order 
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      {...register('lessonOrder',{ required: true})}
                      onChangeCapture={(e)=> setData({...formData, lessonOrder: e.target.value})}
                    />
                    {errors.courseDescription && <small class="text-danger">Course Description is required!</small>}
                  </div>
                </div>
                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Select
                        Course
                  </label>
                  <select
                    rows={6}
                    name="technologyId"
                    placeholder="Type your message"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    {...register('technologyId',{ required: true })}
                    onChangeCapture={(e)=> setData({...formData, technologyId: e.target.value})}
                  >
                  {courses != null && courses.length ? courses.map((item, index )=>(
                       <option value={item.courseId}>{item.courseName} </option>
                  )): <span> loading.... </span>}
                 </select>
                </div>
                {errors.technologyId && <small class="text-danger">Technology is required!</small>}

                <button type="submit" className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                 Submit 
                </button>
              </div>
            </form>
          </div>
        </div>


      </div>
    </>
  );
};

export default AddLessonForm;