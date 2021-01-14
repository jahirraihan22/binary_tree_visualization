
var tree;
function setup() {
  createCanvas(600, 400);
  background(51);
  tree = new Tree();
  for (i = 0; i < 10; i++) {
    tree.addValue(floor(random(0, 100)));
  }
  tree.traverse(); // traverse tree
  var result = tree.searchInTree(10); // searching in tree
  if (result != null) {
    console.log(result)
  }
  else {
    console.log(result);
  }

  tree.traverse();
}
function draw() { // traverse tree

}

