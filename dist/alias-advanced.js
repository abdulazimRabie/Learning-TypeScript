"use strict";
let direction = {
    up: "jump",
    down: "back",
    right: "move right",
    left: "move left"
};
let rotate = Object.assign(Object.assign({}, direction), { degree: 40 });
function follow(dir) {
    console.log("Direction up : " + dir.up);
    console.log("Direction down : " + dir.down);
    console.log("Direction right : " + dir.right);
    console.log("Direction left : " + dir.left);
}
// follow(direction);
function follow_degree(DR) {
    follow(DR);
    console.log("Rotate : " + DR.degree);
}
follow_degree(rotate);
