for (i = 1; i < 11; i++) {
  $('.item-' + i).on('click', function() {
     BL.MAP.wayfindTo(BL.MAP.zoneInfo[parseInt($(this)[0].id)].center);
     BL.contentBanner.hide();
     return false;
  })  
}