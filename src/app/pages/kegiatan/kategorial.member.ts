const pre = '../../../assets/kategorial/';
const thumb = '-thumb.jpg';

export const kategorial: Array<Kategorial> = [
  {
    id: 'ama',
    nama: 'Seksi Ama',
    thumbnail: `${pre}ama${thumb}`,
    route: ['kegiatan', 'kategorial', 'ama'],
    deskripsi: [
      'Punguan Ama merupakan kelompok/kategorial di bawah Dewan Koinonia, yang semua pengurusnya dan anggotanya adalah kaum Bapak. Punguan ini bertujuan untuk meningkatkan iman kepercayaan kepada Tuhan dan mengembangkan persekutuan yang baik antara sesama kaum Bapak melalui kegiatan-kegiatan yang bersifat spiritual, kolektif dan membangun. Jumlah anggota punguan Ama pada saat ini adalah kurang lebih 70 orang.',
      'Adapun kegiatan yang baru saja dilaksanakan antaralain Konser Ama yang diselenggarakan pada akhir tahun 2014 di HKBP Bandung Reformanda, peluncuran Video CD Koor Ama yang berisi lagu-lagu pujian dari koor Ama HKBP Reformanda serta PSW Abigail dan kunjungan pelayanan ke Gereja HKBP Yogyakarta. Sedangkan kegiatan rutin punguan Ama adalah sermon, latihan koor dan olahraga.',
    ],
  },
  {
    id: 'parompuan',
    nama: 'Seksi Parompuan',
    thumbnail: `${pre}parompuan${thumb}`,
    route: ['kegiatan', 'kategorial', 'parompuan'],
    deskripsi: [
      'Seksi Parompuan adalah kelompok/kategorial di bawah Dewan Koinonia, yang beranggotakan dan berkepengurusan dari kaum Ibu. Punguan ini menjadi wadah penyalur aspirasi bagi kaum Ibu. Seksi Parompuan juga dibagi ke dalam sub-kategorial seperti Punguan Ina, yang merupakan persekutuan pelayanan untuk meningkatkan iman dan spiritualitas dari kaum Ibu, serta Punguan Ina Hanna yang anggotanya merupakan para janda yang telah ditinggal mati oleh suaminya. Saat ini Punguan Ina HKBP Reformanda beranggotakan sekitar 60 orang, sementara Punguan Ina Hanna beranggotakan sekitar 30 orang.',
    ],
  },
  {
    id: 'naposobulung',
    nama: 'Naposobulung',
    thumbnail: `${pre}naposo${thumb}`,
    route: ['kegiatan', 'kategorial', 'naposobulung'],
    deskripsi: [
      'Naposobulung HKBP Reformanda merupakan Kategorial di bawah Dewan Koinonia, yang beranggotakan para pemuda HKBP Reformanda yang belum menikah. Kategorial yang singkatnya sering disebut NHKBP ini bertujuan meningkatkan persekutuan dan keimanan anggotanya, serta mengarahkan dan memperkenalkan hidup saling melayani seperti yang diajarkan Sang Juruselamat pada kaum muda gereja. Salah satu acara besar yang pernah dilaksanakan NHKBP Reformanda adalah Konser Charity for Glory pada tahun 2012 silam. NHKBP Reformanda juga menjalin persekutuan dan relasi dengan gereja-gereja HKBP, serta aktif berpartisipasi dalam kegiatan-kegiatan RNHKBP Distrik XVIII Jabartengdiy.',
    ],
  },
  {
    id: 'remaja',
    nama: 'Seksi Remaja',
    thumbnail: `${pre}remaja${thumb}`,
    route: ['kegiatan', 'kategorial', 'remaja'],
    deskripsi: [
      'Kategorial Remaja HKBP Reformanda sebelumnya merupakan sub-kategorial dari Naposobulung di bawah Dewan Koinonia, yang kini memiliki anggota dan kepengurusannya sendiri. Kategorial Remaja anggotanya merupakan mereka yang "baru lulus" dari Sekolah Minggu dan Para Pelajar Sidi. Seksi Remaja akan menjadi wadah transisi bagi muda-mudi gereja sebelum memasuki pelayanan di Naposobulung dan seterusnya. Kategorial Remaja juga memiliki kegiatan rutin sendiri seperti Sermon/PA, namun juga sering bergabung dengan abang dan kakak mereka di Naposobulung.',
    ],
  },
  {
    id: 'sekolah-minggu',
    nama: 'Sekolah Minggu',
    thumbnail: `${pre}sekolah-minggu${thumb}`,
    route: ['kegiatan', 'kategorial', 'sekolah-minggu'],
    deskripsi: [
      'Kategorial Sekolah Minggu di bawah Dewan Koininia tidak hanya beranggotakan Anak-anak Sekolah Minggu, tetapi juga para Guru Sekolah Minggu dan Orangtua. Tujuan Pengajaran di Sekolah Minggu tidak sama dengan tujuan pengajaran agama Kristen di sekolah umum. Jemaat melakukan kegiatan pelayanan Sekolah Minggu bukan sebagai demotifasi masalah tidak adanya Guru Pendidikan Agama Kristen di sekolah. Tujuan utama pelayanan Sekolah Minggu, adalah agar sedini mungkin anak-anak dapat mengenal dan percaya kepada Tuhan Yesus. Pengajaran yang diberikan di Sekolah Minggu akan menjadi bekal kehidupan rohani mereka. Pengajaran anak-anak terima di Sekolah Minggu diharapkan menanamkan iman di hati mereka, sehingga mereka dimampukan mengaku imannya melalui perbuatan dalam hidupnya kelak dan tumbuh menjadi anak-anak yang diberkat dan takut akan Tuhan.',
      'Masa anak-anak merupakan kesempatan yang paling baik dalam fase kehidupan manusia untuk menanamkan etika-etika kehidupan, pendapat tersebut sesuai dengan pepatah orang Batak yang mengatakan, "Ditingki poso do hau boi sihorsihoron, anggo dung matua dang tarpatigor be", yang maksudnya, "Pohon yang tumbuh tidak lurus dapat diluruskan ketika masih kecil, bila pohon sudah terlanjur besar tidak mungkin lagi diluruskan." Demikian halnya dengan manusia, kesempatan yang lebih baik mengajar seseorang menjadi manusia yang percaya kepada Tuhan, adalah pada masa anak-anak. Apabila anak-anak sejak dini terbiasa mengenal Tuhan, kelak setelah dewasa dia menjadi seseorang terus bersekutu dengan Tuhan.',
    ],
  },
];

export interface Kategorial {
  id: string;
  nama: string;
  route: Array<string>;
  thumbnail: string;
  ketua?: string;
  sekretaris?: string;
  bendahara?: string;
  deskripsi?: Array<string>;
}
