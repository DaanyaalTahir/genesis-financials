
<p align="center">
  <img src="/media-assets/logo-dark.png" alt="drawing" height="100"/>
</p>

## Project Setup (Windows)

### Backend Server and Frontend Setup

1. Install [NodeJS](https://nodejs.org/en/download/)
2. Clone the project
3. Open the project using IDE of your choice
4. Using the terminal, 'cd' into 'src/client' and run `npm i` to install frontend dependencies
5. Using the terminal, 'cd' into 'src/server' and run `npm i` to install backend dependencies

### Database Initialization and Setup
Below are two ways the databse can be initialized:
#### Using the Existing VPS

No actions needed. The backend server will connect to the database automatically.
#### Using a local MySQL Installation

1. Install [MySQL](https://dev.mysql.com/downloads/installer/) (Make sure to remember your root password!)
2. Install [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) (Optional)
3. In a MySQL query console, or MySQL Workbench, run the SQL database initialization code located in [database/](database/) in this order:
- [genesis_financial_init_database.sql](database/genesis_financial_init_database.sql)
- [genesis_financial_mock_data.sql](database/genesis_financial_mock_data.sql)
4. In the locally cloned genesis-financials repository, head to [src/server/database.js](src/server/database.js)
5. Modify the connection variables (user, password, host, and port) to reflect your MySQL installation

## Project Execution (Windows)
1. Using the terminal, 'cd' into 'src/client' and run `npm start` to start the frontend
2. Using the terminal, 'cd' into 'src/server' and run `npm start` to start the backend 
3. Open [http://localhost:3000](http://localhost:3000)
4. Use any of the following credentials to sign-in:
</br>

| Username      | Password |
| ----------- | ----------- |
| kahafeez3      | 4qnNQDZTwd |
| hcapineer6   | sp2gkqmaBMCz |
| mmichelini   | ZpS4mJLWQSJD |
</br>

**Note**: the account ```kahafeez3``` has curated data that highlights all functionalities of our application. Data for other accounts may be inconsistent.

The frontend will be running on port 3000 and the backend will be running on port 9000. 




