# StartHub - Project Structure

This project is organized into frontend and backend directories for better code organization and scalability.

## 📁 Directory Structure

```
starthub.co/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/   # Reusable React components
│   │   │   ├── pages/        # Page components (LandingPage, Dashboards, etc.)
│   │   │   ├── App.tsx       # Main app component
│   │   │   ├── routes.tsx    # React Router configuration
│   │   │   └── api.ts        # API client functions
│   │   ├── lib/              # Utilities (Supabase client)
│   │   ├── styles/           # Global CSS and Tailwind
│   │   ├── imports/          # Configuration files
│   │   └── main.tsx          # Entry point
│   ├── index.html            # HTML template
│   ├── dist/                 # Production build output
│   └── README.md
│
├── backend/                  # Backend configuration
│   ├── api/                  # API functions
│   │   └── api.ts            # Authentication and business logic
│   ├── database/             # Database configuration
│   │   └── schema.sql        # Supabase PostgreSQL schema
│   └── README.md
│
├── package.json              # Dependencies
├── vite.config.ts            # Vite configuration (points to frontend)
├── vercel.json               # Vercel deployment configuration
├── tsconfig.json             # TypeScript configuration
└── README.md
```

## 🚀 Getting Started

### Development

```bash
npm install
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
```

### Database

To set up the database:

1. Go to [Supabase](https://supabase.com)
2. Create a project or use existing one
3. In the SQL Editor, paste the SQL from `backend/database/schema.sql`
4. Run the SQL to create all tables and policies

### Environment Variables

Create `.env.local` in the project root:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🏗️ Architecture

- **Frontend**: React (Vite) + TypeScript + Tailwind CSS deployed on Vercel
- **Backend**: Supabase (PostgreSQL) for authentication and database
- **Auth**: Row Level Security (RLS) policies for security

## 📱 Key Features

- Multi-role authentication (Founder, Investor, Admin)
- Real-time database with Supabase
- Responsive design with Tailwind CSS
- Client-side routing with React Router
- Type-safe with TypeScript

## 🔗 Dependencies

- React 18.3.1
- React Router 7.13
- Supabase 2.99.3
- Tailwind CSS 4.1.12
- Vite 6.3.5
- TypeScript

## 📝 Notes

- All frontend builds output to `frontend/dist/`
- Vercel is configured to serve from `frontend/dist/`
- Database schema includes RLS policies for security
- All components are in frontend/src for easy management
