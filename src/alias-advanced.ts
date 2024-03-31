type Directions = {
  up : string,
  down: string,
  right: string,
  left: string
}

type Rotate = Directions & {
  degree: number,
}

let direction = {
  up : "jump",
  down: "back",
  right: "move right",
  left: "move left"
};

let rotate:Rotate = {
  ...direction,
  degree: 40
}


function follow (dir: Directions) {
  console.log("Direction up : " + dir.up);
  console.log("Direction down : " + dir.down);
  console.log("Direction right : " + dir.right);
  console.log("Direction left : " + dir.left);
}


// follow(direction);


function follow_degree (DR: Rotate) {
  follow(DR);
  console.log("Rotate : " + DR.degree);
}

follow_degree(rotate)