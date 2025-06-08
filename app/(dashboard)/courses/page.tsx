/**
 * Courses Page
 * Displays all available courses with their details and enrollment options
 */

const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript",
    duration: "8 weeks",
    level: "Beginner",
    progress: 0,
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    description: "Master React hooks, context, and advanced patterns",
    duration: "6 weeks",
    level: "Advanced",
    progress: 0,
  },
  {
    id: 3,
    title: "Full Stack Development",
    description: "Build complete applications with Node.js and React",
    duration: "12 weeks",
    level: "Intermediate",
    progress: 0,
  },
]

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary-600">Available Courses</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
              <span>Duration: {course.duration}</span>
              <span>Level: {course.level}</span>
            </div>
            <a
              href={`/dashboard/courses/${course.id}`}
              className="block w-full text-center bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition-colors"
            >
              View Course
            </a>
          </div>
        ))}
      </div>
    </div>
  )
} 