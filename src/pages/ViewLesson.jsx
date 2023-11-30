import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import TechTable from '../components/TechTable'
import CoursesTable from '../components/CoursesTable'
import LessonsTable from '../components/LessonsTable'
import { useParams } from 'react-router-dom'
const ViewLesson = () => {
  const { id } = useParams()
  console.log('id', id)
  return (
    <>
      <BreadCrumb pageName="Courses List " />

      <div className="flex flex-col gap-10">
        <LessonsTable id={id} />

      </div>
    </>
  )
}

export default ViewLesson