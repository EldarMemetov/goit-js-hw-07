const ulContainer = document.getElementById(".categories");

const liItem = document.querySelectorAll(".item");

console.log(`Number of categories: ${liItem.length}`);

liItem.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;

  const categoryItems = item.querySelectorAll("li").length;

  console.log(`Category: ${categoryName}`);

  console.log(`Elements: ${categoryItems}`);
});
