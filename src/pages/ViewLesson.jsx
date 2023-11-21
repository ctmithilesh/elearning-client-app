import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import TechTable from '../components/TechTable'
import CoursesTable from '../components/CoursesTable'
import LessonsTable from '../components/LessonsTable'
const ViewLesson = () => {
  return (
    <>
      <BreadCrumb pageName="Courses List " />

      <div className="flex flex-col gap-10">
        <LessonsTable />
       
      </div>
    </>
  )
}

export default ViewLesson