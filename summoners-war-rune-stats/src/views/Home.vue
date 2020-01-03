<template>
  <div class="home">
    <h1>SW Stats</h1>
    <h2>Swift Runes. Slot 1</h2>
    <div v-for="rune in swiftRunes[1]" v-bind:key="rune.rune_id">
      {{ rune.all_stats }}
    </div>
  </div>
</template>

<script>
import rawdata from "@/rawdata.json";
import mappings from "@/mappings.js";

var fs = require('fs');

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
  const rune_set = rune_map.sets;
  const rune_stat_id = rune_map.effectTypes;

  // initialize each rune set with an empty array
  for (var key in rune_map.sets) {
    runes_array[key] = [[],[],[],[],[],[],[]];
  }

  let i = 0;
  for (i = 0; i < runes.length; i++) {
    let setid = runes[i].set_id;
    let slot = runes[i].slot_no;
    runes_array[setid][slot].push(runes[i]);
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

function get_essential_data(runes){
  const rune_map = mappings.rune;
  const rune_set = rune_map.sets;
  const rune_stat_id = rune_map.effectTypes;

  let essential_data = [], i = 0;

  for(i=0;i<runes.length;i++){
    let temp_rune = {};
    let rune = runes[i];
    temp_rune.rune_set = rune_set[rune.set_id];  
    let j = 0;
    temp_rune.level = rune.upgrade_curr;
    temp_rune.rank = rune.rank;
    temp_rune.class = rune.class;
    temp_rune.slot_no = rune.slot_no;

    for(j = 1; j < rune.all_stats.length; j++){
        temp_rune[rune_stat_id[j]] = rune.all_stats[j];
    }
    essential_data.push(temp_rune);
  }

  // fs. writeFile("file.json", essential_data);
  console.log(essential_data[0]);
  return essential_data;
}


let ALLRUNES;

function main(){
  const all_runes = get_all_runes();
  add_rune_stats(all_runes);
  get_essential_data(all_runes);
  let runes_by_set = organize_runes(all_runes);
  console.log(runes_by_set[1][1][1]);  
  ALLRUNES = runes_by_set;
}


main();

export default {
  name: "home",
  components: {},
data: function () {
    return {
      swiftRunes: ALLRUNES[3]
    }
  },
};
</script>
