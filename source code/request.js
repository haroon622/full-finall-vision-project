document.getElementById('open-box-btn').addEventListener('click', function() {
  // Hide all service boxes
  document.querySelectorAll('.service-box').forEach(function(box) {
    box.style.display = 'none';
  });

  // Get the selected service
  var selectedService = document.getElementById('service-Select').value;

  // Show the selected service box
  if (selectedService) {
    document.getElementById(selectedService).style.display = 'block';
  }
});

// notification count 
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM fully loaded and parsed");

  const serviceSelect = document.getElementById('service-Select');
  const submitBtns = document.getElementsByClassName('submit-btn');
  const notificationIcon = document.getElementById('notification-icon');
  const notificationCount = document.getElementById('notification-count');
  const notificationDropdown = document.getElementById('notificationDropdown');
  const notificationList = document.getElementById('notification-list');

  
  let selectedServicesCount = 0;

  document.getElementById('open-box-btn').addEventListener('click', function() {
      console.log("Open box button clicked");

      // Hide all service boxes
      document.querySelectorAll('.service-box').forEach(function(box) {
          box.style.display = 'none';
      });

      // Get the selected service
      var selectedService = serviceSelect.value;
      console.log("Selected service:", selectedService);

      // Show the selected service box
      if (selectedService) {
          document.getElementById(selectedService).style.display = 'block';
      }
  });

  Array.from(submitBtns).forEach(submitBtn => {
      submitBtn.addEventListener('click', function(event) {
          event.preventDefault();
          console.log("Submit button clicked");

          const selectedService = serviceSelect.value;
          console.log("Selected service before reset:", selectedService);

          if (selectedService !== "") {
              selectedServicesCount++;
              updateNotificationCount();
              addNotification(serviceSelect.options[serviceSelect.selectedIndex].text, getSelectedOffers(this));
              serviceSelect.value = ""; // Reset the dropdown after selection
          }

          // Get selected checkboxes
          const selectedOffers = getSelectedOffers(this);

          // Store the selected service and selected checkboxes in localStorage
          localStorage.setItem("selectedService", selectedService);
          localStorage.setItem("selectedOffers", JSON.stringify(selectedOffers));

          console.log("Stored selected service:", selectedService);
          console.log("Stored selected offers:", selectedOffers);

          // Redirect to pr.html
          window.open("pr.html","_blank");
      });
  });

  function getSelectedOffers(context) {
      const selectedOffers = [];
      const offers = context.parentElement.querySelectorAll('input[name="offer"]:checked');
      offers.forEach(function(offer) {
          selectedOffers.push(offer.value);
      });
      return selectedOffers;
  }

  function updateNotificationCount() {
      notificationCount.textContent = selectedServicesCount;
  }

});
// notification drop down list
  const notificationIcon = document.getElementById('notification-icon');
  const notificationDropdown = document.getElementById('notificationDropdown');

  notificationIcon.addEventListener('click', function() {
    notificationDropdown.style.display = notificationDropdown.style.display === 'block' ? 'flex' : 'none';
  });