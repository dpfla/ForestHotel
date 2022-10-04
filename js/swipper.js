
  var Mainswiper = new Swiper(".MainSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  var roomname = ["deluxe", "premiere", "suite"];
  var swiper = new Swiper(".RoomSwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' + className + '">' + roomname[index] + "</span>"
        );
      }
    }
  });

var roomname = ["deluxe", "premiere", "suite"];
      var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' + className + '">' + roomname[index] + "</span>"
            );
          }
        }
      });
