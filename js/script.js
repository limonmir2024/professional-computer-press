const slogans = [
  "✅ প্রযুক্তির গন্তব্য, নির্ভরযোগ্যতার প্রতীক।",
  "💻 কম্পিউটার ও প্রিন্টিং সমাধানে আপনার সেরা পার্টনার।",
  "⚡ দ্রুত, দক্ষ এবং নির্ভরযোগ্য ডিজিটাল সেবা।",
  "🖨️ প্রিন্টিং থেকে প্রযুক্তি—সব এক ছাদের নিচে।",
  "🛠️ আমরা দিচ্ছি প্রযুক্তির সর্বোচ্চ সেবা ও সাপোর্ট।"
];

let index = 0;
setInterval(() => {
  document.getElementById("slogan-text").textContent = slogans[index];
  index = (index + 1) % slogans.length;
}, 3000);

function addToCart(product) {
  alert(`${product} কার্টে যোগ হয়েছে!`);
}
