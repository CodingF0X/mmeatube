import { AfterContentInit, Component, contentChildren } from '@angular/core';
import { Tab } from '../tab/tab';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tabs-container',
  imports: [NgClass],
  templateUrl: './tabs-container.html',
  styleUrl: './tabs-container.css',
})
export class TabsContainer implements AfterContentInit {
  tabs = contentChildren(Tab);

  ngAfterContentInit() {
    const activeTab = this.tabs().find((tab) => tab.active());

    if (!activeTab) {
      //if undefined ( = no active tab yet)
      this._selectTab(this.tabs()[0]); // first tab to always be the default tab
    }
  }

  private _selectTab(tab: Tab) {
    this.tabs().forEach((tab) => tab.active.set(false));

    tab.active.set(true);
  }

  selectTab(tab: Tab, e: Event) {
    e.preventDefault();
    this._selectTab(tab);
  }

  getTabClasses(tab: Tab) {
    return {
      'hover:text-indigo-400': !tab.active(),
      'hover:text-white text-white bg-indigo-400': tab.active(),
    };
  }
}
