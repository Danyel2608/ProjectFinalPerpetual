<h1 style="text-align:center">Project by Daniel Salcedo Vivancos</h1>
<h2>Description</h2>
<p>First of all, I want to talk my elections to frontend and backend.
After many turns, I finally have chosen React for frontend,and NodeJs and MongoDB for backend.
The reason why I chose react is because of the possibility it gives to give a more ordered structure, the option of being able to structure each element by several components, helped me form a solid structure.
On the other hand, I chose NodeJs and MondoDB, even though they are not as used as symfony and MySql, for the simple reason that it is easier for the programmer to use, it offers a wide flexibility, which contributed a lot to my project.
</p>
<br>
<h2>Start</h2>
<p>In order to run the project we will need install <strong>React and NodeJs</strong>,React in frontend and NodeJs for backend, with the commands npm run dev in the Backend repository and npm start in React with the Frontend repository, we could now see the project.</p><br>
<p>For the backend, we will need the dependencies: bcrypt, cors, dotenv, express, jsonwebtoken, mongoose, nodemailer, and nodemon.</p><br>

<h2>Installing the project</h2>
<code>git clone https://github.com/Danyel2608/ProjectFinalPerpetual.git</code>

<br><h3>Intalling dependences</h3>

<code>cd PERPETUAL-TATTOO</code>

<br><h4>1. Fronted</h4>
<code>cd Frontend/</code>
<code>npm install</code>
<code>cd ..</code>
<br><h4>2. Backend</h4>
<code>cd Backend/</code>
<code>npm install</code>
<code>sudo systemctl start mongodb.service</code>

<br><h2>Database</h2>
<br><p>- Set up MongoDB: Make sure you have a MongoDB instance running.<code>sudo systemctl status mongod.service</code></p>
<br><p>- Exit with Ctrl + C</p>
<br><p>- Go to the root project <code>cd ..</code></p>
<br><p>- Extract the zip file: <code>unzip BBDD.zip</code></p>
<br><p>- Import the dummy database file ("BBDD") to your MongoDB Compas:</p>
<code>mongoimport --uri="mongodb://localhost:27017/Perpetual" --collection=logins --file=BBDD/logins.metadata.json</code>
<code>mongoimport --uri="mongodb://localhost:27017/Perpetual" --collection=dates --file=BBDD/dates.metadata.json</code>

<h3>Create the .env folder</h3>
<p>- <code>cd Backend/</code></p>
<p>-Create the .env folder, copy and paste into the .env folder in the root of the backend directory.<br>
 <code>PORT=8001<br>
MONGO_URI=mongodb://localhost:27017/Perpetual<br>
TOKEN_SECRET=b819d1c87b4036a40c0a5ed3fd90de4c6bcc3977c5fbc936291a100702b30016<br>
REFRESH_TOKEN_SECRET=5aea95ccd33020810ec7f951f385d9f3378655de24f5a7004d286b4b6f85b7b7<br>
</code></p>

<h2>Running</h2>
<h3>1.Backend</h3>
<br>
<code>npm run dev</code>

<br><p>Message: "Server running on port 8001
Successfully connected to the database!!"</p>

<br><h3>2.Frontend</h3>
<code>npm start</code>

<br>
<h2>Basic</h2>
<p>I wanted to show how logins and dates are structured within my database.</p>
<li style="list-style: decimal"><strong>Logins</strong></li><br>
    <h5>An example of the login model:</h5><br>
{
  "_id": {"$oid": "65eacfba958dfae38ee156f7"},<br>
  "email": "kokeadmin@gmail.com",<br>
  "password": "$2b$10$oyZwKZ50QX/sbdqFXSooSOPiWFW5ybujiUslGaxy.Zcm4TwVFtO5u"<br>
  "name": "Àlvaro",<br>
  "role": "admin",<br>
  "lastName": "Martos",<br>
  "rememberMe": false,<br>
  "answerPrivate":"Antonio Machado"<br>
  "confirmEmail":true<br>
  "__v": 0
}<br>
<br><p>with logins endpoints:</p>
<br>
<table>
    <tr>
        <td><strong>URL</strong></td>
        <td><strong>TYPE</strong></td>
        <td><strong>DESCRIPTION</strong></td>
        <td><strong>ROLE</strong></td>
    <tr>
    <tr>
        <td>http://localhost:8001/auth/allLogins</td>
        <td>GET</td>
        <td>Get all logins</td>
        <td>admin</td>
    <tr>
    <tr>
        <td>http://localhost:8001/auth/loginId</td>
        <td>GET</td>
        <td>Get login by id</td>
        <td>admin</td>
    <tr>
    <tr>
        <td>http://localhost:8001/auth/login</td>
        <td>POST</td>
        <td>post login</td>
        <td>user and admin</td>
    <tr>
    <tr>
        <td>http://localhost:8001/auth/signup</td>
        <td>POST</td>
        <td>sign up</td>
        <td>user and admin</td>
    <tr>
    <tr>
        <td>http://localhost:8001/auth/forget</td>
        <td>PUT</td>
        <td>update forgotten password</td>
        <td>user and admin</td>
    <tr>
    <tr>
        <td>http://localhost:8001/auth/deleteUser</td>
        <td>DELETE</td>
        <td>delete user</td>
        <td>admin</td>
    <tr>
    <tr>
        <td>http://localhost:8001/emails/confirmar/:email</td>
        <td>PUT</td>
        <td>Confirm email user</td>
        <td>admin and admin</td>
    <tr>
<table>
<br><li style="list-style: decimal"><strong>Dates</strong></li>
<br><h5>An example of the dates model:</h5><br>
{<br>
  "_id": {"$oid": "65fd5a9a507b3ed86d65fc8b"},<br>
  "fecha": "2024-04-01",<br>
  "estado": "reservado"<br>
}
<br>
<br><p>with dates endpoints:</p>
<br>
<table>
    <tr>
        <td><strong>URL</strong></td>
        <td><strong>TYPE</strong></td>
        <td><strong>DESCRIPTION</strong></td>
        <td><strong>ROLE</strong></td>
    <tr>
    <tr>
        <td>http://localhost:8001/dates/availables</td>
        <td>GET</td>
        <td>Get all dates reserved for calendar</td>
        <td>admin</td>
    <tr>
    <tr>
        <td>http://localhost:8001/dates/reservation</td>
        <td>POST</td>
        <td>Post dates reserved for calendar</td>
        <td>admin</td>
    <tr>
    <tr>
        <td>http://localhost:8001/dates/delete</td>
        <td>DELETE</td>
        <td>Delete date</td>
        <td>admin</td>
    <tr>
    <tr>
        <td>http://localhost:8001/dates/update</td>
        <td>PUT</td>
        <td>Put date of database</td>
        <td>admin</td>
    <tr>
</table>

<br><h2>Links</h2>
<i class="fa-brands fa-linkedin"> <a href="https://www.linkedin.com/in/daniel-salcedo-vivancos-87855918b/">LinkedIn Daniel</a> </i>
<i class="fa-brands fa-github"><a href="https://github.com/Danyel2608">GitHub Daniel</a></i>

<h2>License</h2>
<p>"This project has been created and is owned by Daniel Salcedo Vivancos."</p>
