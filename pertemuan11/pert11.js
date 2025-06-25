document.addEventListener('DOMContentLoaded', () => {
    // Array buku dengan properti 'image' menggunakan URL dari internet
    const books = [
        { title: 'Menguasai Pemrograman Berorientasi Objek', author: 'Ade Rahmat Iskandar', publisher: 'Informatika', year: 2020, image: 'https://cdn.gramedia.com/uploads/items/menguasai_pemrograman.jpg' },
        { title: 'Dasar-Dasar Pemrograman dengan .NET', author: 'Ade Rahmat Iskandar', publisher: 'Informatika', year: 2019, image: 'https://ebooks.gramedia.com/ebook-covers/49406/image_highres/ID_DPN2019MTH09PN.jpg' },
        { title: 'Metodologi Pengembangan Sistem Informasi', author: 'Samiaji Sarosa', publisher: 'Indeks', year: 2017, image: 'https://cdn.gramedia.com/uploads/items/9789790625464_9789790625464.jpg' },
        { title: 'Struktur Data', author: 'Rosa A.S.', publisher: 'Modula', year: 2018, image: 'https://store.ums.ac.id/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/t/struktur_data.png' },
        { title: 'Dasar Pemrograman Python 3', author: 'Abdul Kadir', publisher: 'Andi Publisher', year: 2018, image: 'https://cdn.gramedia.com/uploads/items/9786028759274_Belajar-Singkat-Pemrograman-Python-3-Cd.jpg' },
        { title: 'Teori Dan Praktek Sistem Operasi', author: 'Zaid Romegar Mair', publisher: 'Deeppublish', year: 2018, image: 'https://bintangpusnas.perpusnas.go.id/api/getImage/978-602-475-948-3.jpg' }
    ];

    const bookList = document.getElementById('book-list');
    const searchInput = document.getElementById('searchInput');
    const yearInput = document.getElementById('yearInput');
    const searchOptions = document.querySelectorAll('input[name="searchType"]');

    // Fungsi untuk menampilkan buku (TIDAK PERLU DIUBAH)
    function displayBooks(filteredBooks) {
        bookList.innerHTML = '';
        if (filteredBooks.length === 0) {
            bookList.innerHTML = '<p>Buku tidak ditemukan.</p>';
            return;
        }

        filteredBooks.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.className = 'book-item';
            // Tag <img> akan otomatis mengambil gambar dari URL
            bookElement.innerHTML = `
                <img src="${book.image}" alt="${book.title}" onerror="this.onerror=null;this.src='https://via.placeholder.com/200x300.png?text=Gambar+Tidak+Tersedia';">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <p>${book.publisher} ${book.year}</p>
            `;
            bookList.appendChild(bookElement);
        });
    }

    // Fungsi pencarian dan event listener (TIDAK PERLU DIUBAH)
    function searchBooks() {
        const keyword = searchInput.value.toLowerCase();
        const year = yearInput.value;
        const searchType = document.querySelector('input[name="searchType"]:checked').value;

        const filteredBooks = books.filter(book => {
            switch (searchType) {
                case 'title':
                    return book.title.toLowerCase().includes(keyword);
                case 'author':
                    return book.author.toLowerCase().includes(keyword);
                case 'publisher':
                    return book.publisher.toLowerCase().includes(keyword);
                case 'titleYear':
                    const titleMatch = book.title.toLowerCase().includes(keyword);
                    const yearMatch = year ? book.year.toString() === year : true;
                    return titleMatch && yearMatch;
                default:
                    return true;
            }
        });

        displayBooks(filteredBooks);
    }
    
    searchInput.addEventListener('input', searchBooks);
    yearInput.addEventListener('input', searchBooks);
    searchOptions.forEach(radio => {
        radio.addEventListener('change', searchBooks);
    });

    displayBooks(books);
});