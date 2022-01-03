import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  color = '#ffffff';

  ngOnInit(): void {
    chrome.storage.sync.get('color', ({ color }) => {
      this.color = color;
    });
  }

  public updateColor(color: string) {
    chrome.storage.sync.set({ color});
  }

  public async colorize() {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => {
        chrome.storage.sync.get("color", ({ color }) => {
          document.body.style.backgroundColor = color;
        })
      },
    });
  }
}
