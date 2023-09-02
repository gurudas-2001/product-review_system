document.addEventListener("DOMContentLoaded", function() {
    const reviewForm = document.getElementById("reviewForm");
    const reviewsList = document.getElementById("reviews");
    
    reviewForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const rating = document.getElementById("rating").value;
        const review = document.getElementById("review").value;
        
        const reviewItem = document.createElement("li");
        reviewItem.innerHTML = `<strong>${username}</strong> - Rating: ${rating}/5 <p>${review}</p>`;
        
        reviewsList.appendChild(reviewItem);
        
        // Clear form inputs
        document.getElementById("username").value = "";
        document.getElementById("rating").value = "";
        document.getElementById("review").value = "";
    });
});
