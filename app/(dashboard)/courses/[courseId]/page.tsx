/**
 * Dynamic Course Page
 * Displays course content and navigation for a specific course
 */

const courseContent = {
  1: {
    title: "Introduction to Web Development",
    modules: [
      {
        id: "m1",
        title: "HTML Basics",
        lessons: [
          { id: "l1", title: "Introduction to HTML", duration: "30 min" },
          { id: "l2", title: "HTML Elements", duration: "45 min" },
          { id: "l3", title: "HTML Forms", duration: "60 min" },
        ],
      },
      {
        id: "m2",
        title: "CSS Fundamentals",
        lessons: [
          { id: "l4", title: "Introduction to CSS", duration: "30 min" },
          { id: "l5", title: "CSS Selectors", duration: "45 min" },
          { id: "l6", title: "CSS Layouts", duration: "60 min" },
        ],
      },
    ],
  },
  2: {
    title: "Advanced React Patterns",
    modules: [
      {
        id: "m1",
        title: "React Hooks",
        lessons: [
          { id: "l1", title: "useState Hook", duration: "45 min" },
          { id: "l2", title: "useEffect Hook", duration: "60 min" },
          { id: "l3", title: "Custom Hooks", duration: "90 min" },
        ],
      },
      {
        id: "m2",
        title: "Advanced Patterns",
        lessons: [
          { id: "l4", title: "Context API", duration: "60 min" },
          { id: "l5", title: "Render Props", duration: "45 min" },
          { id: "l6", title: "Higher-Order Components", duration: "90 min" },
        ],
      },
    ],
  },
}

export default function CoursePage({ params }: { params: { courseId: string } }) {
  const courseId = parseInt(params.courseId)
  const course = courseContent[courseId as keyof typeof courseContent]

  if (!course) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-800">Course not found</h1>
      </div>
    )
  }

  return (
    <div className="flex gap-8">
      {/* Course Navigation */}
      <div className="w-80 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{course.title}</h2>
        <div className="space-y-4">
          {course.modules.map((module) => (
            <div key={module.id} className="space-y-2">
              <h3 className="font-medium text-gray-700">{module.title}</h3>
              <ul className="space-y-1">
                {module.lessons.map((lesson) => (
                  <li key={lesson.id}>
                    <a
                      href={`/dashboard/courses/${courseId}/lessons/${lesson.id}`}
                      className="block py-2 px-3 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                    >
                      {lesson.title}
                      <span className="text-xs text-gray-400 ml-2">{lesson.duration}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Course Content */}
      <div className="flex-1 bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to {course.title}</h1>
        <p className="text-gray-600 mb-6">
          Select a lesson from the navigation menu to begin learning.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {course.modules.map((module) => (
            <div key={module.id} className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">{module.title}</h3>
              <p className="text-sm text-gray-600">
                {module.lessons.length} lessons • {module.lessons.reduce((acc, lesson) => {
                  const duration = parseInt(lesson.duration)
                  return acc + duration
                }, 0)} minutes
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 