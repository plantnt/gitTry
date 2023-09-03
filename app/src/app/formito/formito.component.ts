import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-formito',
  templateUrl: './formito.component.html',
  styleUrls: ['./formito.component.css']
})
export class FormitoComponent implements AfterViewInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    const pkmnSelect = this.el.nativeElement.querySelector("#pkmn-name") as HTMLSelectElement;
    const pkmnSprite = this.el.nativeElement.querySelector("#pkmn-img") as HTMLDivElement;
    const pkmnGenre: string[] = ["003","012","019","020","025","026","041","042","044","045","064","065","084","085","097","111","112","118","119",
    "123","129","130"]

    
    console.log(pkmnSelect)
    pkmnSelect.addEventListener("change", () => {
      const selectedPkmn = pkmnSelect.value;
      const pkmnDiff = pkmnGenre.includes(selectedPkmn)
      if (selectedPkmn) {
        const spritePkmn = this.renderer.createElement("img");
        if(pkmnDiff){
          spritePkmn.src = `https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_${selectedPkmn}_f.gif`;
          spritePkmn.alt = selectedPkmn;
          spritePkmn.style.maxWidth = "100%";
        } else {
          spritePkmn.src = `https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_${selectedPkmn}.gif`;
          spritePkmn.alt = selectedPkmn;
          spritePkmn.style.maxWidth = "100%";
        }

        if (pkmnSprite.firstChild) {
          this.renderer.removeChild(pkmnSprite, pkmnSprite.firstChild);
        }
        
        this.renderer.appendChild(pkmnSprite, spritePkmn);
      } else {
        
        if (pkmnSprite.firstChild) {
          this.renderer.removeChild(pkmnSprite, pkmnSprite.firstChild);
        }
      }
    });
  }
}

class pkmnWeaknesses{
  
}