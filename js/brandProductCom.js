$(function() {


    var title = sessionStorage.getItem("brandTitle");
    // console.log(title);
    var productid = location.search;
    // console.log(productid);
    var productImg = sessionStorage.getItem("productImg");
    var productName = sessionStorage.getItem("productName");



    title = title.substr(0, title.length - 4);
    $(".title").text(title + "最新评论");

    $.ajax({
        url: "http://127.0.0.1:9090/api/getproductcom" + productid,
        dataType: "json",
        success: function(info) {
            console.log(info);
            $(".content").html(template("tmp", info));
            $(".product_name").text(productName);
            $(".product_img").html(productImg);
        }
    });
});