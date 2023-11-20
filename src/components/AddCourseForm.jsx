import { useForm } from 'react-hook-form';
import Breadcrumb from './BreadCrumb'
import { useEffect, useState } from 'react';
import { getTechnologies } from '../lib/getTechnologies';
import Cookies from 'universal-cookie';

const AddCourseForm = () => {

  const [courses, setCourses] = useState(null)
  const [technologies, setTechnologies] = useState(null)

  const [formData, setData] = useState({})
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const cookies = new Cookies()
  let user = cookies.get('user')
  console.log('user', user)
  const { jwtToken, email } = user 
  console.log(jwtToken)

  useEffect(()=>{
        
      if(!technologies){
        fetchTechnologiesData()
      }
          


  })

  const fetchTechnologiesData = async () => {

    
    const result = await getTechnologies(jwtToken)
    const { data } = result 
    setTechnologies(data)

  }


  const submiData = async () => {


  }

  return (
    <>
      <Breadcrumb pageName="Add Course" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Add Course
              </h3>
            </div>
            <form method="post" onSubmit={handleSubmit(submiData)}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Course Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Course Name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      {...register('courseName',{ required: true})}
                      onChangeCapture={(e)=> setData({...formData, courseName: e.target.value})}
                    />
                    {errors.courseName && <small class="text-danger">Course Name is required!</small>}
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Course Description
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      {...register('courseDescription',{ required: true})}
                      onChangeCapture={(e)=> setData({...formData, courseDescription: e.target.value})}
                    />
                    {errors.courseDescription && <small class="text-danger">Course Description is required!</small>}
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Course Image <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Course Image URL"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    {...register('courseName',{ required: true})}
                      onChangeCapture={(e)=> setData({...formData, courseImage: e.target.value})}
                  />
                  {errors.courseImage && <small class="text-danger">Course Image is required!</small>}
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Start Date
                  </label>
                  <input
                    type="date"
                    placeholder="Select subject"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    {...register('startDate',{ required: true})}
                      onChangeCapture={(e)=> setData({...formData, startDate: e.target.value})}
                  />
                  {errors.startDate && <small class="text-danger">Start Date is required!</small>}
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    End Date
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <input  
                        type="date"
                        name="endDate"
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        {...register('endDate',{ required: true})}
                        onChangeCapture={(e)=> setData({...formData, endDate: e.target.value})}
                        />
                    {errors.endDate && <small class="text-danger">End Date is required!</small>}
                    <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill=""
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Faculty
                  </label>
                  <select
                    rows={6}
                    placeholder="Type your message"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  > 
                  <option value={email} disabled class="text-graydark">{email}</option>

                  </select >
                </div>
                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Technology
                  </label>
                  <select
                    rows={6}
                    placeholder="Type your message"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  >
                  {technologies != null && technologies.length ? technologies.map((item, index )=>(
                       <option value={item.technologyTitle}>{item.technologyTitle} </option>
                  )): <span> loading.... </span>}
                 </select>
                </div>

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

export default AddCourseForm;
