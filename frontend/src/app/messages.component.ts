import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component ({
    selector: 'messages',
    template: `
      <div *ngFor="let message of messages">
        <mat-card style='margin: 8px'>
        <mat-card-title>{{ message.owner }}</mat-card-title>
        <mat-card-content>{{ message.text }} </mat-card-content>
        </mat-card>
      </div>
      `
})

export class MessagesComponent {
    constructor(private webService: WebService) {}

    async ngOnInit() {
      const response = await this.webService.getMessages();
      console.log(response.json);
    }

    messages = [{text: 'some text', owner: 'Tim'}, {text: 'other message', owner: 'Jane'}];
}
