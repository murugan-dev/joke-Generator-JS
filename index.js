const imgVisible = document.querySelector("#imgTag")
console.log(imgVisible)
document.querySelector(".btn").addEventListener("click", joke);
async function joke() {

    let config ={
        headers : {
            Accept : "application/json",
    },
};

let data =await fetch("https://icanhazdadjoke.com/", config);
console.log(data)
let jsonValue = await data.json();
console.log(jsonValue)
document.querySelector("#content").innerHTML= jsonValue.joke;

imgVisible.classList.add("imgVisible")

}
