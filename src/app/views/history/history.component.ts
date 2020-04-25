import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
    public startDate: string;
    public finishDate: string;

    constructor() { }

    ngOnInit(): void {
    }

    public parseDate(input: string): string {
        let clearedInput: string = input.replace(/\D+/gm, '');
        
        if (clearedInput.length >= 2 && clearedInput.length < 4) {
            clearedInput = clearedInput.replace(/(\d{2})/, "\$1/");
        } else if (clearedInput.length >= 4 && clearedInput.length < 8) {
            clearedInput = clearedInput.replace(/(\d{2})(\d{2})/, "\$1/\$2/");
        } else if (clearedInput.length >= 8) {
            clearedInput = clearedInput.replace(/(\d{2})(\d{2})(\d{4})/, "\$1/\$2/\$3");
        }

        return clearedInput;
    }

}
