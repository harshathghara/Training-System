export const APP_NAME = "TechSkill Areta"
export const APP_DESCRIPTION = "Professional training and certification platform"

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  COURSES: "/courses",
  CERTIFICATIONS: "/certifications",
} as const

export const API_ENDPOINTS = {
  AUTH: {
    SIGNIN: "/api/auth/signin",
    SIGNUP: "/api/auth/signup",
    SIGNOUT: "/api/auth/signout",
  },
  COURSES: "/api/courses",
  CERTIFICATIONS: "/api/certifications",
  USER: "/api/user",
} as const

export const COURSE_CATEGORIES = [
  "AI & Machine Learning",
  "Web Development",
  "Mobile Development",
  "Data Science",
  "UX/UI Design",
  "Cybersecurity",
  "Cloud Computing",
  "DevOps",
] as const

export const USER_ROLES = {
  STUDENT: "student",
  INSTRUCTOR: "instructor",
  ADMIN: "admin",
} as const 