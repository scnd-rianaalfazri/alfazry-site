import { text } from "framer-motion/client";

const geraklurusberaturan = {
  title: "Gerak Lurus Beraturan",
  slug: "gerak-lurus-beraturan",
  description: "Memahami konsep gerak lurus beraturan (GLB), ciri-ciri utama, persamaan matematika, analisis grafik v-t & s-t, serta penerapannya.",
  chapter: "↔️↕️ Kinematika: Gerak Satu Dimensi",

  content: [
    {
      heading: "🚗 Gerak dengan Kecepatan Tetap",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Tidak semua benda yang bergerak mengalami perubahan kecepatan (akselerasi/pengereman).",
            "Bayangkan kamu naik mobil di jalan tol lurus yang sepi dengan mengaktifkan fitur *cruise control* pada $80\\text{ km/jam}$. Jarum speedometer akan terus berada di angka yang sama!",
            "Dalam fisika, gerak lintasan lurus dengan kecepatan yang konstan ini disebut **Gerak Lurus Beraturan (GLB)**."
          ]
        },
      ]
    },

    {
      heading: "📍 Apa Itu GLB?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Gerak Lurus Beraturan (GLB) adalah gerak suatu benda pada lintasan lurus dengan kecepatan yang selalu konstan (tetap) dari waktu ke waktu.",
            "Konsekuensinya, benda menempuh jarak yang sama untuk setiap selang waktu yang sama."
          ]
        }
      ]
    },

    {
      heading: "✨ Ciri-Ciri Utama GLB",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sebuah gerakan dikategorikan sebagai GLB jika memenuhi syarat-syarat berikut:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Lintasan lurus**",
                description: "Arah gerak tidak berubah-ubah."
              },
              {
                text: "**Kecepatan konstan $(v = tetap/konstan)$**",
                description: "Besarnya kecepatan maupun arahnya tidak bertambah atau berkurang."
              },
              {
                text: "**Percepatan nol $(a = 0)$**",
                description: "Karena kecepatannya tidak berubah, maka tidak ada percepatan sama sekali."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "📐 Formulasi Matematika (Rumus GLB)",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Hubungan antara posisi/jarak, kecepatan, dan waktu pada GLB dirumuskan secara sederhana:",
            "$s = v \\times t$",
            "Atau jika memperhitungkan posisi awal ($s_0$):",
            "$s(t) = s_0 + (v \\times t)$",
            "Keterangan:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "$s$ = Posisi / Jarak tempuh (m)"
              },
              {
                text: "$s_0$ = Posisi awal (m)"
              },
              {
                text: "$v$ = Kecepatan (m/s)"
              },
              {
                text: "$t$ = Waktu (s)"
              }
            ]
          }
        }
      ]
    },

    {
      heading: "📊 Analisis Grafik GLB",
      blocks: [
        {
          type: "paragraph",
          text: [
            "GLB memiliki dua bentuk grafik dasar yang sering keluar di soal-soal fisika:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Grafik Kecepatan terhadap Waktu ($v - t$)**",
                description: [
                  "Berupa garis lurus horizontal mendatar.",
                  "Luas daerah di bawah grafik $v - t$ merepresentasikan **jarak tempuh ($s$)**."
                ]
              },
              {
                text: "**Grafik Posisi terhadap Waktu ($s - t$)**",
                description: [
                  "Berupa garis miring miring ke atas linear.",
                  "Kemiringan (gradien) garis menunjukkan nilai **kecepatan ($v$)**.",
                ]
              }
            ]
          }
        }
      ]
    },
    {
      heading: "✍️ Contoh Soal & Pembahasan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "**Soal:**",
            "Sebuah kereta cepat bergerak lurus dengan kecepatan konstan $72\\text{ km/jam}$. Hitunglah jarak yang ditempuh kereta tersebut dalam waktu $10\\text{ detik}$!",
            "**Pembahasan & Konversi Satuan:**"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Kecepatan ($v$) = $72\\text{ km/jam} = \\frac{72.000\\text{ m}}{3.600\\text{ s}} = 20\\text{ m/s}$"
              },
              {
                text: "Waktu ($t$) = $10\\text{ s}$"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "**Jawab:**",
            "$s = v \\times t = 20\\text{ m/s} \\times 10\\text{ s} = 200\\text{ meter}$",     
            "**Kesimpulan:**",
            "Dalam waktu $10\\text{ detik}$, kereta telah menempuh jarak sejauh $200\\text{ meter}$."
          ] 
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi Populer",
      blocks: [
        {
          type: "paragraph",
          text: [
            "*'Benda yang kecepatannya besar pasti memiliki percepatan yang besar juga.'*❌",
            "Namun faktanya, Pada GLB mau seberapa pun besarnya kecepatan suatu benda (misalnya $1.000\\text{ km/jam}$), jika nilainya tetap konstan, maka percepatannya adalah **NOL** ($a = 0$). ✔️"
          ]
        }
      ]
    },

    {
      heading: "🌟 Contoh Nyata GLB di Dunia Nyata",
      blocks: [
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "🚆 Kereta maglev saat melaju stabil di lintasan lurus lurus."
              },
              {
                text: "🏭 Barang yang berjalan di atas sistem pita konveyor (*conveyor belt*) pabrik."
              },
              {
                text: "🚀 Pesawat luar angkasa di ruang hampa udara saat mesinnya dimatikan (mempertahankan kecepatan konstan sesuai Hukum I Newton)."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "✨  Inti Materi *(Takeaway Message)*",
      blocks: [
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "GLB adalah gerak lintasan lurus dengan kecepatan konstan."
              },
              {
                text: "Pada GLB, percepatan selalu bernilai nol ($a = 0$)"
              },
              {
                text: "Persamaan utama GLB: $s = v \\times t$."
              }
            ]
          }
        }
      ]
    },

    {
      heading: "🚀 Next Mission",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Bagaimana jika suatu benda bergerak lurus tetapi kecepatannya berubah secara teratur karena ada percepatan tetap?",
            "➡️ Next, menuju portal: **[Gerak Lurus Berubah Beraturan (GLBB).](/materi/gerak-lurus-berubah-beraturan)**"
          ]
        }
      ]
    }
  ]
};

export default geraklurusberaturan;