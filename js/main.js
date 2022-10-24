//الاوفر لاى والسايد بار الخاصين بأجهزة المحمول
let minuIcon = document.querySelector('.minu-icon');
let navBar = document.querySelector('nav');
let closeIcon = document.querySelector('.close-icon');

minuIcon.addEventListener('click', function() {
    let div = document.createElement('div');
    div.className = ('over-lay2');
    navBar.style.left = '0';
    document.body.appendChild(div);
});

closeIcon.addEventListener('click', function() {
    navBar.style.left = ('-100%');
    document.querySelector('.over-lay2').remove();
});
//

let productImages = document.querySelectorAll('.product-images div');
let heroImage = document.querySelector('.hero');
let smallImages = document.querySelectorAll('.product-images div img');

//لما تدوس على أى صورة صغيره من صور المنتج فى الصفحة الرئيسية
//هيحصل انها هتاخد كلاس اكتيف
productImages.forEach(function(image) {
    image.addEventListener('click', function(e) {
        productImages.forEach(function(image) {
            image.classList.remove('active');
        })
        image.classList.add('active');
    });
})
productImages.forEach(function(image) {
    image.addEventListener('click', function(e) {
        productImages.forEach(function(image) {
            image.classList.remove('active');
        })
        image.classList.add('active');
    });
})

//وهتظهر مكان الهيرو اميج
smallImages.forEach(function(image) {
    image.addEventListener('click', function() {
    heroImage.src = image.src
    })
})
//

//لما تدوس على الهيرو اميج فى الصفحة الرئيسية
heroImage.addEventListener('click', function() {
    //هيحصل أوفر لاى على الصفحة كلها
    let over = document.createElement('div');
    over.className = 'over-lay';
    document.body.appendChild(over);
    //وبعدين هيتم انشاء بوكس كبير  فوق الأوفر لاى
    let lightBox = document.createElement('div');
    lightBox.className = 'light-box';
    //جوا البوكس ده هيتم انشاء ايقونة 
    let closeItem = document.createElement('img');
    closeItem.src = '/images/icon-close.svg'
    closeItem.className = 'close-item';
    lightBox.appendChild(closeItem);
//الايقونة لما ندوس عليها هتقفل البوكس
    closeItem.addEventListener('click', function() {
        document.querySelector('.light-box').remove();
        document.querySelector('.over-lay').remove();
        heroImage.style.maxWidth = '100%';
    })

//جوا البوكس هتظهر الصورة اللى تم الضغط عليها علشان يظهرلك البوكس فوق الاوفر لاى
    let img = document.createElement('img');
    img.src = heroImage.src;
    lightBox.appendChild(img);
//جوا البوكس فى نهايته هيكون فيه ديف جواه صور المنتج
    let container = document.createElement('div');
    container.className = "container";
    let div1 = document.createElement('div')
    div1.className = ('active');   //
    let img1 = document.createElement('img')
    img1.src = '/images/image-product-1.jpg'
    div1.appendChild(img1)

    let div2 = document.createElement('div')
    let img2 = document.createElement('img')
    img2.src = '/images/image-product-2.jpg'
    div2.appendChild(img2)

    let div3 = document.createElement('div')
    let img3 = document.createElement('img')
    img3.src = '/images/image-product-3.jpg'
    div3.appendChild(img3)

    let div4 = document.createElement('div')
    let img4 = document.createElement('img')
    img4.src = '/images/image-product-4.jpg'
    div4.appendChild(img4)

    container.appendChild(div1);
    container.appendChild(div2);
    container.appendChild(div3);
    container.appendChild(div4);
    lightBox.appendChild(container)

//لما يتم الضغط على أى صورة من صور المنتج اللى بداخل البوكس هيحصل ان الصورة اللي هيتم الضغط عليها هتاخد كلاس اكتيف وهتظهر مكان الصورة الكبيرة اللى فى البوكس
    let asd = [div1, div2, div3, div4];

    asd.forEach(function(el) {
        el.addEventListener('click' , function(e) {
            asd.forEach(function(s) {
                s.classList.remove('active')
            })
            el.classList.add('active')
            img.src = el.firstElementChild.src;
        })


    })
    document.body.appendChild(lightBox)
    

    console.log(getComputedStyle(document.body).width)

//جوا البوكس هيتم انشاء ديف فيه سهمين للتنقل بين الصور
    let arrows = document.createElement('div');
    arrows.className = 'arrows';
    let relative = document.createElement('div');
    relative.className = 'relative';
    let x = document.createElement('div');
    let previousArrow = document.createElement('img');
    previousArrow.src = '/images/icon-previous.svg';
    x.appendChild(previousArrow);
    relative.appendChild(x);
    let y = document.createElement('div');
    let nextArrow = document.createElement('img');
    nextArrow.src = '/images/icon-next.svg';
    y.appendChild(nextArrow);
    relative.appendChild(y);
    arrows.appendChild(relative);
    lightBox.appendChild(arrows);

    //ده بلوك خاص بإن الاكتيف بتاع صور الهوم يكون نفسه بتاع صور البوكس اللى ع الاوفر لاى
    let xy = [img1, img2, img3, img4];
    for(let i = 0; i < xy.length; i++) {
       if(img.src == xy[i].src) {
        asd.forEach(function(c) {
            c.classList.remove('active');
        })
        xy[i].parentElement.classList.add('active');
       }
    }

})
//

// مايخص السلة
/////////////////////////////////////////////////////////////////

let plusIcon = document.querySelector('.plus');
let minusIcon = document.querySelector('.minus');
let num = document.querySelector('.q');
let addToCart = document.querySelector('.add-to-cart');
let notification = document.querySelector('.notification');
let cartIcon = document.querySelector('.cart-icon');
let headeraContainer = document.querySelector('header .container');
let priceForOnePiece = document.querySelector('.price-for-one-piece');

smallImages.forEach(function(image) {
    document.querySelector('.old').src = heroImage.src;
    image.addEventListener('click', function(e) {
        document.querySelector('.old').src = image.src;
    });
})
  
addToCart.addEventListener('click', function() {
    document.querySelector('.notification').innerHTML = num.innerHTML;
    document.querySelector('.total-price p').innerHTML = ('$' + priceForOnePiece.innerHTML + ' x ' + num.innerHTML);
    document.querySelector('.total-price span').innerHTML = ('$' + (priceForOnePiece.innerHTML * num.innerHTML).toFixed(2));
    document.querySelector('.one').style.display = 'flex';
    document.querySelector('.two').style.display = 'flex';
    document.querySelector('.empty').style.display = 'none';
    document.querySelector('.notification').style.display = 'inline-block';

    if(num.innerHTML == 0) {
        document.querySelector('.one').style.display = 'none';
        document.querySelector('.two').style.display = 'none';
        document.querySelector('.empty').style.display = 'block';
    }
})

if (num.innerHTML == 0) {
    notification.style.display = 'none';
}

document.querySelector('.remove-icon').addEventListener('click', function() {
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'none';
    document.querySelector('.empty').style.display = 'block';
    document.querySelector('.notification').style.display = 'none';
    num.innerHTML = 0;
})

document.querySelector('.cart-icon').addEventListener('click', function() {
    document.querySelector('.parent').classList.toggle('hidden');
        if(num.innerHTML == 0) {
            document.querySelector('.one').style.display = 'none';
            document.querySelector('.two').style.display = 'none';
            document.querySelector('.empty').style.display = 'block';
        }
})

document.querySelector('.two').addEventListener('click', function() {
    alert('Need Back End')
})

//لمما تدوس على علامة ال + هيحصل زسادة عدد المنتج الل هتشتريه
plusIcon.addEventListener('click', function() {
    num.innerHTML =  +num.innerHTML + 1;
})

minusIcon.addEventListener('click', function() {
    if(num.innerHTML > 0) {
        num.innerHTML =  num.innerHTML - 1;
    }
})
/////////////////////////////////////////////////////////////////
// if(getComputedStyle(document.body).width > '700px') {
    heroImage.addEventListener('click', function() {
        heroImage.style.maxWidth = '80%';
    })
