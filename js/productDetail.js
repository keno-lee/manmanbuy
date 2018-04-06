$(function() {
    var str = location.search;

    var twoHref = sessionStorage.getItem("href");
    var twoTxt = sessionStorage.getItem("category");

    //三级导航的更改
    $(".two").attr("href", twoHref);
    $(".two").text(twoTxt + ">");

    // 产品的展示页
    $.ajax({
        url: "http://127.0.0.1:9090/api/getproduct" + str,
        dataType: "json",
        success: function(info) {
            // console.log(info);

            $(".showcase").html(template("detail_tmp", info));

            var bjShop = info.result[0].bjShop;
            $(".product_from").html(bjShop);

            var productName = info.result[0].productName;
            productName = productName.split(" ")[0];
            // console.log(productName);
            $(".three").text(productName);

        }
    });
    //评论
    $.ajax({
        url: "http://127.0.0.1:9090/api/getproductcom" + str,
        dataType: "json",
        success: function(info) {
            // console.log(info);
            $(".cm_content ul").html(template("com_tmp", info))
        }
    });


});