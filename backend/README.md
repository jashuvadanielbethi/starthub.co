# Backend - StartHub

Backend configuration and database schema for the StartHub platform.

## Structure

- `api/api.ts` - API functions for authentication, user management, and business logic
- `database/schema.sql` - Supabase PostgreSQL database schema with tables, types, and RLS policies

## Database

The database uses Supabase (hosted PostgreSQL) with the following main tables:

- `profiles` - User profiles with roles (FOUNDER, INVESTOR, ADMIN)
- `requests` - Connection requests between users
- Various other tables for managing projects, investments, and interactions

### Setting Up Database

1. Go to your Supabase project
2. Go to the SQL Editor
3. Copy and paste the contents of `database/schema.sql`
4. Run the SQL to create all tables, types, and policies

### Environment Variables

Add these to your `.env.local`:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## API Functions

The `api/api.ts` file contains:

- `signup()` - Register new users
- `checkHealth()` - Health check for the application
- Other authentication and data management functions
