import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import TechTable from '../components/TechTable'
const ViewTechnologies = () => {
  return (
    <>
      <BreadCrumb pageName="List of Technologies" />

      <div className="flex flex-col gap-10">
        <TechTable />
       
      </div>
    </>
  )
}

export default ViewTechnologies