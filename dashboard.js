// Inject AI suggestions
const suggestions = [
  "Increase stock for oversized jackets 🔥",
  "Reduce orders on wool scarves 🧣",
  "Boost availability of cotton tees ☀️",
];

const suggestionsList = document.getElementById("suggestions-list");
suggestions.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  suggestionsList.appendChild(li);
});

// Chart.js setup
const ctx = document.getElementById('demandChart').getContext('2d');
const demandChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jackets', 'Shoes', 'Tees', 'Hats'],
    datasets: [{
      label: 'Demand',
      data: [70, 55, 90, 40],
      backgroundColor: ['#ffb703', '#fb8500', '#219ebc', '#8ecae6']
    }]
  },
  options: {
    responsive: true
  }
});

// Refresh featured item
function refreshFeaturedItem() {
  const items = ["Denim Jacket", "Sneaker Set", "Graphic Tee", "Fleece Hoodie"];
  const featured = items[Math.floor(Math.random() * items.length)];
  document.getElementById("featuredItem").textContent = featured;
}
refreshFeaturedItem();
