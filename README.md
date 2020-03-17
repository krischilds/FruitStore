# FruitStore

FruitStore application is a React web app that accesses a node API.  
The application demonstrates the following features:

<ul>
   <li>Loads/Saves data to the back-end API if it is running.</li>
   <li>Displays data as a table and chart</li>   
   <li>Persists data in a SqlLite DB</li>   
   <li>Front-End uses custom styling per the instructions of this exercise</li>
   <li>The Front-End is deployed on AWS</li>
</uL>

[Front-End](https://master.d3jzwg8oxiglpc.amplifyapp.com/)

<b>Note:</b> Only the Front-End is deployed on AWS as of 3/15/2020. I will try to deploy the back-end later this week. To run both the Front-End and Back-End follow the instructions to run it locally.</p>
   
### Run Fruit Store locally

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
   <li>The front-end assumes the back-end is running on <b>localhost:8000</b>.</li>
   <li>The back-end API base url can be configured by updating <b>Front-End/src/config.js</b>.</li>
   <li>If the Back-End API is not running, the Front-End will fallback to using a mock object to display data.</li>
   <li>Currently the Back-End API deletes data each time it is started.</li>
</ul>

