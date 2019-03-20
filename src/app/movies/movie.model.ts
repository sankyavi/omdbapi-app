export interface Movie {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}

export interface Rating {
    Source: string,
    Value: string
}

export interface MovieDetail {
        Title: string,
        Year: string,
        Rated: string,
        Released: string,
        Runtime: string,
        Genre: string,
        Director: string,
        Writer: string,
        Actors: string,
        Plot: string,
        Language: string,
        Country: string,
        Awards: string,
        Poster: string,
        Ratings: [Rating],
        Metascore: string,
        imdbRating: string,
        imdbVotes: string,
        imdbID: string,
        Type: string,
        DVD: string,
        BoxOffice: string,
        Production: string,
        Website: string,
        Response: string,
        userRating?: string,
        categories?: string
}


// {
//     "Title": "One Flew Over the Cuckoo's Nest",
//     "Year": "1975",
//     "Rated": "R",
//     "Released": "19 Nov 1975",
//     "Runtime": "133 min",
//     "Genre": "Drama",
//     "Director": "Milos Forman",
//     "Writer": "Lawrence Hauben (screenplay), Bo Goldman (screenplay), Ken Kesey (based on the novel by), Dale Wasserman (the play version: \"One Flew Over the Cuckoo's Nest\" by)",
//     "Actors": "Jack Nicholson, Louise Fletcher, Will Sampson, Michael Berryman",
//     "Plot": "A criminal pleads insanity after getting into trouble again and once in the mental institution rebels against the oppressive nurse and rallies up the scared patients.",
//     "Language": "English",
//     "Country": "USA",
//     "Awards": "Won 5 Oscars. Another 30 wins & 13 nominations.",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//     "Ratings": [
//       {
//         "Source": "Internet Movie Database",
//         "Value": "8.7/10"
//       },
//       {
//         "Source": "Rotten Tomatoes",
//         "Value": "94%"
//       },
//       {
//         "Source": "Metacritic",
//         "Value": "80/100"
//       }
//     ],
//     "Metascore": "80",
//     "imdbRating": "8.7",
//     "imdbVotes": "817,139",
//     "imdbID": "tt0073486",
//     "Type": "movie",
//     "DVD": "09 Dec 1997",
//     "BoxOffice": "N/A",
//     "Production": "United Artists",
//     "Website": "N/A",
//     "Response": "True"
//   }

// "Title": "It Happened One Night",
// "Year": "1934",
// "imdbID": "tt0025316",
// "Type": "movie",
// "Poster": "https://m.media-amazon.com/images/M/MV5BZmViYmM5OTYtNGQ4Ny00YjQyLThiNjEtYTE4MGZhZTNmZjcyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"