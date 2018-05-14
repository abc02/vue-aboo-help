<template>
  <div style="heigth: 100vh; position: relative;">
      <div style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; background: rgba(0,0,0,.35);">
      </div>
      <img src="../assets/index.png" alt="">
      <div style="height: 60px; position: absolute; left: 0; right: 0;top: 0; background: rgba(0,0,0, 0);">
           <router-link :to="{ name: 'member'}">
            <div style="width: 80px; height: 60px;  position: absolute; left: 0; top: 0; background: rgba(0,0,0, 0);">
                <img src="../assets/click.png" alt="" style="position: absolute; left: 30%; top: 60%; width: 68px; height: 68px;" />
            </div>
           </router-link>
             <router-link :to="{ name: 'notice'}">
            <div style="width: 80px; height: 60px;  position: absolute; right: 0; top: 0; background: rgba(0,0,0, 0);">
                <img src="../assets/click.png" alt="" style="position: absolute; left: 30%; top: 60%; width: 68px; height: 68px;" />
            </div>
           </router-link>
      </div>
       <router-link :to="{ name: 'qrcode'}">
        <div style="width: 30%; height: 50px; margin-left: -15%; position: absolute; left: 60%; top: 67%; background: rgba(0,0,0, 0);">
            <img src="../assets/click.png" alt="" style="position: absolute; left: 30%; top: 30%; width: 68px; height: 68px;">
      </div>
      </router-link>
      <div style="height: 180px; position: absolute; left: 0; right: 0;bottom: 0; background: rgba(0,0,0, 0);">
          <router-link :to="{ name: 'trajectory'}">
            <div style="width: 100%; height: 60px; background: rgba(0,0,0, 0);"></div>
           </router-link>
          <router-link :to="{ name: 'security'}">
            <div style="width: 80%; height: 60px; background: rgba(0,0,0, 0);"></div>
           </router-link>
           <router-link :to="{ name: 'welfare'}">
            <div style="width: 80%; height: 60px; background: rgba(0,0,0, 0);"></div>
           </router-link>
            <router-link :to="{ name: 'chat'}">
            <div style="width: 60px; height: 80px; position: absolute; right: 0;bottom: 0; background: rgba(0,0,0, 0);"></div>
           </router-link>
      </div>
  </div>
</template>
<script>
export default {
    name: 'index'
}
</script>
