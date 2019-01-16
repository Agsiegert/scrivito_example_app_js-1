import eventTag from '../../utils/event_tag';

const CalendarDetail = ({
  event
}) => (
  <div className="calendar-detail">
    <div className="image-container">
      {event.image !== ''?
        <div style={ {
          background: 'no-repeat center / cover',
          height: '150px',
          borderRadius: '7px 7px 0 0',
          backgroundImage: `linear-gradient(rgba(46, 53, 60, 0.7),
            rgba(46, 53, 60, 0.7)),
            url(${event.image})`,
        } } />:
        null
      }
    </div>
    <p className="event-title">{event? event.title: 'leer'}</p>
    <i className="fa fa-map-marker fa-2x" title="location"></i>
    <p className="event-location">{event? event.location: 'leer'}</p>
    <div className="event-tags">
      {event.tags.map((tag, i) =>
        <span className={'label ' + eventTag(tag)}
          key={i}>
          {tag}
        </span>
      )}
    </div>
  </div>
);

export default CalendarDetail;
