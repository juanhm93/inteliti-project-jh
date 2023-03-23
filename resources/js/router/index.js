import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: () =>
                import(
                    /* webpackChunkName: "ListHistoryPage" */ "../pages/List.vue"
                ),
        },
        {
            path: "/paciente/:id",
            component: () =>
                import(
                    /* webpackChunkName: "PatientPage" */ "../pages/Patient.vue"
                ),
        },
        {
            path: "/registrar-paciente",
            component: () =>
                import(
                    /* webpackChunkName: "RegisterMedicalPage" */ "../pages/RegisterMedicalPatient.vue"
                ),
        },
    ],
});

export default router;
