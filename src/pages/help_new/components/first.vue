<template>
  <div style="heigth: 100%; position: relative;">
      <div style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; background: rgba(0,0,0,.35);">
      </div>
      <img src="../assets/first.jpg" alt="">
       <router-link :to="{ name: 'qrcode'}">
        <div style="width: 30%; height: 30px; margin-left: -15%; position: absolute; left: 50%; top: 62%; background: rgba(0,0,0, 0);">
            <img src="../assets/click.png" alt="" style="position: absolute; left: 30%; top: 0; width: 135px; height: 135px;">
      </div>
      </router-link>
  </div>
</template>
<script>
export default {
    name: 'first'
}
</script>
