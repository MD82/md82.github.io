<template>
  <header>
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <NuxtLink class="navbar-brand" to="/">
            <img src="https://31.media.tumblr.com/avatar_49fc80475b1e_128.png" alt="Logo"> <span class="name-holder">워시퍼의 하루</span>
          </NuxtLink>
        </div>

        <div class="collapse navbar-collapse" id="navbar">
          <ul id="main-menu" class="nav navbar-nav navbar-right">
            <li>
              <NuxtLink to="/"><i class="fa fa-home"></i> Home</NuxtLink>
            </li>
            <li>
              <a href="http://md82.tistory.com" target="_blank" rel="noopener noreferrer">Tistory</a>
            </li>
            <li>
              <NuxtLink to="/about"><i class="fa fa-info-circle"></i> About Me</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
/* Scoped styles for the header */
.navbar-brand img {
  display: inline-block;
  height: 28px; /* Adjust as needed */
  margin-right: 10px;
  vertical-align: middle;
}
.name-holder {
  vertical-align: middle;
}
</style>
