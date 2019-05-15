import EventLog from '../../json/EventsLog.js'

let _initEventsPage;

_initEventsPage = (data) => {
let eventPage = $('#events-page');
  $.each(data.events, (index, value)=>{
      let template = "<div class=\"event-wrapper\">\n" +
          "        <div class=\"event__image-wrapper\">\n" +
          "            <img  class=\"event__image\" src=\"" + value.imageUrl + "\" alt=\"\">\n" +
          "        </div>\n" +
          "        <div class=\"event__text-wrapper\">\n" +
          "            <div class=\"event__date-wrapper\">\n" +
          "                <span>Захід відбувся: </span><a href=\"" + value.moreInfoURL + "\"<span class=\"event__date\">" + value.eventDate + "</span></a>\n" +
          "            </div>\n" +
          "            <div class=\"event__description-wrapper\">\n" +
          "                <div class=\"event__description-text\">\n" +
          "                    <span>\n " + value.eventDescription + " </span>\n" +
          "                </div>\n" +
          "            </div>\n" +
          "            <div class=\"event__details-wrapper\">\n" +
          "                <a href=\"" + value.moreInfoURL + "\" class=\"event__details-link\">Детальніше →</a>\n" +
          "            </div>\n" +
          "        </div>\n" +
          "    </div>";

      eventPage.append(template);
  });
};
console.log($(window), '1');

$(window).on('event-page-init', () => {
    _initEventsPage(EventLog);
    console.log("triggered");
});