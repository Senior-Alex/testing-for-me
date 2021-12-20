<template lang="pug">
  div(id="app")
    router
</template>

<script></script>

<style lang="scss">
#app {
  .v-text-field--outline {
    .v-input__slot {
      border: solid 1px #8e8e93;
      border-radius: 50px;
    }
  }

  .v-card {
    .card__title {
      font-size: 24px;
      font-weight: 500;
      text-transform: uppercase;
      padding: 30px 16px 16px;
    }

    &__text {
      .v-form {
        .upperLine {
          display: block;
          font-size: 0.82rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 3px;
        }

        .v-btn {
          max-width: 190px;
          height: 45px;
          margin: 0 auto;
        }
      }
    }
  }

  .v-navigation-drawer {
    .v-list {
      &__tile {
        width: 80%;
        margin: 12px auto;
      }

      &__tile--link:hover {
        background: #3182ff !important;
        border-radius: 2px;
      }

      &__tile {
        &--active {
          color: white !important;
          background: #3182ff;
          border-radius: 2px;
        }

        &__action {
          min-width: 40px;
        }
      }
    }
  }
}
</style>
