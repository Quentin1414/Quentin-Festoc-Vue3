<script scoped>

const navList = [
{
    'path': '/',
    'label': 'Home'
},
{
    'path': '/monsters',
    'label': 'Monsters'

},
{
    'path': '/lien 1',
    'label':'Lien 1'
},
{
    'path': '/lien 2',
    'label': 'Lien 2'
},
{
    'path': '/lien 3',
    'label': 'Lien 3'
},

]




</script>

<template>
  <section data-bs-version="5.1" class="menu menu01 cid-sRQjR1mphb" id="menu01-7">
        <nav class="navbar navbar-fixed-top navbar-expand-lg container-fluid">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav nav-dropdown navbar-nav-top-padding ms-auto" data-app-modern-menu="true">
                        <li class="nav-item"
                            v-for="link in navList"
                            :key="link.path"
                            >
                            <router-link :to="link.path">{{link.label}}</router-link>
                         </li>
                    </ul>
                    
                    <div class="navbar-buttons align-center mbr-section-btn"><a class="btn btn-primary display-4" href="index.html#form02-8">CONTACT US</a></div>
                </div>
            </div>
        </nav>
    </section>
</template>

<style scoped>
.nav-item {

    color: black;
}
</style>