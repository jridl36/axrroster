
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
 { name:"Jay Storm",     role:"",       photo:"https://pbs.twimg.com/profile_images/2058520499186171904/cVRniGX3_400x400.jpg", tag:"" },
   { name:"Nick Storm",     role:"",       photo:"", tag:"" },
   { name:"Aaron Winters",     role:"",       photo:"", tag:"" },
   { name:"MJF",     role:"Maxwell Jacob Friedman",       photo:"", tag:"AEW World Champion" },
   { name:"Adam Copeland",     role:"",       photo:"", tag:"AEW World Tag Team Champion" },
   { name:"Christian Cage",     role:"",       photo:"", tag:"AEW World Tag Team Champion" },
];
