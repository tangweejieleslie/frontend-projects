<template>
  <div>
    <div class="upper-left nav-box">
      container 1
    </div>

    <div class="upper-right nav-box">
      container 1
    </div>
    <div class="lower-left nav-box">
      container 1
    </div>

    <div class="lower-right nav-box">
      container 1
    </div>


      <ul class="main-nav">
        <li v-for="item in items" v-bind:key="item.id" class="selected"> 
          {{ item }}
        </li>
      </ul>


      <div class="main">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, impedit facilis doloribus ducimus reprehenderit repudiandae sit, eos accusantium temporibus soluta numquam quasi unde nisi quaerat officiis suscipit quos iure rem.
      </div>


  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  data(){
    return{
      items: ["Pasir Ris", "Tampines", "Simei", "Tanah Merah", "Bedok", "Kembangan", "Eunos", "Paya Lebar", "Macpherson", "Bugis", "Lavendar"]
    }
  }
};
</script>

<style scoped>
.selected{
  opacity: 0.99;
}
.main-nav{
  position: absolute;
  left: 600px;
  font-size: 50px;
  z-index: -1;
}

li{
  list-style: none;
}

.flex-container{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 100vh;
  
}


.main {
  height: 480px;
  width: 960px;
  
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -240px;
  margin-left: -480px;
  background-color: antiquewhite;
  z-index: 1;
}

.nav-box {
  width: 200px;
  height: 200px;
  position: absolute;
  z-index: -1;
}

.upper-left {
  /* background-color: purple; */
  top: 0;
  left: 0;
}

.upper-right {
  /* background-color: gray; */
  top: 0;
  right: 0;
}

.lower-left {
  /* background-color: purple; */
  bottom: 0;
  left: 0;
}

.lower-right {
  /* background-color: gray; */
  bottom: 0;
  right: 0;
}
</style>
