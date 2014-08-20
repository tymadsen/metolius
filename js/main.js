function MM_jumpMenuGo(objId, targ, restore) { //v9.0
  var selObj = null;
  with(document) {
    if (getElementById) selObj = getElementById(objId);
    if (selObj) eval(targ + ".location='" + selObj.options[selObj.selectedIndex].value + "'");
    if (restore) selObj.selectedIndex = 0;
  }
}

$(function() {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });

  var MenuBar1 = new Spry.Widget.MenuBar("MenuBar1", {
    imgRight: "SpryAssets/SpryMenuBarRightHover.gif"
  });
  
  $('.zoom-gallery-preview').jqzoom({
    zoomType: 'innerzoom',
    lens: true,
    title: false,
    preloadImages: false,
    alwaysOn: false,
    zoomWidth: 300,
    zoomHeight: 250,
    showEffect: 'fadein',
    hideEffect: 'fadeout'
    // xOffset: 90,
    // yOffset: 30,
    // position:'left' 
  });

  $('.zoom-gallery-preview').on('click', '.zoomPup', function() {
    $.fancybox([{
      href: $(this).closest('.zoomPad').find('.zoomWrapperImage img').attr('src')
    }]);
  });

  $('.fancybox-media').fancybox({
    helpers : {
      media : {}
    }
  });
});