<template>
    <div class="box-control">
      <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        <button @click="$i18n.locale = 'ar'" type="button" class="btn btn-danger">{{ $t('Arabic') }}</button>
        <button @click="$i18n.locale = 'sp'" type="button" class="btn btn-warning">{{ $t('Spanish') }}</button>
        <button @click="$i18n.locale = 'fr'" type="button" class="btn btn-success">{{ $t('French') }}</button>
        <button @click="$i18n.locale = 'en'" type="button" class="btn btn-danger">{{ $t('English') }}</button>
      </div>
      </div>
</template>

<script>
export default {
    name: 'changeSettings',

    data() {
        return {
          languages: null
        }
    },

    methods: {
        clickOn() {
          this.languages;
        }
    },
}
</script>

<style scoped>
* {
  text-align: center;
  margin: 5rem auto;
}
</style>