const movies = [
    {
        id: "00001",
        title: "Scary Movie",
        url: "fHWR3YplPQWciYzxEity2kyDoDn.jpg",
        plot: "A familiar-looking group of teenagers find themselves being stalked by a more-than-vaguely recognizable masked killer! As the victims begin to pile up and the laughs pile on, none of your favorite scary movies escape the razor-sharp satire of this outrageously funny parody!",
        director: "Keenen Ivory Wayans",
        releaseDate: "31/20/2000",
        genre: "Comedy",
        relatedMovies: ["00002", "00003", "00004", "00005"]
    },
    { 
        id: "00002",
        title: 'Scary Movie 2',
        url: "r4qTydYjntbb5TfZKV229NpSaCt.jpg",
        plot: "While the original parodied slasher flicks like Scream, Keenen Ivory Wayans's sequel to Scary Movie takes comedic aim at haunted house movies. A group of students visit a mansion called \"Hell House,\" and murderous high jinks ensue.",
        director: "Keenen Ivory Wayans",
        releaseDate: "07/04/2001",
        genre: "Comedy",
        relatedMovies: ["00001", "00003", "00004", "00005"]
    },
    { 
        id: "00003",
        title: 'Scary Movie 3',
        url: "7tMsPb5yEwmb4eHbXRAD6mURE5B.jpg",
        plot: "In the third installment of the Scary Movie franchise, news anchorwoman Cindy Campbell has to investigate mysterious crop circles and killing video tapes, and help the President stop an alien invasion in the process.",
        director: "David Zucker",
        releaseDate: "10/24/2003",
        genre: "Comedy",
        relatedMovies: ["00001", "00002", "00004", "00005"]
    },
    { 
        id: "00004",
        title: 'Scary Movie 4',
        url: "iSybaw6TeJKKmHIh8UonOEsv4Bh.jpg",
        plot: "Cindy finds out the house she lives in is haunted by a little boy and goes on a quest to find out who killed him and why. Also, Alien \"Tr-iPods\" are invading the world and she has to uncover the secret in order to stop them.",
        director: "David Zucker",
        releaseDate: "04/14/2006",
        genre: "Comedy",
        relatedMovies: ["00001", "00002", "00003", "00005"]
    },
    { 
        id: "00005",
        title: 'Scary Movie 5',
        url: "mjsX6YYZEepnuJ6F04MAGGOSdbJ.jpg",
        plot: "Home with their newly-formed family, happy parents Dan and Jody are haunted by sinister, paranormal activities. Determined to expel the insidious force, they install security cameras and discover their family is being stalked by an evil dead demon.",
        director: "Malcolm D. Lee",
        releaseDate: "04/12/2013",
        genre: "Comedy",
        relatedMovies: ["00001", "00002", "00003", "00004"]
    }
];

export default movies;