const scene = document.querySelector(".scene")
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        let i = scrollPosition;
        scene.style.transform = `perspective(1500px) rotateY(${i/8}deg) translateY(${i/30}px)`;
    }
})

// const imgDesert = document.querySelector(".img-desert")
// const imgSpace = document.querySelector(".img-space")
// const imgLake = document.querySelector(".img-lake")
// const imgForest = document.querySelector(".img-forest")
// const imgAlps = document.querySelector(".img-alps")
// const imgStones = document.querySelector(".img-stones")
const floor = document.querySelector(".floor")
const walls = document.querySelectorAll(".wall")

// imgDesert.addEventListener("click", () => {
//     for (let i = 0; i < wall.length; i++) {
//         wall[i].style.backgroundImage = "url('img/desert.jpg')"
//     }
//     floor.style.backgroundImage = "url('img/sand.jpg')"
// })
// imgSpace.addEventListener("click", () => {
//     for (let i = 0; i < wall.length; i++) {
//         wall[i].style.backgroundImage = "url('img/space.jpg')"
//     }
//     floor.style.backgroundImage = "url('img/rock.jpg')"
// })
// imgLake.addEventListener("click", () => {
//     for (let i = 0; i < wall.length; i++) {
//         wall[i].style.backgroundImage = "url('img/lake.jpg')"
//     }
//     floor.style.backgroundImage = "url('img/water.jpg')"
// })
// imgForest.addEventListener("click", () => {
//     for (let i = 0; i < wall.length; i++) {
//         wall[i].style.backgroundImage = "url('img/trees.jpg')"
//     }
//     floor.style.backgroundImage = "url('img/grass.jpg')"
// })
// imgAlps.addEventListener("click", () => {
//     for (let i = 0; i < wall.length; i++) {
//         wall[i].style.backgroundImage = "url('img/alps.jpg')"
//     }
//     floor.style.backgroundImage = "url('img/snow.jpg')"
// })
// imgStones.addEventListener("click", () => {
//     for (let i = 0; i < wall.length; i++) {
//         wall[i].style.backgroundImage = "url('img/stones.jpg')"
//     }
//     floor.style.backgroundImage = "url('img/stone.jpg')"
// })

const images = document.querySelectorAll("img");
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", () => {
        walls.forEach(wall => {
            if (images[i].classList.contains("img-lake")) {
                wall.style.backgroundImage = "url('img/lake.jpg')"
                floor.style.backgroundImage = "url('img/water.jpg')"
            } else if (images[i].classList.contains("img-desert")) {
                wall.style.backgroundImage = "url('img/desert.jpg')"
                floor.style.backgroundImage = "url('img/sand.jpg')"
            } else if (images[i].classList.contains("img-space")) {
                wall.style.backgroundImage = "url('img/space.jpg')"
                floor.style.backgroundImage = "url('img/rock.jpg')"
            } else if (images[i].classList.contains("img-stones")) {
                wall.style.backgroundImage = "url('img/stones.jpg')"
                floor.style.backgroundImage = "url('img/stone.jpg')"
            } else if (images[i].classList.contains("img-forest")) {
                wall.style.backgroundImage = "url('img/trees.jpg')"
                floor.style.backgroundImage = "url('img/grass.jpg')"
            } else if (images[i].classList.contains("img-alps")) {
                wall.style.backgroundImage = "url('img/alps.jpg')"
                floor.style.backgroundImage = "url('img/snow.jpg')"
            }
        })
    })
}