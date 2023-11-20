import { useForm } from 'react-hook-form';
import Breadcrumb from './BreadCrumb'
import { useState } from 'react';
import { addNewTechnology } from '../lib/addNewTechnology';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

const AddTechnologyForm = () => {

    const cookies = new Cookies()
    const navigate = useNavigate()
    
    let user = cookies.get('user')
    const { jwtToken } = user 
  

  const [formData, setData] = useState({})
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const submiData = async () => {
        console.log(formData)
        const { technologyTitle } = formData
        try{
            const result = await addNewTechnology(technologyTitle, jwtToken)
            console.log(result)
            if(result.success){
              navigate('/view-technologies')
            }
        }
        catch(e){
            console.log(e)
        }

  }

  return (
    <>
      <Breadcrumb pageName="Add Technology" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Add Technology
              </h3>
            </div>
            <form method="post" onSubmit={handleSubmit(submiData)}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                     Technology Title 
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Technology Title"
                      name="technologyTitle"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      {...register('technologyTitle',{ required: true})}
                      onChangeCapture={(e)=> setData({...formData, technologyTitle: e.target.value})}
                    />
                    {errors.technologyTitle && <small class="text-danger">Technology Title is required!</small>}
                  </div>
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

export default AddTechnologyForm;
