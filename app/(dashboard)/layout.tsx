/**
 * Dashboard Layout
 * 
 * This layout is used for all authenticated user pages:
 * - Dashboard
 * - Course pages
 * - Profile
 * - Settings
 * 
 * Features:
 * - Sidebar navigation
 * - User profile section
 * - Progress indicators
 * - Quick actions menu
 * - Responsive design for all screen sizes
 */

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen border-r bg-white">
          <div className="p-4">
            <h2 className="text-xl font-bold text-primary-600">Dashboard</h2>
          </div>
          <nav className="mt-4">
            <ul className="space-y-2">
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="/dashboard" className="text-gray-700">Overview</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="/dashboard/courses" className="text-gray-700">Available Courses</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="/dashboard/progress" className="text-gray-700">My Progress</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="/dashboard/profile" className="text-gray-700">Profile</a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  )
} 