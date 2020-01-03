<template>
  <div class="home">
    <h1>SW Stats</h1>
  </div>
</template>

<script>
import rawdata from "@/rawdata.json";
import mappings from "@/mappings.js";

// console.log(rawdata.runes);
// console.log(rawdata.unit_list); //unit list is an array of object

console.log(mappings);

function get_all_runes() {
  // Get list of rune data from inventory
  let rune_array = Array.from(rawdata.runes);
  // console.log("hi", rune_array);

  // Get list of rune data from monsters
  let i = 0,
    j = 0;
  for (i = 0; i < rawdata.unit_list.length; i++) {
    for (j = 0; j < rawdata.unit_list[i].runes.length; j++) {
      rune_array.push(rawdata.unit_list[i].runes[j]);
    }
  }
  // console.log(rune_array);
  return rune_array;
}


function organize_runes(runes) {
  let runes_array = {};
  const rune_map = mappings.rune;

  // initialize each rune set with an empty array
  for (var key in rune_map.sets) {
    runes_array[key] = [];
  }

  let i = 0;
  for (i = 0; i < runes.length; i++) {
    let setid = runes[i].set_id;
    runes_array[setid].push(runes[i]);
  }
  // console.log(runes_array);
  return runes_array;
}


// add an "overall_stat" property to each rune for easy computation
function add_rune_stats(runes) {
  let i = 0;
  for (i = 0; i < runes.length; i++) {
    let primary_stat = runes[i].pri_eff;
    let secondary_stat = runes[i].prefix_eff;
    let remaining_stats = runes[i].sec_eff;
    let overall_stat = [];
    overall_stat[primary_stat[0]] = primary_stat[1]; 
    overall_stat[secondary_stat[0]] = secondary_stat[1]; 

    let j = 0;
    for(j=0;j<remaining_stats.length; j++){
      let temp_stat = remaining_stats[j];
      overall_stat[temp_stat[0]] = temp_stat[1] + temp_stat[3]; // 1: value, 3: grinded value if any
    }

    runes[i].all_stats = overall_stat;
  }
  return runes;
}


function main(){
  const all_runes = get_all_runes();
  add_rune_stats(all_runes)
  let runes_by_set = organize_runes(all_runes);
  console.log(runes_by_set);
}


main();

export default {
  name: "home",
  components: {}
};
</script>
