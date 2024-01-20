# Music Player Backend Readme

## Documentation
For detailed documentation, please visit [Music Player Backend API Documentation](https://documenter.getpostman.com/view/16082702/2s9YsT6Tmk).

## Prerequisites
Before running the code, make sure you have the following prerequisites installed on your system:
- PostgreSQL
- Node.js

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ataur39n-sharif/music-player-backend
   ```

2. **Navigate to the project directory:**
   ```bash
   cd music-player-backend
   ```

3. **Create an env file:**
   Create a file named `.env` in the root of the project and add the following configuration:

   ```env
   PORT=9000
   NODE_ENV=development
   BCRYPT_SALTROUND=12
   JWT_ACCESSTOKEN_SECRET=JWT_ACCESSTOKEN_SECRET
   JWT_ACCESSTOKEN_EXP=12h
   JWT_REFRESHTOKEN_SECRET=JWT_REFRESHTOKEN_SECRET
   JWT_REFRESHTOKEN_EXP=48h
   JWT=helloworld
   ```

   Replace `JWT_ACCESSTOKEN_SECRET` and `JWT_REFRESHTOKEN_SECRET` with your own secret values.

4. **Install dependencies:**
   ```bash
   npm install or yarn
   ```

5. **Run SQL queries:**
   Execute all queries from the `queries.sql` file sequentially to set up the database.

6. **Run the application:**
   ```bash
   yarn dev or npm run dev
   ```

7. **Application is now running:**
   The application will be accessible at `http://localhost:9000`.

