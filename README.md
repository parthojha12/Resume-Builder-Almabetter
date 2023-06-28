# AlmaBetter Frontend Capstone Project

## Resume-Builder

Introducing Resume Builder, the ultimate React application that empowers you to craft eye-catching resumes like never before. You can easily customise your resume with Resume Builder's user-friendly interface to highlight your unique skills and professional experience.

Stand out from the crowd and make a lasting impression with Resume Builder, the perfect tool to land your dream job. Start building your future today!

**Just select template - Fill in the details and voila! Your resume is ready to preview and download.**

## Installation

Clone this repository in your local machine and install the needed dependencies

Type **npm start** in terminal to start the application after installing the dependencies using **npm install <package_name>**

## Technologies and Libraries used

- React
- React-router-dom
- React-hook-form
- Redux
- jspdf
- Material UI and Icons
- Tailwing-css

## Application Folder Structure

```
├── public/
│	├── index.html
│    	├──images/
│		├── template1.png
│		├── template2.png
│		├── template3.png
│		├── template4.png	
├──src/
│	├──App.js
│	├──App.css
│	├──App.test.js
│	├──index.css
│	├──index.js
│	├──setupTests.js
│	├──Components/
│		├──images/
│			├──LOGO.png
│			├──Right.png
│			├──aboutus.png
│			├──download.png
│			├──nodata.png
│   	├── Education.jsx
│		├──GettingStarted.jsx
│		├──Keyskills.jsx
│		├──Myresume.jsx
│		├──PersonalInformation.jsx
│		├──Workexperience.jsx
│	├──Data/
│		├──data.js
│	├──Pages/
│		├──About US/
│			├──Aboutus.jsx
│		├──Details Filing/
│			├──Detailfilling.jsx
│			├──sidebar.css 
│		├──Home/
│			├──TempleteCard.jsx
│			├──Templetes.jsx
│		├──Preview/
│			├──Preview,jsx
│	├──Redux/
│		├──actions/
│			├──actions.js
│			├──saveresume.js
│			├──setcontact.js
│			├──seteducation.js
│			├──setexperience.js
│			├──setkeyskills.js
│			├──settemplate.js
│		├──constants/
│			├──typeCodes.js
│		├──reducers/
│			├──initialState.js
│			├──rootReducer.js
│			├──saveresume.js
│			├──setcontact.js
│			├──seteducation.js
│			├──setexperience.js
│			├──setkeyskills.js
│			├──settemplate.js
│		├──store
│			├──store.js
│	├──Templetes/
│		├──Resume1.css
│		├──Resume1.jsx
│		├──Resume2.jsx
│		├──Resume3.css
│		├──Resume3.jsx
│		├──Resume4.css
│		├──Resume4.jsx
├──index.js   
├──package-lock.json
├──package.json
└──tailwind.config.js
```

## Components and Pages of Application:

**Template Selection** - From this component user can choose their favourite template.

![template selection](https://github.com/nikhil-jangde/Resume-Builder-Almabetter/assets/112394456/ebc3023b-b631-4d9c-bbac-97c3ca1aff2c)

**Details Filling Page** - From this component user can add their details of personal info, education, experience and skills.

![perosnal](https://github.com/nikhil-jangde/Resume-Builder-Almabetter/assets/112394456/b4142cb3-d785-40ce-841e-396f200c8764)

**Preview Page** - The user will see their resume in its final form in this component, and once everything is finished, they can use the save button to downlaod it in PDF format.

![preview](https://github.com/nikhil-jangde/Resume-Builder-Almabetter/assets/112394456/7c69597f-c7ce-46bc-b5b1-5803a954012c)

**My Resume Page** - This component shows the resume that user saved.

![myresume page](https://github.com/nikhil-jangde/Resume-Builder-Almabetter/assets/112394456/b68d563d-87a6-41a4-ba02-63c94b971026)

**Abouts Us** 

![About Us](https://github.com/nikhil-jangde/Resume-Builder-Almabetter/assets/112394456/ca33b437-4bda-49f7-b899-ca5a3722f8e4)

## Links for the project

Deployment Link : https://resume-builder-almabetter-six.vercel.app/

Youtube Link : https://youtu.be/-dqTi9rST7s

## Team Memebers

- Parth Ojha
- Nikhil Jangde
