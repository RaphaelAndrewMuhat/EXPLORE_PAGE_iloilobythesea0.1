    function openModal(modalId) {
        document.getElementById(modalId).style.display = "flex";
        $("#wrapper").show();
      }
      
      function closeModal(modalId) {
        document.getElementById(modalId).style.display = "none";
        $("#wrapper").hide();
      }