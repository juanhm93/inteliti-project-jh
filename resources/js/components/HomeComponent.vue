<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/"
                    >Inteliti Medical
                </router-link>
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
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                :class="{
                                    active: $route.path === '/',
                                }"
                                to="/"
                                >Listado historias medicas</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                :class="{
                                    active:
                                        $route.path === '/registrar-paciente',
                                }"
                                to="/registrar-paciente"
                                >Registrar paciente</router-link
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container-fluid">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("Component mounted.");
    },
};
</script>
