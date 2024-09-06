
fetch("https://dummyjson.com/users")

.then((response) => {
    console.log(response.ok);
    return response.json()
    
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log("Failed to fetch");
    
});