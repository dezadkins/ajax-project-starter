const handleClick = () => {
    fetch ('/kitten/image')
    .then(res => {
        return res.json();
    })
}
