/* 
    Lấy danh sách nguòi dùng từ backend về 

*/    
$(document).ready(function () {
    var userArray = [];
    var userService = new NguoiDungService();
    var ajaxUsers = userService.GetListUsers();
    ajaxUsers
        .done(function (result) {
            userArray = result;
            // LuuDuLieu();
            HienThi(userArray);
        })
        .fail(function (err) {
            console.log(err);
        })

    
    function themNguoiDung (){
        console.log("themNguoiDung");
    }

    function LuuDuLieu() {
        // Chuyển kiểu dữ liệu về chuỗi JSON
        var jsonData = JSON.stringify(userArray);
        // Lưu dữ liệu vào local storage
        localStorage.setItem("DSND", jsonData);
    }
        
    function HienThi(mangHienThi) {
        var tbodyUser = $("#tblDanhSachNguoiDung");
        var content = "";
    
        mangHienThi.map(function(nguoiDung,i) {
            content += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${nguoiDung.TaiKhoan}</td>
                    <td>${nguoiDung.MatKhau}</td>
                    <td>${nguoiDung.HoTen}</td>
                    <td>${nguoiDung.Email}</td>
                    <td>${nguoiDung.SoDT}</td>
                    <td>
                        <button class="btn btn-danger btnXoa" 
                        data-id="${nguoiDung.TaiKhoan}"> 
                        
                        Xóa </button>
                    </td>
                </tr>
            `
            tbodyUser.html(content);
        })
        /*
        mangHienThi.map((nguoiDung, i) => content += 
                `
                <tr>
                    <td>${i + 1}</td>
                    <td>${nguoiDung.TaiKhoan}</td>
                    <td>${nguoiDung.MatKhau}</td>
                    <td>${nguoiDung.HoTen}</td>
                    <td>${nguoiDung.Email}</td>
                    <td>${nguoiDung.SoDT}</td>
                </tr>
                    `,
        tbodyUser.innerHTML = content)
        */
    }


    $("#btnThemNguoiDung").click(function(){
        $("#modal-title").html("Thêm người dùng");
        var btn = `
            <button class="btn btn-success" id="btnThem">Thêm người dùng </button>
        `;
        $("#modal-footer").html(btn);
    })

    $('body').delegate("#btnThem", "click", function(){
        // Lấy thông tin
        var userAccount = $("#TaiKhoan").val();
        var userName = $("#HoTen").val();
        var userPassword = $("#MatKhau").val();
        var userEmail = $("#Email").val();
        var userTelephone = $("#SoDienThoai").val();
        var userType = $("#maLoaiNguoiDung").val();
        // Tạo đối tượng
        var newUser = new NguoiDung(userAccount, userName, userPassword, userEmail, userTelephone, userType);
        //Thêm vào database (API)
        var ajaxAdd = userService.AddUser(newUser)
            .done(function(result){
                location.reload();
            })
            .fail(function(err){
                console.log(err);
            })
    })

    $('body').delegate(".btnXoa", "click", function(){
        var taiKhoan = $(this).data("id");

        userService.DeleteUser(taiKhoan)
            .done(function(){
                location.reload();
            })
            .fail(function (err){
                console.log(err)
            })
    })  

    
})

