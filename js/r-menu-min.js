// menu-active = .active
// #menu-btn = .mobile-menu-icon
// .sub-menu = .has-sub


! function(e) {
    e.fn.aceResponsiveMenu = function(s) {
        var i = s = e.extend({
                resizeWidth: "768",
                animationSpeed: "medium",
                accoridonExpAll: !1
            }, s),
            l = i.resizeWidth,
            n = i.animationSpeed,
            a = i.accoridonExpAll,
            t = e(this),
            d = e(this).attr("data-menu-style");

        function o() {
            if (e(window).innerWidth() <= l) t.find("li.active").removeClass("active"), t.find("ul.slide").removeClass("slide").removeAttr("style"), t.addClass("collapse hide-menu"), t.attr("data-menu-style", ""), e(".menu-toggle").show();
            else {
                if (t.attr("data-menu-style", d), t.removeClass("collapse hide-menu").removeAttr("style"), e(".menu-toggle").hide(), "accordion" == t.attr("data-menu-style")) return void t.addClass("collapse");
                t.find("li.active").removeClass("active"), t.find("ul.slide").removeClass("slide").removeAttr("style")
            }
        }
        return t.find("ul").addClass("has-sub"), "accordion" == d && e(this).addClass("collapse"), e(window).innerWidth() <= l && o(), e(window).resize(function() {
            o()
        }), e(".mobile-menu-icon").click(function() {
            t.slideToggle().toggleClass("hide-menu")
        }), this.each(function() {
            t.on("mouseover", "> li a", function() {
                if (!0 === t.hasClass("collapse")) return !1;
                e(this).parent("li").siblings().children(".has-sub").stop(!0, !0).slideUp(n).removeClass("slide").removeAttr("style").stop(), e(this).parent().addClass("active").children(".has-sub").slideDown(n).addClass("slide")
            }), t.on("mouseleave", "li", function() {
                if (!0 === t.hasClass("collapse")) return !1;
                e(this).off("click", "> li a"), e(this).removeClass("active"), e(this).children("ul.has-sub").stop(!0, !0).slideUp(n).removeClass("slide").removeAttr("style")
            }), t.on("click", "> li a", function() {
                if (t.hasClass("collapse"), e(this).off("mouseover", "> li a"), e(this).parent().hasClass("active")) e(this).parent().children(".has-sub").slideUp().removeClass("slide"), e(this).parent().removeClass("active");
                else {
                    if (1 == a) return void e(this).parent().addClass("active").children(".has-sub").slideDown(n).addClass("slide");
                    e(this).parent().siblings().removeClass("active"), e(this).parent("li").siblings().children(".has-sub").slideUp().removeClass("slide"), e(this).parent().addClass("active").children(".has-sub").slideDown(n).addClass("slide")
                }
            })
        })
    }
}(jQuery);