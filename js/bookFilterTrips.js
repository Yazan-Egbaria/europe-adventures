// let activity = 'All';
// let difficulty = 'All';
// let priceMin = 500;
// let priceMax = 1950;
// let numberOfNights = 1;
// let numberOfParticipants = 6;

// $(document).ready(function(){
//     $('.activity .list').click(function() {
//     const value = $(this).attr('data-filter');
//     activity = value;
//   })
// });

// $(document).ready(function(){
//     $('.difficulty .list').click(function() {
//     const value = $(this).attr('data-filter');
//     difficulty = value;
//   })
// });

// function show(){
//     document.querySelector('.filter-book');
// }


$(document).ready(function(){
    $('.activity .list').click(function() {
    const value = $(this).attr('data-filter');
    if (value == 'all'){
      $('.trip').show('1000'); 
    }
    else {
      $('.trip').not('.'+value).hide('1000');
      $('.trip').filter('.'+value).show('1000');
    }

    $(this).addClass('active').siblings().removeClass('active');
  })
});

$(document).ready(function(){
    $('.difficulty .list').click(function() {
    const value = $(this).attr('data-filter');
    if (value == 'all'){
      $('.trip').show('1000'); 
    }
    else {
      $('.trip').not('.'+value).hide('1000');
      $('.trip').filter('.'+value).show('1000');
    }

    $(this).addClass('active').siblings().removeClass('active');
  })
});
