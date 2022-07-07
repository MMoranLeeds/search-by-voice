<template>
  <div class="home">
    <form action="">
      <labeL> Label here </labeL>
      <input type="text" />
    </form>
    <div class="container">
      <div class="imagery">
        <img
          src="https://sell.fruugo.com/img/home/img2-a.png"
          class="top"
          alt=""
        />

        <img
          src="https://sell.fruugo.com/img/home/img2-b.png"
          class="bottom"
          alt=""
        />

        <div class="main-img">
          <div class="actions"></div>
          
          <img src="../assets/browser.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  gap: 10px;
  padding: 10px;
  min-height: 100vh;

  & > * {
    flex: 1;
  }
}
.container {
  background: #eef4ff;
  padding: 20px;
  border: 1px solid #dddddd;
  border-radius: 30px;
  display: flex;
  align-items: center;
  position: relative;
}

.imagery {
  position: absolute;
  right: 0;

  & > img {
    position: absolute;
    z-index: 99;

    &.top {
      top: -30%;
      right: 10%;
    }

    &.bottom {
      top: 50%;
      left: 10%;
    }
  }
}

.main-img {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 100px;
  border-radius: 10px;

  img {
    max-width: 100%;
    border: 1px solid #dddddd;
  }

  &:before {
    content: "";
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(238, 244, 255, 1) 100%
    );
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    position: absolute;
  }

  &:after {
    content: "";
    width: 100%;
    position: absolute;
    left: 0;
    top: -40px;
    background-color: #f8f8f8;
    height: 40px;
    border: 1px solid #dddddd;
    border-top-left-radius: inherit;
  }

  .actions{
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    
    box-shadow: 120px    0px 0  15px #f00,
				-60px  104px 0   0px #0f0,
				-60px -104px 0 -15px #00f;
  }
}
</style>
