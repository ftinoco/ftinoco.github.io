// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function () {
  $('#frmContact1').on('submit', function (e) { e.preventDefault(); }); 
  $('#frmContact1').validate({
    rules: {
      message: 'required',
      name: 'required',
      Subject: 'required',
      _replyto: 'required'
    },
    errorPlacement: function (label, element) {
      if ($(element).parent().hasClass('input-group')) {
          label.insertAfter($(element).parent()).addClass('mt-2 invalid-feedback');
      } else {
          label.addClass('mt-2 invalid-feedback');
          label.insertAfter(element);
      }
    },
    submitHandler: function (form, e) { 
      if ($(form).valid()) {
        let data = {
          message: $('[name="message"]').val(),
          name: $('[name="name"]').val(),
          Subject: $('[name="Subject"]').val(),
          _replyto: $('[name="_replyto"]').val()
        };

        $.ajax({
          url: $(form).attr('action'),
          type: 'post',
          data: JSON.stringify(data),
          //dataType: 'json',
          contentType: 'application/json',
          success: function (res) { 
            if (res.toLowerCase() === 'sent') {
              Swal.fire({
                icon: 'success',
                title: 'Email was sent.',
                text: 'Thanks for contacting me. I will contact you as soon as possible'
              }).then(() => {
                $('#frmContact :input').val(null);
              });
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
              });
            }
          }
        }).fail(function (err) {
          console.log(err);
        });
      } 
    }
  });
 
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
