const imageURL = document.getElementById("img");
// console.log(imageURL);

const imageDescription = document.getElementById("description");
// console.log(imageDescription);

const addAlbum = document.getElementById("addAlbum");
const container = document.getElementsByClassName("container")[0];

addAlbum.addEventListener("click" ,(e) => {
    e.preventDefault();
    var image = imageURL.value;
    var imgDescription = imageDescription.value;
    const createAlbum = createAlbum(image , imgDescription);
    albums.appendChild(createAlbum);
})


function createAlbum (imageURL,imageDescription){
    const albumdiv = document.createElement("div");
    albumdiv.className = "album" ;

    const image = document.createElement("img");
    image.setAttribute("src" , imageURL);

    const para = document.createElement("p");
    para.textContent = imageDescription;

    const albumFooter = createElement("div");
    albumFooter.className = "albumFooter";
    
    const buttonDiv = createElement("div");
    const button1 = createElement("button");
    const button2 = createElement("button");

    button1.textContent = "View";
    button2.textContent = "Edit";

    buttonDiv.appendChild(button1);
    buttonDiv.appendChild(button2);

    const timer = document.createElement("span");
    timer.textContent = "9 Mins";

    albumFooter.appendChild(buttonDiv);
    albumFooter.appendChild(timer);

    albumdiv.appendChild(para);
    albumdiv.appendChild(image);
    albumdiv.appendChild(albumFooter);

    return albumdiv;
}