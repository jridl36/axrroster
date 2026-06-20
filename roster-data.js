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
     tag    – the ONE brand they're allocated to. Use "" if they
              aren't allocated to a brand yet — they'll show an
              "Unassigned" pill so gaps are easy to spot.

   You don't need to worry about a trailing comma on the last entry —
   JavaScript allows it either way.
   ===================================================================== */

const rosterData = [
  { name:"Aiko Tanaka",     role:"Brand Strategist",       photo:"", tag:"Lumen Goods" },
  { name:"Marcus Webb",     role:"Senior Stylist",         photo:"", tag:"Aster & Co" },
  { name:"Priya Anand",     role:"Account Lead",           photo:"", tag:"Northfield" },
  { name:"Liam O'Connor",   role:"Photographer",           photo:"", tag:"Birchwood Press" },
  { name:"Sofia Rinaldi",   role:"Creative Director",      photo:"", tag:"Solace Studio" },
  { name:"Daniel Kim",      role:"Production Coordinator", photo:"", tag:"" },
  { name:"Hannah Brooks",   role:"Copywriter",             photo:"", tag:"Northfield" },
  { name:"Omar Farouk",     role:"Talent Manager",         photo:"", tag:"Vantage Athletics" },
  { name:"Naledi Mokoena",  role:"Client Partner",         photo:"", tag:"Solace Studio" },
  { name:"Felix Bergström", role:"Social Media Manager",   photo:"", tag:"Aster & Co" },
  { name:"Grace Lin",       role:"Merchandiser",           photo:"", tag:"Vantage Athletics" },
  { name:"Theo Walsh",      role:"Event Producer",         photo:"", tag:"" },
  { name:"Inês Duarte",     role:"Content Editor",         photo:"", tag:"Birchwood Press" },
  { name:"Jasper Quinn",    role:"Influencer Liaison",     photo:"", tag:"Vantage Athletics" }
];
