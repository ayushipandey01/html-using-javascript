const albums = document.getElementsByClassName('albums')[0];

const addAlbum = document.getElementById("addAlbum");

addAlbum.addEventListener("click" ,(e) => {
    e.preventDefault();
    const image = document.getElementById("img").value;
    const imgDescription = document.getElementById("description").value;
    const Album = createAlbum(image , imgDescription);
    albums.appendChild(Album);
})


function createAlbum (imageURL,imageDescription){
    const albumdiv = document.createElement('div');
    albumdiv.className = 'album' ;

    const image = document.createElement('img');
    image.setAttribute('src' , imageURL);

    const para = document.createElement('p');
    para.className = 'para';
    para.textContent = imageDescription;

    const albumFooter = document.createElement('div');
    albumFooter.className = 'albumFooter';
    
    const buttonDiv = document.createElement('div');
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');

    button1.textContent = "View";
    button2.textContent = "Edit";

    buttonDiv.appendChild(button1);
    buttonDiv.appendChild(button2);

    const timer = document.createElement('span');
    timer.textContent = "9 Mins";

    albumFooter.appendChild(buttonDiv);
    albumFooter.appendChild(timer);

    
    albumdiv.appendChild(image);
    albumdiv.appendChild(para);
    albumdiv.appendChild(albumFooter);

    return albumdiv;
}