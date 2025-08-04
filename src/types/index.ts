export interface User {
  id: string
  email: string
  name: string
  role: "student" | "instructor" | "admin"
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export interface Course {
  id: string
  title: string
  description: string
  category: string
  instructor: User
  duration: number // in hours
  level: "beginner" | "intermediate" | "advanced"
  price: number
  image: string
  modules: Module[]
  enrolledStudents: number
  rating: number
  createdAt: Date
  updatedAt: Date
}

export interface Module {
  id: string
  title: string
  description: string
  duration: number // in minutes
  lessons: Lesson[]
  order: number
}

export interface Lesson {
  id: string
  title: string
  content: string
  videoUrl?: string
  duration: number // in minutes
  order: number
  completed: boolean
}

export interface Certification {
  id: string
  title: string
  description: string
  course: Course
  user: User
  issuedAt: Date
  expiresAt?: Date
  certificateUrl: string
}

export interface Enrollment {
  id: string
  user: User
  course: Course
  enrolledAt: Date
  completedAt?: Date
  progress: number // percentage
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginationParams {
  page: number
  limit: number
  search?: string
  category?: string
  level?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
} 