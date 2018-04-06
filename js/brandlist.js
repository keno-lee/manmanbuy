$(function() {



    var title = sessionStorage.getItem("brandTitle");
    // console.log(title);

    var brandtitleid = location.search;
    // console.log(brandtitleid);

    title = title.substr(0, title.length - 4);
    $(".title").text(title + "哪个牌子好");

    $.ajax({
        url: "http://127.0.0.1:9090/api/getbrand" + brandtitleid,
        dataType: "json",
        success: function(info) {
            console.log(info);
            $(".list ul").html(template("tmp", info));
            $(".list li").on("click", function() {
                var brandtitleid = $(this).data("brandtitleId");
                location.href = "brandProductList.html?brandtitleid=" + brandtitleid + "&pagesize=4";
            });
        }
    });
});