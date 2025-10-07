const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
     header.addEventListener("click", () => {
          const item = header.parentElement;
          const icon = header.querySelector("img");

          // Toggle this item
          const isActive = item.classList.contains("active");
          item.classList.toggle("active");

          // Reset all icons and close other items
          document.querySelectorAll(".accordion-item").forEach(other => {
               if (other !== item) {
                    other.classList.remove("active");
                    const otherIcon = other.querySelector(".accordion-header img");
                    if (otherIcon) {
                         otherIcon.src = "assets/images/icon-plus.svg";
                    }
               }
          });

          // Change the icon depending on the new state
          if (icon) {
               icon.src = isActive
                    ? "assets/images/icon-plus.svg"
                    : "assets/images/icon-minus.svg";
          }
     });
});