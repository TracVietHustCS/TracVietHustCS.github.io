# TracViet

Trang gốc (hub) của các tài liệu: https://tracviethustcs.github.io/

Mỗi tài liệu là một site riêng (repo riêng, GitHub Pages riêng) và được gắn lên kệ ở trang này.

## Thêm một tài liệu mới

1. Tạo repo mới cho tài liệu, bật GitHub Pages (ví dụ `claude-study-notes` sẽ ở `/claude-study-notes/`).
2. Trong `index.html`, thêm một object vào mảng `DOCS`:

```js
{ title:"Claude", sub:"certifications", status:"live",
  url:"https://tracviethustcs.github.io/claude-study-notes/",
  color:"#d97757", h:246, meta:"20 trang",
  tags:["Claude","Ôn thi"], desc:"Mô tả ngắn." }
```

   `status` là `"live"` (có link) hoặc `"soon"` (sắp ra mắt). Bỏ một chỗ trống `{ empty:true, h:200 }` khi cần chỗ.
3. Thêm một dòng vào `UPDATES` (mới nhất lên đầu), commit và push.

Trong tài liệu con, thêm link `← TracViet` trỏ về `https://tracviethustcs.github.io/`.
