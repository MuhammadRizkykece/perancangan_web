import React from "react";

class Catalog extends React.Component {
  constructor() {
    super();
    this.allBooks = [
      [
        "buku1.jpg",
        "Menguasai Pemrograman Berorientasi Objek",
        "Ade Rahmat Iskandar",
        "Informatika",
        2020,
        4.8,
      ],
      [
        "buku2.jpg",
        "Dasar-Dasar Pemrograman dengan .NET",
        "Ade Rahmat Iskandar",
        "Informatika",
        2019,
        4.4,
      ],
      [
        "buku3.jpg",
        "Metodologi Pengembangan Sistem Informasi",
        "Samiaji Sarosa",
        "Indeks",
        2017,
        4.1,
      ],
      ["buku4.png", "Struktur Data", "Rosa A.S", "Modula", 2018, 4.3],
      [
        "buku5.jpg",
        "Dasar Pemrograman Python 3",
        "Abdul Kadir",
        "Andi Publisher",
        2018,
        4.7,
      ],
      [
        "buku6.jpeg",
        "Sistem Basis Data Dan Sql",
        "Didik Setiyadi",
        "Mitra Wacana Media",
        2020,
        4.5,
      ],
      [
        "buku7.jpg",
        "Perancangan Basis Data Teori",
        "Suhartini",
        "Deepublish",
        2020,
        4.2,
      ],
      [
        "buku8.jpg",
        "Teori Dan Praktek Sistem Operasi",
        "Zaid Romegar Mair",
        "Deepublish",
        2018,
        4.1,
      ],
    ];

    this.popularBooks = [...this.allBooks]
      .sort((a, b) => b[5] - a[5])
      .slice(0, 3);
  }

  render() {
    const { searchTerm, filterBy } = this.props;

    const filteredBooks = this.allBooks.filter((book) => {
      if (!searchTerm) return true;
      const searchLower = searchTerm.toLowerCase();
      return filterBy === "title"
        ? book[1].toLowerCase().includes(searchLower)
        : book[2].toLowerCase().includes(searchLower);
    });

    return (
      <>
        {}
        <div className="row mb-5">
          <h3 className="pb-2 mb-4 border-bottom">Popular Books</h3>
          {this.popularBooks.map((book, index) => (
            <div className="col-md-4 mb-4" key={`popular-${index}`}>
              <div className="card h-100 popular-book">
                <div className="card-body text-center">
                  <img
                    src={`img/${book[0]}`}
                    width="120px"
                    height="180px"
                    className="img-thumbnail mb-3"
                    alt={book[1]}
                  />
                  <h5>{book[1]}</h5>
                  <div className="text-warning mb-2">
                    {"★".repeat(Math.floor(book[5]))}
                    {"☆".repeat(5 - Math.floor(book[5]))}
                    <span className="text-muted ms-2">
                      {book[5].toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {}
        <div className="row">
          <h3 className="pb-2 mb-4 border-bottom">All Books</h3>
          {filteredBooks.length === 0 ? (
            <div className="col-12 text-center py-5">
              <p className="text-muted">No books found</p>
            </div>
          ) : (
            filteredBooks.map((book, index) => (
              <div className="col-sm-6 col-lg-4 mb-4" key={index}>
                <div className="card h-100">
                  <div className="card-body text-center">
                    <img
                      src={`img/${book[0]}`}
                      width="120px"
                      height="180px"
                      className="img-thumbnail mb-3"
                      alt={book[1]}
                    />
                    <h5 className="card-title">{book[1]}</h5>
                    <p className="card-text text-muted">{book[2]}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        {book[3]} ({book[4]})
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </>
    );
  }
}

export default Catalog;
