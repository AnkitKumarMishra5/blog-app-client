## Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with the following content:
  NEXT_PUBLIC_API_URL=http://localhost:4000/api
4. Start the development server: `npm run dev`

## Pages

- `/`: Homepage that lists all blog posts.
- `/login`: Login page.
- `/signup`: Sign-up page.
- `/dashboard`: Private route where logged-in users can post new articles and view their own posts.

## Project Structure

- `components`: Contains reusable components.
- `pages`: Contains the Next.js pages.
- `styles`: Contains CSS modules and global styles.

## Features

- Server-side rendering for the homepage.
- Static generation for the blog posts.
- Client-side routing and protected routes.

## Development

- The frontend uses Next.js 14 with TypeScript.
- Axios is used for making API requests.
- CSS modules are used for styling.

![image](https://github.com/user-attachments/assets/3767a5b7-dc88-4984-88c7-b84d4d568cd7)

