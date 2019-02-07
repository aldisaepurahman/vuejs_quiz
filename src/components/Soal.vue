<template lang="html">
  <div class="">
    <h1>Latihan Soal</h1>
    <h2>Nilai Anda : {{ nilai }}</h2>
    <h3 v-if="nilai < 70">Ayo Semangat!!</h3>
    <h3 v-else>Kamu Lulus!!</h3><br>
    <div v-for="(item, index) in pertanyaan" :key="index">
      <p>{{ item.no }}. {{ item.text }}</p>
      <ul>
        <li v-for="(answer, indeks) in item.answers" :key="indeks">
          <input type="radio" :value="answer[0]" :name="item.no" @click="check(index, indeks)" /> {{ answer[0] }}
        </li>
      </ul>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Soal',
  data() {
    return {
      nilai: 0,
      rightAnswers: [],
      wrongAnswers: [],
      pertanyaan: [
        {
          no: 1,
          text: 'Siapakah Presiden Indonesia Keenam?',
          answers: [
            ['B.J Habibie'],
            ['Joko Widodo'],
            ['Prabowo'],
            ['Susilo Bambang Yudhoyono', true]
          ]
        },
        {
          no: 2,
          text: '2 x 5 - (8-3) =',
          answers: [
            ['4'],
            ['5', true],
            ['6'],
            ['7']
          ]
        },
        {
          no: 3,
          text: 'Lahirnya Pancasila Pada Tanggal',
          answers: [
            ['1 Juni', true],
            ['1 Agustus'],
            ['1 Oktober'],
            ['1 Januari']
          ]
        },
        {
          no: 4,
          text: 'Teknologi Sepakbola Yang Digunakan Untuk Mengecek Bola Melewati Garis Gawang Adalah',
          answers: [
            ['VAR'],
            ['Third Referee'],
            ['Birds Eye'],
            ['GLT', true]
          ]
        },
        {
          no: 5,
          text: 'Pemain Termahal Dunia Saat Ini Yaitu',
          answers: [
            ['Todd Ferre'],
            ['Neymar', true],
            ['Herman Dzumafo'],
            ['Paul Pogba']
          ]
        },
        {
          no: 6,
          text: 'Bila y = 2x dan 2x + 3y = 16, Maka Nilai y Adalah',
          answers: [
            ['4', true],
            ['5'],
            ['2'],
            ['8']
          ]
        },
        {
          no: 7,
          text: 'Istilah Modern Formasi Sepakbola Tentang Posisi Dua Pemain Gelandang Bertahan Adalah',
          answers: [
            ['Pivot'],
            ['Deep-Playing Midfield'],
            ['Double Pivot', true],
            ['Portiere']
          ]
        },
        {
          no: 8,
          text: 'Sebelum Modric, Pemain Terakhir Yang Menerima Ballon Dor Sebelum Dominasi Messi-Ronaldo Adalah',
          answers: [
            ['Kaka', true],
            ['Raul Gonzalez'],
            ['Gianluigi Buffon'],
            ['Ronaldinho']
          ]
        },
        {
          no: 9,
          text: 'Sebelum Menjadi Pelatih, Diego Simeone Merupakan Seorang Pesepakbola Yang Malang Melintang Di Klub Eropa. Berikut Adalah Tim Yang Pernah Dibela Simeone Semasa Menjadi Pemain, Kecuali',
          answers: [
            ['Inter Milan'],
            ['Chelsea', true],
            ['Atletico Madrid'],
            ['Lazio']
          ]
        },
        {
          no: 10,
          text: 'Bila y = 4x/2 dan 5x - y = 6, Berapakah Nilai 3x + ((2y)x - 3)?',
          answers: [
            ['14'],
            ['18'],
            ['22'],
            ['19', true]
          ]
        },
      ]
    }
  },
  methods: {
    AddNilai() {
      this.nilai += 10
    },
    check(index, indeks) {
      if (this.pertanyaan[index].answers[indeks][1]) {
        if (this.rightAnswers.indexOf(index) == -1) {
          this.rightAnswers.push(index);
        }
        if (this.wrongAnswers.indexOf(index) != -1) {
          this.wrongAnswers.splice(this.wrongAnswers.indexOf(index), 1);
        }
      }else {
        if (this.rightAnswers.indexOf(index) != -1) {
          this.rightAnswers.splice(this.rightAnswers.indexOf(index), 1);
          this.wrongAnswers.push(index);
        }else {
          this.wrongAnswers.push(index);
        }
      }

      this.nilai = this.rightAnswers.length * 10;
    }
  }
}
</script>

<style lang="css" scoped>
ul li{
  list-style-type: none;
}
</style>
