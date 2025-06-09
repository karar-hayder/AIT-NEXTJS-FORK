# Learning Platform Template

A modern learning platform built with Next.js 14, Tailwind CSS, and NextAuth.js.

## Features

- Next.js 14 with App Router
- Tailwind CSS for styling
- TypeScript support
- NextAuth.js authentication
- ESLint and Prettier configuration
- Responsive design
- Modern UI components

## Project Structure

```
├── app/                    # App router directory
│   ├── (auth)/            # Authentication routes
│   │   ├── signin/        # Sign in page
│   │   └── signup/        # Sign up page
│   ├── (dashboard)/       # Dashboard routes
│   │   ├── courses/       # Course management
│   │   ├── progress/      # User progress
│   │   └── dashboard/     # Main dashboard
│   ├── (marketing)/       # Public marketing pages
│   ├── api/               # API routes
│   │   └── auth/          # NextAuth.js API routes
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
├── lib/                   # Utility functions
├── public/               # Static assets
├── styles/               # Global styles
├── types/                # TypeScript definitions
│   └── next-auth.d.ts    # NextAuth type definitions
└── middleware.ts         # Authentication middleware
```

## Authentication

The platform uses NextAuth.js for authentication with the following features:

### Authentication Pages
- Sign In (`/auth/signin`)
  - Email/password authentication
  - Social authentication (Google, GitHub)
  - Remember me option
  - Forgot password link

- Sign Up (`/auth/signup`)
  - User registration form
  - Password confirmation
  - Terms and conditions
  - Social sign-up options

### Authentication Configuration
- JWT-based sessions
- Custom authentication providers
- Protected routes
- Role-based access control

## Course Management

### Available Courses
- Course listing with details
- Course enrollment
- Course progress tracking
- Module and lesson organization

### User Progress
- Progress tracking for enrolled courses
- Course completion status
- Learning history
- Next lesson recommendations

## Getting Started

1. Clone the repository:
```bash
git clone [https://github.com/ayasalam0/AIT-NEXTJS.git]
cd learning-platform
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure authentication providers in `.env.local`:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# GitHub OAuth
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Guidelines

### Authentication
1. Implement authentication providers in `app/api/auth/[...nextauth]/route.ts`
2. Add form validation in auth pages
3. Set up email verification
4. Configure password reset flow

### Course Management
1. Add course content
2. Implement progress tracking
3. Set up course enrollment
4. Add assessment features

### UI/UX
1. Follow the component structure
2. Use Tailwind CSS utility classes
3. Implement responsive design
4. Add loading states and error handling

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

### Areas for Contribution

1. Authentication
   - Add more authentication providers
   - Implement email verification
   - Add password reset functionality
   - Enhance security features

2. Course Management
   - Create course content
   - Add assessment features
   - Implement progress tracking
   - Add course recommendations

3. UI/UX
   - Improve responsive design
   - Add animations
   - Enhance accessibility
   - Create new components

4. Features
   - Add discussion forums
   - Implement notifications
   - Create user profiles
   - Add course ratings

## License

This project is licensed under the MIT License.
