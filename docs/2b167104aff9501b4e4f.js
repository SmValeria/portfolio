(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{426:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"review__lists"},[n("li",{staticClass:"review__item"},[n("AddItem",{attrs:{disabled:e.isFormShow},nativeOn:{click:function(t){return e.$emit("addNewReview")}}},[e._v("Добавить"),n("br"),e._v("отзыв")])],1),e._l(e.reviews,function(t){return n("ReviewItem",{key:t.id,class:{edit:e.isFormShow&&e.editReviewId===t.id},attrs:{review:t,isFormShow:e.isFormShow},on:{editCurrentReview:e.editReview}})})],2)};r._withStripped=!0;var i=n(95);function o(e,t,n,r,i,o,c){try{var s=e[o](c),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={name:"ReviewList",props:{isFormShow:Boolean,editReviewId:{validator:function(e){return"number"==typeof e||null===e}}},components:{ReviewItem:function(){return n.e(11).then(n.bind(null,425))},AddItem:function(){return n.e(1).then(n.bind(null,424))}},computed:c({},Object(i.d)("reviews",{reviews:function(e){return e.reviews}})),methods:c({},Object(i.b)("reviews",["fetchReviews"]),{editReview:function(e){this.$emit("editReview",e)}}),created:function(){var e,t=(e=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.fetchReviews();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("error on load reviews");case 8:case"end":return e.stop()}},e,this,[[0,5]])}),function(){var t=this,n=arguments;return new Promise(function(r,i){var c=e.apply(t,n);function s(e){o(c,r,i,s,u,"next",e)}function u(e){o(c,r,i,s,u,"throw",e)}s(void 0)})});return function(){return t.apply(this,arguments)}}()},a=n(97),v=Object(a.a)(u,r,[],!1,null,"159f3d46",null);v.options.__file="src/admin/components/ReviewList.vue";t.default=v.exports}}]);