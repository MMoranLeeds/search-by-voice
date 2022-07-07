<template>
  <div class="shipping-options">
    <header>
      <div class="logo"></div>
      <div class="norton"></div>
      <div class="basket"></div>
    </header>

    <main>
      <div v-for="(item, i) in 3" :key="i" class="shipping-option">
        <h2>Shipment {{ item }}</h2>
        <label :for="`shipment` + item">
          Choose a delivery option for items in <b>Shipment {{ item }}</b>
        </label>
        <select :name="`shipment` + item" :id="`shipment` + item">
          <option v-for="(item, i) in 7" :key="i">
            Shiping option {{ item }}
          </option>
        </select>
        <div class="shipment" v-for="(shipment, i) in 4" :key="i">
          <ul>
            <li></li>
            <li>
              <p class="skeleton text" v-for="(text, i) in 10" :key="i"></p>
            </li>
            <li>
              <p class="skeleton text" v-for="(text, i) in 3" :key="i"></p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export default class ShippingOptions extends Vue {}
</script>

<style lang="scss">
:root {
  --fruugo-primary: #24a9fc;
}

header {
  background-color: var(--fruugo-primary);
  padding: 30px;
  display: flex;
  justify-content: space-between;
  gap: 25px;
}

.logo,
.norton,
.basket {
  width: 200px;
  height: 50px;
  background-color: #e4e4e4;

  @media only screen and (max-width: 750px) {
    width: 150px;
    height: 30px;
  }
}

main {
  padding: 30px;

  .shipping-option {
    h2 {
      margin-bottom: 15px;
    }

    &:not(:last-child) {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #ddd;
    }

    label {
      display: block;
      margin-bottom: 15px;
    }

    select {
      display: block;
      width: 100%;
      height: calc(1.5em + 0.875rem + 2px);
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      vertical-align: middle;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      padding: 0.4375rem 1.75rem 0.4375rem 0.75rem;
      margin-bottom: 20px;
    }
  }
}

.skeleton {
  background-color: #ddd;

  &.text {
    width: 100%;
    max-width: 200px;
    height: 10px;

    &:nth-of-type(2n + 3) {
      width: 75%;
      max-width: 400px;
    }

    &:not(:last-of-type) {
      margin-bottom: 10px;
    }
  }
}

.shipment {
  & > ul {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    list-style: none;

    li {
      &:nth-of-type(1) {
        width: 125px;
        height: 125px;
        background-color: #f8f8f8;
      }

      &:nth-of-type(2) {
        flex: 1;
      }

      &:nth-of-type(3) {
        max-width: 200px;
      }
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px dashed #ddd;
  }
}
</style>
