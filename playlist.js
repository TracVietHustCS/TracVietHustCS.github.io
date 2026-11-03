/* Nhạc nền cho kệ sách: trình phát YouTube chính thức, phát FULL bài.
   Thêm bài: mỗi bài là một dòng { id: "ID_VIDEO_11_KY_TU", title: "Tên bài", artist: "Ca sĩ" }.
   - id là phần sau "v=" trong link YouTube. Ví dụ https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  id: "dQw4w9WgXcQ"
   - title và artist không bắt buộc (bỏ trống thì trang lấy tên bài từ YouTube khi phát).
   - cover (không bắt buộc): đường dẫn ảnh bìa riêng cho cả playlist; bỏ trống thì dùng ảnh bìa của bài đang phát.
   Để trống danh sách = ô nhạc không hiện.
   Lưu ý: một số bài (nhất là của hãng đĩa) bị chủ sở hữu tắt quyền nhúng; trang sẽ tự bỏ qua bài đó. */
window.PLAYLIST = {
  title: "Playlist của Trác Việt",
  cover: "",
  tracks: [
    // { id: "ID_VIDEO", title: "Tên bài", artist: "Ca sĩ" },
  ]
};
