// "use strict"; // Use ECMAScript 5 strict mode in browsers that support it

// window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// // Function to initialize the Web App
// function initApp() {
//   console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
//   getProjects();
//   console.log(projects);
// }

// //  TEsting
//  async function getProjects(){
//   const response = await fetch("https://magdalenapietras.dk/wp-json/wp/v2/projects?acf_format=standard");
//   const data = await response.json();
//   return data;
// }

// "use strict"; // Use ECMAScript 5 strict mode in browsers that support it

// window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// // Function to initialize the Web App
// async function initApp() {
//   console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
//   const projects = await getProjects(); // Await the fetched projects data
//   console.log(projects); // Log the projects data to the console
// }

// // Function to fetch projects data
// async function getProjects() {
//   const response = await fetch("https://magdalenapietras.dk/wp-json/wp/v2/projects?acf_format=standard");
//   const data = await response.json();
//   return data;
// }



// function displayProjects(projects) {
//   const projectList = document.querySelector("#projects-list");

//   for (const project of projects) {
//     projectList.insertAdjacentHTML(
//       "beforeend",
//       `         
//       <li>
//         ${project.asf.type}
//       </li>
//       `
//     );
//   }
// }



// "use strict"; // Use ECMAScript 5 strict mode in browsers that support it

// window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// // Function to initialize the Web App
// async function initApp() {
//   console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
//   const projects = await getProjects(); // Await the fetched projects data
//   displayProjects(projects); // Display the fetched projects
//   console.log(projects); // Log the projects data to the console
// }


// // Function to fetch projects data
// async function getProjects() {
//   const response = await fetch("https://magdalenapietras.dk/wp-json/wp/v2/projects?acf_format=standard");
//   const data = await response.json();
//   return data;
// }

// // Function to display projects
// function displayProjects(projects) {
//   const projectList = document.querySelector("#projects-list");

//   for (const project of projects) {
//     projectList.insertAdjacentHTML(
//       "beforeend",
//       `         
//       <li>
//         ${project.acf.type}
//       </li>
//       `
//     );
//   }
// }

//   project.forEach(project => {
//     projectList.insertAdjacentHTML(
//       "beforeend",
//       `<li>${project.type}</li>`
//     );
//   });


window.addEventListener("load", initApp); 

async function initApp() {
  console.log("initApp: app.js is running 🎉");
  const projects = await getProjects(); 
  console.log(projects); 
  displayProjects(projects); // Call the displayProjects function with the fetched projects
}

async function getProjects() {
  const response = await fetch("https://magdalenapietras.dk/wp-json/wp/v2/projects?acf_format=standard");
  const data = await response.json();
  return data;
}


function displayProjects(projects) {
  const projectsList = document.querySelector("#projects-list");

for (const project of projects) {
  projectsList.insertAdjacentHTML(
    "beforeend",
    `         
    <li>
    Title: ${project.title.rendered}<br>
    Client: ${project.acf.client}<br>
    Type: ${project.acf.type}<br>
    Description: ${project.acf.description}<br>
    Link: <a href="${project.link}" target="_blank">${project.link}</a><br>
    ${project.acf.image}
    </li>
    `
  );
} }

