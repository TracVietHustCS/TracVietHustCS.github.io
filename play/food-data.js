/* Dữ liệu cho tab "Món ngon". Sửa file này để thêm quán hoặc điền đánh giá của chính bạn.
   - name: tên quán (hiện trên thẻ).   - kind: loại món.   - place: chuỗi hiện dưới tên (khu vực, chi nhánh...).
   - mapsId: place_id của Google Maps (để link đúng quán); nếu không có, link sẽ tìm theo tên.
   - myScore: điểm của BẠN từ 1 đến 10 (để null nếu chưa chấm). mustTry: các món bạn thấy nên thử. note: nhận xét của bạn.
   Điểm và nhận xét chỉ hiện khi bạn điền. Trang không tự bịa đánh giá. */
window.FOOD = [
  { name: "Nhun Bún", kind: "Bún hải sản", place: "Thái Nguyên",
    mapsId: "ChIJky8Z_CInNTERWlFBvAeO-Wg", myScore: null, mustTry: [], note: "" },
  { name: "KFC Đồng Quang Market", kind: "Gà rán, đồ ăn nhanh", place: "Thái Nguyên",
    mapsId: "ChIJw0ldFEsnNTER6w5KRk6njo8", myScore: null, mustTry: [], note: "" },
  { name: "Jollibee", kind: "Gà rán, mì Ý, đồ ăn nhanh", place: "Thái Nguyên: Vincom Plaza, Sư phạm, GO! Tích Lương",
    mapsId: "ChIJq49UYAAnNTERLMCovlY3LcY", myScore: null, mustTry: [], note: "" },
  { name: "Dookki", kind: "Buffet tokbokki kiểu Hàn", place: "Thái Nguyên: Vincom Plaza",
    mapsId: "ChIJaSzjmAAnNTERMyovAd98l1o", myScore: null, mustTry: [], note: "" }
];
