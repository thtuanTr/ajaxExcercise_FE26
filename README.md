# ajaxExcercise_FE26

.Kéo thùng chứa về máy tính
  git clone "đường dẫn thùng chứa trên server"
.Câu lệnh config lần đầu khi tạo git
  git config --global user.name "tenusername"
  git config --global user.email "email"
.Câu lệnh giúp kiểm tra trạng thái
  git status
  
/*
Nếu trạng thái màu đỏ: phân vùng working coppy
Nếu trạng thái màu xanh: phân vùng staging area
*/

.Câu lệnh di chuyển code từ Working -> Staging
  git add .
.Câu lệnh di chuyển code từ vùng Staging -> Local Repository
  git commit -m "comment"
.Câu lệnh di chuyển từ Local Repository -> Server
  git push origin <Tên nhánh>
.Câu lệnh tạo nhánh (Câu lệnh tạo nhánh: đang đứng ở branch nào tạo nhánh, thì tự động copy source từ nhánh đang đứng qua nhánh mới tạo)
  git branch <Tên nhánh>
.Câu lệnh kiểm tra nhánh
  git branch
.Câu lệnh chuyển nhánh
  git checkout <Tên nhánh>
.Câu lệnh kéo code mới về 
  git pull
.File gitignore: file nào được gọi tên trong file này sẽ không được push lên server
 
