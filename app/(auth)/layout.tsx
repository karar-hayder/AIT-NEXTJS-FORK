/**
 * Authentication Layout
 * 
 * This layout is used for all authentication-related pages:
 * - Login
 * - Registration
 * - Password Reset
 * - Email Verification
 * 
 * Features:
 * - Clean, focused design for authentication forms
 * - No navigation to prevent distraction
 * - Consistent branding
 * - Error message display area
 */

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-primary-600">Learning Platform</h1>
        </div>
        {children}
      </div>
    </div>
  )
} 