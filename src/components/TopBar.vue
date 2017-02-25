<template>
  <div class="top-bar">
    <md-whiteframe md-tag="md-toolbar">
      <div class="md-toolbar-container">
        <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
          <md-icon>menu</md-icon>
        </md-button>
        <span style="flex: 1"></span>
        <md-button class="md-icon-button">
          <md-icon>search</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>view_module</md-icon>
        </md-button>
      </div>
    </md-whiteframe>
  </div>
</template>

<script>

export default {
  name: 'top-bar',
  methods: {
    toggleLeftSidenav () {
      this.$emit('toggleLeftSidenav')
    }
  }
}
</script>

<style scoped>

</style>
