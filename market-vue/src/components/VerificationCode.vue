<template>
  <div class="reg-container">
    <canvas id="code" ref="code" width="80px" height="40px" style="border: 1px solid #ccc"></canvas>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data() {
      return {

      }
    },
    mounted() {
      var canvas = document.querySelector('#code');
      var vueObj = this;
      canvas.addEventListener('click', function() {
        ctx.clearRect(0, 0, 80, 40)
        verCode = ""
        
        // 绘制线
        for (var i = 0; i <lineNum; i++) {
          ctx.beginPath();
          ctx.moveTo(getRandom(canvasW), getRandom(canvasH));
          ctx.lineTo(getRandom(canvasW), getRandom(canvasH));
          ctx.strokeStyle = getColor();
          ctx.closePath();
          ctx.stroke();
        }

        // 绘制点
        for (var i = 0; i< arcNum; i++) {
          ctx.beginPath();
          ctx.arc(getRandom(canvasW), getRandom(canvasH), 1, 0, 2*Math.PI);
          ctx.fillStyle = getColor();
          ctx.closePath();
          ctx.fill();
        }

        // 绘制验证码
        var codeTxt = "ABCDEFGHIJKLIMNOPQRSTUVWSYZ1234567890";
        for (var i = 0; i < 4; i++) {
          var txt = codeTxt.split("")[getRandom(codeTxt.length)];
          verCode = verCode + txt;
          ctx.beginPath();
          ctx.font="23px 微软雅黑";
          ctx.fillStyle = getColor();
          ctx.fillText(txt, 20*i, 25);
          ctx.closePath();
        }

        // 将 txt 传递给父组件
        vueObj.$emit('verCode', verCode)
      })

      var canvasW = canvas.width;
      var canvasH = canvas.height;

      // 获取任意区间的随机数
      var getRandom = function(maxNum) {
        return Math.floor(Math.random() * maxNum);
      }

      // 随机颜色
      var getColor = function() {
        var red = getRandom(256);
        var green = getRandom(256);
        var blue = getRandom(256);
        return "rgb(" + [red, green, blue].join(',') + ")"
      }
      var ctx = canvas.getContext("2d");
      var lineNum = 3;
      var arcNum = 20;

      // 绘制线
      for (var i = 0; i <lineNum; i++) {
        ctx.beginPath();
        ctx.moveTo(getRandom(canvasW), getRandom(canvasH));
        ctx.lineTo(getRandom(canvasW), getRandom(canvasH));
        ctx.strokeStyle = getColor();
        ctx.closePath();
        ctx.stroke();
      }

      // 绘制点
      for (var i = 0; i< arcNum; i++) {
        ctx.beginPath();
        ctx.arc(getRandom(canvasW), getRandom(canvasH), 1, 0, 2*Math.PI);
        ctx.fillStyle = getColor();
        ctx.closePath();
        ctx.fill();
      }

      // 绘制验证码
      var codeTxt = "ABCDEFGHIJKLIMNOPQRSTUVWSYZ1234567890";
      var verCode = "";
      for (var i = 0; i < 4; i++) {
        var txt = codeTxt.split("")[getRandom(codeTxt.length)];
        verCode = verCode + txt;
        ctx.beginPath();
        ctx.font="23px 微软雅黑";
        ctx.fillStyle = getColor();
        ctx.fillText(txt, 20*i, 25);
        ctx.closePath();
      }

      // 将 txt 传递给父组件
      vueObj.$emit('verCode', verCode)
    }
  }
</script>

<style scoped>

</style>