document.addEventListener('mousemove', (e) => {
    const eye1 = document.querySelector('.eye1');
    const eye2 = document.querySelector('.eye2');

    const eye1Rect = eye1.getBoundingClientRect();
    // console.log(eye1Rect);
    const eye2Rect = eye2.getBoundingClientRect();

    const eye1CenterX = eye1Rect.left + eye1Rect.width ;
    const eye1CenterY = eye1Rect.top + eye1Rect.height ;

    const eye2CenterX = eye2Rect.left + eye2Rect.width;
    const eye2CenterY = eye2Rect.top + eye2Rect.height ;

    const moveDistanceX1 = (e.clientX - eye1CenterX) / 5;
    const moveDistanceY1 = (e.clientY - eye1CenterY) / 5;

    const moveDistanceX2 = (e.clientX - eye2CenterX) / 5;
    const moveDistanceY2 = (e.clientY - eye2CenterY) / 5;

    const pupil1 = document.querySelector('.pupil1');
    const pupil2 = document.querySelector('.pupil2');

    pupil1.style.transform = `translate(${moveDistanceX1}%, ${moveDistanceY1}%)`;
    pupil2.style.transform = `translate(${moveDistanceX2}%, ${moveDistanceY2}%)`;
});
