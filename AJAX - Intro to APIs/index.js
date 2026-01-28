

const fetchBooks = function () {
    $.ajax({
        method: "GET",
        url: "https://www.googleapis.com/books/v1/volumes?q=javascript",
        success: function (data) {

            data.items.forEach(item => {
                const book = item.volumeInfo;
                console.log(book);
                console.log(book.title);
                console.log(book.authors);
                console.log(book.industryIdentifiers);
            })
        },
        error: function (xhr, text, error) {
            console.log(text);
        }


    });

};

fetchBooks();

//fetch();