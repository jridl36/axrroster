
/* =====================================================================
   ROSTER PEOPLE — this is the only file you need to touch to add,
   remove, or update people. The roster.html page reads this file
   automatically (it's loaded via a <script> tag, so just save and
   refresh the page — no server needed, works even opened locally).

   To add someone, copy a whole { ... } block below, paste it before
   the closing "];", and fill in the fields:

     name   – full name (required)
     role   – short title shown under their name
     photo  – a photo URL, or "" to show colored initials instead
     tag    – the ONE tag for this person. Use "" if they don't have
              a tag yet — their card just won't show a pill.

   You don't need to worry about a trailing comma on the last entry —
   JavaScript allows it either way.
   ===================================================================== */

const rosterData = [
 { name:"Jay Storm", role:"", photo:"https://pbs.twimg.com/profile_images/2058520499186171904/cVRniGX3_400x400.jpg", tag:"" },
  { name:"Nick Storm", role:"", photo:"", tag:"" },
  { name:"Aaron Winters", role:"", photo:"", tag:"" },
  { name:"MJF", role:"Maxwell Jacob Friedman", photo:"https://static.wixstatic.com/media/815952_2e1abd77a83d4f2ea2c66837d692ff12~mv2.jpg/v1/fill/w_268,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"AEW World Champion" },
  { name:"Adam Copeland", role:"Cope", photo:"https://static.wixstatic.com/media/815952_b8d28294e15b4dbe973477a4ff167487~mv2.jpg/v1/fill/w_238,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"AEW World Tag Team Champion" },
  { name:"Christian Cage", role:"The Patriarch", photo:"https://static.wixstatic.com/media/815952_f30fcaaf909e4422958d9b38cc73a69f~mv2.jpg/v1/fill/w_238,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"AEW World Tag Team Champion" },
  { name:"Adam Cole", role:"The Panama City Playboy", photo:"https://static.wixstatic.com/media/815952_67d8f8a6939b4e25877fdc651d7ab494~mv2.jpg/v1/fill/w_238,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"" },
  { name:"Hangman Adam Page", role:"The Cowboy", photo:"https://static.wixstatic.com/media/815952_a4bead11826f4b98a6be0795d71a7aee~mv2.png/v1/fill/w_238,h_238,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.png", tag:"" },
  { name:"Darby Allin", role:"", photo:"https://static.wixstatic.com/media/815952_b271d820597c4fdda12e475db1521716~mv2.jpg/v1/fill/w_238,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"" },
  { name:"Jon Moxley", role:"The Purveyor of Violence", photo:"", tag:"" },
  { name:"Kenny Omega", role:"The Cleaner", photo:"https://static.wixstatic.com/media/815952_17d7bea65cc94f31b758813403f281cf~mv2.jpg/v1/fill/w_238,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"" },
  { name:"Kazuchika Okada", role:"The Rainmaker", photo:"https://static.wixstatic.com/media/815952_3c02ae2915514917830965a50c90849c~mv2.jpg/v1/fill/w_238,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"" },
  { name:"Will Ospreay", role:"The Aerial Assassin", photo:"", tag:"" },
  { name:"Swerve Strickland", role:"Whose House?", photo:"", tag:"" },
  { name:"Samoa Joe", role:"The Samoan Submission Machine", photo:"", tag:"" },
  { name:"Orange Cassidy", role:"Freshly Squeezed", photo:"", tag:"" },
  { name:"Ricochet", role:"The One and Only", photo:"", tag:"" },
  { name:"Bobby Lashley", role:"The Almighty", photo:"", tag:"" },
  { name:"Shelton Benjamin", role:"The Gold Standard", photo:"", tag:"" },
  { name:"MVP", role:"", photo:"", tag:"" },
  { name:"Jay White", role:"Switchblade", photo:"", tag:"" },
  { name:"Juice Robinson", role:"Rock Hard", photo:"", tag:"" },
  { name:"Austin Gunn", role:"", photo:"", tag:"" },
  { name:"Colten Gunn", role:"", photo:"", tag:"" },
  { name:"Dax Harwood", role:"", photo:"", tag:"" },
  { name:"Cash Wheeler", role:"", photo:"", tag:"" },
  { name:"Matt Jackson", role:"", photo:"", tag:"" },
  { name:"Nick Jackson", role:"", photo:"", tag:"" },
  { name:"Kyle Fletcher", role:"The Protostar", photo:"", tag:"" },
  { name:"Konosuke Takeshita", role:"The Alpha", photo:"https://static.wixstatic.com/media/815952_036cafb4e2ea4a8d98529be934cea744~mv2.jpg/v1/fill/w_268,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"AEW International Champion" },
  { name:"Mark Davis", role:"Dunkzilla", photo:"", tag:"" },
  { name:"Kyle O'Reilly", role:"", photo:"", tag:"" },
  { name:"Roderick Strong", role:"The Messiah of the Backbreaker", photo:"", tag:"" },
  { name:"Mark Briscoe", role:"Dem Boy", photo:"", tag:"" },
  { name:"Claudio Castagnoli", role:"The Swiss Superman", photo:"", tag:"" },
  { name:"PAC", role:"The Bastard", photo:"", tag:"" },
  { name:"Wheeler Yuta", role:"", photo:"", tag:"" },
  { name:"Daniel Garcia", role:"Red Death", photo:"", tag:"" },
  { name:"Hook", role:"The Cold-Hearted Handsome Devil", photo:"", tag:"" },
  { name:"Anthony Bowens", role:"The 5 Tool Player", photo:"", tag:"" },
  { name:"Max Caster", role:"Platinum", photo:"", tag:"" },
  { name:"Jack Perry", role:"Jungle Boy", photo:"", tag:"" },
  { name:"Nick Wayne", role:"The Prodigy", photo:"", tag:"" },
  { name:"Luchasaurus", role:"Killswitch", photo:"", tag:"" },
  { name:"Kip Sabian", role:"Superbad", photo:"", tag:"" },
  { name:"Big Bill", role:"", photo:"", tag:"" },
  { name:"Bryan Keith", role:"The Bounty Hunter", photo:"", tag:"" },
  { name:"Bandido", role:"", photo:"", tag:"" },
  { name:"Brody King", role:"", photo:"", tag:"" },
  { name:"Buddy Matthews", role:"", photo:"", tag:"" },
  { name:"Malakai Black", role:"", photo:"", tag:"" },
  { name:"Adam Priest", role:"", photo:"", tag:"" },
  { name:"Alec Price", role:"Prize City", photo:"", tag:"" },
  { name:"Jordan Oliver", role:"The East Coast Ace", photo:"", tag:"" },
  { name:"Kevin Knight", role:"The Jet", photo:"", tag:"" },
  { name:"Komander", role:"", photo:"", tag:"" },
  { name:"Hologram", role:"", photo:"", tag:"" },
  { name:"Mistico", role:"", photo:"", tag:"" },
  { name:"Mascara Dorada", role:"", photo:"", tag:"" },
  { name:"Rush", role:"El Toro Blanco", photo:"", tag:"" },
  { name:"Sammy Guevara", role:"The Spanish God", photo:"", tag:"" },
  { name:"The Beast Mortos", role:"", photo:"", tag:"" },
];
