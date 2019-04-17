(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{416:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card review__edit-card"},[r("header",{staticClass:"card__header"},[r("div",{staticClass:"card__title"},[e._v(e._s(e.formTitle))])]),r("form",{staticClass:"card__content--bigpd review__edit-content",on:{reset:function(t){return t.preventDefault(),e.$emit("deleteFormReview")},submit:function(t){t.preventDefault(),"add"===e.mode?e.addNewReview():e.editCurrentReview()}}},[r("div",{staticClass:"review__appearance"},[r("div",{staticClass:"user review__author"},[r("div",{staticClass:"user__photo-wr review__author-photo-wr"},[r("div",{staticClass:"user__photo review__author-photo",class:{filled:e.isAddPhoto},style:{backgroundImage:"url("+this.renderPhotoUrl+")"}})]),r("label",{staticClass:"check admin-btn--string review__download-label",class:{error:e.validation.hasError("review.photo")},attrs:{for:"review-img"}},[e._v(e._s(e.imageOperation)),r("div",{staticClass:"check__error"},[e._v(e._s(e.validation.firstError("review.photo")))])]),r("input",{staticClass:"review__download visuallyhidden",attrs:{type:"file",id:"review-img",name:"review-img"},on:{change:e.appendFileAndRenderPhoto}})])]),r("div",{staticClass:"review__info"},[r("div",{staticClass:"review__row"},[r("div",{staticClass:"card__title underline check",class:{error:e.validation.hasError("review.author")}},[r("label",{staticClass:"card__label",attrs:{for:"review-author"}},[e._v("Имя автора")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.review.author,expression:"review.author"}],staticClass:"card__input",attrs:{type:"text",id:"review-author",name:"review-author"},domProps:{value:e.review.author},on:{input:function(t){t.target.composing||e.$set(e.review,"author",t.target.value)}}}),r("div",{staticClass:"check__error"},[e._v(e._s(e.validation.firstError("review.author")))])])]),r("div",{staticClass:"review__row"},[r("div",{staticClass:"card__title underline check",class:{error:e.validation.hasError("review.occ")}},[r("label",{staticClass:"card__label",attrs:{for:"review-author-occ"}},[e._v("Титул автора")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.review.occ,expression:"review.occ"}],staticClass:"card__input",attrs:{type:"text",id:"review-author-occ",name:"review-author-occ"},domProps:{value:e.review.occ},on:{input:function(t){t.target.composing||e.$set(e.review,"occ",t.target.value)}}}),r("div",{staticClass:"check__error"},[e._v(e._s(e.validation.firstError("review.occ")))])])]),r("div",{staticClass:"review__row"},[r("div",{staticClass:"card__title check",class:{error:e.validation.hasError("review.text")}},[r("label",{staticClass:"card__label",attrs:{for:"review-text"}},[e._v("Отзыв")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.review.text,expression:"review.text"}],staticClass:"card__input card__textarea",attrs:{id:"review-text",name:"review-text",rows:"4"},domProps:{value:e.review.text},on:{input:function(t){t.target.composing||e.$set(e.review,"text",t.target.value)}}}),r("div",{staticClass:"check__error"},[e._v(e._s(e.validation.firstError("review.text")))])])]),e._m(0)])])])};i._withStripped=!0;var a=r(95),s=r(349),o=r(348);function n(e,t,r,i,a,s,o){try{var n=e[s](o),c=n.value}catch(e){return void r(e)}n.done?t(c):Promise.resolve(c).then(i,a)}function c(e){return function(){var t=this,r=arguments;return new Promise(function(i,a){var s=e.apply(t,r);function o(e){n(s,i,a,o,c,"next",e)}function c(e){n(s,i,a,o,c,"throw",e)}o(void 0)})}}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d={mixins:[r(348).mixin],validators:{"review.author":function(e){return o.Validator.value(e).required("Введите имя автора")},"review.occ":function(e){return o.Validator.value(e).required("Введите должность автора")},"review.text":function(e){return o.Validator.value(e).required("Введите текст отзыва")},"review.photo":function(e){return o.Validator.custom(function(){if(!e)return"Загрузите аватар"})}},name:"ReviewEdit",props:{mode:String,review:Object},data:function(){return{renderPhotoUrl:"",isAddPhoto:!1}},computed:{formTitle:function(){return"add"===this.mode?"Новый отзыв":"Редактировать отзыв"},imageOperation:function(){return this.isAddPhoto?"Изменить фото":"Добавить фото"}},methods:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),i.forEach(function(t){v(e,t,r[t])})}return e}({},Object(a.b)("reviews",["addReview","editReview"]),Object(a.b)("tooltip",["handleTooltip"]),{appendFileAndRenderPhoto:function(e){var t=this,r=e.target.files[0];this.review.photo=r;var i=new FileReader;try{i.readAsDataURL(r),i.onload=function(){t.renderPhotoUrl=i.result,t.isAddPhoto=!0}}catch(e){console.log("photo failed")}},addNewReview:function(){var e=c(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$validate();case 2:if(e.t0=e.sent,!1!==e.t0){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,e.next=8,this.addReview(this.review);case 8:this.$emit("deleteFormReview"),this.handleTooltip({type:"success",text:"Отзыв добавлен"}),e.next=15;break;case 12:e.prev=12,e.t1=e.catch(5),this.handleTooltip({type:"error",text:"error.message"});case 15:case"end":return e.stop()}},e,this,[[5,12]])}));return function(){return e.apply(this,arguments)}}(),editCurrentReview:function(){var e=c(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$validate();case 2:if(e.t0=e.sent,!1!==e.t0){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,e.next=8,this.editReview(this.review);case 8:this.$emit("deleteFormReview"),this.handleTooltip({type:"success",text:"Отзыв изменен"}),e.next=15;break;case 12:e.prev=12,e.t1=e.catch(5),this.handleTooltip({type:"error",text:"error.message"});case 15:case"end":return e.stop()}},e,this,[[5,12]])}));return function(){return e.apply(this,arguments)}}()}),created:function(){if("edit"===this.mode){var e=s.a.defaults.baseURL;this.renderPhotoUrl="".concat(e,"/").concat(this.review.photo),this.isAddPhoto=!0}}},l=r(97),u=Object(l.a)(d,i,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"review__row"},[t("div",{staticClass:"review__serve"},[t("button",{staticClass:"review__reset admin-btn--string",attrs:{type:"reset"}},[this._v("Отмена")]),t("button",{staticClass:"card__sumbit admin-btn",attrs:{type:"submit"}},[this._v("Сохранить")])])])}],!1,null,"24e764b2",null);u.options.__file="src/admin/components/ReviewEdit.vue";t.default=u.exports}}]);