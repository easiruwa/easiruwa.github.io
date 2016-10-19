Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

var moods = ["#happy", "#sad","dark", "#excited", "#calm","#angry", "#funky","#laid","#playful","#dreamy"]

$(document).ready(function(){
    $("#happy", "#sad","dark", "#excited", "#calm","#angry", "#funky","#laid","#playful","#dreamy" ).click(function(){
        if (this.id == "happy"){
            moods.remove("happy")
            $("#happym").fadeToggle("fast");
        }
        
    };
};
