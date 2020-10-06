
const handleClick = () => {
    document.querySelector(".loader").innerHTML = "Loading...";
    fetch ('/kitten/image')
    .then(res => {
        if(!res.ok) {
            throw res;
        }
        // console.log("this is the response",res)
        return res.json();
    }).then (json => {
        // console.log("this is the json obj",json);
        document.querySelector(".cat-pic").src = json.src;
        document.querySelector(".loader").innerHTML = "";
    })
    .catch(handleError)
}

const handleError = err => {
    if(err.json) {
        err.json().then(errorJSON => {
            document.querySelector(".error").innerHTML = errorJSON.message;
        })
    } else {
        console.error(err);
        alert("You've encountered an error! PLease try again later.");
    }
}

document.getElementById("new-pic").addEventListener('click', handleClick);

const upvote = () => {
    fetch('/kitten/upvote', { method: 'PATCH' })
        .then(res => {
            if(!res.ok) {
                throw res;
            }
            return res.json();
        })
        .then(data => {
            document.querySelector(".score").innerHTML = data.score;
        })
        .catch(handleError)
}
const downvote = () => {
    fetch('/kitten/downvote', { method: 'PATCH' })
        .then(res => {
            if(!res.ok) {
                throw res;
            }
            return res.json();
        })
        .then(data => {
            document.querySelector(".score").innerHTML = data.score;
        })
        .catch(handleError)
}



document.addEventListener('submit', event => {
    event.preventDefault();

    const comments = document.querySelector(".comments")
    const comment = document.querySelector(".user-comment");
    const newDiv = document.createElement('div');
    const newComment = document.createTextNode(comment.value);
    newDiv.appendChild(newComment)
    comments.appendChild(newDiv);
    console.log(comment)
    console.log(comment.value);
})





document.getElementById("upvote").addEventListener("click", upvote);
document.getElementById("downvote").addEventListener("click", downvote);
