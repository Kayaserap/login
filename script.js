let hesap = document.querySelector('.hesap');
let hesap2 = document.querySelector('.hesap2');
let giris = document.querySelector('.giris');

let kayit = document.querySelector('.kayit');

hesap.addEventListener('click', () => 
    {

    giris.style.animation='toRegister 0.5s forwards';
    setTimeout(()=>{
      giris.style.display='none';
      kayit.style.display ='flex';
      kayit.style.animation='kayit 0.5s forwards'  ;


    }, 600);
});
hesap2.addEventListener('click', () => 
    {

    kayit.style.animation='kayit 0.5s forwards';
    setTimeout(()=>{
      kayit.style.display='none';
      giris.style.display ='flex';
      giris.style.animation='kayit 0.5s forwards'  ;


    }, 600);
});


