
var tree;
var x = document.querySelector("#value");
var values = [];
function calc() {
  values.push(parseInt(x.value));
  setup();
}
function setup() {
  createCanvas(600, 400);
  background(51);
  if (values.length > 0) {
    tree = new Tree();
    for (i = 0; i < values.length; i++) {
      tree.addValue(values[i]);
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

}

function draw() { // traverse tree

}

