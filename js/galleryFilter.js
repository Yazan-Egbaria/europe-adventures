$(document).ready(function(){
    $('.list').click(function() {
    const value = $(this).attr('data-filter');
    if (value == 'all'){
      $('.img-container').show('1000'); 
    }
    else {
      $('.img-container').not('.'+value).hide('1000');
      $('.img-container').filter('.'+value).show('1000');
    }

    $(this).addClass('active').siblings().removeClass('active');
  })
});