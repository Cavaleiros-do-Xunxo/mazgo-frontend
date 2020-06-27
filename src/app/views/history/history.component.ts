import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css'],
    providers: [HistoryService]
})
export class HistoryComponent implements OnInit {
    
    public startDate: string;
    public finishDate: string;
    public historys: any = [];

    public historyChanged = {
        START_DATE: '',
        FINISH_DATE: '',
    }

    constructor(private productHistory: HistoryService) { }

    ngOnInit(): void {
        this.getHistorys();
    }

    private hasSomethingChecked(): string {
        return this.startDate || this.finishDate;
    }

    public getHistorys(): void {
        this.productHistory.getHistorys().then(data => {
            let _historys = [];

            if (this.hasSomethingChecked() &&
                Array.isArray((data.items))){
                if (this.historyChanged.START_DATE){
                    _historys.push(...(data.items.filter(history => history.date)));
                }
                if (this.historyChanged.FINISH_DATE){
                    _historys.push(...(data.items.filter(history => history.date)));
                }
                if (_historys.length > 0){
                    _historys = _historys.filter(history => history.name.indexOf(this.historys.value) >= 0);
                }
            } else {
                    _historys = data.items;
            }
            this.historys = _historys;
        }).catch((e) => {
            console.log('Error fetching historys: ',e);
            this.historys = [];
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

    public getHistoryStatusClass(data: number): string {
        if ( data != null ){
          return String(data);
        }
    }

    public convertMilisec(data: number): string {
        var date = new Date(data); 
        return String(date);
    }
}
