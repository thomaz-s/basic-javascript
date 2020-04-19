var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();

        xhr.open("GET", "https://api.github.com/users/diego3g");
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if (xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject("erro na requisição");
                }
            }
        }
    });
}

minhaPromise()
    .then(function(response){
        var p = document.createElement('div');
        var jsonResponse = document.createTextNode(JSON.stringify(response));
        p.appendChild(jsonResponse);
        var body = document.querySelector("body");
        body.appendChild(p);
    })
    .catch(function(error){
        console.log(error);
});

/*usando o axios

axios.get("url")
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
});

*/