<template>
    <div class="col-12 col-md-11 col-lg-10 col-xl-9 mt-3">
        <div class="alert alert-info" role="alert">
            <div class="d-flex justify-content-between">
                <h5 class="alert-heading">Paciente Registrado!</h5>
                <button
                    type="button"
                    class="btn-close"
                    aria-label="Close"
                    @click="$emit('close')"
                ></button>
            </div>
            <hr />
            <!-- usuario menor a 18 -->
            <p v-if="age < 18">
                Hola {{ patientCreated.nombre }} eres
                {{ patientCreated.sexo === "masculino" ? "un" : "una" }}
                joven muy saludable, te recomiendo salir a jugar al aire libre
                durante {{ hours }} hours diarias
            </p>
            <!-- usuario mayor o igual a 18 -->
            <p v-else>
                Hola {{ patientCreated.nombre }} eres una persona muy saludable,
                te recomiendo comer
                {{ patientCreated.peso < 30 ? "menos" : "más" }} y salir a
                correr {{ this.kilometres }} km diarios.
            </p>
        </div>
    </div>
</template>
<script>
import { differenceInCalendarYears, getYear } from "date-fns";

export default {
    props: {
        patientCreated: {
            type: Object,
            required: false,
            default: () => ({}),
        },
    },
    data() {
        return {
            age: 0,
            hours: 0,
            kilometres: 0,
            serie: [0, 1],
        };
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            const { fecha_nacimiento, estatura } = this.patientCreated;
            this.age = this.calculateAge(fecha_nacimiento);
            if (this.age < 18) {
                this.hours = this.fibonacci(estatura);
                console.log("this.hours", this.hours);
            } else {
                const year = getYear(new Date(fecha_nacimiento));

                const yearArr = year.toString().split("");

                const twoLast = parseInt(
                    yearArr
                        .filter((el, idx) => idx >= yearArr.length - 2)
                        .join("")
                );

                const raiz = Math.sqrt(twoLast);

                this.kilometres = raiz.toFixed(2);
            }
        },
        fibonacci(estatura) {
            let i = 2;

            while (this.serie[this.serie.length - 1] <= estatura) {
                this.serie.push(this.serie[i - 1] + this.serie[i - 2]);
                i += 1;
            }
            const filterMinors = this.serie.filter((el) => el < estatura);
            return filterMinors[filterMinors.length - 1];
        },
        calculateAge(fechaNacimiento) {
            return differenceInCalendarYears(
                new Date(),
                new Date(fechaNacimiento)
            );
        },
    },
};
</script>
