## FruitStore

FruitStore application is a React web app that accesses a node API.  
The application demonstrates the following features:

<ul>
   <li>Loads/Saves data to the back-end API if it is running.</li>
   <li>Displays data as a table and chart</li>   
   <li>Persists data in a SqlLite DB</li>   
   <li>Front-End uses custom styling per the instructions of this exercise</li>
   <li>The Front-End is deployed on AWS and Azure</li>
   <li>The Back-End is deployed on Azure</li>
</uL>

### Demo

[Front-End AWS](https://master.d3jzwg8oxiglpc.amplifyapp.com/)
[Front-End Azure](https://fruitstoreapi.azurewebsites.net/)
[Back-End Azure](https://fruitstoreapp.azurewebsites.net/)

<ul>
   <li>API: Get Fruit<br/>
   https://fruitstoreapp.azurewebsites.net/api/fruit (HTTP GET)</li>
   <li>API: Add Sales<br/>
   https://fruitstoreapp.azurewebsites.net/api/fruit (HTTP POST)<br/>
   POST body:<br/>
   <pre>
      {
         date: <string>,
         bananas: <number>,
         apples: <number>,
         strawberries: <number>,
         oranges: <number>
      }
   </pre>
   </li>
</ul>   

   
### Deploy and Run locally

#### Back-End
1. First install and start the back-end component:

   cd Back-End
   
   npm install
   
   npm start

#### Front-End
2. Next, install and start the front-end component:

   cd Front-End
   
   npm install
   
   npm start

##### NOTES: 
<ul>   
   <li>The back-end API base url can be configured by updating <b>Front-End/src/config.js</b>.</li>
   <li>If the Back-End API is not running, the Front-End will fallback to using a mock object to display data.</li>
   <li>Currently the Back-End API deletes data each time it is restarted.</li>
</ul>

