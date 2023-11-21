import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import TechTable from '../components/TechTable'
import CoursesTable from '../components/CoursesTable'
const ViewCourses = () => {
  return (
    <>
      <BreadCrumb pageName="Courses List " />

      <div className="flex flex-col gap-10">
        <CoursesTable />
       
      </div>
    </>
  )
}

export default ViewCourses