const createRatingNumber = function() {
    const ratingNumContainer = document.getElementById('ratingNumContainer');

    if (!ratingNumContainer) {
        throw new Error('Rating number container not found');
    }

    for (let i=0; i<5; i++) {
        const ratingNumDOM = getRatingNumDOMWithElement(i);
        
        ratingNumContainer.appendChild(ratingNumDOM);
    }
}

const getRatingNumDOMWithElement = function(i) {
    const ratingNum = document.createElement('div');
    ratingNum.setAttribute('id', `num-${i+1}`);

    ratingNum.classList.add('rating-num', 'cursor-pointer');
    ratingNum.innerHTML = i+1;

    attachClickEvent(ratingNum, i);

    return ratingNum;
}

const attachClickEvent = function(ratingNum, i) {
    ratingNum.addEventListener('click', function () {
        const ratingClick = document.getElementById(`num-${i+1}`);
        const previousClick = document.getElementsByClassName('rating-num-clicked');

        if (previousClick && previousClick.length > 0) {
            previousClick[0].classList.remove('rating-num-clicked');
        }

        ratingClick.classList.toggle('rating-num-clicked');
    })
}

const showThankYouPage = function() {
    const firstStateDialog = document.getElementById('firstState');
    const secondStateDialog = document.getElementById('secondState');

    if (!firstStateDialog || !secondStateDialog) {
        throw new Error('Rating number container not found');
    }

    const ratingClicked = document.getElementsByClassName('rating-num-clicked');

    firstStateDialog.style.display = 'none';
    secondStateDialog.classList.remove('second-state-dialog')

    const textWithRating = document.getElementById('ratingText');
    textWithRating.innerHTML = `You selected ${ratingClicked[0].innerHTML} out of 5`;
}

createRatingNumber();