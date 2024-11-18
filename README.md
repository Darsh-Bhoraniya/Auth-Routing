# React Authentication Routing

This is a simple React project that demonstrates authentication routing using static username and password (`admin`/`admin`) to redirect users to a protected dashboard page. The project uses **React**, **React Router**, and **Bootstrap** to provide a clean, responsive UI and routing features.

## Features

- **Login Page**: Allows users to enter their username and password. If the username and password are correct, users will be redirected to a protected **Dashboard** page.
- **Dashboard Page**: A protected page that is only accessible to users who provide the correct credentials (`admin`/`admin`).
- **Authentication Context**: The application uses `AuthContext` to manage the authentication state globally, ensuring that authentication data is easily accessible throughout the app.
- **Bootstrap Integration**: The UI is styled using **Bootstrap** to give it a responsive and modern look.
- **Redirect on Invalid Credentials**: Users who provide incorrect credentials will see an error message and will not be redirected to the Dashboard.

## Prerequisites

Before running this application, make sure you have the following installed on your machine:

- **Node.js** (version 14.x or higher)  
  Download and install Node.js from the official website: [https://nodejs.org](https://nodejs.org).
  
- **npm** (Node Package Manager, which comes with Node.js)

## Installation

To get started with the project, follow these steps:

1. **Clone the Repository**:  
   First, you need to clone the repository to your local machine.

   ```bash
   git clone https://github.com/your-username/auth-routing.git
