/* =====================================================================
   EVENTS — this is the only file you need to touch to add, remove, or
   update events. The events.html page reads this file automatically
   (it's loaded via a <script> tag, so just save and refresh the page
   — no server needed, works even opened locally).

   To add an event, copy a whole { ... } block below, paste it before
   the closing "];", and fill in the fields:

     title     – event name (required)
     date      – MUST be in "YYYY-MM-DD" format (e.g. "2026-07-14")
                 so the page can sort and display it correctly
     location  – city, venue, or "Online"
     thumbnail – an image URL (ideally 1920x1080 / 16:9), or ""
                 to show a placeholder with the date on it instead
     tag       – the ONE tag for this event. Use "" if it doesn't
                 have a tag yet — its card just won't show a pill.

   You don't need to worry about a trailing comma on the last entry —
   JavaScript allows it either way.
   ===================================================================== */

const eventsData = [
  { title:"AXR Double or Nothing",     date:"2026-07-11", location:"New York City",     thumbnail:"https://files.catbox.moe/cs1au5.png", tag:"Premium Live Event" },
   { title:"AXR All In",     date:"2026-08-22", location:"London, England",     thumbnail:"https://files.catbox.moe/d65oda.png", tag:"Premium Live Event" },
   { title:"AXR Dynamite: Debut Episode",     date:"2026-07-15", location:"Jacksonville, FL",     thumbnail:"https://files.catbox.moe/wq24j4.png", tag:"AXR Dynamite" },
   { title:"AXR Full Gear",     date:"2026-11-7", location:"Los Angeles, CA",     thumbnail:"https://cdn.discordapp.com/attachments/1517656570752794836/1519682379457761500/SAT_NOVEMBER_7.png?ex=6a3e7201&is=6a3d2081&hm=c98fccdbf23ddf063ac8f9cbbce6f45a3ccc3452cbff048b6693c7e59a5ae654&", tag:"Premium Live Event" },
];
