# CS465 Full Stack MEAN Project

![Angular](https://img.shields.io/badge/angular-%5E14.0.0-red)
![Node](https://img.shields.io/badge/node-%3E%3D%2014.0.0-brightgreen)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📖 Project Overview

This repository hosts a full-stack web application built using the **MEAN stack** (MongoDB, Express, Angular, and Node.js). It serves as a comprehensive demonstration of single-page application (SPA) architecture, RESTful API development, and secure database integration.

## 🏗 Architecture & Evolution

### Frontend Evolution
In this full stack project, the development path progressed from utilizing very light libraries to increasingly complex frameworks. The evolution moved from basic JavaScript and Bootstrap to server-side templating with Handlebars, then to Express with a database, and finally to **Angular** as a Single Page Application (SPA) with database connections.

The contrast between these approaches was distinct. Earlier phases relied on traditional page reloads, whereas the move to an SPA architecture shifted the user experience to be more fluid. The final architecture allowed the frontend to decouple from the backend logic, relying instead on API connections.

### Backend Strategy: The MEAN Stack
For the backend, the project utilized a **NoSQL MongoDB** database. This is a core part of the MEAN stack, and the benefits were clear. The database allowed for a quick setup through **Mongoose**, providing a schema-based solution to model application data. It was dynamic enough to handle all site requirements without overengineering the solution, allowing for flexibility as data structures evolved.

### Data Flow: The Role of JSON
**JSON** (JavaScript Object Notation) served as the lifeblood of this project. While JavaScript is the programming language that powers the logic, JSON served as the standard data interchange format. It acted as the single communication link from the frontend to the backend. Its simple object notation made it clear and nearly seamless in full-stack transactions, tying the two sides of the development together efficiently.

## 💻 Technical Challenges & Design

### Refactoring and Component Design
The development process involved trial and error. Reworking components with **Handlebars** was one of the clearest examples of improvement, as components were templated and layered to reduce redundancy. This highlighted the benefits of reusable UI components: they streamline updates and ensure visual consistency.

Refactoring data structures was also pivotal as additional features were added. Changes to the database schema often affected pages across the entire project, requiring a careful look at how data flowed through the application to improve functionality and efficiency.

### Testing and Security
**RESTful** calls were pivotal in building the communication pipeline between the Angular SPA and the Express server. Using CRUD (Create, Read, Update, Delete) operations was the key mechanism for data retrieval and manipulation.

When it came to testing, verifying these endpoints was essential. Request and retrieval methods necessitated rigorous API testing to ensure data accuracy. Furthermore, adding layers of security (such as authentication) introduced new complexities, requiring that every endpoint be tested not just for functionality, but for secure access validation.

## 🛠 Tech Stack

* **Frontend:** Angular, TypeScript
* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose ODM
* **Auth:** JSON Web Tokens (JWT)

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites
* Node.js and npm installed
* Angular CLI installed globally (`npm install -g @angular/cli`)
* MongoDB installed and running locally (or a connection string for MongoDB Atlas)

### Installation

1.  **Clone the repo**
    ```bash
    git clone [https://github.com/m1dunfee/cs465-fullstack-MEAN.git](https://github.com/m1dunfee/cs465-fullstack-MEAN.git)
    cd cs465-fullstack-MEAN
    ```

2.  **Install Server Dependencies**
    ```bash
    npm install
    ```

3.  **Install Client Dependencies**
    Navigate to the Angular client folder (e.g., `/app_public` or `/client` depending on structure):
    ```bash
    cd app_public
    npm install
    ```

4.  **hydrate the database**
    ```bash
    cd app_server/dbHydration
    npm run seed.js
    ```

5. **Add .env**
   ```bash
    * JWT_SECRET = *insert super secret token*
    ```

6.  **Run the Application**
    * Start the API (Root folder):
    ```bash
      npm start
    ```
    Navigate to `http://localhost:3000` to view the user app application.
    
    * Start Angular (Client folder):
    ```bash
    cd app_admin
    ng serve
    ```
    Navigate to `http://localhost:4200` to view the admin app application.

## 🧠 Professional Reflection

This project was a great experience because it provided a strong understanding of what MongoDB can do for web development. It also served as a demonstration of how abstracting an API allows multiple sites (or frontends) to consume the same data, creating a more robust ecosystem. Mastering these skills has made me a more marketable candidate by proving I can build scalable, interconnected web architectures.

## 📄 License


[MIT License](LICENSE)

