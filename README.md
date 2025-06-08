# Learning Platform Template

This is a Next.js template for building a learning platform with Tailwind CSS.

## Features

- Next.js 14 with App Router
- Tailwind CSS for styling
- TypeScript support
- ESLint and Prettier configuration
- Responsive design
- Modern UI components

## Getting Started

1. Clone the repository:
```bash
git clone <your-repository-url>
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

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                    # App router directory
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Dashboard routes
│   ├── (marketing)/       # Public marketing pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # UI components
│   └── shared/           # Shared components
├── lib/                  # Utility functions and configurations
├── public/              # Static assets
├── styles/              # Global styles
└── types/               # TypeScript type definitions
```

## Key Features to Implement

1. Authentication System
   - User registration and login
   - Social authentication
   - Protected routes

2. Course Management
   - Course listing
   - Course details
   - Course enrollment

3. Learning Dashboard
   - Progress tracking
   - Course materials
   - Assignments and quizzes

4. User Profile
   - Profile management
   - Learning history
   - Certificates

## Development Guidelines

1. Follow the component structure in the `components` directory
2. Use TypeScript for type safety
3. Follow the Tailwind CSS utility-first approach
4. Implement responsive design for all components
5. Write clean and maintainable code

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

## License

This project is licensed under the MIT License.