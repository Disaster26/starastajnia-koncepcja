// menu mobilne
(function(){
  var nav=document.getElementById('nav');
  document.querySelectorAll('[data-menu]').forEach(function(b){
    b.addEventListener('click',function(){
      var o=nav.classList.toggle('otwarte');
      nav.querySelector('.zamknij').hidden=!o;
      document.body.style.overflow=o?'hidden':'';
    });
  });
  nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){
    nav.classList.remove('otwarte');nav.querySelector('.zamknij').hidden=true;document.body.style.overflow='';
  });});
})();
// pasy zdjęć: strzałki + przeciąganie myszą
document.querySelectorAll('[data-pas]').forEach(function(b){
  b.addEventListener('click',function(){
    var p=document.getElementById(b.dataset.pas);
    var f=p.querySelector('figure');
    p.scrollBy({left:(f.offsetWidth+14)*b.dataset.kier,behavior:'smooth'});
  });
});
document.querySelectorAll('.pas').forEach(function(p){
  var x0=0,s0=0,ciag=false;
  p.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;ciag=true;x0=e.clientX;s0=p.scrollLeft;p.style.scrollSnapType='none';p.style.cursor='grabbing';});
  window.addEventListener('pointermove',function(e){if(ciag)p.scrollLeft=s0-(e.clientX-x0);});
  window.addEventListener('pointerup',function(){if(!ciag)return;ciag=false;p.style.scrollSnapType='';p.style.cursor='';});
});
