<template>
  <div style="heigth: 100vh; position: relative;">
      <!-- <router-link :to="{ name: 'index' }"> -->
        <div style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; background: rgba(0,0,0,.35);">
            <!-- <img src="../assets/click.png" alt="" style="margin-left: -34px; position: absolute; left: 50%; top: 16%; width: 68px; height: 68px;"> -->
        </div>
      <!-- </router-link> -->
      <div style="height: 60px; position: absolute; left: 0; right: 0;top: 0; background: rgba(0,0,0, 0);">
           <!-- <router-link :to="{ name: 'index'}">
            <div style="width: 80px; height: 60px;  position: absolute; left: 0; top: 0; background: rgba(0,0,0, 0);">
                <img src="../assets/click.png" alt="" style="position: absolute; left: 30%; top: 60%; width: 68px; height: 68px;" />
            </div>
           </router-link> -->
             <router-link :to="{ name: 'index'}">
            <div style="width: 80px; height: 60px;  position: absolute; right: 0; top: 0; background: rgba(0,0,0, 0);">
                <img src="../assets/click.png" alt="" style="position: absolute; left: 30%; top: 60%; width: 68px; height: 68px;" />
            </div>
           </router-link>
      </div>
         <div style="height: 400px; position: absolute; left: 0; right: 0;top: 20%; background: rgba(0,0,0, 0);">
           <router-link :to="{ name: 'profile'}">
            <div style="width: 50%; height: 60px;  position: absolute; right: 0; left: 0; top: 0; background: rgba(0,0,0, 0);">
                <!-- <img src="../assets/click.png" alt="" style="position: absolute; left: 30%; top: 60%; width: 68px; height: 68px;" /> -->
            </div>
           </router-link>
             <router-link :to="{ name: 'fixing'}">
            <div style="width: 50%; height: 60px;  position: absolute; right: 0; left: 0; top: 90px; background: rgba(0,0,0, 0);">
                <!-- <img src="../assets/click.png" alt="" style="position: absolute; left: 30%; top: 60%; width: 68px; height: 68px;" /> -->
            </div>
           </router-link>
            <router-link :to="{ name: 'bbs'}">
            <div style="width: 50%; height: 60px;  position: absolute; right: 0; left: 0; top: 160px; background: rgba(0,0,0, 0);">
                <!-- <img src="../assets/click.png" alt="" style="position: absolute; left: 30%; top: 60%; width: 68px; height: 68px;" /> -->
            </div>
           </router-link>
           <router-link :to="{ name: 'share'}">
            <div style="width: 50%; height: 60px;  position: absolute; right: 0; left: 0; top: 270px; background: rgba(0,0,0, 0);">
                <!-- <img src="../assets/click.png" alt="" style="position: absolute; left: 30%; top: 60%; width: 68px; height: 68px;" /> -->
            </div>
           </router-link>
            <router-link :to="{ name: 'set'}">
            <div style="width: 50%; height: 60px;  position: absolute; right: 0; left: 0; bottom: 0; background: rgba(0,0,0, 0);">
                <!-- <img src="../assets/click.png" alt="" style="position: absolute; left: 30%; top: 60%; width: 68px; height: 68px;" /> -->
            </div>
           </router-link>
      </div>
      <img src="../assets/member.png" alt="">
  </div>
</template>
<script>
export default {
    name: 'member'
}
</script>
