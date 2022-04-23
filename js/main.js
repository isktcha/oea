//MESSAGES

let messNotif = document.getElementById('massages-notification');
let messages = document.querySelector('.messages');
let mess = messages.querySelectorAll('.message');
let iptSearch = document.querySelector('#message-search');
//THEME CUSTOMAZITION
let themeCostomaz = document.querySelector('.customize-theme');
let theme = document.getElementById('theme');
//MENU-ITEMS
let muneItems = document.querySelectorAll('.menu-items');
//SIZE FUNCTIONALITY
let fontSize = document.querySelectorAll('.choose-size span');
let root = document.querySelector(':root');
//color
let colors = document.querySelectorAll('.choose-color span');
//background
let Bg1 = document.querySelector('.bg-1')
let Bg2 = document.querySelector('.bg-2')
let Bg3 = document.querySelector('.bg-3')
//scroll to the top
let home =document.getElementById('top');
//refresh the page on click
let refresh = document.getElementById('refrech');

//add active
muneItems.forEach(item =>{
        item.addEventListener('click' ,() =>{
        changeClass();
        item.classList.add('active');
        if(item.id != 'notification'){
            document.querySelector('.notification-pop').
            style.display='none';

        }else{
            document.querySelector('.notification-pop').
            style.display='block';
            document.querySelector('.notification-count').style.display='none'
        }
       
    })
})

//remove active
function changeClass(){
    muneItems.forEach(item =>{
        item.classList.remove('active')
        
    })
}


// ------------------MESSAGES NOTIFICATION-------------
//search find

const searchMessage =() =>{
    const val = iptSearch.value.toLowerCase();
    mess.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display='flex';
        }else{
            chat.style.display ='none';
        }
    })
}

iptSearch.addEventListener('keyup', searchMessage);
//hightlight messages card when message mune is clicked
messNotif.addEventListener('click' ,() =>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    document.querySelector('#massages-notification .notification-count').style.display='none'
    setTimeout(() =>{
        messages.style.boxShadow='none';
    },2000)
    if(theme != cliked){
        themeCostomaz.style.display ='none';
    }else{
        themeCostomaz.style.display ='block';
    }
})
//open
function openTheme(){
    themeCostomaz.style.display ='grid';
}
theme.addEventListener('click' ,openTheme)
//close
themeCostomaz.addEventListener('click' ,closeTheme);

function closeTheme(e) {
    if(e.target.classList.contains('customize-theme')){
        themeCostomaz.style.display='none';
    }
}

//--------------------SIZE FUNCTIONALITY--------------
const removeSizeBg = () =>{//this a function ==> onclick on the spans
    fontSize.forEach(size => {
        size.classList.remove('active');
    })
}


fontSize.forEach(size =>{
    size.addEventListener('click', ()=> {
        removeSizeBg()
        let fontSize;//empty var, full of new properties 

        size.classList.toggle('active');//add,remove at sametime
        if(size.classList.contains('font-size-1')){
            fontSize='10px';
            root.style.setProperty("--sticky-top-left" ,"5.4rem");
            root.style.setProperty("--sticky-top-right ","5.4rem");
        }else if(size.classList.contains('font-size-2')){
            fontSize='13px';
            root.style.setProperty("--sticky-top-left" ,"5.4rem");
            root.style.setProperty("--sticky-top-right ","-7rem");
        }else if(size.classList.contains('font-size-3')){
            fontSize='16px';
            root.style.setProperty("--sticky-top-left" ,"-2rem");
            root.style.setProperty("--sticky-top-right ","-17rem");
        }else if(size.classList.contains('font-size-4')){
            fontSize='19px';
            root.style.setProperty("--sticky-top-left" ,"-5rem");
            root.style.setProperty("--sticky-top-right ","35rem");
        }else if(size.classList.contains('font-size-5')){
            fontSize='22px';
            root.style.setProperty("--sticky-top-left" ,"-10rem");
            root.style.setProperty("--sticky-top-right ","-35rem");
        }

        //change the size of the roof element
        document.querySelector('html').style.fontSize = fontSize; //Element that is controling in change in the page itself
    })
})


//PRIMARY COLORS
function changeActive(){
    colors.forEach(col => {
        col.classList.remove('active');
    })
}

colors.forEach(color =>{
    color.addEventListener('click',() =>{
        let primary;
        changeActive();

        if(color.classList.contains('color-1')){
            primaryHue =252;
        }else if(color.classList.contains('color-2')){
            primaryHue =53;
        }else if(color.classList.contains('color-3')){
            primaryHue =331;
        }else if(color.classList.contains('color-4')){
            primaryHue =152;
        }else if(color.classList.contains('color-5')){
            primaryHue =202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue',primaryHue)
    })
})

//theme background value
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

    function chngeBG(){
        root.style.setProperty('--light-color-lightness' ,lightColorLightness);
        root.style.setProperty('--white-color-lightness' ,whiteColorLightness);
        root.style.setProperty('--dark-color-lightness' ,darkColorLightness);
    }
    Bg1.addEventListener('click' ,() =>{
        //add active class 
        Bg1.classList.add('active');
        //remove active from others
        Bg2.classList.remove('active');
        Bg3.classList.remove('active');
        window.location.reload();//bsc bydefault it bg ==white
    });

Bg2.addEventListener('click' ,() =>{
    darkColorLightness =`95%`;
    whiteColorLightness =`20%`;
    lightColorLightness =`15%`;

    //add active class 
    Bg2.classList.add('active');
    //remove active from others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    chngeBG();
});

Bg3.addEventListener('click' ,() =>{
    darkColorLightness =`95%`;
    whiteColorLightness =`10%`;
    lightColorLightness =`0%`;

    //add active class 
    Bg3.classList.add('active');
    //remove active from others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    chngeBG();
});

//scrolll

home.onclick = function () {
    scroll({
        top:0,
        behavior:'smooth',
    })
}

//refresh the page on click

refresh.onclick =function (){
    window.location.reload();
}