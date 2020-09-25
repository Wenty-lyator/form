$(document).ready(function () {
   $('#bronze').click(function () {
      $(".bronze").toggleClass('form__subscription-bronze');
   });
});
$(document).ready(function () {
   $('#silver').click(function () {
      $(".silver").toggleClass('form__subscription-silver');
   });
});
$(document).ready(function () {
   $('#gold').click(function () {
      $(".gold").toggleClass('form__subscription-gold');
   });
});

$(document).ready(function () {
   $('#gender-male').click(function () {
      $(".form__gender-male").toggleClass('form__gender-male-active');
   });
});

$(document).ready(function () {
   $('#gender-female').click(function () {
      $(".form__gender-female").toggleClass('form__gender-female-active');
   });
});