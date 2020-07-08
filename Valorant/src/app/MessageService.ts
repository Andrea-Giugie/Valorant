import { Observable, Subject, } from 'rxjs';
export class MessageService {
    private winrate = new Subject<number>();
    getMessage(): Observable<number> {
        return this.winrate.asObservable();
    }
    updateMessage(message: number) {
        this.winrate.next(message);
    }
}