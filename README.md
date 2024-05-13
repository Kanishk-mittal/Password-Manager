# React Password Manager

This is a password manager application built with React, Express, and MongoDB. It allows users to securely store and manage their passwords.

## Features

- Password storage: Users can add, view, edit, and delete their passwords.
- Search functionality: Users can search for specific passwords using keywords.
- Responsive design: The application is optimized for both desktop and mobile devices.

## Requirements
- Node.js (v20.09.0 or later) 
- npm (v10.1.0 or later)
- MongoDB (latest)
- Express (v4.17.1 or later)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Kanishk-mittal/Password-Manager
    ```

2. Install dependencies:

    ```bash
    cd '.\Password Manager\'
    npm install
    ```

3. Set up the environment variables:

    - Create a `.env` file in the root directory.
    - Add the following variables:

      ```plaintext
      MONGODB_URI=<your-mongodb-uri>
      ```

4. Start the development server:

    ```bash
    npm run dev
    ```
5. Start backend server:

    ```bash
    cd '.\backend\'
    nodemon server.js

## Usage

1. Open your web browser and navigate to `http://localhost:5173`.
3. Start managing your passwords by adding, editing, or deleting them.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
