/**
 * User Progress Page
 * Displays enrolled courses and their progress
 */

const enrolledCourses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    progress: 75,
    lastAccessed: "2024-02-20",
    nextLesson: "CSS Layouts",
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    progress: 30,
    lastAccessed: "2024-02-19",
    nextLesson: "Custom Hooks",
  },
]

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary-600">My Learning Progress</h1>

      <div className="grid gap-6">
        {enrolledCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{course.title}</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Last accessed: {course.lastAccessed}
                </p>
              </div>
              <span className="text-primary-600 font-semibold">{course.progress}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div
                className="bg-primary-600 h-2.5 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">
                Next lesson: <span className="font-medium">{course.nextLesson}</span>
              </p>
              <a
                href={`/dashboard/courses/${course.id}`}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Continue Learning →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 