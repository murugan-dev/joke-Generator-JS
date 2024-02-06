const imgVisible = document.querySelector("#imgTag")
console.log(imgVisible)
document.querySelector(".btn").addEventListener("click", joke);
async function joke() {
    let config ={
        headers : {
            Accept : "application/json",
    },
};
let a =await fetch("https://icanhazdadjoke.com/", config);
console.log(a)
let b = await a.json();
console.log(b)
document.querySelector("#content").innerHTML= b.joke;
imgVisible.classList.add("imgVisible")

}
