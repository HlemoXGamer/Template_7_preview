// Owl Carousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    margin: 20,
    loop:true,
    autoplay: true,
    autoplayHoverPause:true,
    autoWidth:true,
  });
});
// Header
  // Variables
  let bars = document.getElementById('our-bars')
  let navbar = document.getElementById('links')
  let links = document.querySelectorAll('.links li')
  let linksa = document.querySelectorAll('.links li a')

  // Click On Bars To Apper nav
  bars.addEventListener('click',e =>{
    // Add And Remove Active Class
    navbar.classList.toggle('active')
    // Click Anywhere To Disable nav links
    document.addEventListener('click', e =>{
      if(e.target !== bars && e.target !== navbar && e.target !== links && e.target !== linksa){
        if(navbar.classList.contains('active')){
          navbar.classList.toggle('active')
        }
      }
    })
  });
  // Stop Propagation On Menu
  navbar.onclick = function(e){
    e.stopPropagation();
  }
  // Apper Header on Scroll
  let services = document.querySelector('.services')
  let header = document.querySelector('header')
  let nav = document.querySelector('nav')
  window.onscroll = function(){
    if(window.scrollY >= services.scrollHeight + 200){
      header.classList.add('active');
      nav.classList.add('active')
    }
    if(window.scrollY <= services.scrollHeight){
      header.classList.remove('active');
      nav.classList.remove('active')
    }
  }