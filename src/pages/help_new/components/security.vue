<template>
  <div style="heigth: 100vh; position: relative;">
      <div style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; background: rgba(0,0,0,.35);">
      </div>
      <div style="height: 60px; position: absolute; left: 0; right: 0;top: 0; background: rgba(0,0,0, 0);">
           <router-link :to="{ name: 'index'}">
            <div style="width: 80px; height: 60px;  position: absolute; left: 0; top: 0; background: rgba(0,0,0, 0);">
                <img src="../assets/click.png" alt="" style="position: absolute; left: 30%; top: 60%; width: 68px; height: 68px;" />
            </div>
           </router-link>
          
      </div>
    <router-link :to="{ name: 'security_add'}">
        <div style="width: 100%; height: 80px; position: absolute;  left: 0; right: 0; bottom: 0; background: rgba(0,0,0, 1); background: rgba(0,0,0, 0);">
            <img src="../assets/click.png" alt="" style="margin-left: -34px; position: absolute; left: 50%; bottom: 34px; width: 68px; height: 68px; transform: rotate(180deg);" />
        </div>
    </router-link>
      <img src="../assets/security.jpg" alt="">
  </div>
</template>
<script>
export default {
    name: 'security'
}
</script>
