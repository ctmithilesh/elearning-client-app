import { useForm } from 'react-hook-form';
import Breadcrumb from './BreadCrumb'
import { useEffect, useState } from 'react';
import { getTechnologies } from '../lib/getTechnologies';
import Cookies from 'universal-cookie';
import { addNewCourse } from '../lib/addNewCourse';
import { getUserProfile } from '../lib/getProfileDetails';
import { useNavigate } from 'react-router-dom';

const AddCourseForm = () => {

  const [courses, setCourses] = useState(null)
  const [userProfile, setProfile] = useState(null)
  const [technologies, setTechnologies] = useState(null)
  const navigate = useNavigate()

  // user_id 
  const facultyId = 2

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

  useEffect(() => {

    if (!technologies) {
      fetchTechnologiesData()
    }


    //fetchUserProfileData()




  })

  const fetchTechnologiesData = async () => {


    const result = await getTechnologies(jwtToken)
    const { data } = result
    setTechnologies(data)

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


    try {
      const result = await addNewCourse(courseName, courseDescription, courseImage, startDate, endDate, facultyId, technologyId, jwtToken)
      console.log(result)
      if (result.success) {
        navigate('/view-courses')
      }
    }
    catch (e) {
      console.log(e)
    }


  }

  return (
    <>
      <Breadcrumb pageName="Add Course" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
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
                      {...register('courseName', { required: true })}
                      onChangeCapture={(e) => setData({ ...formData, courseName: e.target.value })}
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
                      {...register('courseDescription', { required: true })}
                      onChangeCapture={(e) => setData({ ...formData, courseDescription: e.target.value })}
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
                    {...register('courseImage', { required: true })}
                    onChangeCapture={(e) => setData({ ...formData, courseImage: e.target.value })}
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
                    {...register('startDate', { required: true })}
                    onChangeCapture={(e) => setData({ ...formData, startDate: e.target.value })}
                  />
                  {errors.startDate && <small class="text-danger">Start Date is required!</small>}
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    End Date
                  </label>
                  <input
                    type="date"
                    placeholder="Select subject"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    {...register('endDate', { required: true })}
                    onChangeCapture={(e) => setData({ ...formData, endDate: e.target.value })}
                  />
                  {errors.endDate && <small class="text-danger">End Date is required!</small>}
                </div>



                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Faculty
                  </label>
                  <select
                    rows={6}
                    placeholder="Type your message"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    {...register('facultyId', { required: false })}
                    onChangeCapture={(e) => setData({ ...formData, technologyId: e.target.value })}
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
                    name="technologyId"
                    placeholder="Type your message"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    {...register('technologyId', { required: true })}
                    onChangeCapture={(e) => setData({ ...formData, technologyId: e.target.value })}
                  >
                    {technologies != null && technologies.length ? technologies.map((item, index) => (
                      <option value={item.technologyId}>{item.technologyTitle} </option>
                    )) : <span> loading.... </span>}
                  </select>
                </div>
                {errors.technologyId && <small class="text-danger">Technology is required!</small>}

                <button type="submit" className="flex justify-center w-full p-3 font-medium rounded bg-primary text-gray">
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
