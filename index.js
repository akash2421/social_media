//side bar

const menuitem = document.querySelectorAll('.menu-item');// all is parent
const messagenotify = document.querySelector("#message-notify");
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");
const fontSizes = document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root');
const colorpattern = document.querySelectorAll('.choose-color span')
//theme
const theme= document.querySelector('#theme');
const themeModel =  document.querySelector('.customized-theme');


const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');


const changeActiveitem = () => {
    menuitem.forEach(item => {
        item.classList.remove('active')
  })
}

menuitem.forEach(item => {
  item.addEventListener('click', () => {
    changeActiveitem()
    item.classList.add('active')
if(item.id != 'notification'){
document.querySelector('.notification-popup').style.display = 'none'
}else{
document.querySelector('.notification-popup').style.display = 'block'
document.querySelector('.notification-count').style.display = 'none'
}

  })
  
})


messagenotify.addEventListener('click', () => {
  messages.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px';
  messagenotify.querySelector('.notification-count').style.display = 'none'

  setTimeout(() =>{
    messages.style.boxShadow = 'none';

  }, 2000);
})



const searchMessage = () => {
  const val =  messageSearch.value.toLowerCase();
  message.forEach(user => {
    let name = user.querySelector('h5').textContent.toLowerCase();
    if(name.indexOf(val) != -1)
    {
      user.style.display ='flex';

    }else{
    user.style.display ='none';
    }
  })
}

messageSearch.addEventListener('keyup', searchMessage);


//theme

const openThemeModel = () =>{
  themeModel.style.display = 'grid'
}


const closeThemeModel = (e)  =>
{
if (e.target.classList.contains('customized-theme')) {
  themeModel.style.display = 'none'

}
}

themeModel.addEventListener('click', closeThemeModel);

theme.addEventListener('click', openThemeModel);


const removesizeselector = () =>
{
  fontSizes.forEach(size => {
    size.classList.remove('active')
  })
}


fontSizes.forEach(size =>{

 size.addEventListener('click',() => {
  let fontsize;
  size.classList.toggle('active')
  removesizeselector();

  if(size.classList.contains('font-size-1')){
    fontsize = '10px'
    root.style.setProperty('--sticky-top-left', '5.4rem');
    root.style.setProperty('--sticky-top-right', '5.4rem');
  } else  if(size.classList.contains('font-size-2')){
    fontsize = '13px'
    root.style.setProperty('--sticky-top-left', '5.4rem');
    root.style.setProperty('--sticky-top-right', '-7rem');
  } else  if(size.classList.contains('font-size-3')){
    fontsize = '16px'
    root.style.setProperty('--sticky-top-left', '-2rem');
    root.style.setProperty('--sticky-top-right', '-17rem');
  }else  if(size.classList.contains('font-size-4')){
    fontsize = '19px'
    root.style.setProperty('--sticky-top-left', '-5rem');
    root.style.setProperty('--sticky-top-right', '-25rem');
  }else  if(size.classList.contains('font-size-5')){
    fontsize = '22px'
    root.style.setProperty('--sticky-top-left', '-12rem');
    root.style.setProperty('--sticky-top-right', '-35rem');
  }
  document.querySelector('html').style.fontSize = fontsize;


})
})


const removecolorselector = () =>
{
  colorpattern.forEach(colorpicker => {
    colorpicker.classList.remove('active')
  })
}
colorpattern.forEach(color =>{
 let primary;
  color.addEventListener('click',() => {
    removecolorselector();
   if(color.classList.contains('color-1')){
   primaryHue = 252;
  } else if(color.classList.contains('color-2')){
    primaryHue = 52;
   } else if(color.classList.contains('color-3')){
    primaryHue = 352;
   }else if(color.classList.contains('color-4')){
    primaryHue = 152;
   }else if(color.classList.contains('color-5')){
    primaryHue = 202;
   }
   color.classList.add('active')
   root.style.setProperty('--primary-color-hue', primaryHue)

})
})

let lightColorlightness;
let whiteColorlightness;
let darkColorlightness;

const ChangeBG = () => {
  root.style.setProperty('--light-color-lightness', lightColorlightness);
  root.style.setProperty('--white-color-lightness', whiteColorlightness);
  root.style.setProperty('--dark-color-lightness', darkColorlightness);

}


bg1.addEventListener('click', () =>
{


 bg1.classList.add('active');
 bg1.classList.remove('active');
 bg3.classList.remove('active');
window.location.reload(); 
})
bg2.addEventListener('click', () =>
{
  darkColorlightness ='95%';
 whiteColorlightness='20%';
 lightColorlightness = '15%';

 bg2.classList.add('active');
 bg1.classList.remove('active');
 bg3.classList.remove('active');
ChangeBG();

})
bg3.addEventListener('click', () =>
{
  darkColorlightness ='95%';
 whiteColorlightness='10%';
 lightColorlightness = '0%';

 bg3.classList.add('active');
 bg1.classList.remove('active');
 bg2.classList.remove('active');
ChangeBG();

})