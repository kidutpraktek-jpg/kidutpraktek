/**
 * Data materi edukasi jaringan komputer
 */

export interface MateriItem {
  id: string;
  title: string;
  content: string;
  summary?: string;
}

export const MATERI_DATA: MateriItem[] = [
  {
    id: "pengertian",
    title: "1. Pengertian Jaringan Komputer",
    content: `Jaringan komputer adalah sekumpulan komputer dan perangkat lain (seperti printer, scanner, dll) yang saling terhubung satu sama lain melalui media transmisi kabel atau nirkabel (wireless). 
    
    Tujuan dari adanya jaringan ini adalah agar perangkat-perangkat tersebut dapat berkomunikasi, berbagi data, dan berbagi sumber daya (resources). Bayangkan seperti sebuah sistem saraf dalam tubuh manusia yang mengirimkan sinyal informasi ke berbagai bagian tubuh.`,
  },
  {
    id: "manfaat",
    title: "2. Tujuan dan Manfaat",
    content: `Jaringan komputer diciptakan untuk mempermudah pekerjaan kita. Beberapa manfaat utamanya adalah:
    
    *   **Berbagi Sumber Daya (Resource Sharing):** Menggunakan satu printer untuk banyak komputer.
    *   **Komunikasi:** Memungkinkan pengiriman pesan, video call, dan email.
    *   **Keamanan Data:** Data tersimpan lebih aman dan terpusat (server).
    *   **Efisiensi Biaya:** Mengurangi kebutuhan perangkat fisik di setiap komputer.
    *   **Akses Informasi:** Memudahkan kita mengakses data dari tempat yang berbeda.`,
  },
  {
    id: "jenis",
    title: "3. Jenis-jenis Jaringan",
    content: `Berdasarkan cakupan geografisnya (jarak), jaringan terbagi menjadi:

    *   **LAN (Local Area Network):** Jaringan skala kecil, biasanya dalam satu gedung, rumah, atau sekolah. Contoh: Laboratorium komputer sekolah.
    *   **MAN (Metropolitan Area Network):** Jaringan yang mencakup satu kota atau gabungan beberapa gedung. Jangkauannya 10-50 km. Contoh: Jaringan bank antar cabang dalam satu kota.
    *   **WAN (Wide Area Network):** Jaringan skala sangat besar, mencakup negara hingga benua. Contoh: Internet adalah contoh WAN terbesar.`,
  },
  {
    id: "topologi",
    title: "4. Topologi Jaringan",
    content: `Topologi adalah cara atau teknik menghubungkan komputer dalam jaringan.
    
    *   **Bus:** Menggunakan satu kabel utama (backbone). 
        *   Keuntungan: Hemat kabel, sederhana. 
        *   Kekurangan: Jika kabel utama putus, semua mati.
    *   **Star (Bintang):** Semua komputer terhubung ke satu pusat (Switch/Hub). 
        *   Keuntungan: Paling populer, paling mudah dikelola, jika satu mati yang lain tetap hidup.
        *   Kekurangan: Tergantung pada perangkat pusat.
    *   **Ring (Cincin):** Terhubung melingkar seperti cincin. 
        *   Keuntungan: Aliran data searah.
        *   Kekurangan: Sulit dikonfigurasi ulang.
    *   **Mesh:** Setiap komputer terhubung ke semua komputer lain. 
        *   Keuntungan: Sangat tangguh/aman (banyak jalur).
        *   Kekurangan: Paling boros kabel dan mahal.`,
  },
  {
    id: "perangkat",
    title: "5. Perangkat Jaringan",
    content: `Perangkat keras yang sering digunakan dalam jaringan:
    
    *   **Router:** Perangkat 'pintar' yang menghubungkan dua jaringan berbeda (misal LAN ke Internet).
    *   **Switch:** Menghubungkan banyak komputer dalam satu LAN dan mengirimkan data hanya ke komputer yang dituju.
    *   **Hub:** Mirip switch tapi 'kurang pintar' karena mengirim data ke SEMUA komputer yang terhubung.
    *   **Modem:** Mengubah sinyal analog menjadi digital agar kita bisa internetan.
    *   **Access Point:** Memancarkan sinyal Wi-Fi.
    *   **Kabel UTP & RJ45:** Media kabel yang paling sering digunakan untuk LAN.`,
  },
  {
    id: "ip-address",
    title: "6. IP Address",
    content: `IP Address adalah alamat identitas unik setiap komputer dalam jaringan (seperti alamat rumah).
    
    *   **IPv4:** Terdiri dari 4 blok angka (contoh: 192.168.1.1). Paling banyak digunakan.
    *   **IPv6:** Standar baru dengan format lebih panjang (contoh: 2001:0db8...). Dibuat karena stok IPv4 makin habis.
    *   **Kelas IP (IPv4):** Kelas A (besar), Kelas B (menengah), Kelas C (kecil/lokal).
    *   **IP Public vs Private:** IP Public digunakan untuk internet, IP Private hanya di dalam jaringan lokal.`,
  },
  {
    id: "subnetting",
    title: "7. Subnetting Dasar",
    content: `Subnetting adalah teknik membagi satu jaringan besar menjadi beberapa jaringan yang lebih kecil (sub-jaringan).
    
    Tujuannya adalah:
    1.  Meningkatkan efisiensi alamat IP agar tidak terbuang.
    2.  Mengurangi kemacetan data (traffic).
    3.  Meningkatkan keamanan antar bagian kantor/sekolah.`,
  },
  {
    id: "protokol",
    title: "8. Protokol Jaringan",
    content: `Protokol adalah aturan-aturan agar komputer bisa berkomunikasi dengan bahasa yang sama.
    
    *   **TCP/IP:** Protokol dasar internet untuk pengiriman data.
    *   **HTTP/HTTPS:** Protokol untuk membuka website (HTTPS lebih aman/terenkripsi).
    *   **FTP:** Protokol khusus untuk mengirim/mentransfer file.
    *   **DNS:** Mengubah nama website (google.com) menjadi IP Address agar dimengerti komputer.`,
  },
  {
    id: "osi-layer",
    title: "9. Model OSI 7 Layer",
    content: `Standard internasional komunikasi data yang dibagi menjadi 7 lapisan:
    
    1.  **Physical:** Media fisik (kabel).
    2.  **Data Link:** Pengalamatan fisik (MAC Address).
    3.  **Network:** Penentuan jalur (Routing, IP Address).
    4.  **Transport:** Pengiriman data (TCP/UDP).
    5.  **Session:** Mengatur sesi komunikasi.
    6.  **Presentation:** Format data (JPEG, MP3, Enkripsi).
    7.  **Application:** Antarmuka dengan pengguna (Browser, Email).`,
  },
  {
    id: "keamanan",
    title: "10. Keamanan Jaringan Dasar",
    content: `Melindungi data dari akses ilegal.
    
    *   **Ancaman:** Virus, Malware, Phishing (pencurian data), atau Hacker.
    *   **Pencegahan:** 
        1. Gunakan Firewall.
        2. Update Software secara rutin.
        3. Gunakan Password yang rumit.
        4. Enkripsi data sensitif.`,
  },
];
