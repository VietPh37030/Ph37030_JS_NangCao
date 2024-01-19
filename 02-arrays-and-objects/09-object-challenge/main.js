// Bước 1
const library = [
    {
      title: 'The Road Ahead',
      author: 'Bill Gates',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: 'Mockingjay',
      author: 'Suzanne Collins',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
  ];
  
  // Bước 2
  library[0].status.read = true;
  library[1].status.read = true;
  library[2].status.read = true;
  
  // Bước 3
  const { title: firstBook } = library[0];
  
  console.log(firstBook); // In ra tiêu đề của cuốn sách đầu tiên
  
  // Bước 4
  const libraryJSON = JSON.stringify(library);
  
  console.log(libraryJSON); // In ra chuỗi JSON của mảng library
  