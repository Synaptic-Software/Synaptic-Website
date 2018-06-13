jQuery(document).ready(function() {
    jQuery("#slide-nav.navbar-inverse").after(jQuery('<div class="inverse" id="navbar-height-col"></div>')), jQuery("#slide-nav.navbar-default").after(jQuery('<div id="navbar-height-col"></div>'));
    var e = ".navbar-toggle",
        a = "#page-content",
        n = ".navbar-header",
        i = "80%",
        r = "-100%",
        s = "-80%";
    jQuery("#slide-nav").on("click", e, function(e) {
        var t = jQuery(this).hasClass("slide-active");
        jQuery("#slidemenu").stop().animate({
            right: t ? r : "0px"
        }), jQuery("#navbar-height-col").stop().animate({
            right: t ? s : "0px"
        }), jQuery(a).stop().animate({
            right: t ? "0px" : i
        }), jQuery(n).stop().animate({
            right: t ? "0px" : i
        }), jQuery(this).toggleClass("slide-active", !t), jQuery("#slidemenu").toggleClass("slide-active"), jQuery("#page-content, .navbar, body, .navbar-header").toggleClass("slide-active"), jQuery("#slidemenu").toggle(10)
    });
    var t = "#slidemenu, #page-content, body, .navbar, .navbar-header";
    jQuery(window).on("resize", function() {
        jQuery(window).width() > 1048 && jQuery(".navbar-toggle").is(":hidden") && jQuery(t).removeClass("slide-active")
    })
}), jQuery(document).ready(function() {
    jQuery("#main-main-banner .region-sidebar-first .block-menu-block").prepend("<a class='navbar-toggle'><span class='icon-bar'></span><span class='icon-bar'></span><span class='icon-bar'></span></a>"), jQuery(".block-menu-block .navbar-toggle").click(function() {
        jQuery(this).next().next().find("ul").toggle(), jQuery(this).toggleClass("menu-active")
    })
});




jQuery(window).resize(function() {
   var wp = jQuery(window).width();
    if (wp > 1030) {
      jQuery('#slidemenu').show();
      jQuery("#main-main-banner .region-sidebar-first .block-menu-block ul.menu").show()
    }
    else {
        if (!jQuery(".navbar-header a").hasClass("slide-active")) {
            jQuery('#slidemenu').hide();
         }
            jQuery("#main-main-banner .region-sidebar-first .block-menu-block ul.menu").hide()
     }
});


jQuery(window).on('load', function() {
  jQuery("#views_slideshow_cycle_teaser_section_front_page_slideshow-block").prepend("<img src='http://www.synaptic.co.uk/sites/default/files/homeslide-d2c.jpg' style='visibility:hidden;' width='644' height='300'>");
});