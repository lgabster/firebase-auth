<template>
    <base-card>
      <div>
        <h2>Last Login Date: {{ lastLoginDate }}</h2>
      </div>
      <div>
        <h2>Current Login Date: {{ currentLoginDate }}</h2>
      </div>
    </base-card>
</template>

<script>
export default {
    name: 'logPage',

    data() {
        return {
            lastLoginDate: null,
            currentLoginDate: null,
        }
    },

     mounted() {
       if (localStorage.getItem('lastLoginDate')) {
        this.lastLoginDate = localStorage.getItem('lastLoginDate');
        localStorage.setItem('lastLoginDate', new Date().toString());
       } else {
        localStorage.setItem('lastLoginDate', new Date().toString());

       }
       this.currentLoginDate = new Date();
    },
}
</script>