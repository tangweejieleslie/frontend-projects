<template>
  <div class="home">
    <h1>SW Stats</h1>
  </div>
</template>

<script>
import rawdata from '@/rawdata.json'
import mappings from '@/mappings.js'

// console.log(rawdata.runes);
// console.log(rawdata.unit_list); //unit list is an array of object

console.log(rawdata.unit_list[0].runes);  

function get_all_runes(){
  // Get list of rune data from inventory
  let rune_array = Array.from(rawdata.runes);
  // console.log("hi", rune_array);
  
  // Get list of rune data from monsters
  let i = 0, j = 0;
  for(i= 0; i < rawdata.unit_list.length; i++ ){
    for(j = 0; j < rawdata.unit_list[i].runes.length; j++){
      rune_array.push(rawdata.unit_list[i].runes[j])
    }
    
  }
  console.log(rune_array);
}

get_all_runes();

export default {
  name: 'home',
  components: {
    
  }
}
</script>
