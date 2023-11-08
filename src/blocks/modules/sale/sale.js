if (document.querySelector('.sale__button-all')) {
    document.querySelector('.sale__button-all').addEventListener('click', (event) => {
        event.target.classList.toggle("isOpened");
        event.target.closest(".sale__in").querySelector('.sale__list').classList.toggle('isOpened');
    });
}