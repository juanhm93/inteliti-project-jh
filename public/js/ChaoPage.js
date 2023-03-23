"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ChaoPage"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RegisterMedicalPatient.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RegisterMedicalPatient.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getYear/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/differenceInCalendarYears/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      nombre: "",
      fechaNacimiento: "",
      sexo: "",
      estatura: 0,
      peso: 0,
      errorMessage: "",
      showError: false,
      serie: [0, 1],
      userCreated: {},
      showSuccess: false,
      edad: 0,
      horas: 0,
      kilomentros: 0
    };
  },
  computed: {
    // edad() {
    //     if (this.fechaNacimiento !== "") {
    //         return differenceInCalendarYears(
    //             new Date(),
    //             new Date(this.fechaNacimiento)
    //         );
    //     }
    //     return 0;
    // },
  },
  // mounted() {
  //     this.fibonacci(60);
  // },
  methods: {
    SaveDataHistory: function SaveDataHistory() {
      var _this = this;
      var isValid = this.validateForm();
      if (!isValid) {
        this.showError = true;
        return false;
      }
      this.estatura = parseInt(this.estatura);
      this.peso = parseFloat(this.peso);
      var nombre = this.nombre,
        fechaNacimiento = this.fechaNacimiento,
        sexo = this.sexo,
        estatura = this.estatura,
        peso = this.peso;
      var data = {
        nombre: nombre,
        fecha_nacimiento: fechaNacimiento,
        sexo: sexo,
        estatura: estatura,
        peso: peso
      };
      axios.post("/historias", data).then(function (response) {
        if (response.data.success) {
          console.log("response.data", response.data);
          console.log("response.data.message", response.data.message);
          _this.userCreated = response.data.data;
          console.log("this.userCreated", _this.userCreated);
          _this.edad = _this.calcularEdad(_this.userCreated.fecha_nacimiento);
          console.log("this.edad", _this.edad);
          if (_this.edad < 18) {
            _this.horas = _this.fibonacci(_this.userCreated.estatura);
            console.log("this.horas", _this.horas);
          } else {
            var year = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(_this.userCreated.fecha_nacimiento));
            var yearArr = year.toString().split("");
            console.log("yearArr", yearArr);
            var twoLast = parseInt(yearArr.filter(function (el, idx) {
              return idx >= yearArr.length - 2;
            }).join(""));
            console.log("twoLast", twoLast);
            var raiz = Math.sqrt(twoLast);
            console.log("raiz", raiz);
            _this.kilomentros = raiz.toFixed(2);
            console.log("this.kilomentros", _this.kilomentros);
          }
          _this.showSuccess = true;
          setTimeout(function () {
            _this.cleanData();
          }, 4000);
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    validateForm: function validateForm() {
      var nombre = this.nombre,
        fechaNacimiento = this.fechaNacimiento,
        sexo = this.sexo,
        estatura = this.estatura,
        peso = this.peso;
      if (nombre === "") {
        this.errorMessage = "El campo nombre es requerido";
        return false;
      }
      if (fechaNacimiento === "") {
        this.errorMessage = "El campo fecha de nacimiento es requerido";
        return false;
      }
      if (sexo === "") {
        this.errorMessage = "El campo sexo es requerido";
        return false;
      }
      if (estatura === 0) {
        this.errorMessage = "El campo estatura es requerido";
        return false;
      } else if (isNaN(estatura)) {
        this.errorMessage = "El campo estatura debe ser un numero";
        return false;
      } else if (!Number.isInteger(parseInt(estatura))) {
        this.errorMessage = "El campo estatura debe ser un numero entero";
        return false;
      } else if (Number.isInteger(parseInt(estatura)) && (parseInt(estatura) < 0 || parseInt(estatura) > 1000000)) {
        this.errorMessage = "El campo estatura debe tener un valor entre 1 y 1000000";
        return false;
      }
      if (peso === 0) {
        this.errorMessage = "El campo peso es requerido";
        return false;
      } else if (isNaN(peso)) {
        this.errorMessage = "El campo peso debe ser un numero";
        return false;
      }
      return true;
    },
    cleanData: function cleanData() {
      this.nombre = "";
      this.fechaNacimiento = "";
      this.sexo = "";
      this.estatura = 0;
      this.peso = 0;
      this.errorMessage = "";
      this.showError = false;
    },
    fibonacci: function fibonacci(estatura) {
      var i = 2;

      // while (this.serie[this.serie.length - 1] <= this.estatura) {
      while (this.serie[this.serie.length - 1] <= estatura) {
        this.serie.push(this.serie[i - 1] + this.serie[i - 2]);
        i += 1;
      }
      var filterMinors = this.serie.filter(function (el) {
        return el < estatura;
      });
      return filterMinors[filterMinors.length - 1];
    },
    calcularEdad: function calcularEdad(fechaNacimiento) {
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(), new Date(fechaNacimiento));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Chao.vue?vue&type=template&id=187e5cdc&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Chao.vue?vue&type=template&id=187e5cdc& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h1", [_vm._v("chao")]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RegisterMedicalPatient.vue?vue&type=template&id=6de15200&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RegisterMedicalPatient.vue?vue&type=template&id=6de15200& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row justify-content-center"
  }, [_c("div", {
    staticClass: "col-md-8"
  }, [_c("div", {
    staticClass: "card mt-3"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._v("\n                Ingresar historia medica del paciente\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_vm.showError ? _c("div", {
    staticClass: "alert alert-danger",
    attrs: {
      role: "alert"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("div", [_vm._v(_vm._s(_vm.errorMessage))]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        _vm.showError = false;
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _c("form", {
    staticClass: "row",
    attrs: {
      method: "POST"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.SaveDataHistory.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "col-12 col-md-7 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "nombre"
    }
  }, [_vm._v("Nombre")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.nombre,
      expression: "nombre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "nombre",
      "aria-describedby": "emailHelp",
      required: ""
    },
    domProps: {
      value: _vm.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.nombre = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-5 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "fecha-nacimiento"
    }
  }, [_vm._v("Fecha de Nacimiento")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.fechaNacimiento,
      expression: "fechaNacimiento"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      id: "fecha-nacimiento",
      required: ""
    },
    domProps: {
      value: _vm.fechaNacimiento
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.fechaNacimiento = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-4 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "sexo"
    }
  }, [_vm._v("Sexo")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.sexo,
      expression: "sexo"
    }],
    staticClass: "form-select",
    attrs: {
      "aria-label": "Default select example",
      required: ""
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.sexo = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "masculino"
    }
  }, [_vm._v("Masculino")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "femenino"
    }
  }, [_vm._v("Femenino")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-4 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "estatura"
    }
  }, [_vm._v("Estatura")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.estatura,
      expression: "estatura"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      min: "0",
      max: "1000000",
      id: "estatura",
      required: ""
    },
    domProps: {
      value: _vm.estatura
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.estatura = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-4 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "peso"
    }
  }, [_vm._v("Peso")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.peso,
      expression: "peso"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      step: "0.01",
      id: "peso",
      required: ""
    },
    domProps: {
      value: _vm.peso
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.peso = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("\n                        Enviar\n                    ")])])])])]), _vm._v(" "), _vm.showSuccess ? _c("div", {
    staticClass: "col-md-8"
  }, [_c("div", {
    staticClass: "alert alert-info",
    attrs: {
      role: "alert"
    }
  }, [_c("h5", {
    staticClass: "alert-heading"
  }, [_vm._v("Paciente Registrado!")]), _vm._v(" "), _c("hr"), _vm._v(" "), _vm.edad < 18 ? _c("p", [_vm._v("\n                “Hola " + _vm._s(_vm.userCreated.nombre) + " eres\n                " + _vm._s(_vm.userCreated.sexo === "masculino" ? "un" : "una") + "\n                joven muy saludable, te recomiendo salir a jugar al aire\n                libre durante " + _vm._s(_vm.horas) + " horas diarias”\n            ")]) : _c("p", [_vm._v("\n                “Hola " + _vm._s(_vm.userCreated.nombre) + " eres una persona muy\n                saludable, te recomiendo comer\n                " + _vm._s(_vm.userCreated.peso < 30 ? "menos" : "más") + " y salir a\n                correr " + _vm._s(this.kilomentros) + " km diarios”\n            ")])])]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarYears/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarYears/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarYears)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */

function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeft.getFullYear() - dateRight.getFullYear();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getYear/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getYear/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */

function getYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getFullYear();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./resources/js/pages/Chao.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/Chao.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Chao_vue_vue_type_template_id_187e5cdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chao.vue?vue&type=template&id=187e5cdc& */ "./resources/js/pages/Chao.vue?vue&type=template&id=187e5cdc&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Chao_vue_vue_type_template_id_187e5cdc___WEBPACK_IMPORTED_MODULE_0__.render,
  _Chao_vue_vue_type_template_id_187e5cdc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Chao.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/RegisterMedicalPatient.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/RegisterMedicalPatient.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegisterMedicalPatient_vue_vue_type_template_id_6de15200___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterMedicalPatient.vue?vue&type=template&id=6de15200& */ "./resources/js/pages/RegisterMedicalPatient.vue?vue&type=template&id=6de15200&");
/* harmony import */ var _RegisterMedicalPatient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterMedicalPatient.vue?vue&type=script&lang=js& */ "./resources/js/pages/RegisterMedicalPatient.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegisterMedicalPatient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterMedicalPatient_vue_vue_type_template_id_6de15200___WEBPACK_IMPORTED_MODULE_0__.render,
  _RegisterMedicalPatient_vue_vue_type_template_id_6de15200___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/RegisterMedicalPatient.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/RegisterMedicalPatient.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/RegisterMedicalPatient.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterMedicalPatient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterMedicalPatient.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RegisterMedicalPatient.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterMedicalPatient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Chao.vue?vue&type=template&id=187e5cdc&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Chao.vue?vue&type=template&id=187e5cdc& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chao_vue_vue_type_template_id_187e5cdc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chao_vue_vue_type_template_id_187e5cdc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chao_vue_vue_type_template_id_187e5cdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chao.vue?vue&type=template&id=187e5cdc& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Chao.vue?vue&type=template&id=187e5cdc&");


/***/ }),

/***/ "./resources/js/pages/RegisterMedicalPatient.vue?vue&type=template&id=6de15200&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/RegisterMedicalPatient.vue?vue&type=template&id=6de15200& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterMedicalPatient_vue_vue_type_template_id_6de15200___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterMedicalPatient_vue_vue_type_template_id_6de15200___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterMedicalPatient_vue_vue_type_template_id_6de15200___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterMedicalPatient.vue?vue&type=template&id=6de15200& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RegisterMedicalPatient.vue?vue&type=template&id=6de15200&");


/***/ })

}]);