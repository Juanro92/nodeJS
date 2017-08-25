var total = 0;
process.argv.slice(2).forEach(function(element) {
  total += Number(element);
});
console.log(total);