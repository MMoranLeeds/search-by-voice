<template>
  <div class="marketplace-navigation">
    <header>
      <div class="has-site-search">
        <div class="site-search">
          <button class="header-cta-button menu-button">
            <span class="material-symbols-rounded notranslate"> menu </span>
          </button>
          <a href="#" class="home">
            <svg
              class="logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 66 32"
            >
              <path
                fill="#fff"
                d="M41.35 16.38c0 2.3-.87 5.33-4.75 5.33s-4.75-3.03-4.75-5.33v-6.34h2.73v6.73c0 .87.24 1.83 1.02 2.3.26.16.58.25.97.26h.03c.4 0 .73-.1 1-.26.77-.47 1.01-1.43 1.01-2.3v-6.73h2.74v6.34zm-11.06 0c0 2.3-.87 5.33-4.75 5.33s-4.75-3.03-4.75-5.33v-4c-.6-.23-1.1-.42-2.02-.42-1.77 0-3.14 1.6-3.14 3.22v6.59h-2.95V10.04h2.64v2.04l.23-.5c.69-1.5 2.38-2.6 5.43-1.54h2.54v6.73c0 .88.25 1.83 1.02 2.3.26.16.58.25.97.26h.03c.4 0 .73-.1 1-.26.77-.47 1.02-1.42 1.02-2.3v-6.73h2.73v6.34zM13.86 3.62l-1.04 2.14a5.08 5.08 0 0 0-3.21-.62c-1.53.4-1.87 1.45-1.87 3.05v1.85h3.39v2.32h-3.4v9.4H4.8v-9.4h-2v-2.32h2V7.61c0-2.28 1.06-4.69 3.97-5.14a7.1 7.1 0 0 1 5.1 1.15zM66 16.28v-1.04c0-3.48-1.94-8.01-7.3-8.01-1.34 0-2.58.39-3.39.81a4.68 4.68 0 0 0-2.56-.68c-.9 0-1.82.26-2.39.6a6.22 6.22 0 0 0-3.01-.73c-2.17 0-3.56.78-4.18 1.37-.06-.23-.39-.73-1.2-.73H22.02a7.3 7.3 0 0 0-3.35-.78c-1.28 0-2.4.3-3.35.78l-.34.18c-.27.13-.62-.18-.5-.43l2.15-4.06c.27-.51.17-.89-.42-1.38A11.3 11.3 0 0 0 8.37.1C3.75.81 2.4 4.4 2.4 7.61v.26H.72c-.52 0-.72.26-.72.8v5.23c0 .56.22.74.72.74H2.4v8.33c0 .8.38 1.27 1.19 1.27h5.3c.76 0 1.13-.4 1.3-.93.2.52.52.93 1.3.93h5.26c.8 0 1.3-.47 1.3-1.27v-5.28c0-.23.1-.28.26-.28.14 0 .27.04.28.26.16 3.39 1.72 6.52 6.96 6.52 2.83 0 4.63-1.08 5.53-2.42.92 1.35 2.67 2.42 5.53 2.42 2.25 0 3.61-.66 4.5-1.5.78 2.92 4.52 3.92 6.93 3.57 1.16-.18 1.88-.8 1.94-1.42.07-.75-.54-1.07-1.54-1.01-.84.04-1.82.03-2.56-.1-1.91-.35-2.85-1.39-2.79-2.56.05-1.06.7-1.6 1.35-1.99l-.1-.08a5.16 5.16 0 0 1-1.43-3.66v-.91c0-1.99.97-4.72 4.51-4.72a4.5 4.5 0 0 1 2.9.9c.45-.5 1.3-.96 2.5-.96 1.17 0 2.13.6 2.49 1.18a4.96 4.96 0 0 1 3.24-1.12c3.93 0 5.06 3.2 5.06 5.5v.9c0 2.29-1.18 5.5-5.06 5.5-3.89 0-5.07-3.14-5.07-5.43v-.76c0-.99.22-2.02.58-2.93-.15-.4-.6-.89-1.37-.89-.67 0-1.05.38-1.2.62.3.69.44 1.6.44 2.2v.92c0 1.98-.97 4.72-4.5 4.72a6.2 6.2 0 0 1-.76-.05c-.11-.01-.17-.02-.2 0-.26.09-.42.24-.47.5-.08.47.25.75 1.23.81.58.04 1.32-.02 2.36-.02 1.76 0 3 1.25 3 3.06 0 2.2-1.74 4.34-5.31 4.34-1.78 0-3.8-.62-5.42-1.65-.21-.13-.51-.19-.72.14L40.1 28.9c-.28.44-.01.7.14.83 1.5 1.25 4.61 2.43 7.83 2.25 4.54-.25 7.77-3.42 7.2-8.54.56.34 1.94.68 3.4.68 5.82 0 7.33-4.6 7.33-7.84zm-20.6-1.53v.48c0 1.08.43 2.56 2.01 2.56 1.58 0 2.02-1.48 2.02-2.56v-.48c0-1.08-.44-2.56-2.02-2.56s-2.01 1.48-2.01 2.56zm13.14-2.56c-1.89 0-2.41 1.89-2.41 3.26v.62c0 1.37.52 3.26 2.4 3.26 1.9 0 2.42-1.89 2.42-3.26v-.62c0-1.37-.53-3.26-2.41-3.26z"
              />
            </svg>
          </a>
          <form
            action=""
            v-bind:class="{
              searching: isSearching,
              'no-results': !autoSuggest.length,
            }"
            ref="searchForm"
            v-on:keydown.esc="toggleIsSearching(false)"
            v-on:submit.prevent="searchLogic()"
          >
            <div class="search-criteria">
              <div class="has-input">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  v-model="searchQuery"
                  v-on:focus="toggleIsSearching(true)"
                  v-on:click="toggleIsSearching(true)"
                  ref="searchFormInput"
                  style="padding: 20px 50px 20px 20px"
                />
                <button
                  class="header-cta-button search-button"
                  type="button"
                  v-on:click="toggleSearchByVoice()"
                  v-tooltip="'Search by voice'"
                >
                  <span class="material-symbols-rounded notranslate">
                    mic
                  </span>
                </button>
              </div>
              <transition name="fade">
                <ul v-if="isSearching && !searchingByVoice">
                  <li v-if="searchQuery.length">
                    <a href="#">
                      <span class="material-symbols-rounded notranslate">
                        search
                      </span>
                      {{ searchQuery }}
                    </a>
                  </li>
                  <li v-for="(product, i) in autoSuggest" :key="i">
                    <a href="#">
                      <span class="material-symbols-rounded notranslate">
                        <template v-if="product.type === 'sub-category'">
                          sell
                        </template>
                        <template v-else> content_copy </template>
                      </span>
                      {{ product.title }}</a
                    >
                  </li>
                  <li v-if="!autoSuggest.length">
                    <a href="#">
                      <span class="material-symbols-rounded notranslate">
                        savings
                      </span>

                      Looking for hot new
                      <template v-if="searchCategories === 'All'"
                        >deals?</template
                      >
                      <template v-else
                        >deals in {{ searchCategories }}</template
                      >
                      Check these out!
                    </a>
                  </li>
                  <li v-if="searchCategories != 'All'">
                    <a href="#">
                      <span class="material-symbols-rounded notranslate">
                        workspaces
                      </span>
                      View all {{ searchCategories }} products
                    </a>
                  </li>
                  <template v-if="searchQuery.length > 1 && autoSuggest.length">
                    <li>
                      <a href="#" class="has-product">
                        <img
                          src="https://img.fruugo.com/product/4/51/352920514_max.jpg"
                          alt=""
                        />
                        <div>
                          <p>
                            Rose gold plated initial necklace letter a created
                            with zircondia® crystals
                          </p>
                          <p>Philip Jones Jewellery</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="has-product">
                        <img
                          src="https://img.fruugo.com/product/0/18/652747180_max.jpg"
                          alt=""
                        />
                        <div>
                          <p>
                            Women Necklace Chain Choker Pendant Jewelry Girls
                            Gift Sweet Simple Graceful Love Crown
                          </p>
                          <p>Liangzai</p>
                        </div>
                      </a>
                    </li>
                  </template>
                  <li>
                    <a v-on:click="toggleNavigationOpen(true)">
                      <span class="material-symbols-rounded notranslate">
                        grid_view
                      </span>
                      Shop by department
                    </a>
                  </li>
                </ul>
                <ul
                  v-else-if="isSearching && searchingByVoice"
                  class="search-by-voice"
                >
                  <li v-if="searchByVoiceComplete">
                    <div class="dot-progress-container">
                      <div
                        v-for="(circle, i) in 4"
                        :key="i"
                        class="progress-dots"
                      ></div>
                    </div>
                  </li>
                  <li v-else>
                    <span
                      class="material-symbols-rounded notranslate microphone-listening"
                    >
                      mic
                    </span>
                    <h3>Listening...</h3>
                    <p>
                      Say something like... "Women's running shoes" or
                      "Childrens clothing"
                    </p>
                  </li>
                </ul>
              </transition>
              <button
                class="header-cta-button search-button"
                type="button"
                v-on:click="searchLogic()"
                v-tooltip="'Search'"
              >
                <span class="material-symbols-rounded notranslate">
                  search
                </span>
              </button>
            </div>
          </form>
          <transition name="fade">
            <template v-if="isSearching">
              <div v-on:click="toggleIsSearching(false)" class="overlay"></div>
            </template>
          </transition>
          <div class="user-actions">
            <button
              class="header-cta-button language"
              type="button"
              v-tooltip="'Country & language'"
            >
              <div class="flag">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 60 30"
                  width="1200"
                  height="600"
                >
                  <clipPath id="s">
                    <path d="M0,0 v30 h60 v-30 z" />
                  </clipPath>
                  <clipPath id="t">
                    <path
                      d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"
                    />
                  </clipPath>
                  <g clip-path="url(#s)">
                    <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                    <path
                      d="M0,0 L60,30 M60,0 L0,30"
                      stroke="#fff"
                      stroke-width="6"
                    />
                    <path
                      d="M0,0 L60,30 M60,0 L0,30"
                      clip-path="url(#t)"
                      stroke="#C8102E"
                      stroke-width="4"
                    />
                    <path
                      d="M30,0 v30 M0,15 h60"
                      stroke="#fff"
                      stroke-width="10"
                    />
                    <path
                      d="M30,0 v30 M0,15 h60"
                      stroke="#C8102E"
                      stroke-width="6"
                    />
                  </g>
                </svg>
              </div>
            </button>
            <a
              href=""
              class="header-cta-button"
              type="button"
              v-tooltip="'Contact & help'"
            >
              <span class="material-symbols-rounded notranslate"> help </span>
            </a>
            <a
              href=""
              class="header-cta-button"
              type="button"
              v-tooltip="'My account'"
            >
              <span class="material-symbols-rounded notranslate"> person </span>
            </a>
            <a
              href=""
              class="header-cta-button"
              type="button"
              v-tooltip="'Your basket'"
            >
              <span class="alert"> 2 </span>
              <span class="material-symbols-rounded notranslate">
                shopping_cart
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { namespace } from "vuex-class";
import { Component, Vue, Watch } from "vue-property-decorator";
import { slider, slideritem } from "vue-concise-slider";

const navigationModule = namespace("navigation");

@Component({
  components: {
    slider,
    slideritem,
  },
})
export default class Search extends Vue {
  @navigationModule.Getter dynamicSearchQuery!: string;

  @navigationModule.Action setDynamicSearchQuery!: (item: string) => void;

  $refs!: {
    searchForm: HTMLInputElement;
    searchFormInput: HTMLInputElement;
    slider: Vue;
  };

  toggleIsSearching(payload: boolean): void {
    this.isSearching = payload;
    if (payload === true) {
      setTimeout(() => this.$refs.searchFormInput.focus(), 100);
    }
  }

  searchLogic(): void {
    if (this.searchQuery != "") {
      setTimeout(() => this.$router.push("/results"), 300);
    } else {
      this.$toasted.show("Please enter a search term", {
        theme: "bubble",
        position: "bottom-right",
        duration: 3000,
      });
    }
  }

  toggleSearchByVoice(): void {
    if (this.isRecording) {
      this.screenReader.stop();
      this.searchingByVoice = false;
      this.searchByVoiceComplete = true;
      this.toggleIsSearching(false);
    } else {
      this.screenReader.start();
      this.searchingByVoice = true;
      this.searchByVoiceComplete = false;
      this.toggleIsSearching(true);
    }
  }

  mounted(): void {
    this.prepareSearchByVoice();
  }

  prepareSearchByVoice(): void {
    this.screenReader.interimResults = true;
    this.screenReader.onstart = () => {
      console.log("SR Started");
      this.isRecording = true;
    };
    this.screenReader.onend = () => {
      console.log("SR Stopped");
      this.isRecording = false;
      this.searchByVoiceComplete = true;
      setTimeout(() => this.toggleIsSearching(false), 1500);
      setTimeout(() => this.searchLogic(), 2000);
    };
    this.screenReader.onresult = (evt: any) => {
      const t = Array.from(evt.results)
        .map((result: any) => result[0])
        .map((result) => result.transcript)
        .join("");

      this.searchQuery = t;
      this.setDynamicSearchQuery(t);
    };
  }

  recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  screenReader = new this.recognition();

  isRecording = false;

  searchByVoiceComplete = false;

  isSearching = false;

  searchQuery = "";

  searchCategories = "All";

  countrySelection = "United Kingdom";

  language = "English";

  searchingByVoice = false;

  products = [
    {
      title: "Necklaces",
      type: "sub-category",
    },
    {
      title: "Bracelets & Anklets",
      type: "sub-category",
    },
    {
      title: "Maternity Belts & Support",
      type: "sub-category",
    },
    {
      title: "Backpacks & Messenger Bags",
      type: "sub-category",
    },
    {
      title: "Jewellery & Watches",
      type: "category",
    },
    {
      title: "Handbags & Wallets",
      type: "category",
    },
    {
      title: "Luggage & Bags",
      type: "category",
    },
    {
      title: "Baby, Toddler & Maternity",
      type: "category",
    },
  ];

  get autoSuggest() {
    let filteredproducts = this.products.filter((story) => {
      return story.title.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
    return filteredproducts;
  }
}
</script>

<style lang="scss">
// General
@import url("https://use.typekit.net/vui5oaa.css");

$font-family: neuzeit-grotesk, Helvetica Neue, -apple-system, BlinkMacSystemFont,
  Arial, sans-serif;

:root {
  --fruugo-primary: #24a9fc;
  --fruugo-secondary: #1b7fbf;
}

* {
  font-family: $font-family;
}

button,
a {
  cursor: pointer;
}

button {
  appearance: none;
  border-width: 0;
  border-style: none;
  border-color: transparent;
  background: transparent;
}

html {
  background-color: #f8f8f8;
}

.fw-500 {
  font-weight: 500 !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: 0.3s;
}
.fade-slide-enter,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.input-container {
  label {
    padding-bottom: 10px;
    display: block;
    font-size: 18px;
    font-weight: 600;
  }

  select {
    padding: 15px;
    position: relative;
    z-index: 1;
    background-color: #fff;
    width: 100%;
    border-width: 2px;
    transition: 0.3s;
    border: 1px solid #ddd;
    box-shadow: 0 3px 3px -3px rgb(0 0 0 / 30%);
    font-size: 16px;

    &:hover,
    &:focus {
      border-color: blue;
      box-shadow: 0 5px 5px -2px rgba(0, 0, 0, 0.25);
    }
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }
}

.tooltip {
  display: block !important;
  z-index: 10000;
  font-size: 16px;
  margin-top: 50px;

  .tooltip-inner {
    background: black;
    color: white;
    border-radius: 10px;
    padding: 10px 15px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="bottom"] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="right"] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^="left"] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &.popover {
    $color: #f9f9f9;

    .popover-inner {
      background: $color;
      color: black;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, 0.1);
    }

    .popover-arrow {
      border-color: $color;
    }
  }

  &[aria-hidden="true"] {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.15s, visibility 0.15s;
  }

  &[aria-hidden="false"] {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.15s;
  }
}

.toasted.bubble {
  background-color: var(--fruugo-secondary);
}

.overlay {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(40, 40, 40, 0.5);
  z-index: 2;

  &.navigation-overlay {
    z-index: 9;
  }
}

// Header

.marketplace-navigation {
  header {
    position: relative;
    z-index: 3;

    .logo {
      width: 120px;
    }

    .has-site-search {
      position: relative;
      z-index: 2;

      .site-search {
        background-color: var(--fruugo-primary);
        padding: 20px;
        position: relative;
        z-index: 1;
        border-bottom: 2px solid var(--fruugo-secondary);
        color: #fff;
        display: flex;
        gap: 10px;
        box-shadow: 0 3px 8px -2px rgb(0 0 0 / 15%);
        align-items: center;

        .divider {
          align-self: center;
          width: 1px;
          height: 30px;
          background: #fff;
          opacity: 0.75;
        }

        .header-cta-button {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
          padding: 10px;
          cursor: pointer;
          position: relative;
          text-decoration: none;

          .material-symbols-rounded notranslate {
            font-size: 26px;
          }

          &.menu-button {
            border-radius: 100%;
          }

          &.language {
            .flag {
              width: 24px;
              height: 24px;
              border-radius: 100%;
              border: 1px solid #fff;
              position: relative;
              overflow: hidden;

              svg {
                width: 200%;
                height: 200%;
                position: absolute;
                top: -50%;
                left: -50%;
              }
            }
          }
        }

        .home {
          display: flex;
          align-items: center;
        }

        form {
          flex: 1;
          position: relative;
          z-index: 3;
          margin: 0 20px;

          input,
          select,
          label {
            font-size: 16px;
          }

          .search-criteria {
            display: flex;
            gap: 10px;
            background-color: var(--fruugo-secondary);
            border-radius: 50px;
            border: 1px solid transparent;
          }

          select {
            background-color: transparent;
            border: none;
            color: transparent;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: inherit;
          }

          label {
            border-top-left-radius: inherit;
            border-bottom-left-radius: inherit;
            position: relative;
            display: flex;
            align-items: center;
            padding: 20px 0 20px 20px;

            span {
              margin-left: 5px;
            }
          }

          .has-input {
            flex: 1;
            display: flex;
            color: #fff;
            position: relative;
            align-items: center;

            button {
              color: inherit;
              padding: 10px;
              border-radius: 100%;
              background-color: transparent;
              width: 50px;
              height: 50px;
              position: absolute;
              right: 0;
              transition: 0.3s;

              &:focus,
              &:hover {
                background-color: rgba(40, 40, 40, 0.05);
              }
            }
          }

          input {
            background-color: transparent;
            border: none;
            padding: 20px 50px 20px 10px;
            color: #fff;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            &::placeholder {
              color: rgba(255, 255, 255, 1);
            }
          }

          .search-button {
            border-top-right-radius: inherit;
            border-bottom-right-radius: inherit;
            padding: 10px 20px;

            &:after {
              content: "";
              width: 44px;
              aspect-ratio: 1/1;
              inset: 0;
              margin: auto;
              background-color: var(--fruugo-secondary);
              opacity: 1;
            }

            .material-symbols-rounded {
              z-index: 1;
              position: relative;
            }
          }

          ul {
            position: absolute;
            top: 100%;
            left: -10px;
            width: calc(100% + 20px);
            padding: 10px 0;
            background-color: #fff;
            color: #282828;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            box-shadow: 0 3px 8px -2px rgb(0 0 0 / 15%);
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 10px;

            a {
              color: initial;
              text-decoration: none;
              padding: 10px 30px;
              display: flex;
              align-items: center;
              background-color: transparent;
              transition: 0.3s;
              border-top: 1px solid transparent;
              border-bottom: 1px solid transparent;
              cursor: pointer;

              span {
                margin-right: 10px;
              }

              &:focus,
              &:hover {
                background-color: #f8f8f8;
                border-color: #ddd;
              }
            }

            .has-product {
              display: flex;
              img {
                width: 75px;
                height: 75px;
                object-fit: cover;
                object-position: 50%;
                margin-right: 10px;
                border-radius: 5px;
                border: 1px solid #ddd;
              }
              p {
                &:not(:last-child) {
                  padding-bottom: 10px;
                  font-weight: bold;
                }
              }
            }
          }

          &.searching {
            .search-criteria {
              background-color: #f8f8f8;
              border-color: #ddd;
            }

            .divider {
              background-color: #ddd;
            }

            &:after {
              content: "";
              background-color: #fff;
              inset: 0;
              width: 100%;
              height: 100%;
              position: absolute;
              z-index: -2;
              padding: 10px;
              top: -10px;
              left: -10px;
              border-radius: 10px 10px 0 0;
              box-shadow: 0 3px 8px -2px rgb(0 0 0 / 15%);
            }

            &.no-results {
              &:after {
                border-radius: 10px;
              }
            }

            label,
            input::placeholder,
            input,
            button {
              color: initial;
            }

            .search-button {
              color: #fff;
            }
          }
        }

        .user-actions {
          display: flex;
          align-items: center;
          gap: 10px;

          .alert {
            width: 20px;
            aspect-ratio: 1/1;
            background-color: #dd5b5b;
            color: #fff;
            position: absolute;
            top: 0px;
            right: 0px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100%;
            z-index: 1;
          }

          .header-cta-button {
            position: relative;
            border-radius: 100%;
          }
        }
      }

      .header-cta-button {
        &:hover,
        &:focus {
          &:after {
            opacity: 1;
          }
        }

        &:after {
          content: "";
          width: 100%;
          aspect-ratio: 1/1;
          background-color: rgba(40, 40, 40, 0.1);
          position: absolute;
          inset: 0;
          border-radius: 100%;
          transition: 0.3s;
          opacity: 0;
        }
      }
    }
  }
}

.search-by-voice {
  li {
    padding: 20px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    text-align: center;

    h3 {
      font-weight: 400;
      font-size: 22px;
    }
  }

  .microphone-listening {
    border-radius: 100%;
    border: 1px solid #282828;
    font-size: 50px;
    padding: 20px;
    background-color: #f8f8f8;
    color: rgb(221, 91, 91);
    box-shadow: 0px 0px 1px 1px rgba(221, 91, 91, 0.5),
      0 3px 8px -2px rgba(0, 0, 0, 0.15);
    animation: pulse-animation 2s infinite;
  }

  @keyframes pulse-animation {
    0% {
      box-shadow: 0 0 0 0px rgba(221, 91, 91, 0.5),
        0 3px 8px -2px rgba(0, 0, 0, 0.15);
    }
    100% {
      box-shadow: 0 0 0 20px rgba(221, 91, 91, 0),
        0 3px 8px -2px rgba(0, 0, 0, 0.15);
    }
  }
}

.dot-progress-container {
  z-index: 9999;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;

  .progress-dots {
    position: relative;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    animation: movingUp 0.5s infinite alternate;

    &:nth-of-type(1) {
      background-color: #ea4335;
    }

    &:nth-of-type(2) {
      background-color: #4285f4;
      animation-delay: 0.2s;
    }

    &:nth-of-type(3) {
      background-color: #34a853;
      animation-delay: 0.5s;
    }

    &:nth-of-type(4) {
      background-color: #fbbc05;
      animation-delay: 0.7s;
    }
  }
}

@keyframes movingUp {
  from {
    top: 0px;
  }

  to {
    top: -20px;
  }
}
</style>
