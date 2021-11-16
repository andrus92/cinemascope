import godfatherImg from '../img/Godfather.jpg';

const moviesData = [
    {
        title: 'The Shawshank Redemption',
        picture: '../img/Shawshank_redemption_movie.jpg',
        rating: 9.3,
        genres: ['Drama'],
        countries: ['USA'],
        relDate: '1994-09-10',
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        director: 'Franc Darabont',
        cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton', 'William Sadler', 'Clancy Brown' ]
    },

    {
        title: 'The Godfather',
        picture: '../img/Godfather.jpg',
        rating: 9.2,
        genres: ['Drama', 'Crime'],
        countries: ['USA'],
        relDate: '1972-03-17',
        description: 'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.',
        director: 'Francis Ford Coppola',
        cast: ['Marlon Brando', 'Al Pacino', 'James Caan']
    },

    {
        title: 'La vita è bella',
        picture: '../img/vita.jfif',
        rating: 8.6,
        genres: ['Comedy', 'War', 'Drama'],
        countries: ['Italy'],
        relDate: '1997-12-20',
        description: 'When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.',
        director: 'Roberto Benigni',
        cast: ['Roberto Benign', 'Nicoletta Braschi', 'Giorgio Cantarini']
    },
    
    {
        title: 'Forrest Gump',
        picture: '../img/forest.jfif',
        rating: 8.9,
        genres: ['Drama', 'Comedy'],
        countries: ['USA'],
        relDate: '1994-06-23',
        description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
        director: 'Robert Zemeckis',
        cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise']
    },

    {
        title: '1+1',
        picture: '../img/1plus1.jfif',
        rating: 8.8,
        genres: ['Drama', 'Comedy', 'Biography'],
        countries: ['France'],
        relDate: '2011-09-23',
        description: 'After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.',
        director: 'Olivier Nakache',
        cast: ['François Cluzet', 'Omar Sy', 'Anne Le Ny']
    },

    {
        title: 'Pulp Fiction',
        picture: '../img/pulp_fiction.jfif',
        rating: 8.6,
        genres: ['Drama', 'Comedy', 'Crime'],
        countries: ['USA'],
        relDate: '1994-05-21',
        description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        director: 'Quentin Tarantino',
        cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson']
    },

    {
        title: 'A Beautiful Mind',
        picture: '../img/a_beautiful_mind.jfif',
        rating: 8.6,
        genres: ['Drama', 'Biography'],
        countries: ['USA'],
        relDate: '2001-12-13',
        description: 'After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.',
        director: 'Ron Howard',
        cast: ['Russell Crowe', 'Ed Harris', 'Jennifer Connelly']
    },

    {
        title: 'Catch Me If You Can',
        picture: '../img/catch_me.jfif',
        rating: 8.5,
        genres: ['Biography', 'Crime', 'Comedy'],
        countries: ['USA', 'Canada'],
        relDate: '2002-12-16',
        description: 'Barely 21 yet, Frank is a skilled forger who has passed as a doctor, lawyer and pilot. FBI agent Carl becomes obsessed with tracking down the con man, who only revels in the pursuit.',
        director: 'Steven Spielberg',
        cast: ['Leonardo DiCaprio', 'Tom Hanks', 'Christopher Walken']
    },

    {
        title: 'Pirates of the Caribbean',
        //TODO: correct the layout with long text 
        //title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
        picture: '../img/pirates.jfif',
        rating: 8.3,
        genres: ['thriller', 'Comedy', 'Adventures'],
        countries: ['USA'],
        relDate: '2003-08-20',
        description: "Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
        director: 'Gore Verbinski',
        cast: ['Johnny Depp', 'Geoffrey Rush', 'Orlando Bloom']
    },

    {
        title: 'Scent of a Woman',
        picture: '../img/scent_of_a_woman.jfif',
        rating: 8.4,
        genres: ['Drama'],
        countries: ['USA'],
        relDate: '1992-12-23',
        description: 'A prep school student needing money agrees to "babysit" a blind man, but the job is not at all what he anticipated.',
        director: 'Martin Brest',
        cast: ['Al Pacino', " Chris O'Donnell", 'James Rebhorn']
    },

    {
        title: "It's a Wonderful Life",
        picture: '../img/wonderful_life.jfif',
        rating: 9.2,
        genres: ['Drama', 'Family'],
        countries: ['USA'],
        relDate: '1946-12-20',
        description: 'An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.',
        director: 'Frank Capra',
        cast: ['James Stewart', 'Donna Reed', 'Lionel Barrymore']
    },

    {
        title: 'Il bisbetico domato',
        picture: '../img/il_bisbetico_domato.jfif',
        rating: 8.4,
        genres: ['Drama', 'Comedy'],
        countries: ['Italy'],
        relDate: '1980-12-05',
        description: 'A grouchy farmer, known around his small Italian town as being wonderful to his employees, but actively driving everyone else away, is in for a surprise when a beautiful girl from the city, ends up on his stoop after her car breaks down in the rain.',
        director: 'Franco Castellano',
        cast: ['Adriano Celentano', 'Ornella Muti']
    },

    {
        title: 'Innamorato pazzo',
        picture: '../img/innamorato.jfif',
        rating: 8.4,
        genres: ['Drama', 'Comedy'],
        countries: ['Italy'],
        relDate: '1981-12-18',
        description: 'Barnaba, a rude bus driver who enjoys the attention of women, one day meets Principessa Cristina, the princess of a local principality.',
        director: 'Franco Castellano',
        cast: ['Adriano Celentano', 'Ornella Muti']
    },

    {
        title: 'Roman Holiday',
        picture: '../img/roman_holiday.jfif',
        rating: 8.3,
        genres: ['Drama', 'Comedy'],
        countries: ['USA'],
        relDate: '1953-08-20',
        description: 'A bored and sheltered princess escapes her guardians and falls in love with an American newsman in Rome.',
        director: 'William Wyler',
        cast: ['Gregory Peck', 'Audrey Hepburn']
    },

    {
        title: "Breakfast at Tiffany's",
        picture: '../img/breakfast.jfif',
        rating: 8.1,
        genres: ['Drama', 'Comedy'],
        countries: ['USA'],
        relDate: '1961-10-05',
        description: 'A young New York socialite becomes interested in a young man who has moved into her apartment building, but her past threatens to get in the way.',
        director: 'Blake Edwards',
        cast: ['Audrey Hepburn', 'George Peppard']
    },

    {
        title: 'Dial M for Murder',
        picture: '../img/dial_m.jfif',
        rating: 8.1,
        genres: ['Thriller', 'Criminal', 'Suspense'],
        countries: ['USA'],
        relDate: '1954-05-19',
        description: "A former tennis player tries to arrange his wife's murder after learning of her affair.",
        director: 'Alfred Hitchcock',
        cast: ['Grace Kelly', 'James Stewart']
    },

    {
        title: 'Rear Window',
        picture: '../img/rear_window.jfif',
        rating: 8.0,
        genres: ['Thriller', 'Suspense'],
        countries: ['USA'],
        relDate: '1954-08-04',
        description: "A wheelchair-bound photographer spies on his neighbors from his Greenwich Village courtyard apartment window, and becomes convinced one of them has committed murder, despite the skepticism of his fashion-model girlfriend.",
        director: 'Alfred Hitchcock',
        cast: ['Grace Kelly', 'James Stewart']
    },

    {
        title: 'Vertigo',
        picture: '../img/vertigo.jfif',
        rating: 8.0,
        genres: ['Thriller', 'Suspense'],
        countries: ['USA'],
        relDate: '1958-05-09',
        description: 'A former San Francisco police detective juggles wrestling with his personal demons and becoming obsessed with the hauntingly beautiful woman he has been hired to trail, who may be deeply disturbed.',
        director: 'Alfred Hitchcock',
        cast: ['Kim Novak', 'James Stewart']
    },

];


  export { moviesData };