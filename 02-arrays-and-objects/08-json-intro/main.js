const post = {
    id: 1,
    title: 'Bài viết số một',
    body: 'Đây là nội dung bài viết',
  };
  
  // Chuyển đổi thành chuỗi JSON
  const str = JSON.stringify(post);
  
  console.log(str.id); // Một đối tượng JSON không có thuộc tính "id"
  
  // Phân tích JSON
  const obj = JSON.parse(str);
  
  console.log(obj.id);
  
  // JSON và mảng
  const posts = [
    {
      id: 1,
      title: 'Bài viết số một',
      body: 'Đây là nội dung bài viết',
    },
    {
      id: 2,
      title: 'Bài viết số hai',
      body: 'Đây là nội dung bài viết',
    },
  ];
  
  const str2 = JSON.stringify(posts);
  
  console.log(str2);
  