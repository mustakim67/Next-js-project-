# Next.js Tech Projects

[Live Site](https://next-js-app-orcin-omega.vercel.app)

## Project Description

This is a full-stack **Next.js** web application integrated with **MongoDB** and **NextAuth.js** for authentication. The platform allows users to explore and submit their own **products**. Key features include Google OAuth login, secure routes, a responsive UI with Tailwind CSS, and dynamic interaction with project data.

---

## Features

* **Add producst**: Users can submit their own tech projects to the platform.
* **Secure Routes**: Critical routes like `/add-project` are protected using **NextAuth.js**, ensuring only authenticated users can access them.
* **Social Sign-In**: Users can securely log in via **Google OAuth**.
* **Responsive UI**: The clean, mobile-friendly interface is built with **Tailwind CSS**.
* **Featured Projects**: Highlighted sections for popular and new projects.

---

## Setup & Installation

### Prerequisites

* Node.js >= 18.x
* npm or yarn
* MongoDB database
* Google OAuth credentials

### Installation Steps

1.  Clone the repository and navigate into the directory:
    ```bash
    git clone (https://github.com/mustakim67/Next-js-project-.git))
    cd your-repo
    ```
   

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  Create a `.env.local` file in the root directory with the following environment variables:
    ```env
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your-random-secret
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    MONGODB_URI=your-mongodb-uri
    ```

4.  Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5.  Open your browser and navigate to `http://localhost:3000`.

---

## Route Summary

| Route | Description |
| :--- | :--- |
| `/` | Home page with featured and trending projects |
| `/dashboard/add-project` | Add a new project (requires login) |
| `/products/[id]` | View details of a specific project |
| `/api/auth/[...nextauth]` | **NextAuth** authentication API |
| `/api/projects` | CRUD operations for projects |
