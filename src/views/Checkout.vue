<template>
  <div class="checkout">
    <header>
      <div class="container">
        <div class="logo"></div>
        <div class="norton"></div>
      </div>
    </header>

    <section class="content">
      <div class="container">
        <main>
          <ul class="steps">
            <li v-for="(item, i) in 4" :key="i">
              {{ item }}
            </li>
          </ul>

          <h1>Review your order</h1>

          <div class="description">
            <p v-for="i in 15" :key="i" class="skeleton text"></p>
          </div>

          <h3>Preferred payment method</h3>

          <div class="card paypal">
            <p>Pay with PayPal</p>

            <div class="has-logo">
              <div class="logo"></div>
            </div>
          </div>

          <div class="shipments">
            <div class="shipment" v-for="(shipment, i) in 7" :key="i">
              <h3>Shipment {{ shipment }}</h3>

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

        <aside>
          <div class="block">
            <h2>Your order summary</h2>

            <table>
              <tbody>
                <tr>
                  <td>Basket total</td>
                  <td>£XX.XX</td>
                </tr>

                <tr>
                  <td>Delivery</td>
                  <td>£XX.XX</td>
                </tr>

                <tr>
                  <td>VAT</td>
                  <td>£XX.XX</td>
                </tr>

                <tr>
                  <td>Order total</td>
                  <td>£XX.XX</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="block">
            <h2>Secure payment options</h2>

            <div class="has-logos">
              <ul class="logos">
                <li v-for="(item, i) in 7" :key="i"></li>
              </ul>

              <div class="norton"></div>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section class="actions">
      <div class="container">
        <div class="cta">
          <button class="btn">Buy now</button>

          <p>Order total: £48.89</p>
        </div>

        <div class="terms">
          <div class="norton"></div>

          <p>
            By proceeding you agree to the
            <a href="#">Fruugo terms of use &amp; Privacy Policy</a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
:root {
  --fruugo-primary: #24a9fc;
}

header {
  background-color: var(--fruugo-primary);
  padding: 20px;

  .container {
    display: flex;
    justify-content: space-between;
    gap: 25px;
  }
}

section.content {
  padding: 25px;

  .container {
    display: flex;
    align-items: flex-start;
    gap: 20px;

    & > * {
      flex: 1;
    }

    @media only screen and (max-width: 750px) {
      flex-direction: column;
      align-items: initial;
    }
  }
}

main {
  .steps {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 700px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 50px;

    @media only screen and (max-width: 600px) {
      margin-bottom: 20px;
    }

    &:after {
      content: "";
      position: absolute;
      border: 2px dashed #ddd;
      width: 100%;
      z-index: -1;
    }

    li {
      border-radius: 100%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid var(--fruugo-primary);
      background-color: #fff;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        width: 75px;
        height: 10px;
        background-color: #ddd;
        bottom: -30px;

        @media only screen and (max-width: 600px) {
          display: none;
        }
      }
    }
  }

  h1 {
    text-align: center;
    font-size: 26px;
    font-weight: 600;
    padding-bottom: 20px;
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

  .description {
    margin-bottom: 20px;
  }

  .card {
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-radius: 10px;
    flex-direction: column;
    border: 1px solid #707070;
    margin: 20px 0;

    &.paypal {
      background-color: #fcc439;
    }

    .has-logo {
      display: flex;
      justify-content: flex-end;

      .logo {
        width: 80px;
        height: 20px;
        background-color: #ddd;
      }
    }

    h3 {
      font-weight: 500;
      font-size: 18px;
    }
  }

  .shipment {
    h3 {
      padding-bottom: 20px;
      font-size: 18px;
    }

    & > ul {
      display: flex;
      align-items: flex-start;
      gap: 20px;

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
      border-bottom: 1px solid #ddd;
    }
  }
}

aside {
  position: sticky;
  top: 25px;

  @media only screen and (max-width: 750px) {
    position: initial;
  }

  .block {
    background-color: #f8f9fa;
    padding: 30px;

    h2 {
      font-size: 20px;
      font-weight: 600;
      border-bottom: 1px solid #ddd;
      margin-bottom: 20px;
      padding-bottom: 20px;
    }

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    .has-logos {
      padding: 25px;
      background-color: #fff;
      border: 1px solid #ddd;

      .logos {
        display: flex;
        justify-content: center;
        gap: 10px;
        border-bottom: 1px solid #ddd;
        margin-bottom: 20px;
        padding-bottom: 20px;

        li {
          width: 75px;
          height: 30px;
          background-color: #ddd;
        }
      }

      .norton {
        margin: 0 auto;
      }
    }
  }
}

.actions {
  background-color: #f8f8f8;
  position: sticky;
  bottom: 0;
  padding: 20px;
  box-shadow: 0 -3px 8px -2px rgba(0, 0, 0, 20%);
  margin-top: 30px;

  @media only screen and (max-height: 500px) and (orientation: landscape) {
    position: initial;
  }

  .container {
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 750px) {
      flex-direction: column;
    }
  }

  .norton {
    margin-bottom: 15px;

    @media only screen and (max-width: 750px) {
      margin: 15px 0;
    }
  }

  .cta {
    display: flex;
    gap: 20px;
    align-items: center;

    @media only screen and (max-width: 750px) {
      justify-content: space-between;
    }

    p {
      font-size: 20px;
    }
  }
}

.btn {
  background-color: #007f56;
  color: #fff;
  padding: 0.4375rem 1.4375rem;
  font-size: 1.25rem;
  display: inline-block;
  text-transform: uppercase;
  appearance: none;
  border: none;
}

.container {
  width: 100%;
  max-width: 1750px;
  margin: 0 auto;
}

table {
  width: 100%;

  tr {
    td {
      &:last-child {
        text-align: right;
      }
    }
  }
}

ul {
  list-style: none;
}

.logo,
.norton {
  width: 200px;
  height: 50px;
  background-color: #e4e4e4;

  @media only screen and (max-width: 750px) {
    width: 150px;
    height: 30px;
  }
}
</style>