/* 
    Author: Andrew Filson (Adu Poku)
    Filename: main.js
    Date: April 10th 2026
    Desc: The functions and variable definitions for the image gallery example
*/

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = [{filename: "pic1.jpg", alt: "Closeup of a human eye"},
    {filename: "pic2.jpg", alt: "Rock that looks like a wave"},
    {filename: "pic3.jpg", alt: "Purple and white pansies"},
    {filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb"},
    {filename: "pic5.jpg", alt: "Large moth on a leaf"}
]

const baseURL = "images/";

for (const eachImage of images) {

    const newImageElement = document.createElement("img")
    newImageElement.src = baseURL + eachImage.filename
    newImageElement.alt = eachImage.alt
    newImageElement.tabIndex= "0"

    thumbBar.appendChild(newImageElement)
    newImageElement.addEventListener("click", updateDisplayedImage)
}

function updateDisplayedImage() {
    displayedImage.src = newImageElement.src
    displayedImage.alt = newImageElement.alt
}