// alert(document.title)

// //display the content of the head tag
// alert(document.head.innerHTML)

// //display the content of the body tag
// alert(document.body.innerHTML)

document.querySelector("h1").style.color="red"
document.querySelector("small#author").style.color="blue"
const quote =document.querySelector(".show")
quote.classList.add("myClass")
const content=document.getElementById("bottom_content")
content.innerText=""
const newElement=document.createElement("h1")
newElement.innerText="This is a new Element"
newElement.style.color="green"
// document.body.append(newElement)
// document.querySelector(".king").append(newElement)
document.body.prepend(newElement)
document.querySelector(".king").prepend(newElement)
document.querySelector(".show").prepend(newElement)
document.querySelector(".king").insertBefore(newElement,quote)
const clonedElement=quote.cloneNode(true)
document.querySelector(".king").insertBefore(clonedElement,author)

//Assignment
//create an element and put it inside yoyr cloned quote
const skinElement=document.createElement("h1")
skinElement.innerText="SKIN CARE MATTERS!!!"
skinElement.style.color="blueviolet"
document.querySelector("").prepend(skinElement)

//open a new folder with vs code
//git init itcopy files into folderdo the first two things in the repository
git add .
git commit -m'message'
push it(git push -u origin main)