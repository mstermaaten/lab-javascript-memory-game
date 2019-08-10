class MemoryGame {
  constructor(card) {
    this.cards = cards;
    this.selectedCards = [];
    this.rightQuess = 0;
  }

  checkCards() {
    const name1 = this.selectedCards[0].dataset.cardname;
    const name2 = this.selectedCards[1].dataset.cardname;
    // const anotherName = $(this.selectedCards[0]).data("cardname");
    if (name1 === name2) {
      this.rightQuess += 1;
      console.log(this.rightQuess);
      this.selectedCards = [];
    } else {
      switchCardBack(this.selectedCards[0], this.selectedCards[1]);
      this.selectedCards = [];
    }
    $("#pairs_guessed").text(`${memoryGame.rightQuess}`);
  }
  shuffleCards() {}
  isFinished() {}
}

function switchCardBack(a, b) {
  setTimeout(function() {
    $(a)
      .children()
      .toggleClass("front back");
    $(b)
      .children()
      .toggleClass("front back");
  }, 1000);
}
