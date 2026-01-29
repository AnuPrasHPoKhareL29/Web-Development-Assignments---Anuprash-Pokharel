function printTriangle(n) {
  let stars = "";

  for (let i = 1; i <= n; i++) {
    stars += "*";
    console.log(stars);
  }
}

// Example usage
printTriangle(5);
