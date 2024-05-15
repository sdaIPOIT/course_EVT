//Переключение темы

const arrows = document.querySelectorAll(".arrow");

arrows.forEach((arrow,i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        clickCounter++;
        if ( itemNumber -( 5 + clickCounter) > 0) {
             movieLists[i].style.transform = `translateX(${
            movieLists[i].computedStyleMap().get("transform")[0].x.value
        -270}px)`;
        } else{
            movieLists[i].style.transform = "translateX(0)";
            clickCounter=0;
        };
});

console.log(movieLists[i].querySelectorAll("img").length)
}); 

//Переключенрие цветовой схемы

const btn = document.querySelector('.toggle');

function initialState(themeName){
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
initialState('light-theme');

function toggleTheme(){
    if (localStorage.getItem('theme') == 'light-theme') {
        initialState('dark-theme');
    } else {
        initialState('light-theme');
    }
}

btn.addEventListener('click',(e) => {
    e.preventDefault();
    toggleTheme();
});

//Главная карусель
const slides = document.querySelector('.slides');
const slideWidth = 1440; // Ширина слайда
let currentSlide = 0;

// Функция для переключения слайдов
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.children.length;
    updateSlides();
}

// Функция для обновления положения слайдов
function updateSlides() {
    slides.style.transition = 'transform 0.5s ease';
    slides.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}

// Переключение слайдов каждые 3 секунды
setInterval(nextSlide, 3000);