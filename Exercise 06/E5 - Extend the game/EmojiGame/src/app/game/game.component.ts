import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  public playerIcon = "🤓";
  public playerX = 3;
	public walkableTiles = ["➖","🌊","🌉","⬆️","⬇️","🏁","🕶"];
  public gameOver = false;
  public lost = false;
  public tiles: Array<{ index: number, emoji: string }>;

  constructor() { 
    let s = ["⛔️","➖","➖","➖","➖","➖","➖","➖","➖","⬆️","➖","➖","➖","➖","➖","➖",
              "🌊","🌊","🌊","🌊","🌊","🌊","🌊","🌊","➖","➖","➖","➖","➖","🏁","➖","⛔️"];
    let s2 = ["⛔️","➖","🏁","➖","➖","🌞","➖","➖","➖","➖","➖","⬆️","➖","➖",
              "🌊","🌊","🌊","🌊","➖","➖","➖","🕶","➖","⛔️"];
    
    // level 2
    s = s2;
    this.playerX = 7;
    // level 2

    this.tiles = []; 
    for (let i=0; i<s.length; i++) {
      this.tiles.push({ index: i, emoji: s[i] });
    }
  }

  public left() {
		let newX = this.playerX - 1;
		if (this.walkableTiles.indexOf(this.tiles[newX].emoji) != -1) {
      this.playerX = newX;
      if (this.tiles[this.playerX].emoji == '🏁') this.gameOver = true;
      else if (this.tiles[this.playerX].emoji == '🌊') {
        this.gameOver = true;
        this.lost = true;
      }
      else if (this.tiles[this.playerX].emoji == '🕶') {
        this.playerIcon = "😎";
        this.walkableTiles.push("🌞");
        this.tiles[this.playerX].emoji = "➖";
      }
		}
  }

  public right() {
		let newX = this.playerX + 1;
		if (this.walkableTiles.indexOf(this.tiles[newX].emoji) != -1) {
      this.playerX = newX;
      if (this.tiles[this.playerX].emoji == '🏁') this.gameOver = true;
      else if (this.tiles[this.playerX].emoji == '🌊') {
        this.gameOver = true;
        this.lost = true;
      }
      else if (this.tiles[this.playerX].emoji == '🕶') {
        this.playerIcon = "😎";
        this.walkableTiles.push("🌞");
        this.tiles[this.playerX].emoji = "➖";
      }
		}
  }

	public jump() {
		if (this.tiles[this.playerX].emoji == '⬆️') {
      this.tiles[this.playerX] = { index: this.playerX, emoji: '⬇️' };
      for (let i=0; i<this.tiles.length; i++) {
        if (this.tiles[i].emoji == '🌊') this.tiles[i].emoji = '🌉';
      }
    }
    else if (this.tiles[this.playerX].emoji == '⬇️'){
      this.tiles[this.playerX] = { index: this.playerX, emoji: '⬆️' };
      for (let i=0; i<this.tiles.length; i++) {
        if (this.tiles[i].emoji == '🌉') this.tiles[i].emoji = '🌊';
      }
    }
  }
}

