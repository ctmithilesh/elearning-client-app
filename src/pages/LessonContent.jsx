import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import TechTable from '../components/TechTable'
import CoursesTable from '../components/CoursesTable'
import LessonsTable from '../components/LessonsTable'
import { useParams } from 'react-router-dom'
import LessonContentForm from '../components/LessonContentForm'
const LessonContent = () => {
  const { courseId, lessonTitle, lessonId } = useParams()
  console.log(courseId, lessonTitle, lessonId)
  return (
    <>
      <BreadCrumb pageName="Add Lesson" />

      <div className="flex flex-col gap-10">
        <LessonContentForm courseId={courseId} lessonTitle={lessonTitle} lessonId={lessonId} />

      </div>
    </>
  )
}

export default LessonContent