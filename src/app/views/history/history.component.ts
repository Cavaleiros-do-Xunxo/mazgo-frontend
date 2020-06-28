import {Component, OnInit} from '@angular/core';
import {HistoryService} from 'src/app/services/history.service';
import {ProductHistory} from "../../models/ProductHistory";
import * as moment from 'moment';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css'],
    providers: [HistoryService]
})
export class HistoryComponent implements OnInit {

    public startDate: string;
    public finishDate: string;
    public history: ProductHistory[] = [];

    constructor(private productHistory: HistoryService) {
    }

    ngOnInit(): void {
        this.getHistory();
    }

    public getHistory(): void {
        this.productHistory.getHistory().subscribe(history => {
            this.history = history;
        }, (e) => {
            console.log('Error fetching history: ', e);
            this.history = [];
        });
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

    toTime(timestamp: string) {
        return moment(parseInt(timestamp)).local().format('DD/MM/YYYY HH:mm');
    }

}
