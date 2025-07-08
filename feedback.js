function submitFeedback() {
  const comment = document.getElementById('commentBox').value;
  if (comment.trim().length > 0) {
    document.getElementById('statusMsg').textContent = "✅ Thank you for your feedback!";
    document.getElementById('commentBox').value = "";
  } else {
    document.getElementById('statusMsg').textContent = "⚠️ Please enter a comment before submitting.";
  }
}
