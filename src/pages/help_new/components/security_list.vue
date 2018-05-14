<template>
  <div style="heigth: 100vh; position: relative;">
      <div style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; background: rgba(0,0,0,.35);">
      </div>
      <div style="height: 60px; position: absolute; left: 0; right: 0;top: 0; background: rgba(0,0,0, 0);">
           <router-link :to="{ name: 'index'}">
            <div style="width: 80px; height: 60px;  position: absolute; left: 0; top: 0; background: rgba(0,0,0, 0);">
                <!-- <img src="../assets/click.png" alt="" style="position: absolute; left: 30%; top: 60%; width: 68px; height: 68px;" /> -->
            </div>
           </router-link>
          
      </div>
    <router-link :to="{ name: 'security_delete'}">
    <div style="height: 60px;position: absolute; right: 0; left: 0; top: 20%; background: rgba(0,0,0, 0);">
        <img src="../assets/silder_left.png" alt="" style="margin-left: -34px; position: absolute; left: 50%; top: 50%; width: 68px; height: 68px;" />
    </div>
    </router-link>          
      <img src="../assets/security_list.jpg" alt="">
  </div>
</template>
<script>
export default {
    name: 'security_list'
}
</script>
