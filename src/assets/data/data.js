export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Andifa Naufal Rahman',
            child: 'Putra pertama',
            father: 'Faizaluddin',
            mother: 'Dian Purnama Dewi',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Pratiwi Bintang Tri Rezeki',
            child: 'Putri ketiga',
            father: 'Sugeng Budi Prasetyo',
            mother: 'Harwiwis Prabandari',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'Januari',
            date: '17',
            day: 'Sabtu',
            hours: {
                start: '16:00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2026',
            month: 'Januari',
            date: '17',
            day: 'Sabtu',
            hours: {
                start: '18:00',
                finish: 'Selesai'
            }
        },
        address: 'Gedung Sasono Mulyo Depok,Jl. Raya Kalimulya No.30, Jatimulya, Kec. Cilodong, Kota Depok, Jawa Barat 16413'
    },

    link: {
        calendar: 'https://calendar.app.google/RYHYUrUTL5WSCC9G7',
        map: 'https://maps.app.goo.gl/B5tDpyotbifNftbZ9',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Pratiwi Bintang Tri Rezeki',
            icon: './src/assets/images/bca.png',
            rekening: '6375040534'
        },
        {
            id: 2,
            name: 'Andifa Naufal Rahman',
            icon: './src/assets/images/permata.png',
            rekening: '7417136'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',
    api: 'https://script.google.com/macros/s/AKfycbzhvr0DL386RSn44GkrUml2VwXjuRlBk77eTapcs-28INzhtLbBT43ydqaj8wFFaxzmIw/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
