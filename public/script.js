fetch('/api/dashboard-data')
  .then(res => res.json())
  .then(data => {
    document.getElementById('facebook').innerText =
      `Facebook: ${data.facebook.followers} followers, ${data.facebook.likes} likes`;
    document.getElementById('twitter').innerText =
      `Twitter: ${data.twitter.followers} followers, ${data.twitter.likes} likes`;
  });

const ctx = document.getElementById('trendChart').getContext('2d');
const trendChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [{
      label: 'Followers Growth',
      data: [500, 800, 1200],
      borderColor: 'blue'
    }]
  }
});
