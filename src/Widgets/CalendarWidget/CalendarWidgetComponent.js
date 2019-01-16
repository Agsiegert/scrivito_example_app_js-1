import * as React from "react";
import * as Scrivito from "scrivito";
import CalendarDetail from './calendar_detail';
import eventTag from '../../utils/event_tag';
import fullScreenWidthPixels from "../../utils/fullScreenWidthPixels";
// import fullWidthTransformedUrl from '../../utils/full_width_transformed_url';

const SingleDay = ({
  className,
  day,
  onClick,
  hasEvent,
}) => (
  <div className={ !hasEvent? className: className + " " + eventTag(hasEvent.tags[0]) + ' event-indicator' }
    onClick={ hasEvent? onClick: null } >
    { day }
  </div>
);


class CalendarWidget extends React.Component {
  constructor() {
    super();
    this.state = {
      days: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      months: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
      ],
      weekDays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
      lastMonth: 11,
      month: 0,
      nextMonth: 1,
      year: 0,
      currentMonth: 0,
      currentYear: 0,
      calendar: [
        { id: 'week-1', data: [0, 0, 0, 0, 0, 0, 0] },
        { id: 'week-2', data: [0, 0, 0, 0, 0, 0, 0] },
        { id: 'week-3', data: [0, 0, 0, 0, 0, 0, 0] },
        { id: 'week-4', data: [0, 0, 0, 0, 0, 0, 0] },
        { id: 'week-5', data: [0, 0, 0, 0, 0, 0, 0] },
        { id: 'week-6', data: [0, 0, 0, 0, 0, 0, 0] },
      ],
      holidays: [],
      holiday: '',
    };

    this.previousCalendar = this.previousCalendar.bind(this);
    this.nextCalendar = this.nextCalendar.bind(this);
  }

  componentWillMount() {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    this.setState({
      currentMonth,
      currentYear,
      month: currentMonth,
      year: currentYear,
    });

    this.setCalendar(new Date(currentYear, currentMonth, 1));
  }

  setMonth(date) {
    const month = date.getMonth();
    const lastMonth = month === 0 ? 11 : month - 1;
    const nextMonth = month === 11 ? 0 : month + 1;

    this.setState({
      lastMonth,
      month,
      nextMonth,
    });

    return { lastMonth, month, nextMonth };
  }

  setCalendar(date) {
    const { lastMonth, month, nextMonth } = this.setMonth(date);
    const year = date.getFullYear();
    const weekday = date.getDay();
    const days = this.checkLeapYear(year);
    let nextMonthDay = 0;

    const firstWeek = this.state.calendar[0].data.map((day, index) => {
      let holiday = '';
      if (index < weekday) {
        const value = (days[lastMonth] - (weekday - index)) + 1;
        return {
          value,
          class: 'day--soft',
          month: lastMonth,
        };
      }
      const value = (index - weekday) + 1;
      return {
        value,
        class: '',
        month,
      };
    });
    const secondWeek = this.state.calendar[0].data.map((day, index) => {
      const value = firstWeek[6].value + index + 1;
      return {
        value,
        class: '',
        month,
      };
    });
    const thirdWeek = this.state.calendar[0].data.map((day, index) => {
      const value = secondWeek[6].value + index + 1;
      return {
        value,
        class: '',
        month,
      };
    });
    const forthWeek = this.state.calendar[0].data.map((day, index) => {
      const value = thirdWeek[6].value + index + 1;
      return {
        value,
        class: '',
        month,
      };
    });
    const fifthWeek = this.state.calendar[0].data.map((day, index) => {
      if (forthWeek[6].value + index + 1 > days[month]) {
        nextMonthDay += 1;
        return {
          value: nextMonthDay,
          class: 'day--soft',
          month: nextMonth,
        };
      }
      const value = forthWeek[6].value + index + 1;
      return {
        value,
        class: '',
        month,
      };
    });
    const sixthWeek = this.state.calendar[0].data.map((day, index) => {
      if (fifthWeek[6].value + index + 1 > days[month] || fifthWeek[6].value < 10) {
        nextMonthDay += 1;
        return {
          value: nextMonthDay,
          class: 'day--soft',
          month: nextMonth,
        };
      }

      const value = fifthWeek[6].value + index + 1;
      return {
        value,
        class: '',
        month,
      };
    });

    this.setState({
      month,
      year,
      calendar: [
        { id: 'week-1', data: firstWeek },
        { id: 'week-2', data: secondWeek },
        { id: 'week-3', data: thirdWeek },
        { id: 'week-4', data: forthWeek },
        { id: 'week-5', data: fifthWeek },
        { id: 'week-6', data: sixthWeek },
      ],
    });
  }

  checkLeapYear(year) {
    let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }
    this.setState({
      days,
    });
    return days;
  }

  previousCalendar() {
    const month = this.state.month !== 0 ? this.state.month - 1 : 11;
    const year = this.state.month !== 0 ? this.state.year : this.state.year - 1;
    this.setCalendar(new Date(year, month, 1));
  }

  nextCalendar() {
    const month = this.state.month !== 11 ? this.state.month + 1 : 0;
    const year = this.state.month !== 11 ? this.state.year : this.state.year + 1;
    this.setCalendar(new Date(year, month, 1));
  }

  allDates(date) {
    let allDates = [];
    for (var i in date) {
      let actDate = date[i].get('date') || false;
      let title = date[i].get('title') || '';
      let location = date[i].get('location') || '';
      let tags = date[i].get('tags') || [];
      let image = date[i].get('image') || '';
      if (actDate) {
        allDates.push({
          day: actDate.getDate(),
          month: actDate.getMonth(),
          title,
          location,
          tags,
          image,
        });
      }
    }
    return allDates;
  }

  hasEvent(date, month, day) {
    for (var i in date) {
      if(date[i].month == month) {
        if(date[i].day == day) {
          return date[i];
        }
      }
    }
    return false;
  }

  render() {
    const events = [...Scrivito.Obj.where('_objClass', 'equals', 'Event')];
    const allEvents = this.allDates(events);
    return (
      <div>
        <div className="col-sm-8">
          <div className="calendar">
            <div className="cal-head">
              <span className="button-container button-container--left">
                <button onClick={this.previousCalendar} className="button-content button-content--left" />
              </span>
              <span className="calendar-header-date">{`${this.state.months[this.state.month]} ${this.state.year}`}</span>
              <span className="button-container button-container--right">
                <button onClick={this.nextCalendar} className="button-content button-content--right" />
              </span>
            </div>
            <div className="week">
              {this.state.weekDays.map(weekDay => <div key={weekDay} className="weekday">{weekDay}</div>)}
            </div>
            {this.state.calendar.map(week =>
              <div key={week.id} className="week">
                {week.data.map(day =>
                  <SingleDay
                    key={`${day.month}${day.value}`}
                    className={`day ${day.class}`}
                    day={day.value < 10 && day.value !== ' ' ? `0${day.value}` : day.value}
                    events={allEvents}
                    hasEvent={this.hasEvent(allEvents, day.month, day.value)}
                    onClick={() => this.setState({preview: this.hasEvent(allEvents, day.month, day.value)})} />
                  ,
                )}
              </div>,
            )}
          </div>
        </div>
        <div className="col-sm-4">
          {this.state.preview?
            <CalendarDetail event={this.state.preview || false} />:
            null
          }
        </div>
        <div className="clearfix"/>
      </div>
    );
  }
}

Scrivito.provideComponent('CalendarWidget', CalendarWidget);




