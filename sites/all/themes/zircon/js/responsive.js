(function(e){Drupal.Responsive=Drupal.Responsive||{};Drupal.Responsive.supportedScreens=[.5,479.5,719.5,959.5,1049.5];Drupal.Responsive.oldWindowWidth=0;Drupal.Responsive.masonry_containers=[];Drupal.Responsive.masonry_widths=[];Drupal.Responsive.updateResponsiveMenu=function(){var t=window.innerWidth?window.innerWidth:e(window).width();if(t<Drupal.Responsive.supportedScreens[3]){e(".region-menu-bar").hide();e(".responsive-menu-button").show()}else{e(".responsive-menu-button").hide();e(".region-menu-bar").show()}};Drupal.Responsive.initResponsiveMenu=function(){Drupal.Responsive.updateResponsiveMenu();e(".tb-main-menu-button").bind("click",function(t){var n=e(".region-menu-bar");if(n.css("display")=="none"){window.scrollTo(0,0);n.css({display:"block"})}else{n.css({display:"none"})}})};Drupal.Responsive.setSlideshowHeight=function(){var t=e("#slideshow-wrapper .view .views-field img");if(t.length){if(!Drupal.Responsive.slideshowSize){var n=new Image;n.src=e(t[0]).attr("src");Drupal.Responsive.getImageSize(n);setTimeout(Drupal.Responsive.setSlideshowHeight,200);return}var r=e("#page").width();if(r<Drupal.Responsive.supportedScreens[3]){var i=Drupal.Responsive.slideshowSize.width;var s=Drupal.Responsive.slideshowSize.height;var o=Math.floor(r*s/i);e("#slideshow-wrapper .view .views-field img, #slideshow-wrapper .view .views_slideshow_cycle_main, #slideshow-wrapper .views-slideshow-cycle-main-frame-row, #slideshow-wrapper .views-slideshow-cycle-main-frame").css({height:o+"px"})}else{e("#slideshow-wrapper .view .views-field img, #slideshow-wrapper .view .views_slideshow_cycle_main, #slideshow-wrapper .views-slideshow-cycle-main-frame-row, #slideshow-wrapper .views-slideshow-cycle-main-frame").css({height:Drupal.Responsive.slideshowSize.height+"px"})}e("#slideshow-wrapper .views-slideshow-cycle-main-frame").cycle("destroy");e("#slideshow-wrapper .views-slideshow-cycle-main-frame").cycle()}};Drupal.Responsive.getImageSize=function(e){if(e.height==0){setTimeout(function(){Drupal.Responsive.getImageSize(e)},200);return}if(!Drupal.Responsive.slideshowSize){Drupal.Responsive.slideshowSize={height:e.height,width:e.width}}};Drupal.behaviors.actionResponsive={attach:function(t){e(window).load(function(){Drupal.Responsive.initResponsiveMenu();Drupal.Responsive.initMasonry();e(window).resize(function(){var t=window.innerWidth?window.innerWidth:e(window).width();if(t!=Drupal.Responsive.oldWindowWidth){Drupal.Responsive.updateResponsiveMenu();Drupal.Responsive.oldWindowWidth=t}Drupal.Responsive.setSlideshowHeight();for($i=0;$i<Drupal.Responsive.masonry_containers.length;$i++){Drupal.Responsive.updateColumnWidth($i);e(Drupal.Responsive.masonry_containers).masonry("reload")}})})}};Drupal.Responsive.updateColumnWidth=function(t){container=e(Drupal.Responsive.masonry_containers[t]);container.addClass("masonry-reload");var n=container.width();var r=Math.round(n/Drupal.Responsive.masonry_widths[t]);var i=Math.floor(n/r);container.find(".block:not(.block-quicktabs .block)").css({width:i+"px"});container.data("basewidth",i);return i};Drupal.Responsive.updateMasonryWidth=function(t,n){container=e(Drupal.Responsive.masonry_containers[t]);container.addClass("masonry-reload");var r={itemSelector:".block:not(.block-quicktabs .block)",isResizable:false,isAnimated:false,columnWidth:function(){container.removeClass("masonry-reload");var e=container.data("basewidth");if(e==undefined){return Drupal.Responsive.updateColumnWidth(t)}else{return e}}};container.masonry(r)};Drupal.Responsive.initMasonry=function(){var t=e(".sidebar .region");if(t.length){for($i=0;$i<t.length;$i++){Drupal.Responsive.masonry_containers.push(t[$i]);Drupal.Responsive.masonry_widths.push(300);Drupal.Responsive.updateMasonryWidth($i,true)}}}})(jQuery)