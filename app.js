const images =[
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
]

let imgIndex = 0 ;

const imgSlider = document.getElementById('slider-img');

setInterval(()=>{
    if (imgIndex >= images.length ){

        imgIndex=0;
    }
   const imgURL = images[imgIndex];
   imgSlider.setAttribute('src',imgURL )

    imgIndex++

},2000)