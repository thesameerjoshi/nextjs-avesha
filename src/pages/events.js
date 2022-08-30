import React from 'react'
import Header from '@/components/events/Header'
import Card from '@/components/events/Card'


const Events = () => {
    const events = [
        {
            "type": "Upcomming Events",
            "posts": [
                {
                    "title": "ONUG Fall 2022",
                    "date": "Oct 19, 2022",
                    "image": "https://avesha.io/wp-content/uploads/2022/08/ONUG_Event_v02.jpg",
                    "link": "",
                    "eventsLocation": "In-person Event"
                },
                {
                    "title": "Kubecon + cloudnativeCon North America",
                    "date": "oct 24, 2022",
                    "image": "https://avesha.io/wp-content/uploads/2022/07/Kubecon_Avesha_2022_04-1.jpg",
                    "link": "",
                    "eventsLocation": "In-person Event"
                },
            ]
        },
        {
            "type": "Past Events",
            "posts": [
                {
                    "title": "KubeSlice Office Hours",
                    "date": "Aug 25, 2022",
                    "image": "https://avesha.io/wp-content/uploads/2022/08/KubeSlice_Office_Hours_03.jpg",
                    "link": "",
                    "eventsLocation": "Google meet"
                },
                {
                    "title": "TFIR Podcast",
                    "date": "Aug 24, 2022",
                    "image": "https://avesha.io/wp-content/uploads/2022/08/TFiR-podcast_01.jpg",
                    "link": "",
                    "eventsLocation": "YouTube Live"
                },
                {
                    "title": "Cox and Avesha Webinar",
                    "date": "Jul 27, 2022",
                    "image": "https://avesha.io/wp-content/uploads/2022/07/COX_Avesha_2022_v02_02.jpg",
                    "link": "",
                    "eventsLocation": "YouTube Live"
                },
                {
                    "title": "phoenixNAP and Avesha webinar",
                    "date": "Oct 19, 2022",
                    "image": "https://avesha.io/wp-content/uploads/2022/07/PhoenixNAP_Avesha_2022_v02_02.jpg",
                    "link": "",
                    "eventsLocation": "YouTube Live"
                },
                {
                    "title": "Open Source Summit NA",
                    "date": "Oct 19, 2022",
                    "image": "https://avesha.io/wp-content/uploads/2022/07/OSS_Avesha_2022_06.jpg",
                    "link": "",
                    "eventsLocation": "In-person Event"
                },
                {
                    "title": "BrainWave podcast",
                    "date": "Oct 19, 2022",
                    "image": "https://avesha.io/wp-content/uploads/2022/07/Brainwave_Avesha_2022_08_new.jpg",
                    "link": "",
                    "eventsLocation": "YouTube Live"
                },
                {
                    "title": "KubeCon + CloudNativeCon - Europe 2022",
                    "date": "Oct 19, 2022",
                    "image": "https://avesha.io/wp-content/uploads/2022/03/Frame-7910.png",
                    "link": "",
                    "eventsLocation": "In-person Event"
                },
                {
                    "title": "5G Open Innovation Lab",
                    "date": "Oct 19, 2022",
                    "image": "https://avesha.io/wp-content/uploads/2022/03/Frame-7911.png",
                    "link": "",
                    "eventsLocation": "In-person Event"
                },
                {
                    "title": "Mobile World Congress, barcelona 2022",
                    "date": "Oct 19, 2022",
                    "image": "https://avesha.io/wp-content/uploads/2022/03/Frame-7912.png",
                    "link": "",
                    "eventsLocation": "In-person Event"
                },
                {
                    "title": "KubeSlice Community Edition",
                    "date": "Oct 19, 2022",
                    "image": "https://avesha.io/wp-content/uploads/2022/02/Upcoming-event-Community-Service-Demo-Youtube.png",
                    "link": "",
                    "eventsLocation": "YouTube Live"
                },
                {
                    "title": "Multi Cloud with KubeSlice",
                    "date": "Oct 19, 2022",
                    "image": "https://avesha.io/wp-content/uploads/2022/02/Past-Event-2-20_1_22.png",
                    "link": "",
                    "eventsLocation": "YouTube Live"
                },
                {
                    "title": "VMKubed",
                    "date": "Oct 19, 2022",
                    "image": "https://avesha.io/wp-content/uploads/2022/02/Past-Event-1-29_12_21.png",
                    "link": "",
                    "eventsLocation": "YouTube Live"
                },
            ]
        }
    ]
  return (
    <>
         <Header />
         <Card events={events}  />
    </>
  )
}

export default Events