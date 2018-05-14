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
           <router-link :to="{ name: 'trajectory_date'}">
            <div style="width: 80px; height: 60px; margin-left: -40px; position: absolute; left: 50%; top: 0; background: rgba(0,0,0, 0);;">
                <img src="../assets/click.png" alt="" style="position: absolute; left: 30%; top: 60%; width: 68px; height: 68px;" />
            </div>
           </router-link>
             <router-link :to="{ name: 'trajectory_mode'}">
            <div style="width: 80px; height: 60px; position: absolute; right: 0; top: 0; background: rgba(0,0,0, 0);">
                 <img src="../assets/click.png" alt="" style="position: absolute; left: 10%; top: 60%; width: 68px; height: 68px;" />
            </div>
           </router-link>
      </div>
    <router-link :to="{ name: 'trajectory_more'}">
        <div style="width: 80px; height: 80px; position: absolute;  right: 0;bottom: 0; background: rgba(0,0,0, 1); background: rgba(0,0,0, 0);">
            <img src="../assets/click.png" alt="" style="position: absolute; left: 0; top: -50%; width: 68px; height: 68px; transform: rotate(180deg);" />
        </div>
    </router-link>
      <img src="../assets/trajectory.jpg" alt="">
  </div>
</template>
<script>
export default {
    name: 'trajectory'
}
</script>
