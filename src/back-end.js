function Galactic (age){
    this.age = age;
    this.average = 80;
}

Galactic.prototype.mercuryAge = function () {
    let age = this.age;
    const mercury = 0.24;
    let mercuryAge = (age / mercury);
    return mercuryAge;
  }
