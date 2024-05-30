"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

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
    <br>
    <img src="${project.acf.image}" alt="${project.title.rendered}" style="width: 43vw; height: auto; display: block; margin-bottom: 10px;"
    Title: <b>${project.title.rendered}</b><br>
    Client: ${project.acf.client}<br>
    Type: ${project.acf.type}<br>
    Description: ${project.acf.description}<br>
    Link: <a href="${project.acf.link}" target="_blank">${project.acf.link}</a><br>
    </li>
    `
  );
} }

