var swiper = new Swiper(".MainSwiper", {
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

  var roomName = ["deluxe", "family", "suite"];
  var swiper = new Swiper(".RoomSwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' + className + '">' + roomName[index] + "</span>"
        );
      }
    }
  });

  var facilityName = ["야외풀", "사우나", "스파", "피트니스"];
  var swiper = new Swiper(".FacilitySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' + className + '">' + facilityName[index] + "</span>"
        );
      }
    }
  });