
"use strict";

// ======================================
// DATA KATEGORI
// ======================================

const categories = [
  { id: "space", name: "Space", icon: "🌌" },
  { id: "biology", name: "Biology", icon: "🧬" },
  { id: "chemistry", name: "Chemistry", icon: "🧪" },
  { id: "physics", name: "Physics", icon: "⚛️" },
  { id: "rpl", name: "RPL Dasar", icon: "💻" },
  { id: "web", name: "Pemrograman Web", icon: "🌐" },
  { id: "pai", name: "PAI", icon: "🕌" },
  { id: "mtk", name: "Matematika", icon: "📐" },
  { id: "pkn", name: "PKN", icon: "🇮🇩" },
  { id: "sejarah", name: "Sejarah", icon: "📜" },
  { id: "database", name: "Basis Data RPL", icon: "🗄️" }
];

// Format soal: pertanyaan, pilihan, nomor jawaban, petunjuk
const q = (question, options, answer, hint) => ({
  question, options, answer, hint
});

const quizData = {
  space: [
    q("Planet yang dikenal sebagai Planet Merah adalah ...", ["Venus", "Mars", "Jupiter", "Saturnus"], 1, "Planet ini memiliki permukaan kemerahan."),
    q("Pusat tata surya kita adalah ...", ["Bumi", "Bulan", "Matahari", "Mars"], 2, "Bintang yang menjadi pusat tata surya."),
    q("Planet terbesar dalam tata surya adalah ...", ["Jupiter", "Merkurius", "Venus", "Mars"], 0, "Planet ini memiliki Bintik Merah Besar."),
    q("Satelit alami Bumi adalah ...", ["Matahari", "Bulan", "Mars", "Venus"], 1, "Benda langit yang terlihat pada malam hari."),
    q("Planet terdekat dari Matahari adalah ...", ["Bumi", "Mars", "Merkurius", "Saturnus"], 2, "Planet ini memiliki orbit paling dekat dengan Matahari."),
    q("Benda langit yang menghasilkan cahaya sendiri disebut ...", ["Planet", "Asteroid", "Satelit", "Bintang"], 3, "Matahari termasuk benda langit ini."),
    q("Planet yang memiliki cincin paling terkenal adalah ...", ["Saturnus", "Bumi", "Mars", "Merkurius"], 0, "Cincinnya tersusun dari es dan batuan."),
    q("Galaksi tempat tata surya berada adalah ...", ["Andromeda", "Bima Sakti", "Sombrero", "Triangulum"], 1, "Namanya juga dikenal sebagai Milky Way."),
    q("Peristiwa ketika Bulan menutupi Matahari disebut ...", ["Gerhana bulan", "Meteor", "Gerhana matahari", "Rotasi"], 2, "Peristiwa ini terjadi pada siang hari."),
    q("Planet yang dikenal sebagai planet biru adalah ...", ["Mars", "Jupiter", "Venus", "Bumi"], 3, "Planet tempat kita tinggal.")
  ],

  biology: [
    q("Organ tubuh yang berfungsi memompa darah adalah ...", ["Paru-paru", "Jantung", "Ginjal", "Lambung"], 1, "Organ ini berdetak sepanjang waktu."),
    q("Bagian tumbuhan yang menyerap air dari tanah adalah ...", ["Daun", "Bunga", "Akar", "Batang"], 2, "Bagian ini berada di dalam tanah."),
    q("Proses tumbuhan membuat makanan disebut ...", ["Fotosintesis", "Respirasi", "Evaporasi", "Fermentasi"], 0, "Proses ini membutuhkan cahaya matahari."),
    q("Alat pernapasan utama manusia adalah ...", ["Jantung", "Paru-paru", "Hati", "Ginjal"], 1, "Organ ini mengambil oksigen dari udara."),
    q("Unit terkecil penyusun makhluk hidup adalah ...", ["Organ", "Jaringan", "Sel", "Sistem organ"], 2, "Bagian ini menjadi dasar kehidupan."),
    q("Hewan pemakan tumbuhan disebut ...", ["Herbivora", "Karnivora", "Omnivora", "Insektivora"], 0, "Contohnya sapi dan kambing."),
    q("Tempat pertukaran gas di paru-paru adalah ...", ["Trakea", "Bronkus", "Hidung", "Alveolus"], 3, "Bentuknya berupa kantung udara kecil."),
    q("Zat hijau daun disebut ...", ["Hemoglobin", "Klorofil", "Melanin", "Keratin"], 1, "Zat ini membantu fotosintesis."),
    q("Hewan yang berkembang biak dengan bertelur disebut ...", ["Vivipar", "Ovovivipar", "Ovipar", "Vegetatif"], 2, "Ayam termasuk kelompok ini."),
    q("Organ yang menyaring darah dan menghasilkan urine adalah ...", ["Ginjal", "Jantung", "Lambung", "Usus"], 0, "Manusia biasanya memiliki dua organ ini.")
  ],

  chemistry: [
    q("Rumus kimia air adalah ...", ["CO2", "H2O", "O2", "NaCl"], 1, "Tersusun dari hidrogen dan oksigen."),
    q("Simbol kimia untuk oksigen adalah ...", ["Ox", "Og", "O", "Os"], 2, "Simbolnya hanya satu huruf."),
    q("Garam dapur memiliki rumus kimia ...", ["NaCl", "H2O", "CO2", "HCl"], 0, "Terdiri dari natrium dan klorin."),
    q("Zat dengan pH kurang dari 7 bersifat ...", ["Basa", "Netral", "Asam", "Logam"], 2, "Contohnya air jeruk."),
    q("Gas yang dibutuhkan dalam proses pembakaran adalah ...", ["Nitrogen", "Oksigen", "Helium", "Hidrogen"], 1, "Gas ini juga dibutuhkan untuk bernapas."),
    q("Simbol kimia emas adalah ...", ["Ag", "Fe", "Au", "Cu"], 2, "Berasal dari nama Latin aurum."),
    q("Partikel bermuatan negatif dalam atom adalah ...", ["Elektron", "Proton", "Neutron", "Nukleus"], 0, "Partikel ini mengelilingi inti atom."),
    q("Perubahan wujud dari cair menjadi gas disebut ...", ["Membeku", "Mengembun", "Mencair", "Menguap"], 3, "Contohnya air yang dipanaskan."),
    q("Gas yang banyak dihasilkan manusia saat mengembuskan napas adalah ...", ["Oksigen", "Karbon dioksida", "Helium", "Hidrogen"], 1, "Rumus kimianya CO2."),
    q("Campuran homogen disebut juga ...", ["Larutan", "Suspensi", "Emulsi", "Endapan"], 0, "Contohnya gula yang larut dalam air.")
  ],

  physics: [
    q("Satuan gaya dalam SI adalah ...", ["Joule", "Watt", "Newton", "Meter"], 2, "Nama satuan ini berasal dari Isaac Newton."),
    q("Alat untuk mengukur suhu adalah ...", ["Barometer", "Termometer", "Amperemeter", "Dinamometer"], 1, "Alat ini dapat mengukur suhu tubuh."),
    q("Satuan kuat arus listrik adalah ...", ["Ampere", "Volt", "Ohm", "Watt"], 0, "Namanya diambil dari André-Marie Ampère."),
    q("Energi yang dimiliki benda karena gerak disebut ...", ["Potensial", "Kimia", "Panas", "Kinetik"], 3, "Energi ini dimiliki benda yang bergerak."),
    q("Benda jatuh ke Bumi karena adanya gaya ...", ["Gesek", "Gravitasi", "Magnet", "Pegas"], 1, "Gaya ini menarik benda menuju pusat Bumi."),
    q("Satuan daya listrik adalah ...", ["Watt", "Joule", "Newton", "Pascal"], 0, "Lampu biasanya memiliki nilai dalam satuan ini."),
    q("Bunyi tidak dapat merambat melalui ...", ["Air", "Udara", "Ruang hampa", "Besi"], 2, "Bunyi membutuhkan medium untuk merambat."),
    q("Alat untuk mengukur kuat arus listrik adalah ...", ["Voltmeter", "Amperemeter", "Termometer", "Barometer"], 1, "Nama alat ini mirip dengan satuan arus."),
    q("Cermin yang digunakan pada spion kendaraan adalah ...", ["Datar", "Cekung", "Cembung", "Silinder"], 2, "Cermin ini memberikan bidang pandang lebih luas."),
    q("Satuan energi dalam SI adalah ...", ["Joule", "Meter", "Sekon", "Ampere"], 0, "Simbol satuannya adalah J.")
  ],

  rpl: [
    q("Kepanjangan RPL adalah ...", ["Rekayasa Perangkat Lunak", "Rangkaian Perangkat Listrik", "Rekayasa Program Linux", "Rancangan Pemrograman Lanjut"], 0, "Bidang ini berhubungan dengan pengembangan software."),
    q("Urutan langkah logis untuk menyelesaikan masalah disebut ...", ["Variabel", "Algoritma", "Database", "Hardware"], 1, "Langkah-langkah ini dibuat sebelum program."),
    q("Diagram untuk menggambarkan alur proses disebut ...", ["Mind map", "ERD", "Flowchart", "Tabel"], 2, "Diagram ini memakai simbol-simbol tertentu."),
    q("Simbol flowchart untuk mulai dan selesai adalah ...", ["Oval", "Persegi", "Belah ketupat", "Jajar genjang"], 0, "Simbol ini disebut terminator."),
    q("Tempat menyimpan nilai dalam program disebut ...", ["Operator", "Variabel", "Komentar", "Fungsi"], 1, "Contohnya nama dan umur."),
    q("Kesalahan dalam program disebut ...", ["Syntax", "Output", "Bug", "Input"], 2, "Kesalahan ini perlu dicari dan diperbaiki."),
    q("Proses mencari dan memperbaiki kesalahan program disebut ...", ["Coding", "Browsing", "Rendering", "Debugging"], 3, "Kegiatan ini dilakukan saat program bermasalah."),
    q("Perangkat lunak disebut juga ...", ["Software", "Hardware", "Brainware", "Firmware"], 0, "Contohnya aplikasi dan sistem operasi."),
    q("Orang yang menggunakan komputer disebut ...", ["Hardware", "Software", "Brainware", "Malware"], 2, "Manusia termasuk bagian ini."),
    q("Kegiatan menulis kode program disebut ...", ["Browsing", "Coding", "Printing", "Scanning"], 1, "Kegiatan ini menggunakan bahasa pemrograman.")
  ],

  web: [
    q("HTML merupakan singkatan dari ...", ["HyperText Markup Language", "HighText Machine Language", "HyperTool Main Language", "HomeText Markup Link"], 0, "HTML digunakan untuk membuat struktur halaman web."),
    q("Tag HTML untuk membuat judul terbesar adalah ...", ["<p>", "<h1>", "<br>", "<img>"], 1, "Angka 1 menunjukkan heading terbesar."),
    q("CSS digunakan untuk ...", ["Menyimpan data", "Mengatur tampilan halaman", "Mengolah angka", "Membuat database"], 1, "CSS mengatur warna, ukuran, dan tata letak."),
    q("Tag HTML untuk membuat paragraf adalah ...", ["<h1>", "<div>", "<p>", "<a>"], 2, "Hurufnya berasal dari kata paragraph."),
    q("Atribut untuk menambahkan alamat tautan adalah ...", ["src", "href", "alt", "class"], 1, "Atribut ini berisi alamat tujuan link."),
    q("JavaScript biasanya digunakan untuk membuat web menjadi ...", ["Interaktif", "Tidak terlihat", "Offline saja", "Berbentuk gambar"], 0, "Bahasa ini dapat merespons klik pengguna."),
    q("Tag HTML untuk menampilkan gambar adalah ...", ["<picturetext>", "<image>", "<img>", "<photo>"], 2, "Tag ini menggunakan atribut src."),
    q("Ekstensi file CSS adalah ...", [".html", ".css", ".js", ".php"], 1, "Namanya sama dengan bahasa styling tersebut."),
    q("Perintah JavaScript untuk menampilkan pesan di console adalah ...", ["print()", "echo()", "console.log()", "show()"], 2, "Perintah ini sering digunakan untuk debugging."),
    q("Tag HTML untuk membuat daftar bernomor adalah ...", ["<ul>", "<ol>", "<li>", "<dl>"], 1, "O berarti ordered.")
  ],

  pai: [
    q("Kitab suci umat Islam adalah ...", ["Taurat", "Injil", "Al-Qur'an", "Zabur"], 2, "Kitab ini diturunkan kepada Nabi Muhammad SAW."),
    q("Rukun Islam berjumlah ...", ["Empat", "Lima", "Enam", "Tujuh"], 1, "Salah satunya adalah salat."),
    q("Nabi terakhir dalam Islam adalah ...", ["Nabi Musa", "Nabi Isa", "Nabi Ibrahim", "Nabi Muhammad"], 3, "Beliau menerima wahyu Al-Qur'an."),
    q("Salat wajib dalam sehari semalam berjumlah ...", ["Lima waktu", "Tiga waktu", "Empat waktu", "Enam waktu"], 0, "Dimulai dari Subuh hingga Isya."),
    q("Puasa wajib bagi umat Islam dilakukan pada bulan ...", ["Syawal", "Rajab", "Ramadan", "Muharam"], 2, "Bulan ini merupakan bulan kesembilan kalender Hijriah."),
    q("Malaikat yang bertugas menyampaikan wahyu adalah ...", ["Mikail", "Jibril", "Israfil", "Izrail"], 1, "Malaikat ini menyampaikan wahyu kepada para nabi."),
    q("Arah kiblat umat Islam adalah ...", ["Masjid Nabawi", "Masjidil Aqsa", "Ka'bah", "Gunung Uhud"], 2, "Bangunan suci ini berada di Makkah."),
    q("Hari raya setelah bulan Ramadan adalah ...", ["Idulfitri", "Iduladha", "Tahun Baru Hijriah", "Maulid Nabi"], 0, "Hari raya ini dirayakan pada 1 Syawal."),
    q("Zakat termasuk rukun Islam ke- ...", ["Satu", "Dua", "Tiga", "Empat"], 2, "Urutannya setelah salat."),
    q("Surah pertama dalam Al-Qur'an adalah ...", ["Al-Ikhlas", "Al-Fatihah", "An-Nas", "Al-Baqarah"], 1, "Surah ini dibaca dalam setiap rakaat salat.")
  ],

  mtk: [
    q("Hasil dari 12 × 8 adalah ...", ["86", "92", "96", "108"], 2, "Hitung 12 dikalikan 8."),
    q("Hasil dari 144 ÷ 12 adalah ...", ["10", "12", "14", "16"], 1, "Angka berapa jika dikali 12 menghasilkan 144?"),
    q("Hasil dari 25 + 37 adalah ...", ["52", "62", "72", "82"], 1, "Jumlahkan puluhan dan satuannya."),
    q("Nilai dari 9² adalah ...", ["18", "72", "81", "99"], 2, "Artinya 9 dikalikan 9."),
    q("Bangun datar yang memiliki tiga sisi adalah ...", ["Persegi", "Lingkaran", "Segitiga", "Persegi panjang"], 2, "Bangun ini memiliki tiga sudut."),
    q("Rumus luas persegi adalah ...", ["Sisi × sisi", "Panjang × lebar", "½ × alas × tinggi", "π × r²"], 0, "Semua sisinya memiliki panjang sama."),
    q("Hasil dari ¾ + ¼ adalah ...", ["½", "1", "1¼", "2"], 1, "Penyebutnya sama, jumlahkan pembilang."),
    q("Bilangan prima terkecil adalah ...", ["0", "1", "2", "3"], 2, "Bilangan ini hanya memiliki dua faktor."),
    q("Jika x + 5 = 12, nilai x adalah ...", ["5", "6", "7", "8"], 2, "Kurangi 12 dengan 5."),
    q("Besar sudut siku-siku adalah ...", ["45°", "60°", "90°", "180°"], 2, "Sudut ini membentuk pojok persegi.")
  ],

  pkn: [
    q("Dasar negara Indonesia adalah ...", ["UUD 1945", "Pancasila", "Bhinneka Tunggal Ika", "Proklamasi"], 1, "Dasar negara ini memiliki lima sila."),
    q("Lambang negara Indonesia adalah ...", ["Harimau", "Garuda Pancasila", "Burung Merpati", "Elang Jawa"], 1, "Burung ini membawa perisai di dadanya."),
    q("Semboyan bangsa Indonesia adalah ...", ["Tut Wuri Handayani", "Bhinneka Tunggal Ika", "Ing Ngarsa Sung Tuladha", "Jalesveva Jayamahe"], 1, "Artinya berbeda-beda tetapi tetap satu."),
    q("UUD 1945 disahkan pada tanggal ...", ["17 Agustus 1945", "18 Agustus 1945", "1 Juni 1945", "10 November 1945"], 1, "Sehari setelah proklamasi kemerdekaan."),
    q("Sila pertama Pancasila berbunyi ...", ["Kemanusiaan yang adil dan beradab", "Persatuan Indonesia", "Ketuhanan Yang Maha Esa", "Keadilan sosial bagi seluruh rakyat Indonesia"], 2, "Sila ini membahas kepercayaan kepada Tuhan."),
    q("Warna bendera Indonesia adalah ...", ["Merah dan putih", "Biru dan putih", "Merah dan kuning", "Hijau dan putih"], 0, "Warna bagian atas dan bawah berbeda."),
    q("Lembaga yang memiliki fungsi membuat undang-undang bersama presiden adalah ...", ["DPR", "MA", "BPK", "KY"], 0, "Lembaga ini merupakan perwakilan rakyat."),
    q("Musyawarah untuk mencapai mufakat sesuai dengan sila ke ...", ["Dua", "Tiga", "Empat", "Lima"], 2, "Sila ini membahas kerakyatan dan permusyawaratan."),
    q("Hak warga negara untuk memperoleh pendidikan tercantum dalam UUD 1945 Pasal ...", ["27", "28", "31", "33"], 2, "Pasal ini membahas pendidikan."),
    q("Sikap menghargai perbedaan disebut ...", ["Diskriminasi", "Toleransi", "Egoisme", "Permusuhan"], 1, "Sikap ini penting dalam masyarakat yang beragam.")
  ],

  sejarah: [
    q("Indonesia memproklamasikan kemerdekaan pada ...", ["17 Agustus 1945", "18 Agustus 1945", "10 November 1945", "1 Juni 1945"], 0, "Tanggal ini diperingati sebagai hari kemerdekaan."),
    q("Tokoh yang membacakan teks proklamasi adalah ...", ["Mohammad Hatta", "Soekarno", "Sutan Sjahrir", "Ki Hajar Dewantara"], 1, "Beliau adalah presiden pertama Indonesia."),
    q("Wakil presiden pertama Indonesia adalah ...", ["Mohammad Hatta", "Soepomo", "Ahmad Soebardjo", "Mohammad Yamin"], 0, "Beliau dikenal sebagai Bung Hatta."),
    q("Organisasi Budi Utomo berdiri pada tahun ...", ["1908", "1928", "1945", "1912"], 0, "Tahun ini diperingati sebagai Hari Kebangkitan Nasional."),
    q("Sumpah Pemuda terjadi pada tanggal ...", ["20 Mei 1908", "28 Oktober 1928", "17 Agustus 1945", "10 November 1945"], 1, "Peristiwa ini menyatukan semangat pemuda Indonesia."),
    q("Tokoh yang dikenal sebagai Bapak Pendidikan Nasional adalah ...", ["Soekarno", "Mohammad Hatta", "Ki Hajar Dewantara", "Jenderal Sudirman"], 2, "Beliau mendirikan Taman Siswa."),
    q("Peristiwa Rengasdengklok terjadi menjelang ...", ["Sumpah Pemuda", "Proklamasi Kemerdekaan", "Kebangkitan Nasional", "Konferensi Asia Afrika"], 1, "Soekarno dan Hatta dibawa ke daerah di Karawang."),
    q("Pertempuran 10 November diperingati sebagai Hari ...", ["Pendidikan", "Pahlawan", "Kesaktian Pancasila", "Kebangkitan Nasional"], 1, "Peristiwa ini terjadi di Surabaya."),
    q("Kerajaan Hindu tertua yang dikenal di Indonesia adalah ...", ["Majapahit", "Sriwijaya", "Kutai", "Mataram Islam"], 2, "Kerajaan ini berada di Kalimantan Timur."),
    q("Konferensi Asia Afrika tahun 1955 diselenggarakan di ...", ["Jakarta", "Bandung", "Yogyakarta", "Surabaya"], 1, "Kota ini dijuluki Kota Kembang.")
  ],

  database: [
    q("Kepanjangan DBMS adalah ...", ["Database Management System", "Data Basic Main Server", "Digital Base Machine System", "Database Main Software"], 0, "Perangkat lunak untuk mengelola basis data."),
    q("Contoh aplikasi DBMS adalah ...", ["MySQL", "Photoshop", "CorelDRAW", "PowerPoint"], 0, "Aplikasi ini banyak digunakan bersama PHP."),
    q("Perintah SQL untuk mengambil data adalah ...", ["INSERT", "DELETE", "SELECT", "UPDATE"], 2, "Perintah ini digunakan untuk menampilkan data."),
    q("Perintah SQL untuk menambahkan data adalah ...", ["INSERT", "DROP", "SELECT", "ALTER"], 0, "Perintah ini memasukkan baris baru."),
    q("Primary Key berfungsi untuk ...", ["Menghapus tabel", "Mengidentifikasi setiap record secara unik", "Mengubah warna tabel", "Mencetak data"], 1, "Nilainya harus unik untuk setiap record."),
    q("Foreign Key digunakan untuk ...", ["Menghubungkan tabel", "Menghapus database", "Mengganti nama kolom", "Mengurutkan warna"], 0, "Kunci ini merujuk ke kunci pada tabel lain."),
    q("Perintah SQL untuk mengubah data adalah ...", ["SELECT", "INSERT", "UPDATE", "CREATE"], 2, "Perintah ini memperbarui record."),
    q("Perintah SQL untuk menghapus data tertentu adalah ...", ["DELETE", "SHOW", "SELECT", "INSERT"], 0, "Perintah ini dapat digunakan bersama WHERE."),
    q("Satu baris data dalam tabel disebut ...", ["Field", "Record", "Database", "Query"], 1, "Istilah lainnya adalah row."),
    q("Kolom dalam tabel basis data disebut ...", ["Record", "Row", "Field", "Form"], 2, "Contohnya kolom nama atau alamat.")
  ]
};

// ======================================
// DATA DAN STATUS PEMAIN
// ======================================

const STORAGE_KEY = "scienceWorldPlayerV2";

function loadPlayer() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (saved && typeof saved === "object") {
      return {
        points: Number(saved.points) || 0,
        games: Number(saved.games) || 0,
        best: Number(saved.best) || 0,
        leaderboard: Array.isArray(saved.leaderboard) ? saved.leaderboard : [],
        achievements: Array.isArray(saved.achievements) ? saved.achievements : [],
        name: typeof saved.name === "string" ? saved.name : ""
      };
    }
  } catch (error) {
    console.warn("Data pemain tidak dapat dibaca.", error);
  }

  return {
    points: 0,
    games: 0,
    best: 0,
    leaderboard: [],
    achievements: [],
    name: ""
  };
}

let player = loadPlayer();

function savePlayer() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(player));
}

// ======================================
// STATUS PERMAINAN
// ======================================

let currentCategory = "space";
let currentQuestions = [];
let questionIndex = 0;
let score = 0;
let correct = 0;
let wrong = 0;
let streak = 0;
let maxStreak = 0;
let hints = 3;
let timeLeft = 20;
let timer = null;
let locked = false;
let hintUsedThisQuestion = false;
let lastName = "";
let musicOn = false;
let musicTimer = null;
let audioContext = null;
let gameActive = false;

// ======================================
// ELEMEN HTML
// ======================================

const $ = id => document.getElementById(id);

const homeSection = $("home");
const quizSection = $("quiz");
const resultSection = $("result");

// ======================================
// AUDIO DAN SOUND EFFECT
// ======================================

function playTone(frequency, duration = 0.18, type = "sine", volume = 0.12) {
  try {
    audioContext ||= new (
      window.AudioContext || window.webkitAudioContext
    )();

    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.value = frequency;

    gain.gain.setValueAtTime(volume, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audioContext.currentTime + duration
    );

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
  } catch (error) {
    console.warn("Audio tidak tersedia:", error);
  }
}

function correctSound() {
  playTone(660, 0.15);
  setTimeout(() => playTone(880, 0.2), 130);
}

function wrongSound() {
  playTone(220, 0.25, "triangle");
  setTimeout(() => playTone(165, 0.25, "triangle"), 150);
}

function hintSound() {
  playTone(550, 0.18);
}

function finishSound() {
  playTone(523, 0.18);
  setTimeout(() => playTone(659, 0.18), 170);
  setTimeout(() => playTone(784, 0.3), 340);
}

// ======================================
// MUSIK LATAR
// ======================================

function toggleMusic() {
  musicOn = !musicOn;

  $("musicBtn").textContent = musicOn
    ? "🎵 Musik ON"
    : "🎵 Musik OFF";

  if (musicOn) {
    playMusicNotes();

    musicTimer = setInterval(() => {
      if (musicOn) playMusicNotes();
    }, 1800);
  } else {
    clearInterval(musicTimer);
    musicTimer = null;
  }
}

function playMusicNotes() {
  if (!musicOn) return;

  playTone(392, 0.3, "sine", 0.035);

  setTimeout(() => {
    if (musicOn) playTone(494, 0.3, "sine", 0.035);
  }, 350);

  setTimeout(() => {
    if (musicOn) playTone(587, 0.4, "sine", 0.035);
  }, 700);
}

// ======================================
// NAVIGASI HALAMAN
// ======================================

function showSection(sectionName) {
  homeSection.classList.add("hidden");
  quizSection.classList.add("hidden");
  resultSection.classList.add("hidden");

  if (sectionName === "home") {
    homeSection.classList.remove("hidden");
  } else if (sectionName === "quiz") {
    quizSection.classList.remove("hidden");
  } else if (sectionName === "result") {
    resultSection.classList.remove("hidden");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function goHome() {
  clearInterval(timer);
  timer = null;
  gameActive = false;
  locked = true;

  showSection("home");
  updateDashboard();
}

// ======================================
// TAMPILKAN KATEGORI
// ======================================

function renderCategories() {
  const container = $("categories");
  container.innerHTML = "";

  categories.forEach(category => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "category-card";
    card.dataset.category = category.id;

    const emoji = document.createElement("div");
    emoji.className = "emoji";
    emoji.textContent = category.icon;

    const title = document.createElement("h3");
    title.textContent = category.name;

    const description = document.createElement("p");
    description.textContent = "10 soal • Pilih untuk bermain";

    card.append(emoji, title, description);
    container.appendChild(card);
  });
}

// ======================================
// DASHBOARD, LEADERBOARD, ACHIEVEMENT
// ======================================

function updateDashboard() {
  $("totalPoints").textContent = player.points;
  $("totalGames").textContent = player.games;
  $("bestScore").textContent = player.best;

  const leaderboard = $("leaderboard");
  leaderboard.innerHTML = "";

  const topPlayers = [...player.leaderboard]
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  if (topPlayers.length === 0) {
    const item = document.createElement("li");
    item.textContent = "Belum ada skor. Ayo mulai bermain!";
    leaderboard.appendChild(item);
  }

  topPlayers.forEach((entry, index) => {
    const item = document.createElement("li");
    item.textContent = `${index + 1}. ${entry.name} — ${entry.score} poin`;
    leaderboard.appendChild(item);
  });

  const achievementList = [
    ["first", "🎮 Pemain Baru", "Selesaikan permainan pertama"],
    ["perfect", "💯 Sempurna", "Jawab 10 soal dengan benar"],
    ["streak", "🔥 Combo Master", "Raih 5 jawaban benar berturut-turut"],
    ["collector", "🏆 Pengumpul", "Kumpulkan 500 poin"]
  ];

  const achievementBox = $("achievements");
  achievementBox.innerHTML = "";

  achievementList.forEach(([id, title, description]) => {
    const item = document.createElement("div");
    item.className = "achievement-item";

    const unlocked = player.achievements.includes(id);

    item.textContent =
      `${unlocked ? "✅" : "🔒"} ${title} — ${description}`;

    achievementBox.appendChild(item);
  });
}

function unlockAchievement(id) {
  if (!player.achievements.includes(id)) {
    player.achievements.push(id);
  }
}

// ======================================
// MEMULAI KUIS
// ======================================

function startQuiz(categoryId = "space") {
  if (!quizData[categoryId]) {
    alert("Kategori tidak ditemukan.");
    return;
  }

  const enteredName = $("playerName").value.trim();

  lastName = enteredName || player.name || "Pemain";
  player.name = lastName;
  savePlayer();

  currentCategory = categoryId;
  currentQuestions = quizData[categoryId];

  questionIndex = 0;
  score = 0;
  correct = 0;
  wrong = 0;
  streak = 0;
  maxStreak = 0;
  hints = 3;
  locked = false;
  gameActive = true;

  const category = categories.find(item => item.id === categoryId);

  $("categoryName").textContent =
    `${category.icon} ${category.name}`;

  showSection("quiz");
  loadQuestion();
}

// ======================================
// MENAMPILKAN SOAL
// ======================================

function loadQuestion() {
  clearInterval(timer);

  locked = false;
  hintUsedThisQuestion = false;
  timeLeft = 20;

  const data = currentQuestions[questionIndex];

  $("questionNumber").textContent =
    `${questionIndex + 1}/10`;

  $("questionText").textContent = data.question;
  $("timer").textContent = timeLeft;
  $("score").textContent = score;
  $("streak").textContent = streak;

  $("progressBar").style.width =
    `${(questionIndex / currentQuestions.length) * 100}%`;

  $("feedback").textContent = "";
  $("nextBtn").classList.add("hidden");
  $("nextBtn").textContent =
    questionIndex === 9 ? "Lihat Hasil 🏆" : "Soal Berikutnya →";

  $("hintBtn").disabled = hints <= 0;
  $("hintBtn").textContent = `💡 Hint (${hints})`;

  const answerBox = $("answers");
  answerBox.innerHTML = "";

  data.options.forEach((option, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "answer-btn";
    button.dataset.answer = index;

    button.textContent =
      `${String.fromCharCode(65 + index)}. ${option}`;

    answerBox.appendChild(button);
  });

  timer = setInterval(() => {
    if (!gameActive || locked) return;

    timeLeft--;
    $("timer").textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      selectAnswer(-1);
    }
  }, 1000);
}

// ======================================
// MEMILIH JAWABAN
// ======================================

function selectAnswer(selected) {
  if (locked || !gameActive) return;

  locked = true;
  clearInterval(timer);

  const data = currentQuestions[questionIndex];
  const buttons = document.querySelectorAll(".answer-btn");
  const feedback = $("feedback");

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === data.answer) {
      button.classList.add("correct");
    }

    if (index === selected && selected !== data.answer) {
      button.classList.add("wrong");
    }
  });

  if (selected === data.answer) {
    correct++;
    streak++;
    maxStreak = Math.max(maxStreak, streak);

    const comboBonus = streak >= 3 ? 10 : 0;
    const timeBonus = Math.floor(timeLeft / 2);
    const earned = 20 + comboBonus + timeBonus;

    score += earned;

    correctSound();
    feedback.textContent = `🎉 Benar! +${earned} poin`;
    feedback.style.color = "#35a76c";
  } else {
    wrong++;
    streak = 0;

    wrongSound();

    if (selected === -1) {
      feedback.textContent =
        `⏰ Waktu habis! Jawaban: ${data.options[data.answer]}`;
    } else {
      feedback.textContent =
        `❌ Kurang tepat! Jawaban: ${data.options[data.answer]}`;
    }

    feedback.style.color = "#e36c83";
  }

  $("score").textContent = score;
  $("streak").textContent = streak;

  $("nextBtn").classList.remove("hidden");
}

// ======================================
// FITUR HINT
// ======================================

function useHint() {
  if (!gameActive || locked || hints <= 0 || hintUsedThisQuestion) {
    return;
  }

  hints--;
  hintUsedThisQuestion = true;

  score = Math.max(0, score - 5);

  $("score").textContent = score;
  $("hintBtn").textContent = `💡 Hint (${hints})`;
  $("hintBtn").disabled = hints <= 0;

  $("feedback").textContent =
    `💡 Petunjuk: ${currentQuestions[questionIndex].hint} (-5 poin)`;

  hintSound();
}

// ======================================
// SOAL BERIKUTNYA
// ======================================

function nextQuestion() {
  if (!locked || !gameActive) return;

  questionIndex++;

  if (questionIndex >= currentQuestions.length) {
    finishQuiz();
  } else {
    loadQuestion();
  }
}

// ======================================
// SELESAI KUIS
// ======================================

function finishQuiz() {
  clearInterval(timer);
  timer = null;
  gameActive = false;
  locked = true;

  player.points += score;
  player.games++;
  player.best = Math.max(player.best, score);

  player.leaderboard.push({
    name: lastName,
    score: score,
    category: currentCategory
  });

  // Simpan hanya 50 hasil terbaru.
  player.leaderboard = player.leaderboard.slice(-50);

  unlockAchievement("first");

  if (correct === 10) {
    unlockAchievement("perfect");
  }

  if (maxStreak >= 5) {
    unlockAchievement("streak");
  }

  if (player.points >= 500) {
    unlockAchievement("collector");
  }

  savePlayer();

  $("finalScore").textContent = score;
  $("correctCount").textContent = correct;
  $("wrongCount").textContent = wrong;

  $("resultMessage").textContent =
    `${lastName}, kamu berhasil menyelesaikan 10 soal!`;

  let reward = "🌱 Terus belajar dan tingkatkan kemampuanmu!";

  if (correct === 10) {
    reward = "🏆 PERFECT! Kamu mendapatkan gelar Master!";
  } else if (correct >= 8) {
    reward = "🥇 Hebat! Kamu mendapatkan Gold Reward!";
  } else if (correct >= 6) {
    reward = "🥈 Bagus! Kamu mendapatkan Silver Reward!";
  } else if (correct >= 4) {
    reward = "🥉 Kamu mendapatkan Bronze Reward!";
  }

  $("rewardText").textContent = reward;
  $("progressBar").style.width = "100%";

  updateDashboard();
  showSection("result");
  finishSound();
}

// ======================================
// MAIN LAGI
// ======================================

function retryQuiz() {
  startQuiz(currentCategory);
}

// ======================================
// DARK MODE
// ======================================

function toggleDark() {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  $("darkBtn").textContent = isDark
    ? "☀️ Mode Terang"
    : "🌙 Mode";

  localStorage.setItem("scienceWorldDark", isDark ? "true" : "false");
}

function loadDarkMode() {
  const isDark = localStorage.getItem("scienceWorldDark") === "true";

  document.body.classList.toggle("dark", isDark);

  $("darkBtn").textContent = isDark
    ? "☀️ Mode Terang"
    : "🌙 Mode";
}

// ======================================
// EVENT LISTENER SEMUA TOMBOL
// ======================================

// Tombol beranda
$("startBtn").addEventListener("click", () => {
  startQuiz("space");
});

$("backBtn").addEventListener("click", goHome);
$("homeBtn").addEventListener("click", goHome);
$("retryBtn").addEventListener("click", retryQuiz);

// Tombol kuis
$("hintBtn").addEventListener("click", useHint);
$("nextBtn").addEventListener("click", nextQuestion);

// Tombol musik dan tema
$("musicBtn").addEventListener("click", toggleMusic);
$("darkBtn").addEventListener("click", toggleDark);

// Klik kategori
$("categories").addEventListener("click", event => {
  const card = event.target.closest("[data-category]");

  if (!card) return;

  startQuiz(card.dataset.category);
});

// Klik jawaban
$("answers").addEventListener("click", event => {
  const button = event.target.closest("[data-answer]");

  if (!button || button.disabled) return;

  selectAnswer(Number(button.dataset.answer));
});

// ======================================
// INISIALISASI
// ======================================

function initializeGame() {
  $("playerName").value = player.name || "";

  renderCategories();
  updateDashboard();
  loadDarkMode();
}

initializeGame();
