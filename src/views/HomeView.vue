<script setup>
  import GitHubIcon from '../components/icons/IconGitHub.vue'
</script>

<template>
  <main>
    <div class="container">

      <div class="px-4 py-5 my-5 text-center">
        <p>This is the home page of the RomRepo software project. RomRepo is a collection of tools for retro video game management.</p>
      </div>


      <div class="row">
        <div class="col-md-4" style="background-color: orange;">
          <p title="Code Repositories">
            <h3>Code Repositories</h3>
            <ul class="list-unstyled">
              <li><a href="https://github.com/srenner/romrepo.api"><GitHubIcon/> romrepo.api</a></li>
              <li><a href="https://github.com/srenner/romrepo.com"><GitHubIcon/> romrepo.com</a></li>
            </ul>
          </p>
        </div>
        <div class="col-md-8" style="background-color: aqua;">
          <p title="API Access">
            <h3>Request API Access</h3>
            <p>An API for the DAT-o-MATIC database is available at <a href="https://api.romrepo.com">https://api.romrepo.com</a>.</p>
            <p>If you are writing software that needs to use this API, you can obtain an API key by entering your email below.</p>
            <div class="input-group">
              <span class="input-group-text">email:</span>
              <input type="email" class="form-control" maxlength="100">
              <button class="btn btn-primary" type="button" id="button-addon1">Get Key</button>
            </div>
          </p>
        </div>
      </div>
      
    </div>
  </main>
</template>
