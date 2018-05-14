<template>
  <div style="heigth: 100vh; position: relative;">
      <div style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; background: rgba(0,0,0,.35);">
           <router-link :to="{ name: 'notice'}">
           <img src="../assets/click.png" alt="" style="margin-left: -34px; position: absolute; right: 0; top: 12%; width: 68px; height: 68px;">
           </router-link>
      </div>
      <div style="height: 60px; position: absolute; left: 0; right: 0;top: 0; background: rgba(0,0,0, 0);">
           <!-- <router-link :to="{ name: 'index'}">
            <div style="width: 80px; height: 60px;  position: absolute; left: 0; top: 0; background: rgba(0,0,0, 0);">
                <img src="../assets/click.png" alt="" style="position: absolute; left: 30%; top: 60%; width: 68px; height: 68px;" />
            </div>
           </router-link> -->
             <!-- <router-link :to="{ name: 'notice'}">
            <div style="width: 80px; height: 60px;  position: absolute; right: 0; top: 0; background: rgba(0,0,0, 0);">
                <img src="../assets/click.png" alt="" style="position: absolute; left: 30%; top: 60%; width: 68px; height: 68px;" />
            </div>
           </router-link> -->
      </div>
      <img src="../assets/notice_delete.png" alt="">
  </div>
</template>
<script>
export default {
    name: 'notice_delete'
}
</script>
