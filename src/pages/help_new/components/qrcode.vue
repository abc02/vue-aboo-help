<template>
  <div style="heigth: 100%; position: relative;">
        <router-link :to="{ name: 'bind'}">
      <div style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; background: rgba(0,0,0,.35);">
      </div>
      <img src="../assets/qrcode.jpg" alt="">
      <img src="../assets/arrow.png" alt="" style="position: absolute; right: 10%; top: 10%; width: 70px; height: 77px;">
      <div style="position: absolute; right: 0; left: 0; top: 20%; color: red; text-align: center">
          直接扫描二维码或者相册选择设备二维码
      </div>
      </router-link>
  </div>
</template>
<script>
export default {
    name: 'qrcode'
}
</script>
