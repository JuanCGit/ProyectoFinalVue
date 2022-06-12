<template>
  <div class="home containerTeacher">
    <h1 class="mb-5">Nuestros <span class="mainColor">Profesores</span></h1>
    <div class="row gx-0 flex-row">
        <div class="col"></div>
        <div class="col d-flex justify-content-center align-items-center">
          <div class="menuItem" @click="activityType = 'r'" :class="[activityType == 'r' ? 'isActive' : '']">
            <img src="@/assets/running.png" alt="">
            <h2>Running</h2>
          </div>
        </div>
        <div class="col d-flex justify-content-center align-items-center">
          <div class="menuItem" @click="activityType = 'c'" :class="[activityType == 'c' ? 'isActive' : '']">
            <img src="@/assets/calistenia.png" alt="">
            <h2>Calistenia</h2>
          </div>
        </div>
        <div class="col d-flex justify-content-center align-items-center">
          <div class="menuItem" @click="activityType = 's'" :class="[activityType == 's' ? 'isActive' : '']">
            <img src="@/assets/spinning.png" alt="">
            <h2>Spinning</h2>
          </div>
        </div>
        <div class="col"></div>
      <div class="noTeacher mt-5" v-if="activityType==''">
        <img src="@/assets/PickTeacher.svg">
        <h5 class="mt-3">Tienes que seleccionar una categoría.</h5>
      </div>
      <div class="teachersContainer mt-5">
        <div class="running" v-if="activityType == 'r'">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mt-3 mb-5 d-flex justify-content-center">              
            <div v-for="teacher in runningTeacher" v-bind:key="teacher.index" class="col">
              <teacher :name="teacher.name" :bio="teacher.bio" :img="teacher.img"/>  
            </div>
          </div>
        </div>  
        <div class="calistenia" v-if="activityType == 'c'">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mt-3 mb-5 d-flex justify-content-center">              
            <div v-for="teacher in calisteniaTeacher" v-bind:key="teacher.index" class="col">
              <teacher :name="teacher.name" :bio="teacher.bio" :img="teacher.img"/>  
            </div>
          </div>
        </div>  
        <div class="spinning" v-if="activityType == 's'">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mt-3 mb-5 d-flex justify-content-center">              
            <div v-for="teacher in spinningTeacher" v-bind:key="teacher.index" class="col">
              <teacher :name="teacher.name" :bio="teacher.bio" :img="teacher.img"/>  
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
import Teacher from '@/components/Teacher.vue'
export default {
  name: 'Teachers-Vue',
  data() {
    return {
        runningTeacher : [
          {name: "Cecilio Castell", bio: "Cecilio Castell Lorem ipsum dolor consectetur adipisicing elit. Dicta, eum! Hic, totam perspiciatis vero, ipsa facere odit recusandae molestiae optio excepturi distinctio odio. Possimus eos magnam ducimus omnis laborum eligendi quos. Similique iste magnam, quod nulla voluptates recusandae aut numquam excepturi ipsam cumque, reprehenderit enim impedit quos necessitatibus. Perferendis enim repellat iure velit doloremque temporibus nesciunt molestias assumenda cum, delectus libero nemo ratione amet incidunt? Animi earum ex nostrum quo odio! Aliquam perspiciatis veritatis pariatur voluptas quos libero fuga tenetur delectus quam iste eum facilis nam, fugiat rem, non expedita obcaecati ex. Fuga commodi officiis quo aut laudantium maxime officia quia quam in obcaecati ad perferendis explicabo atque tempora minima ducimus consequuntur placeat, earum laborum blanditiis iure tenetur hic deleniti? Harum perspiciatis sunt nisi dicta pariatur eveniet! Tenetur modi fugiat quisquam quis iure eveniet at dolore a? Aliquam at non nemo, quae optio, modi, ab suscipit nam sint voluptatem veritatis?", img: "CecilioCastell.png"},
          {name: "Esther García", bio: "Esther Garcia Lorem ipsum dolor consectetur adipisicing elit. Dicta, eum! Hic, totam perspiciatis vero, ipsa facere odit recusandae molestiae optio excepturi distinctio odio. Possimus eos magnam ducimus omnis laborum eligendi quos. Similique iste magnam, quod nulla voluptates recusandae aut numquam excepturi ipsam cumque, reprehenderit enim impedit quos necessitatibus. Perferendis enim repellat iure velit doloremque temporibus nesciunt molestias assumenda cum, delectus libero nemo ratione amet incidunt? Animi earum ex nostrum quo odio! Aliquam perspiciatis veritatis pariatur voluptas quos libero fuga tenetur delectus quam iste eum facilis nam, fugiat rem, non expedita obcaecati ex. Fuga commodi officiis quo aut laudantium maxime officia quia quam in obcaecati ad perferendis explicabo atque tempora minima ducimus consequuntur placeat, earum laborum blanditiis iure tenetur hic deleniti? Harum perspiciatis sunt nisi dicta pariatur eveniet! Tenetur modi fugiat quisquam quis iure eveniet at dolore a? Aliquam at non nemo, quae optio, modi, ab suscipit nam sint voluptatem veritatis?", img: "EstherGarcia.png"},
          {name: "Morad Casal", bio: "Morad Casal Lorem ipsum dolor consectetur adipisicing elit. Dicta, eum! Hic, totam perspiciatis vero, ipsa facere odit recusandae molestiae optio excepturi distinctio odio. Possimus eos magnam ducimus omnis laborum eligendi quos. Similique iste magnam, quod nulla voluptates recusandae aut numquam excepturi ipsam cumque, reprehenderit enim impedit quos necessitatibus. Perferendis enim repellat iure velit doloremque temporibus nesciunt molestias assumenda cum, delectus libero nemo ratione amet incidunt? Animi earum ex nostrum quo odio! Aliquam perspiciatis veritatis pariatur voluptas quos libero fuga tenetur delectus quam iste eum facilis nam, fugiat rem, non expedita obcaecati ex. Fuga commodi officiis quo aut laudantium maxime officia quia quam in obcaecati ad perferendis explicabo atque tempora minima ducimus consequuntur placeat, earum laborum blanditiis iure tenetur hic deleniti? Harum perspiciatis sunt nisi dicta pariatur eveniet! Tenetur modi fugiat quisquam quis iure eveniet at dolore a? Aliquam at non nemo, quae optio, modi, ab suscipit nam sint voluptatem veritatis?", img: "MoradCasal.png"}
        ],
        spinningTeacher : [
          {name: "Alba Fabregas", bio: "Alba Lorem ipsum dolor consectetur adipisicing elit. Dicta, eum! Hic, totam perspiciatis vero, ipsa facere odit recusandae molestiae optio excepturi distinctio odio. Possimus eos magnam ducimus omnis laborum eligendi quos. Similique iste magnam, quod nulla voluptates recusandae aut numquam excepturi ipsam cumque, reprehenderit enim impedit quos necessitatibus. Perferendis enim repellat iure velit doloremque temporibus nesciunt molestias assumenda cum, delectus libero nemo ratione amet incidunt? Animi earum ex nostrum quo odio! Aliquam perspiciatis veritatis pariatur voluptas quos libero fuga tenetur delectus quam iste eum facilis nam, fugiat rem, non expedita obcaecati ex. Fuga commodi officiis quo aut laudantium maxime officia quia quam in obcaecati ad perferendis explicabo atque tempora minima ducimus consequuntur placeat, earum laborum blanditiis iure tenetur hic deleniti? Harum perspiciatis sunt nisi dicta pariatur eveniet! Tenetur modi fugiat quisquam quis iure eveniet at dolore a? Aliquam at non nemo, quae optio, modi, ab suscipit nam sint voluptatem veritatis?", img: "AlbaFabregas.png"},
          {name: "Álvaro Raga", bio: "Álvaro Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, eum! Hic, totam perspiciatis vero, ipsa facere odit recusandae molestiae optio excepturi distinctio odio. Possimus eos magnam ducimus omnis laborum eligendi quos. Similique iste magnam, quod nulla voluptates recusandae aut numquam excepturi ipsam cumque, reprehenderit enim impedit quos necessitatibus. Perferendis enim repellat iure velit doloremque temporibus nesciunt molestias assumenda cum, delectus libero nemo ratione amet incidunt? Animi earum ex nostrum quo odio! Aliquam perspiciatis veritatis pariatur voluptas quos libero fuga tenetur delectus quam iste eum facilis nam, fugiat rem, non expedita obcaecati ex. Fuga commodi officiis quo aut laudantium maxime officia quia quam in obcaecati ad perferendis explicabo atque tempora minima ducimus consequuntur placeat, earum laborum blanditiis iure tenetur hic deleniti? Harum perspiciatis sunt nisi dicta pariatur eveniet! Tenetur modi fugiat quisquam quis iure eveniet at dolore a? Aliquam at non nemo, quae optio, modi, ab suscipit nam sint voluptatem veritatis?", img: "AlvaroPizcueta.png"},
          {name: "Claudia Pastor", bio: "Claudia Pastor Lorem ipsum dolor consectetur adipisicing elit. Dicta, eum! Hic, totam perspiciatis vero, ipsa facere odit recusandae molestiae optio excepturi distinctio odio. Possimus eos magnam ducimus omnis laborum eligendi quos. Similique iste magnam, quod nulla voluptates recusandae aut numquam excepturi ipsam cumque, reprehenderit enim impedit quos necessitatibus. Perferendis enim repellat iure velit doloremque temporibus nesciunt molestias assumenda cum, delectus libero nemo ratione amet incidunt? Animi earum ex nostrum quo odio! Aliquam perspiciatis veritatis pariatur voluptas quos libero fuga tenetur delectus quam iste eum facilis nam, fugiat rem, non expedita obcaecati ex. Fuga commodi officiis quo aut laudantium maxime officia quia quam in obcaecati ad perferendis explicabo atque tempora minima ducimus consequuntur placeat, earum laborum blanditiis iure tenetur hic deleniti? Harum perspiciatis sunt nisi dicta pariatur eveniet! Tenetur modi fugiat quisquam quis iure eveniet at dolore a? Aliquam at non nemo, quae optio, modi, ab suscipit nam sint voluptatem veritatis?", img: "ClaudiaPastor.png"},
          {name: "Loida Heras", bio: "Loida Heras Lorem ipsum dolor consectetur adipisicing elit. Dicta, eum! Hic, totam perspiciatis vero, ipsa facere odit recusandae molestiae optio excepturi distinctio odio. Possimus eos magnam ducimus omnis laborum eligendi quos. Similique iste magnam, quod nulla voluptates recusandae aut numquam excepturi ipsam cumque, reprehenderit enim impedit quos necessitatibus. Perferendis enim repellat iure velit doloremque temporibus nesciunt molestias assumenda cum, delectus libero nemo ratione amet incidunt? Animi earum ex nostrum quo odio! Aliquam perspiciatis veritatis pariatur voluptas quos libero fuga tenetur delectus quam iste eum facilis nam, fugiat rem, non expedita obcaecati ex. Fuga commodi officiis quo aut laudantium maxime officia quia quam in obcaecati ad perferendis explicabo atque tempora minima ducimus consequuntur placeat, earum laborum blanditiis iure tenetur hic deleniti? Harum perspiciatis sunt nisi dicta pariatur eveniet! Tenetur modi fugiat quisquam quis iure eveniet at dolore a? Aliquam at non nemo, quae optio, modi, ab suscipit nam sint voluptatem veritatis?", img: "LoidaHeras.png"}
        ],
        calisteniaTeacher : [
          {name: "Alberto Mataix", bio: "Alberto Moraira Lorem ipsum dolor consectetur adipisicing elit. Dicta, eum! Hic, totam perspiciatis vero, ipsa facere odit recusandae molestiae optio excepturi distinctio odio. Possimus eos magnam ducimus omnis laborum eligendi quos. Similique iste magnam, quod nulla voluptates recusandae aut numquam excepturi ipsam cumque, reprehenderit enim impedit quos necessitatibus. Perferendis enim repellat iure velit doloremque temporibus nesciunt molestias assumenda cum, delectus libero nemo ratione amet incidunt? Animi earum ex nostrum quo odio! Aliquam perspiciatis veritatis pariatur voluptas quos libero fuga tenetur delectus quam iste eum facilis nam, fugiat rem, non expedita obcaecati ex. Fuga commodi officiis quo aut laudantium maxime officia quia quam in obcaecati ad perferendis explicabo atque tempora minima ducimus consequuntur placeat, earum laborum blanditiis iure tenetur hic deleniti? Harum perspiciatis sunt nisi dicta pariatur eveniet! Tenetur modi fugiat quisquam quis iure eveniet at dolore a? Aliquam at non nemo, quae optio, modi, ab suscipit nam sint voluptatem veritatis?", img: "AlbertoMoraira.png"},
          {name: "Alex Martinez", bio: "Alex Martinez Lorem ipsum dolor consectetur adipisicing elit. Dicta, eum! Hic, totam perspiciatis vero, ipsa facere odit recusandae molestiae optio excepturi distinctio odio. Possimus eos magnam ducimus omnis laborum eligendi quos. Similique iste magnam, quod nulla voluptates recusandae aut numquam excepturi ipsam cumque, reprehenderit enim impedit quos necessitatibus. Perferendis enim repellat iure velit doloremque temporibus nesciunt molestias assumenda cum, delectus libero nemo ratione amet incidunt? Animi earum ex nostrum quo odio! Aliquam perspiciatis veritatis pariatur voluptas quos libero fuga tenetur delectus quam iste eum facilis nam, fugiat rem, non expedita obcaecati ex. Fuga commodi officiis quo aut laudantium maxime officia quia quam in obcaecati ad perferendis explicabo atque tempora minima ducimus consequuntur placeat, earum laborum blanditiis iure tenetur hic deleniti? Harum perspiciatis sunt nisi dicta pariatur eveniet! Tenetur modi fugiat quisquam quis iure eveniet at dolore a? Aliquam at non nemo, quae optio, modi, ab suscipit nam sint voluptatem veritatis?", img: "AlexMartinez.png"},
          {name: "Ana Boueles", bio: "Ana Boueles Lorem ipsum dolor consectetur adipisicing elit. Dicta, eum! Hic, totam perspiciatis vero, ipsa facere odit recusandae molestiae optio excepturi distinctio odio. Possimus eos magnam ducimus omnis laborum eligendi quos. Similique iste magnam, quod nulla voluptates recusandae aut numquam excepturi ipsam cumque, reprehenderit enim impedit quos necessitatibus. Perferendis enim repellat iure velit doloremque temporibus nesciunt molestias assumenda cum, delectus libero nemo ratione amet incidunt? Animi earum ex nostrum quo odio! Aliquam perspiciatis veritatis pariatur voluptas quos libero fuga tenetur delectus quam iste eum facilis nam, fugiat rem, non expedita obcaecati ex. Fuga commodi officiis quo aut laudantium maxime officia quia quam in obcaecati ad perferendis explicabo atque tempora minima ducimus consequuntur placeat, earum laborum blanditiis iure tenetur hic deleniti? Harum perspiciatis sunt nisi dicta pariatur eveniet! Tenetur modi fugiat quisquam quis iure eveniet at dolore a? Aliquam at non nemo, quae optio, modi, ab suscipit nam sint voluptatem veritatis?", img: "AnaBoueles.png"},
          {name: "Lidia Henares", bio: "Lidia Henares Lorem ipsum dolor consectetur adipisicing elit. Dicta, eum! Hic, totam perspiciatis vero, ipsa facere odit recusandae molestiae optio excepturi distinctio odio. Possimus eos magnam ducimus omnis laborum eligendi quos. Similique iste magnam, quod nulla voluptates recusandae aut numquam excepturi ipsam cumque, reprehenderit enim impedit quos necessitatibus. Perferendis enim repellat iure velit doloremque temporibus nesciunt molestias assumenda cum, delectus libero nemo ratione amet incidunt? Animi earum ex nostrum quo odio! Aliquam perspiciatis veritatis pariatur voluptas quos libero fuga tenetur delectus quam iste eum facilis nam, fugiat rem, non expedita obcaecati ex. Fuga commodi officiis quo aut laudantium maxime officia quia quam in obcaecati ad perferendis explicabo atque tempora minima ducimus consequuntur placeat, earum laborum blanditiis iure tenetur hic deleniti? Harum perspiciatis sunt nisi dicta pariatur eveniet! Tenetur modi fugiat quisquam quis iure eveniet at dolore a? Aliquam at non nemo, quae optio, modi, ab suscipit nam sint voluptatem veritatis?", img: "LidiaHenares.png"},
          {name: "Marcos Morell", bio: "Marcos Morell Lorem ipsum dolor consectetur adipisicing elit. Dicta, eum! Hic, totam perspiciatis vero, ipsa facere odit recusandae molestiae optio excepturi distinctio odio. Possimus eos magnam ducimus omnis laborum eligendi quos. Similique iste magnam, quod nulla voluptates recusandae aut numquam excepturi ipsam cumque, reprehenderit enim impedit quos necessitatibus. Perferendis enim repellat iure velit doloremque temporibus nesciunt molestias assumenda cum, delectus libero nemo ratione amet incidunt? Animi earum ex nostrum quo odio! Aliquam perspiciatis veritatis pariatur voluptas quos libero fuga tenetur delectus quam iste eum facilis nam, fugiat rem, non expedita obcaecati ex. Fuga commodi officiis quo aut laudantium maxime officia quia quam in obcaecati ad perferendis explicabo atque tempora minima ducimus consequuntur placeat, earum laborum blanditiis iure tenetur hic deleniti? Harum perspiciatis sunt nisi dicta pariatur eveniet! Tenetur modi fugiat quisquam quis iure eveniet at dolore a? Aliquam at non nemo, quae optio, modi, ab suscipit nam sint voluptatem veritatis?", img: "MarcosMorell.png"},
          {name: "Paquito Salas", bio: "Paquito Salas Lorem ipsum dolor consectetur adipisicing elit. Dicta, eum! Hic, totam perspiciatis vero, ipsa facere odit recusandae molestiae optio excepturi distinctio odio. Possimus eos magnam ducimus omnis laborum eligendi quos. Similique iste magnam, quod nulla voluptates recusandae aut numquam excepturi ipsam cumque, reprehenderit enim impedit quos necessitatibus. Perferendis enim repellat iure velit doloremque temporibus nesciunt molestias assumenda cum, delectus libero nemo ratione amet incidunt? Animi earum ex nostrum quo odio! Aliquam perspiciatis veritatis pariatur voluptas quos libero fuga tenetur delectus quam iste eum facilis nam, fugiat rem, non expedita obcaecati ex. Fuga commodi officiis quo aut laudantium maxime officia quia quam in obcaecati ad perferendis explicabo atque tempora minima ducimus consequuntur placeat, earum laborum blanditiis iure tenetur hic deleniti? Harum perspiciatis sunt nisi dicta pariatur eveniet! Tenetur modi fugiat quisquam quis iure eveniet at dolore a? Aliquam at non nemo, quae optio, modi, ab suscipit nam sint voluptatem veritatis?", img: "PaquitoSalas.png"}
        ],
        activityType: ""
    }
  },
  components: {
    Teacher
  }
}
</script>

<style scoped lang="scss">
.teachersContainer{
  padding: 0 65px 0 40px;
}
.noTeacher {
  margin-top: 50px;
  opacity: 80%;
  img {
    width: 300px;
  }
}
img {
  width: 100px;
}
.menuItem {
  cursor: pointer;
  opacity: 50%;
  &:hover{
    opacity: 100%;
  }
}
.isActive {
  opacity: 100% !important;
}
.containerTeacher {
  margin: 100px 0 100px 0;
}
</style>