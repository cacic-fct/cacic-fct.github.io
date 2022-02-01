import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss'],
})
export class ContributorsComponent implements OnInit {
  contributors: any = [
    {
      name: 'Renan Yudi Yaguinuma Bersan de Araujo',
      avatar: 'renan-araujo',
      emailAcademic: 'renan.yudi',
      lattes: '3507649024960199',
      website: 'https://yudi.github.io/',
      enrollmentYear: '2020',
      social: {
        github: 'yudi',
        instagram: 'yyaguinuma',
      },
    },
    {
      name: 'Willian Yoshio Murayama',
      emailAcademic: 'willian.murayama',
      avatar: 'willian-murayama',
    },
  ];
  socialMedia = {
    linkedin: 'https://linkedin.com/in/',
    twitter: 'https://twitter.com/',
    facebook: 'https://fb.com/',
    instagram: 'https://instagram.com/',
    youtube: 'https://youtube.com/c/',
    medium: 'https://medium.com/@',
    flickr: 'https://flickr.com/photos/',
    twitch: 'https://twitch.tv/',
    soundcloud: 'https://soundcloud.com/',
    spotify: 'https://open.spotify.com/user/',
    reddit: 'https://reddit.com/u/',
    deviantart: 'https://deviantart.com/',
    steam: 'https://steamcommunity.com/id/',
    xbox: 'http://live.xbox.com/Profile?Gamertag=',
  };
  constructor() {}

  ngOnInit() {
    this.contributors.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
}
