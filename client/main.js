const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")

const postForm = document.getElementById("postForm")
const putForm = document.getElementById("putForm")
const deleteForm = document.getElementById("deleteForm")
const getButton = document.getElementById("getFortunesButton")

const postFortune = document.getElementById("postFortune")
const putFortune = document.getElementById("putFortune")
const putFortuneId = document.getElementById("putFortuneId")
const deleteFortuneId = document.getElementById("deleteFortuneId")


postForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const body = {
        fortune: postFortune.value
        // id: 
    }

    axios.post("http://localhost:4000/fortunes", body)
    .then(() => {
        alert('Fortune added!')
    })
    .catch((err) => {
        console.log(err)
        alert("Something went wrong!")
    })
})

putForm.addEventListener("submit", (event) => {
    event.preventDefault()
})

deleteForm.addEventListener("submit", (event) => {
    event.preventDefault()
})



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/").then(res => {
        const data = res.data;
        alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)


