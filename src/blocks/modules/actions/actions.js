const Articles = class Articles {
    constructor() { 
        
    }
    init() {
    }
}

export default Articles;


if (document.querySelector('.articles__button')) {
    document.querySelector('.articles__button').addEventListener('click', (event) => {
        event.target.classList.toggle("isOpened");
        event.target.closest(".articles__in").querySelector('.articles__list').classList.toggle('isOpened');
        console.log(event);
    });
}
