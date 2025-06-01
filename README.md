# Travel Story App Project

## About

Travel Story App is a platform where users can capture and share their travel experiences through images and stories, creating a personal journey archive.

## Features

- User Authentication: Sign up, log in, and manage accounts.
- Create Travel Stories: Write and share personal travel experiences.
- Photo Upload: Attach images to travel stories.
- Date & Location Tagging: Add timestamps and locations to stories.
- Story Search: Find specific stories using keywords.
- Filter by Time Period: Sort stories based on date range.
- Favorite Stories: Pin preferred stories to the top.
- Edit & Delete: Modify or remove existing stories.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Framework**: React.js 
- **Build Tool**: Vite 
- **Styling**: Tailwind CSS
## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Gnuhq26/Travel_Story_App
    cd Travel_Story_App
    ```
2. Navigate to the `backend` folder and run the following command to install the required dependencies:
    ```bash
    cd backend
    npm install
    ```
3. Connect MongoDB:
    - Go to https://www.mongodb.com/
    - Login or Create an Account
    - Create a project and create a new database
    - Add a connection IP address. I usually select `Allow Access from Where` option and create a database user
    - In the Next step, Select `Drivers` option to access the atlas database using our Node.js project
    - Copy the `connection string` and paste the `connection string` inside `config.json` file
    - Replace `<password>` in the connection string with the your user’s password

4. Configure environment variables:
    - Create a .env file in the `backend` folder
    - Add the necessary environment variables (e.g., database connection details)

5. Start the server by running:
    ```bash
    npm start
    ```
6. Open the `frontend` folder:
    - Navigate to the `frontend/travel-story-app` folder.
    - Run the following command to install the required dependencies: 
        ```bash
        npm install 
        ```
    - After the installation is complete, start the React development server by running:
        ```bash
        npm run dev 
        ```
## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding standards and includes appropriate tests.

