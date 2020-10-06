const handleClick = () => {
    fetch ('/kitten/image')
    .then(res => {
        console.log("this is the response",res)
        return res.json();

    }).then (json => {
        console.log("this is the json obj",json);
        document.querySelector(".cat-pic").src = json.src;

    })
}

document.getElementById("new-pic").addEventListener('click', handleClick);
