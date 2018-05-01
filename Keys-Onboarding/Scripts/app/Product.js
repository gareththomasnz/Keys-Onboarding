$(document).ready(function () {
    console.log("function start");
    loadProdList();
    return false;
});

function loadProdList() {
    console.log("loadProdList start");
    $(".table tr").remove();
    console.log("table removed");
    $.ajax({
        type: 'POST',
        url: "/Products/GetProductList",
        dataType: 'json',
        data: {},
        success: function (data) {
            console.log("ajax success");
            var item = '';            
            $.each(data, function (i, item) {
                console.log("each start");
                var rows = "<tr> " +
                    "<td class='ProductTableTD'>" + item.Id + "</td>" +
                    "<td class='ProductTableTD'>" + item.Name + "</td>" +
                    "<td class='ProductTableTD'>" + item.Price + "</td>" +
                    "<td class='ProductTableTD'>" +
                    "<button class='btn btn-primary btnEdit' data-toggle='modal' data-id= " + item.Id + " href='#modalContainer'>Edit</a>" +
                    "<button class='btn btn-success btnDetail' data-toggle='modal' data-id= " + item.Id + " href='#modalContainer'>Detail</a>" +
                    "<button class='btn btn-danger btnDelete' data-toggle='modal' data-id= " + item.Id + " href='#modalContainer'>Delete</a>" + "</td>" +
                    "</tr>";
                $('.table tbody').append(rows);
            });
        },


        error: function (req, err) {
            console.log('Message: ' + err);
        }

    });
}


$("#btnCreate").click(function (event) {
    $(".mod-content").load("/Products/Create");
})

$(".btnEdit").click(function (event) {
    console.log("button clicked");
    $(".mod-content").load("/Products/Edit/" + $(this).data("id"));
    console.log($(this).data("id"));
});


$(".btnDetail").click(function (event) {
    console.log("button clicked");
    $(".mod-content").load("/Products/Details/" + $(this).data("id"));
    console.log($(this).data("id"));
});

$(".btnDelete").click(function (event) {
    console.log("button clicked");
    var Id = $(this).data("data-id")
    $(".mod-content").load("/Products/Delete/" + $(this).data("id"));
    console.log($(this).data("id"));
});

