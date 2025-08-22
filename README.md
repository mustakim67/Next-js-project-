# Next.js Tech Project

[Live Site](https://next-js-app-orcin-omega.vercel.app)

## Project Description
This is a full-stack **Next.js** web application integrated with **MongoDB** and **NextAuth.js** for authentication. The platform allows users to explore, submit products. Key features include Google OAuth login, secure routes, responsive UI with Tailwind CSS and dynamic interaction with project data.

## Features
- **Add Product/Project:** Users can submit their tech products or projects to the platform.  
- **Secure Routes:** Certain routes like adding a product are protected using **NextAuth.js**, ensuring only authenticated users can access them.  
- **Social Sign-In:** Users can log in securely via **Google OAuth**.  
- **Responsive UI:** Built with **Tailwind CSS** for mobile-friendly and clean interface.  
- **Featured Projects:** Highlighted sections for popular and new projects.  

## Setup & Installation

### Prerequisites
- Node.js >= 18.x
- npm or yarn
- MongoDB database
- Google OAuth credentials

### Installation Steps
1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo

2. Install dependencies:
```bash
npm install
# or
yarn install

3. Create a .env file in the root directory with the following environment variables:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
MONGODB_URI=your-mongodb-uri
DB_NAME=your-database-name

4. Run the development server:
```bash
npm run dev
# or
yarn dev

Open your browser and navigate to http://localhost:3000


## Route Summary

| Route | Description |
|-------|-------------|
| `/` | Home page with featured and trending projects |
| `/explore` | Explore all available projects |
| `/add-product` | Add a new project/product (requires login) |
| `/product/[id]` | View details of a specific project |
| `/api/auth/[...nextauth]` | NextAuth authentication API |
| `/api/products` | CRUD operations for products |
| `/api/users` | Fetch and manage user data |
| `/api/coupons` | Manage coupons for subscription discounts |
| `/my-profile` | User profile page with subscription & payment info |

