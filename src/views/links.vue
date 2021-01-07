<template>
  <div>
      <span v-for="link in links_urls" :key="link.id">
        <span class="col-md-2">
                  <b-button target="_blank" :href="link.link" variant="secondary">{{link.name}}</b-button>
        </span>
      </span>
  </div>
</template>

<script>
export default {
  name: "links",
  data(){
    return {
      links_urls:
          [
            {name:'vk',link:'https://vk.com/gevg05'},
            {name:'steam',link:'https://steamcommunity.com/id/rmc1/'},
            {name:'osu',link:'https://osu.ppy.sh/users/10667224'},
            {name:'yougame',link:'https://yougame.biz/members/111252/'}
          ]
    }
  },
}
</script>

<style scoped>

</style>