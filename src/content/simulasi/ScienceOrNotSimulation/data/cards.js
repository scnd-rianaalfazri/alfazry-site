/**
 * cards.js
 * Sumber data tunggal untuk seluruh kartu aktivitas.
 * Tidak ada logic permainan di sini — murni data.
 */

import { ZONES } from '../constants/gameConfig';

export const CARDS = [
  // ---------- Termasuk Fisika ----------
  {
    id: 'fis-01',
    text: 'Mengukur suhu tubuh',
    category: ZONES.FISIKA,
    explanation: 'Suhu merupakan besaran fisika yang dapat diukur menggunakan termometer.',
  },
  {
    id: 'fis-02',
    text: 'Menghitung kecepatan mobil',
    category: ZONES.FISIKA,
    explanation: 'Kecepatan merupakan besaran fisika turunan dari jarak dan waktu.',
  },
  {
    id: 'fis-03',
    text: 'Mengukur massa batu',
    category: ZONES.FISIKA,
    explanation: 'Massa merupakan besaran pokok dalam Sistem Internasional (SI).',
  },
  {
    id: 'fis-04',
    text: 'Mengamati gerhana Matahari',
    category: ZONES.FISIKA,
    explanation: 'Gerhana Matahari adalah fenomena alam yang dipelajari dalam Fisika (astronomi).',
  },
  {
    id: 'fis-05',
    text: 'Menentukan gaya pada meja',
    category: ZONES.FISIKA,
    explanation: 'Gaya berkaitan langsung dengan Hukum Newton tentang gerak.',
  },
  {
    id: 'fis-06',
    text: 'Mengukur panjang pensil',
    category: ZONES.FISIKA,
    explanation: 'Panjang merupakan besaran pokok yang dapat diukur dengan penggaris.',
  },
  {
    id: 'fis-07',
    text: 'Menghitung percepatan motor',
    category: ZONES.FISIKA,
    explanation: 'Percepatan merupakan konsep dasar dalam kinematika gerak.',
  },
  {
    id: 'fis-08',
    text: 'Mengamati pelangi',
    category: ZONES.FISIKA,
    explanation: 'Pelangi terbentuk dari peristiwa pembiasan dan dispersi cahaya.',
  },
  {
    id: 'fis-09',
    text: 'Menentukan massa jenis air',
    category: ZONES.FISIKA,
    explanation: 'Massa jenis merupakan besaran turunan hasil bagi massa dan volume.',
  },
  {
    id: 'fis-10',
    text: 'Mengukur waktu lari',
    category: ZONES.FISIKA,
    explanation: 'Waktu merupakan besaran pokok yang dapat diukur dengan stopwatch.',
  },

  // ---------- Bukan Fisika ----------
  {
    id: 'non-01',
    text: 'Menentukan warna favorit',
    category: ZONES.BUKAN_FISIKA,
    explanation: 'Warna favorit merupakan preferensi pribadi, bukan hasil pengukuran ilmiah.',
  },
  {
    id: 'non-02',
    text: 'Menebak keberuntungan',
    category: ZONES.BUKAN_FISIKA,
    explanation: 'Keberuntungan tidak dapat diamati, diukur, atau diuji secara ilmiah.',
  },
  {
    id: 'non-03',
    text: 'Memilih makanan terenak',
    category: ZONES.BUKAN_FISIKA,
    explanation: 'Rasa makanan bersifat subjektif dan berbeda bagi setiap orang.',
  },
  {
    id: 'non-04',
    text: 'Menentukan zodiak',
    category: ZONES.BUKAN_FISIKA,
    explanation: 'Zodiak tidak memiliki dasar pengukuran ilmiah dalam Fisika.',
  },
  {
    id: 'non-05',
    text: 'Memilih lagu favorit',
    category: ZONES.BUKAN_FISIKA,
    explanation: 'Selera musik bersifat subjektif, bukan gejala alam yang diukur.',
  },
  {
    id: 'non-06',
    text: 'Menilai film paling seru',
    category: ZONES.BUKAN_FISIKA,
    explanation: 'Penilaian terhadap film merupakan pendapat pribadi, bukan kajian ilmiah.',
  },
  {
    id: 'non-07',
    text: 'Menebak jodoh',
    category: ZONES.BUKAN_FISIKA,
    explanation: 'Menebak jodoh tidak dapat diuji atau dijelaskan secara ilmiah.',
  },
  {
    id: 'non-08',
    text: 'Memilih warna cat terbaik',
    category: ZONES.BUKAN_FISIKA,
    explanation: 'Pemilihan warna cat terbaik bersifat subjektif, bergantung selera.',
  },
  {
    id: 'non-09',
    text: 'Menentukan nama bayi',
    category: ZONES.BUKAN_FISIKA,
    explanation: 'Penamaan bayi bukan merupakan fenomena yang dipelajari Fisika.',
  },
  {
    id: 'non-10',
    text: 'Menebak karakter seseorang',
    category: ZONES.BUKAN_FISIKA,
    explanation: 'Menilai karakter seseorang berada di luar ruang lingkup kajian Fisika.',
  },
];
