## ![](https://github.com/Hui0820/Pictures/blob/master/tripinterestLogo.png?raw=true)Travel website client

![](<https://img.shields.io/badge/Build-passing-green.svg>)![](<https://img.shields.io/badge/FrontEnd-React-brightgreen.svg>)![](<https://img.shields.io/badge/BackEnd-Express-yellow.svg>)![](<https://img.shields.io/badge/DataBase-MongoDB-blue.svg>)![](<https://img.shields.io/badge/Licence-GPL-orange.svg>)



> This project version as private project was originally contrtolled by GitLab. Now it becomes open-source repository in GitHub. It has already been deployed at [https://tripinterest.tk](https://tripinterest.tk)



**The travel website project** is dedicated to build a platform for users to share their trip experience and stories, which consists of the following two repositories: 

- **travel_website_client**
- **travel_website_server**

*It provides main **Features** below:*

- Reading users diaries		
- Posting article
- Authentication
- Users registration
- Searching
- Comments
- Profile setting
- Resetting password
- Uploading avatar
- Instant message
- and more

Here is <u>*the client side*</u>, which is built by MERN stack, and ***built with***

- [React](https://reactjs.org/docs/getting-started.html)  ^16.7.0

- *[react-redux](https://react-redux.js.org/introduction/quick-start)* ^6.0.0

- [axios](https://github.com/axios/axios)  ^0.18.0

- [immutable](https://devdocs.io/immutable/)  ^4.0.0

- [antd](https://ant.design/docs/react/introduce)  ^3.13.0

- [bootstrap](https://react-bootstrap.github.io/getting-started/introduction) ^4.3.1

- [styled-component](https://www.styled-components.com/docs/api) ^4.1.3

- *[socket.io-client](https://socket.io/docs/)* ^2.2.0 

  More *dependencies* is seen at the Package.JSON file



### Getting Started

------

##### Prerequisites

The project runs in [Nodejs](<https://nodejs.org/en/>) environment. it requires:

-  [Nodejs](https://nodejs.org/en/)  v 10.0 or later
-  [npm](https://www.npmjs.com/)  v 6.0 or later
-  [MongoDB](https://www.mongodb.com/) v 3.0 or later

##### Installing

> Note: The `client` project needs to work with [travel website server](https://github.com/Hui0820/TravelWebsite_server) project, make sure the [travel website server](https://github.com/Hui0820/TravelWebsite_server) and `MongoDB` service are running.

```linux
$ git clone https://github.com/Hui0820/TravelWebsite_server
$ cd travel_website_client
$ npm install
$ npm run 
```

the development mode will be running at `localhost:3000`



##### Building

*Step 1*

```linux
$ npm run-script build
```

Using the above command, it will create a build directory.

![](https://github.com/Hui0820/Pictures/blob/master/build.png?raw=true)

*Step 2*

Move the whole `build` directory to the [travel website server](https://github.com/Hui0820/TravelWebsite_server) project. 



### More Demos
------

##### MainPage

![MainPage](https://github.com/Hui0820/Pictures/blob/master/mainPage.png?raw=true)

##### Post Article

![Post article](https://github.com/Hui0820/Pictures/blob/master/Posting.png?raw=true)

##### Search

![search](https://github.com/Hui0820/Pictures/blob/master/SearchBox.png?raw=true)

##### Instant Message

![instant message](https://github.com/Hui0820/Pictures/blob/master/InstantMessage.png?raw=true)





### Licensing

------

This project is under `GNU/GPL` license.

