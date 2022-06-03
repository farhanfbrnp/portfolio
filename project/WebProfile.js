const container = document.querySelector('.container');
const headpage = document.querySelector('.headpage');
const thumbs = document.querySelectorAll('#thumb');

container.addEventListener('click', function(e) {
  if( e.target.className == 'thumb' ) {
      headpage.src = e.target.src;
      headpage.classList.add('fade');
      setTimeout(function() {
        headpage.classList.remove('fade');
      }, 500);

      thumbs.forEach(function(thumb) {
        thumb.className = 'thumb';
      });

      e.target.classList.add('active');
  }
});

// function showSpinner() {
//   $("#spinner").show();
//   setTimeout(function() {
//     $("#spinner").hide();
//   }, 2000);
// }

const wrapper = document.querySelectorAll('.wrapper');
const loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.addEventListener('click', function() {
// moreBtn = document.querySelector("#more');

//     saveBtn.onclick = function() {
//         this.innerHTML = "<div class='loader'></div>";
//         setTimeout(() => {
//             this.innerHTML = "Saved";
//         }, 2000);
    // }
    let images = [...document.querySelectorAll('.container .wrapper .image')];
    for(let i = currentItem; i < currentItem + 3; i++) {
      images[i].style.display = 'inline-block';
    }
  currentItem += 3;

  // if(currentItem >= images.length) {
  //   loadMoreBtn.addEventListener('click', function() {
  //     let images = [...document.querySelectorAll('.container .wrapper .image')];
  //     for(let i = currentItem; i < currentItem + 3; i++) {
  //       images[i].style.display = 'none';
  //     }
  //   currentItem -= 3;
  //   }) 
  // }
})

//   if(currentItem >= images.length) {
//     loadMoreBtn.style.display ==='none';

//   else {
//     loadMoreBtn.style.display === "none";
//     images.style.display = "inline";
//     button.innerHTML = "Show less"; 
//   }
// }



