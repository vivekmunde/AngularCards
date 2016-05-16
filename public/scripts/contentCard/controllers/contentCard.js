angular.module('jContentCardsMod').controller('jContentCardCtrl', ['$scope', 
     function($scope) {
         this.goalKeepers = [{
             title:'Joe Hart',
             dob: '19/04/1987',
             height: '1.96m',
             weight: '91kg',
             age: '29',
             country: 'England',
             description: 'Charles Joseph John "Joe" Hart is an English professional footballer who plays as a goalkeeper for Premier League club Manchester City and the England national team.',
             backgroundImg: 'img/joe-hart.jpg'
         },{
             title:'David De Gea',
             dob: '07/11/1990',
             height: '1.92m',
             weight: '76kg',
             age: '25',
             country: 'Spain',
             description: 'David de Gea Quintana is a Spanish professional footballer who plays as a goalkeeper for English club Manchester United and the Spain national team.',
             backgroundImg: 'img/david-de-gea.jpg'
         },{
             title:'Kasper S',
             dob: '05/11/1986',
             height: '1.89m',
             weight: '84kg',
             age: '29',
             country: 'Denmark',
             description: 'Kasper Peter Schmeichel is a Danish professional footballer who plays as a goalkeeper for Premier League club Leicester City and the Denmark national team. Born in 1986, he is the son of former Manchester United goalkeeper Peter Schmeichel.',
             backgroundImg: 'img/kasper-schmeichel.jpg'
         },{
             title:'Petr Cech',
             dob: '20/05/1982',
             height: '1.96m',
             weight: '90kg',
             age: '33',
             country: 'Czech Republic',
             description: 'Petr Čech is a Czech professional footballer who plays as a goalkeeper for English club Arsenal and captains the Czech Republic national team. Čech has previously played for Chmel Blšany, Sparta Prague, Rennes and Chelsea.',
             backgroundImg: 'img/petr-cech.jpg'
         },{
             title:'Hugo Lloris',
             dob: '26/12/1986',
             height: '1.88m',
             weight: '73kg',
             age: '29',
             country: 'France',
             description: 'Hugo Lloris is a French professional footballer who plays as a goalkeeper and captains both English club Tottenham Hotspur and the French national team.',
             backgroundImg: 'img/hugo-lloris.jpg'
         },{
             title:'Adrián',
             dob: '03/01/1987',
             height: '1.90m',
             weight: '80kg',
             age: '29',
             country: 'Spain',
             description: 'Adrián San Miguel del Castillo, known simply as Adrián, is a Spanish professional footballer who plays for English club West Ham United as a goalkeeper. He started playing for Betis, making his debut with the first team in 2012.',
             backgroundImg: 'img/adrian.jpg'
         },{
             title:'Heurelho Gomes',
             dob: '15/02/1981',
             height: '1.91m',
             weight: '91kg',
             age: '35',
             country: 'Brazil',
             description: 'Heurelho da Silva Gomes, commonly known as Heurelho Gomes or just Gomes, is a Brazilian professional footballer who plays as a goalkeeper for Watford.',
             backgroundImg: 'img/heurelho-gomes.jpg'
         },{
             title:'Simon Mignolet',
             dob: '06/03/1988',
             height: '1.93m',
             weight: '87kg',
             age: '28',
             country: 'Belgium',
             description: 'Simon Luc Hildebert Mignolet is a Belgian professional footballer who plays as a goalkeeper for Premier League club Liverpool and the Belgium national team.',
             backgroundImg: 'img/simon-mignolet.jpg'
         }];
         
         this.strikers = [{
             title:'Harry Kane',
             description: 'Harry Edward Kane (born 28 July 1993) is an English professional footballer who plays as a forward for Premier League club Tottenham Hotspur and the England national team. He made his senior debut for Tottenham on 25 August 2011 in a UEFA Europa League match against Hearts.',
             backgroundImg: 'img/harry-kane.jpg'
         },{
             title:'Jamie Vardy',
             description: 'Jamie Richard Vardy (born 11 January 1987) is an English professional footballer who plays for Premier League club Leicester City and the England national team. He plays as a striker, but can also play as a winger.',
             backgroundImg: 'img/jamie-vardy.jpg'
         },{
             title:'Sergio Agüero',
             description: 'Sergio Leonel "Kun" Agüero (Spanish pronunciation: [ˈserxjo aˈɣweɾo]; born 2 June 1988) is an Argentine professional footballer who plays as a striker for English club Manchester City and the Argentina national team.',
             backgroundImg: 'img/sergio-aguero.jpg'
         },{
             title:'Romelu Lukaku',
             description: 'Romelu Menama Lukaku (born 13 May 1993) is a Belgian professional footballer who plays as a striker for Premier League club Everton and the Belgium national team. In January 2014, he was named by The Guardian as one of the ten most promising young players in Europe.',
             backgroundImg: 'img/romelu-lukaku.jpg'
         },{
             title:'Odion Ighalo',
             description: 'Odion Jude Ighalo (born 16 June 1989) is a Nigerian professional footballer who plays for English club Watford and the Nigerian national team as a striker. After starting his career at Prime and Julius Berger, he moved to Norway\'s Lyn in 2007.',
             backgroundImg: 'img/odion-ighalo.jpg'
         },{
             title:'Alexis Sánchez',
             description: 'Alexis Alejandro Sánchez Sánchez (Spanish pronunciation: [aˈleksis ˈsantʃes]; born 19 December 1988), known as Alexis Sánchez or simply Alexis, is a Chilean professional footballer who plays as a forward for English club Arsenal and the Chilean national team.',
             backgroundImg: 'img/alexis-sanchez.jpg'
         },{
             title:'Troy Deeney',
             description: 'Troy Matthew Deeney (born 29 June 1988) is an English professional footballer who plays for and captains Watford. He plays primarily as a striker . Deeney started his professional career at Walsall. He transferred to Football League Championship side Watford in 2010.',
             backgroundImg: 'img/troy-deeney.jpg'
         },{
             title:'Olivier Giroud',
             description: 'Olivier Giroud (French pronunciation: [ɔlivje ʒiʁu]; born 30 September 1986) is a French footballer who plays for English club Arsenal and the France national team. He plays as a striker and is known for his reliable goal scoring rate, size, technical ability, heading, powerful shot, link-up play and celebrations. ',
             backgroundImg: 'img/olivier-giroud.jpg'
         }];
     }]);