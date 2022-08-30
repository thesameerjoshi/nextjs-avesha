import React from 'react'
import Image from 'next/image'

const Card = ({events}) => {
  return (
    <>
          <div className="tab-video-content">
          {events.map((tevent) => {return (
                <div key={tevent.type}>
              <div className="sec-head">
                  <div className="row justify-content-md-between align-items-center">
                      <div className="col-12">
                          <div className="text-20 fnt-700 text-51e mb-0">{tevent.type}</div>
                      </div>
                  </div>
              </div>
              <div className="row whitepaper-list">
                {tevent.posts.map((event) => 
                  <div className="whitepaper-list__item col-12 col-md-6 col-lg-4" key={event.title}>
                      <a className="paper-info avr-paper-info" href="https://avesha.io/events/onug-fall-2022/">
                          <div className="paper-info__img avr-paper-info__img">
                              <Image src={event.image} height={180} width={350} alt={event.alt}/>
                          </div>
                          <div className="avr-event-footer">
                              <div className="paper-tag-info text--sm mb-3">
                                    <span className="paper-tag-info__title">{event.eventsLocation}</span>
                                  <span className="calendar-tag">
                                      <Image src="https://avesha.io/wp-content/uploads/2022/02/calendar.svg" height={1} width={1} alt='' />
                                      {event.date}                                                                                    </span>
                              </div>
                                <h3 className="paper-title text-51e mb-30">{event.title}</h3>
                              <div className="mt-md-auto avr-ready-more">
                                  <div className="link"><span className="text-16 text-8f3 fnt-500">Know More</span><i className="icon-Arrow---Right link__ar"></i>
                                  </div>
                              </div>
                          </div>
                      </a>
                  </div>
                  )}
              </div>
              </div>
               )})}
          </div>
    </>
  )
}

export default Card