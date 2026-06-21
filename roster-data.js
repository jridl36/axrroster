
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
 { name:"Jay Storm", role:"", photo:"https://files.catbox.moe/h6v5ct.png", tag:"" },
  { name:"Nick Storm", role:"", photo:"https://files.catbox.moe/h0bisr.png", tag:"" },
  { name:"Aaron Winters", role:"", photo:"https://files.catbox.moe/k57vcj.png", tag:"" },
  { name:"MJF", role:"Maxwell Jacob Friedman", photo:"https://static.wixstatic.com/media/815952_2e1abd77a83d4f2ea2c66837d692ff12~mv2.jpg/v1/fill/w_268,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"AEW World Champion" },
  { name:"Adam Copeland", role:"Cope", photo:"https://static.wixstatic.com/media/815952_b8d28294e15b4dbe973477a4ff167487~mv2.jpg/v1/fill/w_238,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"AEW World Tag Team Champion" },
  { name:"Christian Cage", role:"The Patriarch", photo:"https://static.wixstatic.com/media/815952_f30fcaaf909e4422958d9b38cc73a69f~mv2.jpg/v1/fill/w_238,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"AEW World Tag Team Champion" },
  { name:"Adam Cole", role:"The Panama City Playboy", photo:"https://static.wixstatic.com/media/815952_67d8f8a6939b4e25877fdc651d7ab494~mv2.jpg/v1/fill/w_238,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"" },
  { name:"Hangman Adam Page", role:"The Cowboy", photo:"https://static.wixstatic.com/media/815952_a4bead11826f4b98a6be0795d71a7aee~mv2.png/v1/fill/w_238,h_238,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.png", tag:"" },
  { name:"Darby Allin", role:"", photo:"https://static.wixstatic.com/media/815952_b271d820597c4fdda12e475db1521716~mv2.jpg/v1/fill/w_238,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"" },
  { name:"Jon Moxley", role:"The Purveyor of Violence", photo:"https://files.catbox.moe/jpovy6.png", tag:"" },
  { name:"Kenny Omega", role:"The Cleaner", photo:"https://static.wixstatic.com/media/815952_17d7bea65cc94f31b758813403f281cf~mv2.jpg/v1/fill/w_238,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"" },
  { name:"Kazuchika Okada", role:"The Rainmaker", photo:"https://static.wixstatic.com/media/815952_3c02ae2915514917830965a50c90849c~mv2.jpg/v1/fill/w_238,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"" },
  { name:"Will Ospreay", role:"The Aerial Assassin", photo:"https://static.wixstatic.com/media/815952_e5acc36821e4423cb463b29b289d55d8~mv2.jpg/v1/fill/w_238,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"" },
  { name:"Swerve Strickland", role:"Whose House?", photo:"https://static.wixstatic.com/media/815952_ea000237fc514c65b1b321e55b76621c~mv2.jpg/v1/fill/w_238,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"" },
  { name:"Samoa Joe", role:"The Samoan Submission Machine", photo:"https://static.wixstatic.com/media/815952_66aa68a7ef9448029c58498e4587834c~mv2.jpg/v1/fill/w_238,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"" },
  { name:"Orange Cassidy", role:"Freshly Squeezed", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Ricochet", role:"The One and Only", photo:"https://static.wixstatic.com/media/815952_87f4b834f7554b868bb9e94e03995b55~mv2.jpg/v1/fill/w_238,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"" },
  { name:"Bobby Lashley", role:"The Almighty", photo:"https://static.wixstatic.com/media/815952_f97c131979fa40a982af6e12b1593874~mv2.jpg/v1/fill/w_238,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"" },
  { name:"Shelton Benjamin", role:"The Gold Standard", photo:"https://static.wixstatic.com/media/815952_e14b479136e443e8938456efc2d2d502~mv2.jpg/v1/fill/w_238,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"" },
  { name:"MVP", role:"", photo:"https://static.wixstatic.com/media/815952_f4321f7dca3c428998facb1649d23ac3~mv2.jpg/v1/fill/w_238,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"" },
  { name:"Jay White", role:"Switchblade", photo:"https://static.wixstatic.com/media/815952_00b1dea7d73b4adea8f548ba046eb80c~mv2.jpg/v1/fill/w_238,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"" },
  { name:"Juice Robinson", role:"Rock Hard", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Austin Gunn", role:"", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Colten Gunn", role:"", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Dax Harwood", role:"", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Cash Wheeler", role:"", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Matt Jackson", role:"", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Nick Jackson", role:"", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Kyle Fletcher", role:"The Protostar", photo:"https://static.wixstatic.com/media/815952_d089e72bb6df436295de9d3d0987e829~mv2.jpg/v1/fill/w_238,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"" },
  { name:"Konosuke Takeshita", role:"The Alpha", photo:"https://static.wixstatic.com/media/815952_036cafb4e2ea4a8d98529be934cea744~mv2.jpg/v1/fill/w_268,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rp-ph.jpg", tag:"AEW International Champion" },
  { name:"Mark Davis", role:"Dunkzilla", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Kyle O'Reilly", role:"", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Roderick Strong", role:"The Messiah of the Backbreaker", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Mark Briscoe", role:"Dem Boy", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Claudio Castagnoli", role:"The Swiss Superman", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"PAC", role:"The Bastard", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Wheeler Yuta", role:"", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Daniel Garcia", role:"Red Death", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Hook", role:"The Cold-Hearted Handsome Devil", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Anthony Bowens", role:"The 5 Tool Player", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Max Caster", role:"Platinum", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Jack Perry", role:"Jungle Boy", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Nick Wayne", role:"The Prodigy", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Luchasaurus", role:"Killswitch", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Kip Sabian", role:"Superbad", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Big Bill", role:"", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Bryan Keith", role:"The Bounty Hunter", photo:"", tag:"" },
  { name:"Bandido", role:"", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Brody King", role:"", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Buddy Matthews", role:"", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Malakai Black", role:"", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Adam Priest", role:"", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Alec Price", role:"Prize City", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Jordan Oliver", role:"The East Coast Ace", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Kevin Knight", role:"The Jet", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Komander", role:"", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Hologram", role:"", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Mistico", role:"", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Mascara Dorada", role:"", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Rush", role:"El Toro Blanco", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Sammy Guevara", role:"The Spanish God", photo:"https://files.catbox.moe/9m75lt.png", tag:"" },
  { name:"Vacant Championship", role:"", photo:"https://files.catbox.moe/b27o9v.png", tag:"AXR TNT Championship" },
   { name:"Trent O'Day", role:"", photo:"https://files.catbox.moe/9lth06.png", tag:"" },
   { name:"Bojack", role:"", photo:"https://files.catbox.moe/w4okql.png", tag:"" },
   { name:"Crinddle Miller", role:"", photo:"https://files.catbox.moe/evt3pp.png", tag:"" },
];
