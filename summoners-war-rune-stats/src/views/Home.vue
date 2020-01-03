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

console.log(mappings);  

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
  // console.log(rune_array);
  return rune_array;
}

const all_runes = get_all_runes();

function organize_runes(runes){
  
  let runes_array = {};
  const rune_map = mappings.rune;
  
  // initialize each rune set with an empty array
  for(var key in rune_map.sets){
    runes_array[key] = [];
  }
  
  let i = 0;
  for(i=0;i<runes.length;i++){
    let setid = runes[i].set_id;
    runes_array[setid].push(runes[i]); 
  }
  // console.log(runes_array);
  return runes_array;
}

let runes_by_set = organize_runes(all_runes);
console.log(runes_by_set);



export default {
  name: 'home',
  components: {
    
  }
}
</script>
