$(function() {


    var title = sessionStorage.getItem("brandTitle");
    // console.log(title);
    var brandtitleid = location.search;
    console.log(brandtitleid);

    title = title.substr(0, title.length - 4);
    $(".title").text(title + "产品销量排行");

    $.ajax({
        url: "http://127.0.0.1:9090/api/getbrandproductlist" + brandtitleid,
        dataType: "json",
        success: function(info) {
            console.log(info);
            $(".product_list ul").html(template("tmp", info));
            $(".product_list li").on("click", function() {
                var productid = $(this).data("productId");
                location.href = "brandProductCom.html?productid=" + productid;
                sessionStorage.setItem("productImg", $(this).children(".product_img").html());
                // console.log($(this).children(".product_des").children(".product_name"));

                sessionStorage.setItem("productName", $(this).children(".product_des").children(".product_name").text());

            });
        }
    });
});