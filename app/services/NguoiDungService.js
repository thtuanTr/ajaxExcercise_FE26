function NguoiDungService(){
    //Lấy danh sách người dùng
    this.GetListUsers = function (){
        // request về server
        return $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
            type: "GET",
        })
    }

    // Thêm người dùng
    this.AddUser = function(newUser){
        return $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung",
            type: "POST",
            data: newUser,
        })
    }

    //Xoá Người Dùng
    this.DeleteUser = function(id){
        return $.ajax({
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${id}`,
            type: "DELETE",
        })
    }
}


/*
    .done(function(result){
        return result;
    })
    .fail(function(err){
        console.log(err);
    })
*/