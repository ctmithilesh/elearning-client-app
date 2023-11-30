let localhost = 'https://elearningbck-891190cb2aaa.herokuapp.com'
// http://localhost:8080
// https://elearningbck-891190cb2aaa.herokuapp.com
export const endpoints = {
    login: `${localhost}/login`,
    register: `${localhost}/register`,
    add_technology: `${localhost}/api/v1/technologies`,
    get_technology: `${localhost}/api/v1/technologies`,
    add_new_course: `${localhost}/api/v1/addCourse`,
    get_user_profile: `${localhost}/api/v1/user/profile`,
    get_courses: `${localhost}/api/v1/courses`,
    add_new_lesson: `${localhost}/api/v1/courses/1/lessons`,
    get_lesson: `${localhost}/api/v1/courses/1/lessons`
}


