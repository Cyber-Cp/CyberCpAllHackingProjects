function postComment(){
    const name=document.getElementById("username").value;
    const comment=document.getElementById("comment").value;


    const commentBox=document.createElement("div");
    commentBox.innerHTML=`<strong>${name}</strong>: ${comment}<hr>`;


    document.getElementById("comments").appendChild(commentBox);

}