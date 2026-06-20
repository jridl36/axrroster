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
];
