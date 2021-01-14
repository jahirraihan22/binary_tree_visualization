
function Node(value, x, y) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.x = x;
    this.y = y;
    this.visited = false;
}

// n is a node
Node.prototype.addNode = function (n) {
    if (n.value < this.value) {
        if (this.left == null) {
            this.left = n;
            this.left.x = this.x - 50;
            this.left.y = this.y + 20;
        }
        else {
            this.left.addNode(n);
        }
    }
    else {
        if (this.right == null) {
            this.right = n;
            this.right.x = this.x + 50;
            this.right.y = this.y + 20;
        }
        else {
            this.right.addNode(n);
        }
    }
}
Node.prototype.visit = function (parent) {
    if (this.left != null) {
        this.left.visited = true;
        this.left.visit(this);
    }
    console.log(this.value);
    fill(255);
    noStroke();
    textAlign(CENTER);
    text(this.value, this.x, this.y);
    stroke(155);
    noFill();
    ellipse(this.x, this.y, 20, 20);
    line(parent.x, parent.y, this.x, this.y);
    if (this.right != null) {
        this.right.visited = true;
        this.right.visit(this);
    }
}
Node.prototype.searchInNode = function (value) {
    if (value == this.value) {
        return this;
    }
    else if (this.left != null && value < this.value) {
        return this.left.searchInNode(value);
    }
    else if (this.right != null && value > this.value) {
        return this.right.searchInNode(value);
    }
    return null;
}
