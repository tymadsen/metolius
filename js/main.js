function MM_jumpMenuGo(objId, targ, restore) { //v9.0
  var selObj = null;
  with(document) {
    if (getElementById) selObj = getElementById(objId);
    if (selObj) eval(targ + ".location='" + selObj.options[selObj.selectedIndex].value + "'");
    if (restore) selObj.selectedIndex = 0;
  }
}

$(function() {
  // menu toggling
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });

  // menubar images (Spry)
  var MenuBar1 = new Spry.Widget.MenuBar("MenuBar1", {
    imgRight: "SpryAssets/SpryMenuBarRightHover.gif"
  });

  // product thumbnails/gallery
  var previewContainer = $('.zoom-gallery-preview'),
      thumbContainer = $('#product-image-thumbs-hrz'),
      largeImages = [],
      selectedImage = 0;

  thumbContainer.find('a[data-img-sm]').each(function(i) {
    var smImg = $(this).data('img-sm'),
        lgImg = $(this).data('img-lg');

    largeImages.push({
      href: lgImg
    });

    $(this).click(function(e) {
      e.preventDefault();

      if ($(this).hasClass('selected')) {
        return;
      }

      thumbContainer.find('a.selected').removeClass('selected');
      $(this).addClass('selected');

      selectedImage = i;

      previewContainer.find('img').prop('src', smImg);
      $('.loupe').hide().find('img').prop('src', lgImg);
    });
  }).first().click();

  previewContainer.loupe({
    width: 240,
    height: 240
  }).add('.loupe').click(function(e) {
    e.preventDefault();
    e.stopPropagation();

    $.fancybox(largeImages, { index: selectedImage });
  });

  $('.fancybox-media').fancybox({
    helpers : {
      media : {}
    }
  });
});