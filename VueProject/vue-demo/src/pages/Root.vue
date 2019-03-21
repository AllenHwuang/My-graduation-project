<template>
  <div>
    <div style="">
      <el-row>
        <div>
          <Header></Header>
        </div>
      </el-row>
    </div>
    <div class="rootMain">
      <transition  name="slide-fade">
        <router-view></router-view>
      </transition>
    </div>
    <div v-show="footerShow">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import Header from '../components/common/Header';
  import Footer from '../components/common/Footer';
  export default {
    name: "Root",
    data(){
      return{
        footerShow: true,
      }
    },
    components: {
      Header, Footer,
    },
    watch: {
      '$route'(val, old) {
        console.log(val.path)
        var valMatch1 = val.path.match('/profile')
        var valMatch2 = val.path.match('/service')
        console.log(valMatch1);
        console.log(valMatch2);
        if(valMatch1 != null)
        {
          this.footerShow = false;
        }
        if(valMatch1 == null)
        {
          this.footerShow = true
        }
      }
    }
  }
</script>

<style scoped>
  .rootMain1{
    height: 685px;
  }
  .rootMain{

  }
  .galleryDiv{
    position: fixed;
    margin: 80px 0 auto 0;
  }
  .routerViewDiv{
    /* background-image: url(./assets/background.JPG); */
  }
  .slide-fade{
    position: absolute;left:0;right: 0;
  }
  .slide-fade-enter-active {
    transition: all 1.2s ease;
  }
  .slide-fade-leave-active {

    transition: all 1.2s cubic-bezier(2.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  {
    left:0;right: 0;
    transform: translateX(50px);
    opacity: 0;
  }
</style>
