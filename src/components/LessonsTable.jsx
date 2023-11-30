import React, { useEffect, useState } from 'react';
import { getLesson } from '../lib/getLesson';
import Cookies from 'universal-cookie';
import { getCourses } from '../lib/getCourses';
import { MediaPlayer, MediaProvider } from '@vidstack/react';


const LessonsTable = (props) => {
  console.log(props)
  const { id } = props
  console.log('my id', id)

  const [data, setData] = useState()
  const cookies = new Cookies()
  let user = cookies.get('user')

  const { jwtToken } = user

  const fetchLessons = async () => {
    const result = await getLesson(id, jwtToken)
    console.log(result)
    const { data } = result
    setData(data)

  }

  useEffect(() => {

    fetchLessons()


  }, [data != null])

  console.log(data)

  return (
    <>
      {data != null && data.length > 0 ? data.map((item, index) => (

        <div key={index} className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white">
              {item.lessonTitle}
            </h3>
            {item.courseContents?.map((item, index) => (
              <div className="mb-2" key={index}>
                <MediaPlayer title="Sprite Fight" src="youtube/_cMxraX_5RE">
                  <MediaProvider />
                </MediaPlayer>
                <a href={item.contentUrl} alt="img" target="_blank" rel="noreferrer"> click here </a>
                <div id="chartFour" className="-ml-5">
                  {item.contentDescription}
                </div>
              </div>
            ))}
          </div>
        </div>



      )) : <span> loading ..... </span>}

    </>

  );

};

export default LessonsTable;
