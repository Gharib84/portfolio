import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private Projects: Project[] = [
    {
      id: this.GenerateId(),
      title:"Ecommerce Store",
      info:"The Ecommerce Store is a web application that is built using Node.js, a MySQL database, Material Design Bootstrap 5 (MDBOOTSTRAP), and Handlebars. The purpose of this application is to provide an easy-to-use platform for customers to browse, purchase, and manage products.",
      subTitle:"The application includes several key features",
      keyFeatures:["Home page: Showcases the Ecommerce Store with a welcoming message and images", "About page: Provides information about the Ecommerce Store and the developer", "Products page: Displays all available products, with the ability to view more details about a specific product by clicking on it", "Cart page: Allows customers to view and manage the products they have added to their cart, including the total cost and the ability to remove items or proceed with the purchase","Register page: Allows customers to create an account by filling out a form", "Login page: Allows customers to log in to their account", "My orders page: Allows customers to view their past orders","Admin panel: Allows the store administrator to manage the products, including creating, updating, deleting and listing them"],
      philosophy:"Ecommerce Store Web Application Philosophy",
      summary:"The philosophy behind the Ecommerce Store web application is to provide a seamless and efficient user experience through the use of TypeScript implementation from front-end to back-end using Nest TypeScript with Express.js. The application follows the MVC pattern, and implements an authentication system that utilizes Express sessions. The database design is implemented using the TypeORM library, which makes it easy to connect the application to a relational database. Additionally, the application includes a registration and login system for both customers and the store administrator.",
      tags:["Nest", "Typescript","MySQL"],
      imgUrl:"assets/img/store.png",
      gitHubUrl:"https://bit.ly/3wnzWod"
      

    },
    {
      id: this.GenerateId(),
      title:"Front Desk Management System",
      info:"Front Desk Management System is an application built using Laravel PHP, Tailwind CSS, and MySQL. The goal of this application is to provide a seamless and efficient way to manage front desk operations for hotels and resorts",
      subTitle:"The system includes several key features",
      keyFeatures:["A user-friendly login system that utilizes Laravel's built-in Breeze feature for easy authentication","A dashboard that displays all the features of the system and allows for easy navigation","Room booking feature that allows for easy creation of new rooms in the database, with custom validations configured using Laravel's built-in validation","Arrival list feature that displays all expected arrivals, including information such as guest name and arrival/departure dates","Departure list feature that allows for searching and displaying all departures based on a specific date","Room list feature that displays all rooms created in the system and allows for easy confirmation of reservations","Check-in list feature that displays all rooms that have been booked and includes information such as room number and guest name etc","Invoices list feature that displays all invoices for each room in the resort and allows for easy viewing of each invoice based on room number"],
      philosophy:"Front Desk Management System Philosophy",
      summary:"The Front Desk Management System philosophy is to utilize the best of Laravel's built-in features to create an efficient and user-friendly system. This includes utilizing the MVC model, authentication system, sessions, Laravel Query Builder, and Router Resource to create a system that is easy to use and understand. By following these principles, the system aims to make front desk management more efficient and organized for hotels and resorts",
      tags:["PHP","Laravel","MySQL"],
      imgUrl:"asset/img/FDSystem.png",
      gitHubUrl:"https://bit.ly/3iYkNqf",

    },
    {
      id: this.GenerateId(),
      title:"The Inventory Shop App for electronic devices",
      info:"The Inventory Shop App for electronic devices is an Angular application built using version 15 and designed with the Clarity system. The app's main feature is a login page that implements a simple authentication service using Angular Resolver, where users can log in using a username and password that are stored in local storage",
      subTitle:"The application includes several key features",
      keyFeatures:["Login page: Allows users to log in using a username and password, which are stored in local storage and authenticated using Angular Resolver","Products table: Displays a list of products stored in local storage, along with an Add button that triggers a Clarity wizard with three steps to guide the user through the process of creating a new product","Product service: Handles the creation, updating, and deletion of products within the product table","Edit button: Allows the user to update a product by its id","Delete button: Allows the user to remove a specific product by its id","Reactive forms: Handles user inputs and ensures that all input fields are filled out correctly before creating a new product","Clarity system design: Makes the app easy to use and navigate"],
      philosophy:"The Inventory Shop App for electronic devices Philosophy",
      summary:"The philosophy behind the Inventory Shop App for electronic devices is to provide a user-friendly and efficient way for managing electronic devices inventory. The app is built using Angular version 15 and designed with the Clarity system, which aims to make the interface easy to navigate and understand for the user.The app utilizes a simple authentication service via Angular Resolver to ensure that only authorized users can access the inventory management features. It also utilizes a product service that handles the creation, updating, and deletion of products, which makes it easy for the user to manage the inventory.The app also uses reactive forms to handle user inputs, this ensures that all input fields are filled out correctly before creating a new product and make it easy for the user to understand what is required.Additionally, the app's design is inspired by the Clarity system which aims to provide a visually pleasing and modern interface that is easy to understand for the user. This design approach makes it easy for the user to understand the different features of the app and how to use them.Overall, the Inventory Shop App for electronic devices is designed to be user-friendly, efficient, and visually pleasing to provide an easy way for managing electronic devices inventory",
      tags:["Angular","Clarity"],
      imgUrl:"assets/img/inventoryWeb.png",
      gitHubUrl:"https://bit.ly/3H0Qrvl"
    },
    {
      id:this.GenerateId(),
      title:"AnIssue Tracking System",
      info:"In this project, we will develop an Angular application for managing and tracking issues using reactive forms and Clarity",
      subTitle:"My application will have several key features",
      keyFeatures:["A list of issues displayed in a table that can be sorted and filtered","A form for users to report new issues","A modal dialog for resolving an issue"],
      philosophy:"The process for creating this application will involve the following steps",
      summary:"Setting up the project: We will start by creating a new Angular project and installing the necessary packages, such as Clarity, for my application. Creating the issue list: We will create a component to display a list of issues in a table that can be sorted and filtered. Creating the report issue form: We will create a form for users to report new issues, using reactive forms for validation and handling user input. Creating the resolve issue modal: We will create a modal dialog for resolving an issue, which will allow users to update the status of an issue and add comments. Testing and deployment: Once the application is complete, we will test it thoroughly and then deploy it to a production environmen",
      tags:["Angular","Clarity"],
      imgUrl:"assets/img/anissue.png",
      gitHubUrl:"https://bit.ly/3GQt87a"
    },
    {
      id:this.GenerateId(),
      title:"The YouTube API App Angular 7",
      info:"The YouTube API App is an Angular application that utilizes the YouTube API v3 to allow users to search for specific videos on YouTube. The project was generated with Angular CLI version 7.3.5 and uses several key features to structure the app. This project was generated with Angular CLI version 7.3.5",
      subTitle:"The app's features include",
      keyFeatures:["Utilizing Dependency Injection to manage dependencies between components","Making use of the HttpClientModule to retrieve and fetch data from the YouTube API","Implementing Reactive Extension to handle data streams","Utilizing an API key provided by the YouTube API v3","Using Material Design and Bootstrap 4 for the front-end design","Utilizing the @input and @output decorators to pass data between components","Creating Angular components that work together seamlessly, in accordance with Angular 7 guidelines"],
      philosophy:"The YouTube API App Angular Philosophy",
      summary:"The philosophy behind this app is to demonstrate the ability to use Angular and its features to create a functional application that interacts with an external API. It also aims to be visually appealing with the use of Material Design and Bootstrap 4, and easy to use for the end user. In summary, the YouTube API App is an Angular-based application that allows users to search for specific videos on YouTube by utilizing the YouTube API v3. It utilizes various Angular features such as Dependency Injection, HttpClientModule, Reactive Extension, Material Design, and Bootstrap 4. Additionally, it uses @input and @output decorator to pass data between components and following Angular 7 rules to create a seamless integration between them",
      tags:["Angular","Material Design","Bootstrap"],
      imgUrl:"assets/img/youtubeApi.png",
      gitHubUrl:"https://bit.ly/3H0YdFg"
    },
    {
      id:this.GenerateId(),
      title:"Wheather web app",
      info:"The Simple Weather web app is a standalone application built using JavaScript core without any framework. The aim of this app is to demonstrate the ability to use the built-in JavaScript function, fetch, to manipulate data from API providers. Specifically, this app utilizes the free Open Weather API to display weather information to the user",
      subTitle:"The app's features include",
      keyFeatures:["Retrieving weather information from the Open Weather API using the fetch function","Displaying current weather conditions such as temperature, humidity, and wind speed","Allow the user to search for weather information by city name","Showing an error message in case the city name is not found"],
      philosophy:"Wheather web app Philosophy",
      summary:"The philosophy behind this app is to demonstrate the ability to work with API's and use the fetch function to manipulate the data returned by an API. It also aims to be simple and easy to understand, making it a great example for those who are new to working with APIs and JavaScript In summary, The Simple Weather web app is a JavaScript-based application that uses the fetch function to retrieve and display weather information from the Open Weather API. It is designed to be simple and easy to understand, with the aim of showcasing the ability to work with APIs and the fetch function",
      tags:["Javascript", "Bootstrap5"],
      imgUrl:"assets/img/weather.png",
      gitHubUrl:"https://bit.ly/3QVzt60"
    }
  ];

  constructor() { }

  projects(): Observable<Project[]> {
    return from([this.Projects]);
  }

  GenerateId(): number {
    return Math.floor(Math.random() * 1000);
  }
}
