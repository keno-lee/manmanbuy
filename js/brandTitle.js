$(function() {

    $.ajax({
        url: "http://127.0.0.1:9090/api/getbrandtitle",
        dataType: "json",
        success: function(info) {
            console.log(info);
            $(".list ul").html(template("tmp", info));
            $(".list li").on("click", function() {
                var brandTilte = $(this).text();
                var brandtitleid = $(this).data("brandid");
                sessionStorage.setItem("brandTitle", brandTilte);
                location.href = "brandlist.html?brandtitleid=" + brandtitleid;
            });
        }
    })
});