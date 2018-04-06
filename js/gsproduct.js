$(function() {

    var shopid = 0;
    var areaid = 0;

    $.ajax({
        url: "http://127.0.0.1:9090/api/getgsshop",
        dataType: "json",
        success: function(info) {
            // console.log(info);
            $(".shops select").html(template("shops_tmp", info));
            $(".shops select").on("change", function() {
                shopid = $(this).val();
                getProduct(shopid, areaid);
            })
        }
    });

    $.ajax({
        url: "http://127.0.0.1:9090/api/getgsshoparea",
        dataType: "json",
        success: function(info) {
            // console.log(info);
            $(".area select").html(template("area_tmp", info));
            $(".area select").on("change", function() {
                areaid = $(this).val();
                getProduct(shopid, areaid);
            })
        }
    });
    // 初始加载第一页数据
    getProduct(0, 0);

    function getProduct(shopid, areaid) {
        $.ajax({
            url: "http://127.0.0.1:9090/api/getgsproduct?shopid=" + shopid + "&areaid=" + areaid,
            dataType: "json",
            success: function(info) {
                console.log(info);
                $(".mmb_list ul").html(template("pro_tmp", info));
            }
        });
    }
});