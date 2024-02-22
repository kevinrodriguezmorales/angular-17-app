import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'app-games',
    standalone: true,
    imports: [],
    templateUrl: './games.component.html',
    styleUrl: './games.component.scss'
})
export class GamesComponent {
    @Input() user: string = "";
    @Output() addFavoriteEvent = new EventEmitter<string>();
    games = [
        {
            id: 1,
            name: 'Uncharted 4'
        },
        {
            id: 2,
            name: 'Horizon Down'
        },
        {
            id: 3,
            name: 'Counter strike'
        }
    ]

    fav(gameName: string) {
        this.addFavoriteEvent.emit(gameName)
    }
}
