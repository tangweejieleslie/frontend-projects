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

  
    <div class="flex-container">
      <div class="main">
        Main
      </div>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>

<style scoped>
.flex-container{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 100vh;
  
}


.main {
  width: 70%;
  height: 50%;

  background-color: antiquewhite;
}

.nav-box {
  width: 200px;
  height: 200px;
  position: absolute;
  z-index: -1;
}

.upper-left {
  background-color: purple;
  top: 0;
  left: 0;
}

.upper-right {
  background-color: gray;
  top: 0;
  right: 0;
}

.lower-left {
  background-color: purple;
  bottom: 0;
  left: 0;
}

.lower-right {
  background-color: gray;
  bottom: 0;
  right: 0;
}
</style>
