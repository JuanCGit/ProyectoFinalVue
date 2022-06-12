<template>
    <div class="containerHorario container-fluid">
      <!-- Realizado por Lucas Ezequiel Gyori con la colaboración de Juan Casanova Gago -->
      <h1 class="my-5">Nuestras <span class="mainColor">Clases</span></h1>
      <img :src="tema == 'oscuro' ? require('@/assets/modoOscuro.png') : require('@/assets/modoClaro.png')" alt="tema" class="colorIcon">
      <div class="form-switch text-center">
        <input class="form-check-input alternarModo mb-3 mt-1" @click="[tema == 'oscuro' ? tema='claro' : tema='oscuro']" type="checkbox" checked>
      </div>
      
      <div class="table-responsive">
        <table class="table mb-3" :class="[tema == 'oscuro' ? 'temaOscuro' : 'temaClaro']" id="horario">
          <!--THEAD-->
          <tr>
            <th>Hora</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Sábado</th>
            <th>Domingo</th>
          </tr>
          <!--TBODY-->
          <tr>
            <th>9:30</th>
            <td rowspan="2">Spinning</td>
            <td>Aquagym</td>
            <td>Zumba</td>
            <td>GAP</td>
            <td>Yoga</td>
            <td>Crossfit</td>
            <td>Body pump</td>
          </tr>
          <tr>
            <th>10:25</th>
            <td>Crossfit</td>
            <td>Aerostep</td>
            <td>Yoga</td>
            <td>Body pump</td>
            <td>Intensivo</td>
            <td>GAP</td>
          </tr>
          <tr>
            <th>11:20</th>
            <td>Aerostep</td>
            <td>Intensivo</td>
            <td>Body pump</td>
            <td>Aquagym</td>
            <td rowspan="2">Kickboxing</td>
            <td>GAP</td>
            <td>Yoga</td>
          </tr>
          <tr>
            <th>12:15</th>
            <td>Aquagym</td>
            <td>Body pump</td>
            <td>Intensivo</td>
            <td>Crossfit</td>
            <td>Aquagym</td>
            <td>GAP</td>
          </tr>
          <tr>
            <th>13:10</th>
            <td>GAP</td>
            <td>Kickboxing</td>
            <td>Spinning</td>
            <td>GAP</td>
            <td>Yoga</td>
            <td>Zumba</td>
            <td>Crossfit</td>
          </tr>
          <tr class="text-center">
            <td colspan="8" id="descanso">DESCANSO</td>
          </tr>
          <tr>
            <td colspan="8" id="descanso2"><small>14:05 - 16:00</small></td>
          </tr>
          
          <tr>
            <th>16:00</th>
            <td>GAP</td>
            <td>Spinning</td>
            <td rowspan="2">GAP</td>
            <td>Zumba</td>
            <td>Aerostep</td>
            <td>Kickboxing</td>
            <td>Yoga</td>
          </tr>
          <tr>
            <th>16:55</th>
            <td rowspan="2">Yoga</td>
            <td>Kickboxing</td>
            <td>Crossfit</td>
            <td rowspan="2">Aquagym</td>
            <td>Zumba</td>
            <td>GAP</td>
          </tr>
          <tr>
            <th>17:50</th>
            <td>Crossfit</td>
            <td>Aquagym</td>
            <td>Body pump</td>
            <td rowspan="2">Body pump</td>
            <td rowspan="2">Zumba</td>
          </tr>
          <tr>
            <th>18:45</th>
            <td>Spinning</td>
            <td rowspan="2">Aerostep</td>
            <td>Yoga</td>
            <td>Kickboxing</td>
            <td>Crossfit</td>
          </tr>
          <tr>
            <th>19:40</th>
            <td>Crossfit</td>
            <td>Crossfit</td>
            <td>GAP</td>
            <td>Aquagym</td>
            <td>Intensivo</td>
            <td>Yoga</td>
          </tr>
        
        </table>
      </div>

      <div v-if="tema=='oscuro'" class="btn rounded-pill imprimirOsc" @click="imprimir">Descargar tabla oscura</div>
      <div v-else class="btn btn-warning rounded-pill imprimirCla" @click="imprimir">Descargar tabla clara</div>
    </div>
</template>


<script>
    import html2pdf from 'html2pdf.js';
    export default {
      name: 'Horario-Vue',
      data() {
          return {
              tema: "oscuro"
          }
      },
      methods: {
        imprimir() {
          let element = document.getElementById('horario');
          html2pdf(element);
        }
      }
    }
</script>


<style scoped lang="scss">
    .containerHorario {
        margin: 25px 0 65px 0;
    }
    /*TABLE*/
    .imprimirOsc {
      background-color: rgb(58, 51, 53);
      color: rgb(245, 222, 179);
      width: 200px;
    }
    .imprimirCla {
      color: rgb(58, 51, 53);
      background-color: rgb(245, 222, 179);
      width: 200px;
    }
    .temaOscuro {
        text-align: center;
        border-collapse: collapse;
        background-color: rgb(58, 51, 53);
        /*TH*/
        tr th {
            color: rgb(207, 8, 108);
            border: 2px solid;
            border-color: rgb(207, 8, 108);
        }
        /*TR*/
        tr {
            color: rgb(161, 24, 6);
        }

        /*TD*/
        tr td:hover {
            color: rgb(58, 51, 53);
            background-color: rgb(245, 222, 179);
        }

        td[rowspan="2"] {
            vertical-align: middle;
        }
        tr td {
            border: 1px solid;
            border-color: black;
        }

        /*IDS*/
        #descanso {
            color: rgb(58, 51, 53);
            background-color: rgb(161, 24, 6);
            font-weight: bold;
        }
        #descanso2 {
            color: rgb(58, 51, 53);
            background-color: rgb(161, 24, 6);
            font-weight: bold;
        }
    }
    .temaClaro {
        text-align: center;
        border-collapse: collapse;
        background-color: rgb(245, 222, 179);
        
        /*TH*/
        tr th {
            color: rgb(207, 8, 108);
            border: 2px solid;
            border-color: rgb(207, 8, 108);
        }
        /*TR*/
        tr {
            color: rgb(161, 24, 6);
        }

        /*TD*/
        tr td:hover {
            color: rgb(245, 222, 179);
            background-color: rgb(58, 51, 53);
        }

        td[rowspan="2"] {
            vertical-align: middle;
        }
        tr td {
            border: 1px solid;
            border-color: black;
        }

        /*IDS*/
        #descanso {
            color: rgb(245, 222, 179);
            background-color: rgb(161, 24, 6);
            font-weight: bold;
        }
        #descanso2 {
            color: rgb(245, 222, 179);
            background-color: rgb(161, 24, 6);
            font-weight: bold;
        }
    }
    img {
      width: 20px;
      height: auto;
    }
</style>