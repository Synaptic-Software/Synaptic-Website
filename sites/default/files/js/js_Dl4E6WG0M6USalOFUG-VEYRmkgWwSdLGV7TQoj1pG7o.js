/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=70756b99ff0b87431a0ce6515f2804af)
 * Config saved to config.json and https://gist.github.com/70756b99ff0b87431a0ce6515f2804af
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("bs.alert");n||i.data("bs.alert",n=new o(this)),"string"==typeof e&&n[e].call(i)})}var i='[data-dismiss="alert"]',o=function(e){t(e).on("click",i,this.close)};o.VERSION="3.3.7",o.TRANSITION_DURATION=150,o.prototype.close=function(e){function i(){a.detach().trigger("closed.bs.alert").remove()}var n=t(this),s=n.attr("data-target");s||(s=n.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var a=t("#"===s?[]:s);e&&e.preventDefault(),a.length||(a=n.closest(".alert")),a.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(a.removeClass("in"),t.support.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",i).emulateTransitionEnd(o.TRANSITION_DURATION):i())};var n=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=o,t.fn.alert.noConflict=function(){return t.fn.alert=n,this},t(document).on("click.bs.alert.data-api",i,o.prototype.close)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.button"),s="object"==typeof e&&e;n||o.data("bs.button",n=new i(this,s)),"toggle"==e?n.toggle():e&&n.setState(e)})}var i=function(e,o){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,o),this.isLoading=!1};i.VERSION="3.3.7",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(e){var i="disabled",o=this.$element,n=o.is("input")?"val":"html",s=o.data();e+="Text",null==s.resetText&&o.data("resetText",o[n]()),setTimeout(t.proxy(function(){o[n](null==s[e]?this.options[e]:s[e]),"loadingText"==e?(this.isLoading=!0,o.addClass(i).attr(i,i).prop(i,!0)):this.isLoading&&(this.isLoading=!1,o.removeClass(i).removeAttr(i).prop(i,!1))},this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var o=t.fn.button;t.fn.button=e,t.fn.button.Constructor=i,t.fn.button.noConflict=function(){return t.fn.button=o,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var o=t(i.target).closest(".btn");e.call(o,"toggle"),t(i.target).is('input[type="radio"], input[type="checkbox"]')||(i.preventDefault(),o.is("input,button")?o.trigger("focus"):o.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.carousel"),s=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e),a="string"==typeof e?e:s.slide;n||o.data("bs.carousel",n=new i(this,s)),"number"==typeof e?n.to(e):a?n[a]():s.interval&&n.pause().cycle()})}var i=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};i.VERSION="3.3.7",i.TRANSITION_DURATION=600,i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},i.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},i.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},i.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e),o="prev"==t&&0===i||"next"==t&&i==this.$items.length-1;if(o&&!this.options.wrap)return e;var n="prev"==t?-1:1,s=(i+n)%this.$items.length;return this.$items.eq(s)},i.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},i.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){return this.sliding?void 0:this.slide("next")},i.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},i.prototype.slide=function(e,o){var n=this.$element.find(".item.active"),s=o||this.getItemForDirection(e,n),a=this.interval,r="next"==e?"left":"right",l=this;if(s.hasClass("active"))return this.sliding=!1;var h=s[0],d=t.Event("slide.bs.carousel",{relatedTarget:h,direction:r});if(this.$element.trigger(d),!d.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var p=t(this.$indicators.children()[this.getItemIndex(s)]);p&&p.addClass("active")}var c=t.Event("slid.bs.carousel",{relatedTarget:h,direction:r});return t.support.transition&&this.$element.hasClass("slide")?(s.addClass(e),s[0].offsetWidth,n.addClass(r),s.addClass(r),n.one("bsTransitionEnd",function(){s.removeClass([e,r].join(" ")).addClass("active"),n.removeClass(["active",r].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(c)},0)}).emulateTransitionEnd(i.TRANSITION_DURATION)):(n.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(c)),a&&this.cycle(),this}};var o=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=i,t.fn.carousel.noConflict=function(){return t.fn.carousel=o,this};var n=function(i){var o,n=t(this),s=t(n.attr("data-target")||(o=n.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,""));if(s.hasClass("carousel")){var a=t.extend({},s.data(),n.data()),r=n.attr("data-slide-to");r&&(a.interval=!1),e.call(s,a),r&&s.data("bs.carousel").to(r),i.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",n).on("click.bs.carousel.data-api","[data-slide-to]",n),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var i=t(this);e.call(i,i.data())})})}(jQuery),+function(t){"use strict";function e(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var o=i&&t(i);return o&&o.length?o:e.parent()}function i(i){i&&3===i.which||(t(n).remove(),t(s).each(function(){var o=t(this),n=e(o),s={relatedTarget:this};n.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&t.contains(n[0],i.target)||(n.trigger(i=t.Event("hide.bs.dropdown",s)),i.isDefaultPrevented()||(o.attr("aria-expanded","false"),n.removeClass("open").trigger(t.Event("hidden.bs.dropdown",s)))))}))}function o(e){return this.each(function(){var i=t(this),o=i.data("bs.dropdown");o||i.data("bs.dropdown",o=new a(this)),"string"==typeof e&&o[e].call(i)})}var n=".dropdown-backdrop",s='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.7",a.prototype.toggle=function(o){var n=t(this);if(!n.is(".disabled, :disabled")){var s=e(n),a=s.hasClass("open");if(i(),!a){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",i);var r={relatedTarget:this};if(s.trigger(o=t.Event("show.bs.dropdown",r)),o.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger(t.Event("shown.bs.dropdown",r))}return!1}},a.prototype.keydown=function(i){if(/(38|40|27|32)/.test(i.which)&&!/input|textarea/i.test(i.target.tagName)){var o=t(this);if(i.preventDefault(),i.stopPropagation(),!o.is(".disabled, :disabled")){var n=e(o),a=n.hasClass("open");if(!a&&27!=i.which||a&&27==i.which)return 27==i.which&&n.find(s).trigger("focus"),o.trigger("click");var r=" li:not(.disabled):visible a",l=n.find(".dropdown-menu"+r);if(l.length){var h=l.index(i.target);38==i.which&&h>0&&h--,40==i.which&&h<l.length-1&&h++,~h||(h=0),l.eq(h).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=o,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,a.prototype.toggle).on("keydown.bs.dropdown.data-api",s,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,o){return this.each(function(){var n=t(this),s=n.data("bs.modal"),a=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e);s||n.data("bs.modal",s=new i(this,a)),"string"==typeof e?s[e](o):a.show&&s.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.7",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var o=this,n=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var n=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),n&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});n?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(i.TRANSITION_DURATION):o.$element.trigger("focus").trigger(s)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var o=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&n;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+n).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){o.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var o=t(this),n=o.attr("href"),s=t(o.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),a=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},s.data(),o.data());o.is("a")&&i.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(s,a,this)})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof e&&e;!n&&/destroy|hide/.test(e)||(n||o.data("bs.tooltip",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};i.VERSION="3.3.7",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var a=n[s];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var r="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusin"==e.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusout"==e.type?"focus":"hover"]=!1),i.isInStateTrue()?void 0:(clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide())},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var n=this,s=this.tip(),a=this.getUID(this.type);this.setContent(),s.attr("id",a),this.$element.attr("aria-describedby",a),this.options.animation&&s.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,h=l.test(r);h&&(r=r.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var d=this.getPosition(),p=s[0].offsetWidth,c=s[0].offsetHeight;if(h){var f=r,u=this.getPosition(this.$viewport);r="bottom"==r&&d.bottom+c>u.bottom?"top":"top"==r&&d.top-c<u.top?"bottom":"right"==r&&d.right+p>u.width?"left":"left"==r&&d.left-p<u.left?"right":r,s.removeClass(f).addClass(r)}var g=this.getCalculatedOffset(r,d,p,c);this.applyPlacement(g,r);var v=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",v).emulateTransitionEnd(i.TRANSITION_DURATION):v()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,a=parseInt(o.css("margin-top"),10),r=parseInt(o.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(r)&&(r=0),e.top+=a,e.left+=r,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,h=o[0].offsetHeight;"top"==i&&h!=s&&(e.top=e.top+s-h);var d=this.getViewportAdjustedDelta(i,e,l,h);d.left?e.left+=d.left:e.top+=d.top;var p=/top|bottom/.test(i),c=p?2*d.left-n+l:2*d.top-s+h,f=p?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(c,o[0][f],p)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function o(){"in"!=n.hoverState&&s.detach(),n.$element&&n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=t(this.$tip),a=t.Event("hide.bs."+this.type);return this.$element.trigger(a),a.isDefaultPrevented()?void 0:(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=window.SVGElement&&i instanceof window.SVGElement,a=o?{top:0,left:0}:s?null:e.offset(),r={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},l=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,r,l,a)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.right&&(n.left=a.left+a.width-d)}return n},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),e?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.popover"),s="object"==typeof e&&e;!n&&/destroy|hide/.test(e)||(n||o.data("bs.popover",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="3.3.7",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var o=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=i,t.fn.popover.noConflict=function(){return t.fn.popover=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tab");n||o.data("bs.tab",n=new i(this)),"string"==typeof e&&n[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.3.7",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=i.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:n[0]});if(n.trigger(s),e.trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){var r=t(o);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:n[0]})})}}},i.prototype.activate=function(e,o,n){function s(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),n&&n()}var a=o.find("> .active"),r=n&&t.support.transition&&(a.length&&a.hasClass("fade")||!!o.find("> .fade").length);a.length&&r?a.one("bsTransitionEnd",s).emulateTransitionEnd(i.TRANSITION_DURATION):s(),a.removeClass("in")};var o=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=o,this};var n=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',n).on("click.bs.tab.data-api",'[data-toggle="pill"]',n)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.affix"),s="object"==typeof e&&e;n||o.data("bs.affix",n=new i(this,s)),"string"==typeof e&&n[e]()})}var i=function(e,o){this.options=t.extend({},i.DEFAULTS,o),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.3.7",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return i>n?"top":!1;if("bottom"==this.affixed)return null!=i?n+this.unpin<=s.top?!1:"bottom":t-o>=n+a?!1:"bottom";var r=null==this.affixed,l=r?n:s.top,h=r?a:e;return null!=i&&i>=n?"top":null!=o&&l+h>=t-o?"bottom":!1},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),o=this.options.offset,n=o.top,s=o.bottom,a=Math.max(t(document).height(),t(document.body).height());"object"!=typeof o&&(s=n=o),"function"==typeof n&&(n=o.top(this.$element)),"function"==typeof s&&(s=o.bottom(this.$element));var r=this.getState(a,e,n,s);if(this.affixed!=r){null!=this.unpin&&this.$element.css("top","");var l="affix"+(r?"-"+r:""),h=t.Event(l+".bs.affix");if(this.$element.trigger(h),h.isDefaultPrevented())return;this.affixed=r,this.unpin="bottom"==r?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==r&&this.$element.offset({top:a-e-s})}};var o=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=o,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),o=i.data();o.offset=o.offset||{},null!=o.offsetBottom&&(o.offset.bottom=o.offsetBottom),null!=o.offsetTop&&(o.offset.top=o.offsetTop),e.call(i,o)})})}(jQuery),+function(t){"use strict";function e(e){var i,o=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(o)}function i(e){return this.each(function(){var i=t(this),n=i.data("bs.collapse"),s=t.extend({},o.DEFAULTS,i.data(),"object"==typeof e&&e);!n&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),n||i.data("bs.collapse",n=new o(this,s)),"string"==typeof e&&n[e]()})}var o=function(e,i){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};o.VERSION="3.3.7",o.TRANSITION_DURATION=350,o.DEFAULTS={toggle:!0},o.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},o.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,n=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(n&&n.length&&(e=n.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){n&&n.length&&(i.call(n,"hide"),e||n.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,
this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var l=t.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])}}}},o.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(n,this)).emulateTransitionEnd(o.TRANSITION_DURATION):n.call(this)}}},o.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},o.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,o){var n=t(o);this.addAriaAndCollapsedClass(e(n),n)},this)).end()},o.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var n=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=o,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(o){var n=t(this);n.attr("data-target")||o.preventDefault();var s=e(n),a=s.data("bs.collapse"),r=a?"toggle":n.data();i.call(s,r)})}(jQuery),+function(t){"use strict";function e(i,o){this.$body=t(document.body),this.$scrollElement=t(t(i).is(document.body)?window:i),this.options=t.extend({},e.DEFAULTS,o),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function i(i){return this.each(function(){var o=t(this),n=o.data("bs.scrollspy"),s="object"==typeof i&&i;n||o.data("bs.scrollspy",n=new e(this,s)),"string"==typeof i&&n[i]()})}e.VERSION="3.3.7",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e=this,i="offset",o=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(i="position",o=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var e=t(this),n=e.data("target")||e.attr("href"),s=/^#./.test(n)&&t(n);return s&&s.length&&s.is(":visible")&&[[s[i]().top+o,n]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),e>=o)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(void 0===n[t+1]||e<n[t+1])&&this.activate(s[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',o=t(i).parents("li").addClass("active");o.parent(".dropdown-menu").length&&(o=o.closest("li.dropdown").addClass("active")),o.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var o=t.fn.scrollspy;t.fn.scrollspy=i,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=o,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one("bsTransitionEnd",function(){i=!0});var n=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);;
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
});;
/*
* jquery-match-height 0.7.2 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,n=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),i=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-n(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(i-a))<=o?r[r.length-1]=s.add(e):r.push(e),i=a}),r},i=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=i(e);if(o.remove){var n=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(n)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.2",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=a,r._parse=n,r._parseOptions=i,r._apply=function(e,o){var s=i(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),u=h.parents().filter(":hidden");return u.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),u.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),i=0;if(s.target)i=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),n=e.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block");var a={
display:n};a[s.property]="",e.css(a),e.outerHeight(!1)>i&&(i=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=n(e.css("border-top-width"))+n(e.css("border-bottom-width")),o+=n(e.css("padding-top"))+n(e.css("padding-bottom"))),e.css(s.property,i-o+"px"))})}),u.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),n=o.attr("data-mh")||o.attr("data-match-height");n in e?e[n]=e[n].add(o):e[n]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(n,a){if(a&&"resize"===a.type){var i=t(window).width();if(i===e)return;e=i;
}n?o===-1&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi);var h=t.fn.on?"on":"bind";t(window)[h]("load",function(t){r._update(!1,t)}),t(window)[h]("resize orientationchange",function(t){r._update(!0,t)})});;
/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

/*** Functions ***/


/**
 * Connection Mag 2018 Q2: the lang cat: False Prophet Profit
 * Adding <strike> HTML to word in connection article title
 */

function false_prophet_profit_node_title() {

	// jQuery('h1#page-title').html(function (_, html) {
	// 	return html.replace(/(Prophet)/, '<strike>$1</strike>');
	// });
	jQuery('h1#page-title').html(function (_, html) {
		return html.replace(/(False Profit)/, 'False <strike>Prophet</strike> Profit');
	});
	
}

/**
 * Connection Mag 2018 Q2: the lang cat: False Prophet Profit
 * Removing 'Prophet' from link in Views menu
 * NOT USED
 */

function false_prophet_profit_menu_title() {

	var $block = jQuery('#block-views-614a7bf4d8184310f61851d6406482f3, #block-views-ee173721cbeef333d9abe21b535a5d25'),
		$menuItem = $block.find('.views-row-1 a');
	
	$menuItem.html(function (_, html) {
		return html.replace(/(Prophet)/, '');
	});
	
}

// Move the block down to below the first pullquote
function move_block_to_below_1st_pullquote($el) {
	var blockFromTop = $el.offset().top,
		$previousBlocks = $el.prevAll().not(':first'), // All siblings apart from the closest
		$firstPullQuote = jQuery('#content div.pullquote').first(),
		firstPullQuoteBottomFromTop = $firstPullQuote.offset().top + $firstPullQuote.outerHeight(),
		blockOffset = firstPullQuoteBottomFromTop - blockFromTop;

	$previousBlocks.css('border', '1px solid red');

	if (blockFromTop < firstPullQuoteBottomFromTop) {
		$el.css('margin-top', blockOffset + 'px');
	}
	$el.show();
}


// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

    // Place your code here.

		// Front page slideshow pager background colours

		function whichCapitaColour(capitaColour) {
			if (capitaColour === 'Light Blue') {
				return 'light-blue';
			} else if (capitaColour === 'Dark Blue') {
				return 'dark-blue';
			} else if (capitaColour === 'Dark Grey') {
				return 'dark-grey';
			} else if (capitaColour === 'Purple') {
				return 'purple';
			} else if (capitaColour === 'Deep Green') {
				return 'deep-green';
			} else if (capitaColour === 'Orange') {
				return 'orange';
			} else if (capitaColour === 'Raspberry') {
				return 'raspberry';
			} else if (capitaColour === 'Deep Pink') {
				return 'deep-pink';
			} else if (capitaColour === 'Lavender') {
				return 'lavender';
			} else if (capitaColour === 'Bright Green') {
				return 'bright-green';
			} else if (capitaColour === 'Gold') {
				return 'gold';
			} else if (capitaColour === 'Sky Blue') {
				return 'sky-blue';
			} else {
				return;
			}
		}

		$('#block-views-front-page-slideshow-block .views-slideshow-cycle-main-frame-row').each(function(i) {
//		    var slideId = this.id;
//		    var slideNumber = slideId.substr(slideId.length - 1);
//		    slideNumber = parseInt(slideNumber);
		    var capitaColour = $(this).find('.views-field-field-capita-colour .field-content').text();
		    var colourClass = whichCapitaColour(capitaColour);

		    $('#block-views-front-page-slideshow-block .views-slideshow-pager-field-item').each(function(j) {
//		        var pagerId = this.id;
//		        var pagerNumber = pagerId.substr(pagerId.length - 1);
//		        pagerNumber = parseInt(pagerNumber);

		        if (i === j){
		        	$(this).addClass(colourClass);
		        }
		    });
		});


		// Adding hash tag to training block morelink in product section for /support/training page info dropdowns

		var pathname = window.location.pathname;

		if(pathname.indexOf('/research-tools/synaptic-product-and-fund') > -1){
			$('#block-block-53 a.morelink').attr('href', $('#block-block-53 a.morelink').attr('href') + '#product-and-fund');
		}
		if(pathname.indexOf('/research-tools/synaptic-comparator') > -1){
			$('#block-block-53 a.morelink').attr('href', $('#block-block-53 a.morelink').attr('href') + '#comparator');
		}
		if(pathname.indexOf('/ccd') > -1){
			$('#block-block-53 a.morelink').attr('href', $('#block-block-53 a.morelink').attr('href') + '#client-care');
		}
		if(pathname.indexOf('/research-tools/synaptic-webline') > -1){
			$('#block-block-53 a.morelink').attr('href', $('#block-block-53 a.morelink').attr('href') + '#webline');
		}
		if(pathname.indexOf('/research-tools/synaptic-modeller') > -1){
			$('#block-block-53 a.morelink').attr('href', $('#block-block-53 a.morelink').attr('href') + '#modeller');
		}
		if(pathname.indexOf('/research-tools/synaptic-illustrator') > -1){
			$('#block-block-53 a.morelink').attr('href', $('#block-block-53 a.morelink').attr('href') + '#illustrator');
		}

		// /support/training page info dropdowns

		// If the URL has a hash tag display appropriate dropdown
		if ($('body.page-node-63').length > 0) {
			if (window.location.hash == '#product-and-fund') {
				$('#block-block-17').css( 'display', 'block' );
				$('#block-block-17').siblings().css( 'display', 'none' );
			}
			if (window.location.hash == '#comparator') {
				$('#block-block-18').css( 'display', 'block' );
				$('#block-block-18').siblings().css( 'display', 'none' );
			}
			if (window.location.hash == '#client-care') {
				$('#block-block-19').css( 'display', 'block' );
				$('#block-block-19').siblings().css( 'display', 'none' );
			}
			if (window.location.hash == '#webline') {
				$('#block-block-20').css( 'display', 'block' );
				$('#block-block-20').siblings().css( 'display', 'none' );
			}
			if (window.location.hash == '#modeller') {
				$('#block-block-21').css( 'display', 'block' );
				$('#block-block-21').siblings().css( 'display', 'none' );
			}
			if (window.location.hash == '#illustrator') {
				$('#block-block-22').css( 'display', 'block' );
				$('#block-block-22').siblings().css( 'display', 'none' );
			}
		}
		// When a logo is clicked display appropriate dropdown
		$('#block-block-16 .logo.product').click(function() {
			$('#block-block-17').css( 'display', 'block' );
			$('#block-block-17').siblings().css( 'display', 'none' );
		});
		$('#block-block-16 .logo.comparator').click(function() {
			$('#block-block-18').css( 'display', 'block' );
			$('#block-block-18').siblings().css( 'display', 'none' );
		});
		$('#block-block-16 .logo.client-care').click(function() {
			$('#block-block-19').css( 'display', 'block' );
			$('#block-block-19').siblings().css( 'display', 'none' );
		});
		$('#block-block-16 .logo.webline').click(function() {
			$('#block-block-20').css( 'display', 'block' );
			$('#block-block-20').siblings().css( 'display', 'none' );
		});
		$('#block-block-16 .logo.modeller').click(function() {
			$('#block-block-21').css( 'display', 'block' );
			$('#block-block-21').siblings().css( 'display', 'none' );
		});
		$('#block-block-16 .logo.illustrator').click(function() {
			$('#block-block-22').css( 'display', 'block' );
			$('#block-block-22').siblings().css( 'display', 'none' );
		});


		// Knowledgebase iframe URL stuff

		if ($('body.page-node-65').length > 0) {
			var url='kb.capitafinancialsoftware.co.uk';
			var frameUrl= queryString("frame");
			if (frameUrl.indexOf(url) != -1) {
				document.getElementById("kbframe").src = frameUrl;
			}
		}

		// Quick links block - Add target="_blank" attribute for external links

		$('#block-views-quick-links-block .linktype-87').parent('a').attr('target','_blank');

		// Twitter Feed block - Add target="_blank" attribute to 'more' link

		$('#block-views-tweets-block .more-link a').attr('target','_blank');


		// Training video page logo anchor links

		// Whether .view-header should be shown
		if ($('#block-menu-block-4 li.menu-mlid-734 li').length) {
			$('.view-training-videos .view-header').css( 'display', 'block' );
		}

		// Logos

		// Synaptic Suite
		if ($('#block-menu-block-4 li.menu-mlid-1581').length) {
			$('a.logo-synaptic-suite').css( 'display', 'inline-block' );
		}
		// Product & Fund
		if ($('#block-menu-block-4 li.menu-mlid-739').length) {
			$('a.logo-product').css( 'display', 'inline-block' );
		}
		// Comparator
		if ($('#block-menu-block-4 li.menu-mlid-736').length) {
			$('a.logo-comparator').css( 'display', 'inline-block' );
		}
		// Modeller
		if ($('#block-menu-block-4 li.menu-mlid-738').length) {
			$('a.logo-modeller').css( 'display', 'inline-block' );
		}
		// Risk
		if ($('#block-menu-block-4 li.menu-mlid-1582').length) {
			$('a.logo-risk').css( 'display', 'inline-block' );
		}
		// Client Care
		if ($('#block-menu-block-4 li.menu-mlid-735').length) {
			$('a.logo-ccd').css( 'display', 'inline-block' );
		}
		// Webline
		if ($('#block-menu-block-4 li.menu-mlid-740').length) {
			$('a.logo-webline').css( 'display', 'inline-block' );
		}
		// Web Services
		if ($('#block-menu-block-4 li.menu-mlid-1583').length) {
			$('a.logo-web-services').css( 'display', 'inline-block' );
		}
		// Cover Me Now
		if ($('#block-menu-block-4 li.menu-mlid-1584').length) {
			$('a.logo-cover-me-now').css( 'display', 'inline-block' );
		}
		// Analyser
		if ($('#block-menu-block-4 li.menu-mlid-1901').length) {
			$('a.logo-analyser').css( 'display', 'inline-block' );
		}


		// Quick fix for Entity Reference module bug (https://www.drupal.org/node/2012250): Hides Author details for 'Anonymous' author

		var strAnon = $('div.field-name-field-author h2.node-title').text();

		if (strAnon.indexOf('Anonymous') >= 0) {
			$('div.field-name-field-author').css( 'display', 'none' );
		}

		// Previous Connection issues & subscription tabs

		$('#block-block-67 .tab.sub-form, #block-views-5af7c61a64894bca563354129b4c963a a#mag-signup-link').click(function() {
			$('#block-views-5af7c61a64894bca563354129b4c963a').css( 'display', 'none' );
			$('#block-block-67 .tab.connection-issues').addClass( 'tab-off' );
			$('#block-webform-client-block-121').css( 'display', 'block' );
			$('#block-block-67 .tab.sub-form').removeClass( 'tab-off' );
		});
		$('#block-block-67 .tab.connection-issues').click(function() {
			$('#block-views-5af7c61a64894bca563354129b4c963a').css( 'display', 'block' );
			$('#block-block-67 .tab.connection-issues').removeClass( 'tab-off' );
			$('#block-webform-client-block-121').css( 'display', 'none' );
			$('#block-block-67 .tab.sub-form').addClass( 'tab-off' );
		});


		// If there's a '#subscription-form' hash tag in the URL

		if ($('#block-block-67').length > 0) {
			if (window.location.hash == '#subscription-form') {
				$('#block-views-5af7c61a64894bca563354129b4c963a').css( 'display', 'none' );
				$('#block-block-67 .tab.connection-issues').addClass( 'tab-off' );
				$('#block-webform-client-block-121').css( 'display', 'block' );
				$('#block-block-67 .tab.sub-form').removeClass( 'tab-off' );
			}
		}



	$(window).load(function(){ /* The below code needs to be in .load() for the .outerHeight()s to return correct values. See: http://stackoverflow.com/questions/10268892/outerheighttrue-gives-wrong-value */

		// Research & Opinions page: Setting the height of the current Connection magazine block so that it matches the height of the longest of the other two columns

		var setConnectionMagBlockHeightRO = function() {
			var viewContent = $('#content .block-views.connection-articles .view-content');
			var firstColumnHeight = $('.region-sidebar-first').outerHeight();
			var secondColumnHeight = $('.region-sidebar-second').outerHeight();
			var connectionBlockHeight = $('#content .block-views.connection-articles').outerHeight();
			var viewContentHeight = $(viewContent).outerHeight();
			var lastBlock;
			var margin = 0;
			//var margin = 24;
			var columnHeight = 0;
			//var columnHeight = ($('#main').outerHeight()) - margin;
			var viewHeader = $('#content .block-views.connection-articles .view-header').outerHeight();
			var viewHeaderHeight = connectionBlockHeight - viewContentHeight;
			//var viewHeaderHeight = 197;

			if (firstColumnHeight > secondColumnHeight) {
				lastBlock = $('.region-sidebar-first .block:last-child');
				margin = ($(lastBlock).outerHeight(true)) - ($(lastBlock).outerHeight());
				columnHeight = ($('.region-sidebar-first').outerHeight()) - margin;
			} else {
				lastBlock = $('.region-sidebar-second .block:last-child');
				margin = ($(lastBlock).outerHeight(true)) - ($(lastBlock).outerHeight());
				columnHeight = ($('.region-sidebar-second').outerHeight()) - margin;
			}

			var setViewContentHeight = columnHeight - viewHeaderHeight;
			$(viewContent).css('height', setViewContentHeight + 'px');

			// console.log('Column Height: ' + columnHeight);
			// console.log('Margin Height: ' + margin);
			// console.log('View Header Height: ' + viewHeaderHeight);
			// console.log('View Content Height: ' + viewContentHeight);
			// console.log('Set View Content Height: ' + setViewContentHeight);
		};

		if ($('body.page-node-244').length) {
			setConnectionMagBlockHeightRO();
		}

		// Setting height of Connection menu on article pages if menu is longer than content area

		var setConnectionMagBlockHeight = function() {
			//var $contentLastElement = $('.node-connection-magazine-article > div:last-child');
			var contentHeight = $('.content-main').outerHeight()/* - ($($contentLastElement).outerHeight(true) - $($contentLastElement).outerHeight())*/;
			var blockHeight = $('.block-views.connection-articles').outerHeight();
			var viewHeaderHeight = $('.block-views.connection-articles .view-header').outerHeight();
			//var viewHeaderHeightAlt = $('.block-views.connection-articles').outerHeight() - $('.block-views.connection-articles .view-content').outerHeight();
			//var viewContentHeight = $('.block-views.connection-articles .view-content').outerHeight();

			if (blockHeight > contentHeight) {
				var setHeight = contentHeight - viewHeaderHeight;
				$('.block-views.connection-articles .view-content').css('height', setHeight);
			}

//			console.log('Content height: ' + contentHeight);
//			console.log('View Header height: ' + viewHeaderHeight);
//			console.log('View Header height Alternate: ' + viewHeaderHeightAlt);
//			console.log('Set height: ' + setHeight);
		};

		if ($('body.node-type-connection-magazine-article').length) {
			//setTimeout(function(){
				setConnectionMagBlockHeight();
			//}, 1000);
		}


	});


	// Fixing AddToAny menu

	var fixA2aPosition = function() {
		var a2aMenu = $('#a2a-custom-menu');
		//var a2aMenuPosition = a2aMenu.offset();
		var windowPosition = $(window).scrollTop();
		//console.log('Top Position: ' + a2aMenuPosition.top);
		//console.log('Window Position: ' + windowPosition);

		if (windowPosition >= 166) {
			$(a2aMenu).addClass('fixed');
			//console.log('Class Added');
		} else {
			$(a2aMenu).removeClass('fixed');
		}

	};

	$(window).scroll(fixA2aPosition);
	fixA2aPosition();




  // Adding anchor links to reference superscripts in articles to link to smallprint at bottom

  $('.node-connection-magazine-article .field-name-field-small-print, .node-synaptic-guides-article .field-name-field-small-print').attr('id', 'smallprint');
  $('.node-connection-magazine-article sup, .node-synaptic-guides-article sup').not('.node-connection-magazine-article div.field-name-field-small-print sup, .node-synaptic-guides-article div.field-name-field-small-print sup').wrap('<a class="sup-ref" href="#smallprint"></a>');



  // Research Tools page: Table: 'The Synaptic Research and Back Office automation suite.'
  // Making tr th height consistent across both th rows

  function researchSuiteTableHeaderHeight() {
  	var tableHeaderHeight = $('#synaptic-research-suite-logos tr th').height();
  	// console.log(tableHeaderHeight);
  	$('#synaptic-research-suite-logos tr th').css('height', tableHeaderHeight + 'px');
  }
  if ($('#synaptic-research-suite-logos').length) {
  	researchSuiteTableHeaderHeight();
  }


	// Move the block down to below the first pullquote
	// if (jQuery('body.node-type-connection-magazine-article').length && jQuery('.region-sidebar-second .block.below-pullquote').length) {

	// 	//jQuery('.region-sidebar-second .block img').css('border', '3px solid red');

	// 	setTimeout(function(){
	// 		var $blockToMoveDown = jQuery('.region-sidebar-second .block.below-pullquote').first();
	// 		move_block_to_below_1st_pullquote($blockToMoveDown);
	// 	}, 2000);


	// 	// jQuery('.region-sidebar-second .block img').load(function() {
	// 	// 	console.log('Why?');
	// 	// 	var $blockToMoveDown = jQuery('.region-sidebar-second .block.below-pullquote').first();
	// 	// 	move_block_to_below_1st_pullquote($blockToMoveDown);
	// 	// });

	// }

  	// Match height of front page 3 column blocks
	if ($('body.front .width-3col').length) {
		$('#main-main-banner .width-3col').matchHeight();
	}

	if ($('a.colorbox').length && !$('a.colorbox div.ico-magnify').length) {
		$('a.colorbox img').after('<div class="ico-magnify">');
	}

	// Product slideshow
	function set_height_of_screenshot_slideshow() {
		var $slideshow = $('.screenshot-slideshow'),
			$img = $slideshow.find('.views-field-field-image img'),
			maxHeight = 0;
			
			$img.each(function() {
				if ($(this).height() > maxHeight) {
					maxHeight = $(this).height();
				}
			})

		$slideshow.height(maxHeight + 50);
		// console.log(maxHeight);
	}
	if (jQuery('.screenshot-slideshow').length) {
		set_height_of_screenshot_slideshow();
		jQuery(window).resize(set_height_of_screenshot_slideshow);
	}


  }

};


})(jQuery, Drupal, this, this.document);

;
