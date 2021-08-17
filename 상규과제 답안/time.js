window.onload = () => {
    let dayBtn = document.querySelector(`#day`);
    let nightBtn = document.querySelector(`#night`);

    dayBtn.addEventListener('click', () => {
        let searchClass = document.querySelector(`body`);
        if(searchClass.classList.contains('night-body')){
            searchClass.classList.remove('night-body');
            searchClass.classList.add('day-body');
        }
    });

    nightBtn.addEventListener('click', () => {
        let searchClass = document.querySelector(`body`);
        if(searchClass.classList.contains('day-body')){
            searchClass.classList.remove('day-body');
            searchClass.classList.add('night-body');
        }
    });
}