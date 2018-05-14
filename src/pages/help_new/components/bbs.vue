<template>
  <div style="heigth: 100vh; position: relative;">
      <router-link :to="{ name: 'bbs_content' }">
        <div style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; background: rgba(0,0,0,.35);">
            <img src="../assets/click.png" alt="" style="margin-left: -68px; position: absolute; left: 50%; top: 45%; width: 135px; height: 135px;">
        </div>
      </router-link>
      <div style="height: 60px; position: absolute; left: 0; right: 0;top: 0; background: rgba(0,0,0, 0);">
           <!-- <router-link :to="{ name: 'index'}">
            <div style="width: 80px; height: 60px;  position: absolute; left: 0; top: 0; background: rgba(0,0,0, 0);">
                <img src="../assets/click.png" alt="" style="position: absolute; left: 30%; top: 60%; width: 68px; height: 68px;" />
            </div>
           </router-link> -->
             <router-link :to="{ name: 'member'}">
            <div style="width: 80px; height: 60px;  position: absolute; right: 0; top: 0; background: rgba(0,0,0, 0);">
                <img src="../assets/click.png" alt="" style="position: absolute; left: 30%; top: 60%; width: 68px; height: 68px;" />
            </div>
           </router-link>
      </div>
      <img src="../assets/bbs.png" alt="">
  </div>
</template>
<script>
export default {
    name: 'bbs'
}
</script>
