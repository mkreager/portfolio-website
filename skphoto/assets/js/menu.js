! function(a) {
    a(function() {
        var c = (a(window), a("body")),
            d = a("#menu");
        d.wrapInner('<div class="inner"></div>'), d._locked = !1, d._lock = function() {
            return !d._locked && (d._locked = !0, window.setTimeout(function() {
                d._locked = !1
            }, 350), !0)
        }, d._show = function() {
            d._lock() && c.addClass("is-menu-visible")
        }, d._hide = function() {
            d._lock() && c.removeClass("is-menu-visible")
        }, d._toggle = function() {
            d._lock() && c.toggleClass("is-menu-visible")
        }, d.appendTo(c).on("click", function(a) {
            a.stopPropagation()
        }).on("click", "a", function(b) {
            var c = a(this).attr("href");
            b.preventDefault(), b.stopPropagation(), d._hide(), "#menu" != c && window.setTimeout(function() {
                window.location.href = c
            }, 350)
        }).append('<a class="close" href="#menu">Close</a>'), c.on("click", 'a[href="#menu"]', function(a) {
            a.stopPropagation(), a.preventDefault(), d._toggle()
        }).on("click", function(a) {
            d._hide()
        }).on("keydown", function(a) {
            27 == a.keyCode && d._hide()
        })
    })
}(jQuery);