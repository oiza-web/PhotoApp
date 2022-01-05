<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/"  ><a class="navbar-brand">PhotoApp</a></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-md-auto gap-2">
            <li class="nav-item rounded">
              <router-link to="/">
              <a class="nav-link active" aria-current="page"
                ><i class="bi bi-house-fill me-2"></i>Home</a
              >
              </router-link>
            </li>
            <li class="nav-item rounded">
              <a class="nav-link" href="#browse" 
                ><i class="bi bi-people-fill me-2"></i>Browse Photos</a
              >
            </li>
            <li class="nav-item rounded">
              <a class="nav-link" href="#search"
                ><i class="bi bi-telephone-fill me-2"></i>Search</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style >
a{
  text-decoration: none;
}
</style>
