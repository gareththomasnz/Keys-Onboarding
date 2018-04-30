
$(document).ready(function () {
    loadCustList();
    return false;
});

function loadCustList() {
    $("#tblCustomer tbody tr").remove();
    $.ajax({
        type: 'POST',
        url: "/Product/GetProductList",
        dataType: 'json',
        data: {},
        success: function (data) {
            var item = '';
            $.each(data, function (i, item) {
                var rows = "<tr> " +
                    "<td class='CustomerTableTD'>" + item.CustID + "</td>" +
                    "<td class='CustomerTableTD'>" + item.CustName + "</td>" +
                    "<td class='CustomerTableTD'>" + item.CustAddress + "</td>" +
                    "<td class='CustomerTableTD'>" +
                    "<button type='button' class='btn btn-info btn-sm' data-toggle='modal' data-target='#customerEditModal' data-dismiss='modal' onclick='funcEditCustomer(" + item.CustID + ")'>Edit</button>" +
                    "<button type='button' class='btn btn-info btn-sm' data-toggle='modal' data-target='#customerDeleteModal' onclick='funcDeleteCustomer(" + item.CustID + ")'>Delete</button>" + "</td>" +
                    "</tr>";
                $('#tblCustomer tbody').append(rows);
            });
        },
        error: function (ex) {
            var r = jQuery.parseJSON(response.responseText);
            alert("Message: " + r.Message);
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
    //$.ajax({
    //    type: "GET",
    //    url: "/Products/Details/",
    //    dataType: "json",

    //    success: function (result) {
    //        console.log("ok");
    //    },
    //    error: function (result) {
    //        console.log("error");
    //    }
    //});
    $(".mod-content").load("/Products/Details/" + $(this).data("id"));
    console.log($(this).data("id"));
});

$(".btnDelete").click(function (event) {
    console.log("button clicked");
    var Id = $(this).data("data-id")
    $(".mod-content").load("/Products/Delete/" + $(this).data("id"));
    console.log($(this).data("id"));
});

