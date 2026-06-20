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
  { title:"Summer Pop-Up Launch",     date:"2026-07-11", location:"Brisbane, AU",     thumbnail:"", tag:"Pop-Up" },
  { title:"Studio Photoshoot Day",    date:"2026-07-18", location:"Sydney, AU",       thumbnail:"", tag:"Photoshoot" },
  { title:"Product Workshop",         date:"2026-07-25", location:"Online",           thumbnail:"", tag:"Workshop" },
  { title:"Press Preview Night",      date:"2026-08-02", location:"Melbourne, AU",    thumbnail:"", tag:"Press Day" },
  { title:"Annual Partner Conference",date:"2026-08-14", location:"Auckland, NZ",     thumbnail:"", tag:"Conference" },
  { title:"Flagship Store Opening",   date:"2026-08-20", location:"Brisbane, AU",     thumbnail:"", tag:"Launch" },
  { title:"Behind-the-Scenes Tour",   date:"2026-09-03", location:"Gold Coast, AU",   thumbnail:"", tag:"" },
  { title:"Fall Collection Workshop", date:"2026-09-10", location:"Online",           thumbnail:"", tag:"Workshop" },
  { title:"City Pop-Up Tour",         date:"2026-09-19", location:"Perth, AU",        thumbnail:"", tag:"Pop-Up" },
  { title:"Year-End Press Day",       date:"2026-10-02", location:"Sydney, AU",       thumbnail:"", tag:"Press Day" }
];
