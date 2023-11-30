import { useForm } from 'react-hook-form';
import Breadcrumb from './BreadCrumb'
import { useEffect, useState } from 'react';
import { getTechnologies } from '../lib/getTechnologies';
import Cookies from 'universal-cookie';
import { addNewCourse } from '../lib/addNewCourse';
import { getUserProfile } from '../lib/getProfileDetails';
import { useNavigate } from 'react-router-dom';
import { getCourses } from '../lib/getCourses';
import { addNewContent } from '../lib/addNewContent';

const LessonContentForm = (props) => {

    const { courseId, lessonTitle, lessonId } = props
    const contentOrder = 7
    console.log('hello',courseId, lessonTitle, lessonId)

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
        if (!courses) {
            fetchCoursesData()
        }



        //fetchUserProfileData()




    })

    const fetchCoursesData = async () => {


        const result = await getCourses(jwtToken)
        const { data } = result
        setCourses(data)

    }

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
            contentTitle,
            contentUrl,
            contentDescription,
            contentOrder
        } = formData
        console.log(lessonId, contentOrder)

        try {
            const result = await addNewContent(contentTitle, contentUrl, contentDescription, contentOrder, lessonId, jwtToken)
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

            <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
                <div className="flex flex-col gap-9">
                    {/* <!-- Contact Form --> */}
                    <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                {courseId} | {lessonTitle}
                            </h3>
                        </div>
                        <form method="post" onSubmit={handleSubmit(submiData)}>
                            <div className="p-6.5">

                                
                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Content Title
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Course Name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                            {...register('contentTitle', { required: true })}
                                            onChangeCapture={(e) => setData({ ...formData, contentTitle: e.target.value })}
                                        />
                                        {errors.contentTitle && <small class="text-danger">Content Title is required!</small>}
                                    </div>
                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Content Order
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Course Name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                            {...register('contentOrder', { required: true })}
                                            onChangeCapture={(e) => setData({ ...formData, contentOrder: e.target.value })}
                                        />
                                        {errors.contentOrder && <small class="text-danger">Content Order is required!</small>}
                                    </div>


                                    <div className="w-full">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Content URL
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter your last name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                            {...register('contentUrl', { required: true })}
                                            onChangeCapture={(e) => setData({ ...formData, contentUrl: e.target.value })}
                                        />
                                        {errors.contentUrl && <small class="text-danger">Content URL is required!</small>}
                                    </div>
                                </div>
                              

                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Content Description <span className="text-meta-1">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Course Image URL"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        {...register('contentDescription', { required: true })}
                                        onChangeCapture={(e) => setData({ ...formData, contentDescription: e.target.value })}
                                    />
                                    {errors.contentDescription && <small class="text-danger">Content Description is required!</small>}
                                </div>
                                
                              
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

export default LessonContentForm;
