import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../contentful.service';

@Component({
  selector: 'app-meet-us',
  templateUrl: './meet-us.component.html',
  styleUrls: ['./meet-us.component.css']
})
export class MeetUsComponent implements OnInit {

  items = [
    { position: "Director",
      name: "Lucas Bagno",
      description: "Senior studying Entrepreneurial Management. Passionate about venture " +
      "capital, entrepreneurship and space exploration.",
      image: "/assets/headshots/lucas.jpg",
    },
    { position: "Co People Officer",
      name: "Adrian Houston",
      description: "Junior studying Human Resource Development with a minor in Italian " +
      "studies. Loves film and talking about pasta.",
      image: "/assets/headshots/adrian.jpg",
    },
    { position: "Head Of Stage Design",
      name: "Anna Maunu",
      description: "Sophomore majoring in Psychology and Sales Associate at Asics MOA. " +
      "Loves running, chatting and painting.",
      image: "/assets/headshots/annamanu.jpg",
    },
    { position: "Chief Creative Officer",
      name: "Anna McKenna",
      description: "Senior studying Graphic Design. Always in search of the next best " +
      "podcast and ice cream sundae.",
      image: "/assets/headshots/annamckenna.jpg",
    },
    { position: "Chief Technology Officer",
      name: "Ben Hamlen",
      description: "Junior studying mechanical engineering. Always trying to understand the" +
      " world around me",
      image: "/assets/headshots/ben.jpg",
    },
    { position: "Head Of Event Management",
      name: "Joanna Liu",
      description: "Junior studying Supply Chain and Marketing. Gopher hockey cheerleader," +
      " photographer, and ice cream lover.",
      image: "/assets/headshots/joanna.jpg",
    },
    { position: "Chief Marketing Officer",
    name: "Mark Moran",
    description: "Junior Studying Marketing and Business Analytics. Lover of travel, great food" +
    " and new experiences.",
    image: "/assets/headshots/mark.jpg",
    },
    { position: "Co-Attendee Experience Officer",
      name: "Sasidhar Vankina",
      description: "Sophomore studying Marketing and Management Information Systems. Avid fan of " +
      "music and all things wearable technology.",
      image: "/assets/headshots/sasidhar.jpg",
    },
    { position: "Co-People Officer",
      name: "Spencer Krueger",
      description: "Junior studying Information Systems and Computer Science. Passionate about travel, " +
      "cereal and rock climbing in no particular order.",
      image: "/assets/useThis.jpg",
    },
    { position: "",
      name: "Adit Gupta",
      description: "",
      image: "/assets/headshots/adit.jpg",
    },
    { position: "Attendee Experience Team Member",
      name: "Emma Froseth",
      description: "Junior studying Supply Chain and Non-Profit Management. Avid fan of " +
      "hiking, drinking coffee and summers spent outside.",
      image: "/assets/headshots/emma.jpg",
    },
    { position: "Curation Team Member",
      name: "Hannah Ihekoronye",
      description: "Loves to help speakers cultivate educational and inspirational speeches " +
      "by uncovering what is deep and authentic in someone's story.",
      image: "/assets/headshots/hannah.jpg",
    },
    { position: "",
      name: "Jared Eichburger",
      description: "",
      image: "/assets/headshots/jared.jpg",
    },
    { position: "Freshman Rotation Team Member",
      name: "Jillian McNett",
      description: "Freshman studying Journalism and Strategic Communication. Passionate about " +
      "writing, dogs and ice cream.",
      image: "/assets/headshots/jillian.jpg",
    },
    { position: "Event Management Team Member",
      name: "Madeline Kelly",
      description: "Senior graduating with a degree in Psychology and emphasis in Biology. Enjoys " +
      "reading, binging the latest Netflix show and exploring Minneapolis in all it's glory.",
      image: "/assets/headshots/madeline.jpg",
    },
    { position: "Stage Design Team Member",
    name: "Nhu",
    description: "Junior studying economics. Food and travel enthusiast.",
    image: "/assets/headshots/nhu.jpg",
    },
    { position: "",
      name: "Tharaniitharan Panchaliingam",
      description: "Sophomore studying Finance and Management Information Systems. International student that lives in Botswana" +
      " passionate about sustainability and using natural resources to advance society.",
      image: "/assets/headshots/tharan.jpg",
    }
  ]

  public button: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getButtonText()
      .then(button => this.button = button)
  }

}