import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [GamesComponent],
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss'
})
export class UserComponent {
    username = "Kevin"
    isLoggedIn = false
    favGame = ""

    getFavoriteGame(gameName: string) {
        this.favGame = gameName
    }

    greet() {
        alert("Hello!")
    }
}
