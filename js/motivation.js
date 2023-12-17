
    // Check LocalStorage for cancel button click
    window.onload = function() {

      const currentDate = new Date().toISOString().split('T')[0];
      document.getElementById("postDate").value = currentDate; 
      submitDate();
      }

    // Function to handle post submission
    function submitDate() {
      const selectedDate = document.getElementById("postDate").value;
     const today = new Date().toISOString().split('T')[0];
      if (selectedDate > today) {
        // Future date selected
        alert("You cannot view future posts!");
      } else {
        const post = posts.find(item => item.date === selectedDate);
        if (post) {
          document.getElementById("post-date").textContent = post.date;
          document.getElementById("post").textContent = post.post;

        } else {
          document.getElementById("post").textContent = "Motivation is not found for today";
        }
      }
    }
