$(document).ready(function () {
    console.log("function start");
    loadCustList();
    return false;
});

function loadCustList() {
    console.log("loadCustList start");
    $(".table tr").remove();
    console.log("table removed");
    $.ajax({
        type: 'POST',
        url: "/Customers/GetCustomerList",
        dataType: 'json',
        data: {},
        success: function (data) {
            console.log("ajax success");
            var item = '';
            $.each(data, function (i, item) {
                console.log("each start");
                var rows = "<tr> " +
                    "<td class='CustomerTableTD'>" + item.Id + "</td>" +
                    "<td class='CustomerTableTD'>" + item.Name + "</td>" +
                    "<td class='CustomerTableTD'>" + item.Address + "</td>" +
                    "<td class='CustomerTableTD'>" +
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
    $(".mod-content").load("/Customers/Create");
})

$(".btnEdit").click(function (event) {
    console.log("button clicked");
    $(".mod-content").load("/Customers/Edit/" + $(this).data("id"));
    console.log($(this).data("id"));
});


$(".btnDetail").click(function (event) {
    console.log("button clicked");
    var Id = $(this).data("data-id")
    $(".mod-content").load("/Customers/Details/" + $(this).data("id"));
    console.log($(this).data("id"));
});

$(".btnDelete").click(function (event) {
    console.log("button clicked");
    var Id = $(this).data("data-id")
    $(".mod-content").load("/Customers/Delete/" + $(this).data("id"));
    console.log($(this).data("id"));
});