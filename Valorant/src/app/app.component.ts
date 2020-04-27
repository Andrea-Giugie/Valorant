import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Valorant Coach';

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({ name: 'description', content: "The website for the valorant community giving player statistics" });
    this.metaTagService.updateTag({ name: 'tag', content: "Valorant, stats,statistics, get, better, profile, helper,help,vc,Valorant coach, coach" });
    //TODO: Make Other top-level components do this so the above content doesn't get stuck there!
  }
}
