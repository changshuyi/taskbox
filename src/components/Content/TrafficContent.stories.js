import React from 'react';
import { storiesOf } from '@storybook/react';

import TrafficContent from './TrafficContent';
import { task, actions } from '../Base/Base.func';

let datas = {
    "category": "4",
    "id": "26473",
    "starttime": "1430",
    "endtime": "1755",
    "packageType": null,
    "name": "VIZ SPA微笑海",
    "thumbnail": "https://updmexapi.api.liontravel.com/photo/120.jpg",
    "isFavorite": false,
    "mode": "1",
    "duration": 120,
    "nowGuide": "29430",
    "startLongitude": 142.631352,
    "startLatitude": 43.063569,
    "endLongitude": 142.631352,
    "endLatitude": 43.063569,
    "guideList": [
      {
        "id": "29430",
        "name": "參觀(含門票)",
        "duration": 3,
        "brief": "有日本最大的室内人造海浪游泳池（長80公尺寬30公尺）， 不論天氣變幻，無論四季更迭，踏入一波波浪花的微笑海灘就可以享受到暖入心脾的熱帶風情， 為您帶來一陣陣教人舒暢身心的節奏和溫度。 您可以在暖暖的海波中自在游泳，也可以慵懶地在SPA按摩池放鬆四肢， 這裡是每個人的水上樂園。"
      }
    ],
    "poiList": null,
    "title": null,
    "addr": null,
    "astarttime": null,
    "aendtime": null,
    "dispatch": 0,
    "contact": null,
    "phone": null,
    "desc": null,
    "type": "poi",
    "off": null,
    "location": {
      "latitude": 43.063569,
      "longitude": 142.631352
    },
    "pid": "1_26473",
    "guideId": "29430",
    "nowGuideInfo": {
      "id": "29430",
      "name": "參觀(含門票)",
      "duration": 3,
      "brief": "有日本最大的室内人造海浪游泳池（長80公尺寬30公尺）， 不論天氣變幻，無論四季更迭，踏入一波波浪花的微笑海灘就可以享受到暖入心脾的熱帶風情， 為您帶來一陣陣教人舒暢身心的節奏和溫度。 您可以在暖暖的海波中自在游泳，也可以慵懶地在SPA按摩池放鬆四肢， 這裡是每個人的水上樂園。"
    },
    "latitude": 43.063569,
    "longitude": 142.631352,
    "trafficInfo": {
      "name": "4 分 (0.6 公里)",
      "distance": "0.6 公里",
      "timeStr": "4 分",
      "routeList": [
        {
          "bounds": {
            "south": 43.06271,
            "west": 142.63008000000002,
            "north": 43.06434,
            "east": 142.63406
          },
          "copyrights": "地圖資料©2018 Google, ZENRIN",
          "legs": [
            {
              "distance": {
                "text": "0.6 公里",
                "value": 584
              },
              "duration": {
                "text": "4 分",
                "value": 213
              },
              "end_address": "Unnamed Road, Nakatomamu, Shimukappu-mura, Yūfutsu-gun, Hokkaidō 079-2204日本",
              "end_location": {
                "lat": 43.0643356,
                "lng": 142.63341590000005
              },
              "start_address": "Unnamed Road, Nakatomamu, Shimukappu-mura, Yūfutsu-gun, Hokkaidō 079-2204日本",
              "start_location": {
                "lat": 43.0633396,
                "lng": 142.63120960000003
              },
              "steps": [
                {
                  "distance": {
                    "text": "0.1 公里",
                    "value": 120
                  },
                  "duration": {
                    "text": "1 分",
                    "value": 43
                  },
                  "end_location": {
                    "lat": 43.06294159999999,
                    "lng": 142.63008479999996
                  },
                  "polyline": {
                    "points": "{xyeGatpeZFtDDLBDNFl@N"
                  },
                  "start_location": {
                    "lat": 43.0633396,
                    "lng": 142.63120960000003
                  },
                  "travel_mode": "DRIVING",
                  "encoded_lat_lngs": "{xyeGatpeZFtDDLBDNFl@N",
                  "path": [
                    {
                      "lat": 43.063340000000004,
                      "lng": 142.63121
                    },
                    {
                      "lat": 43.063300000000005,
                      "lng": 142.6303
                    },
                    {
                      "lat": 43.06327,
                      "lng": 142.63023
                    },
                    {
                      "lat": 43.063250000000004,
                      "lng": 142.6302
                    },
                    {
                      "lat": 43.06317000000001,
                      "lng": 142.63016000000002
                    },
                    {
                      "lat": 43.062940000000005,
                      "lng": 142.63008000000002
                    }
                  ],
                  "lat_lngs": [
                    {
                      "lat": 43.063340000000004,
                      "lng": 142.63121
                    },
                    {
                      "lat": 43.063300000000005,
                      "lng": 142.6303
                    },
                    {
                      "lat": 43.06327,
                      "lng": 142.63023
                    },
                    {
                      "lat": 43.063250000000004,
                      "lng": 142.6302
                    },
                    {
                      "lat": 43.06317000000001,
                      "lng": 142.63016000000002
                    },
                    {
                      "lat": 43.062940000000005,
                      "lng": 142.63008000000002
                    }
                  ],
                  "instructions": "往<b>西</b>",
                  "maneuver": "",
                  "start_point": {
                    "lat": 43.0633396,
                    "lng": 142.63120960000003
                  },
                  "end_point": {
                    "lat": 43.06294159999999,
                    "lng": 142.63008479999996
                  }
                },
                {
                  "distance": {
                    "text": "0.3 公里",
                    "value": 341
                  },
                  "duration": {
                    "text": "1 分",
                    "value": 78
                  },
                  "end_location": {
                    "lat": 43.0633861,
                    "lng": 142.63399349999997
                  },
                  "maneuver": "turn-left",
                  "polyline": {
                    "points": "kvyeG_mpeZJyAHw@BYDi@JmC@aA?e@CSGOCKYcAQa@So@YiAIYGMKI"
                  },
                  "start_location": {
                    "lat": 43.06294159999999,
                    "lng": 142.63008479999996
                  },
                  "travel_mode": "DRIVING",
                  "encoded_lat_lngs": "kvyeG_mpeZJyAHw@BYDi@JmC@aA?e@CSGOCKYcAQa@So@YiAIYGMKI",
                  "path": [
                    {
                      "lat": 43.062940000000005,
                      "lng": 142.63008000000002
                    },
                    {
                      "lat": 43.06288000000001,
                      "lng": 142.63053000000002
                    },
                    {
                      "lat": 43.062830000000005,
                      "lng": 142.63081000000003
                    },
                    {
                      "lat": 43.062810000000006,
                      "lng": 142.63094
                    },
                    {
                      "lat": 43.062780000000004,
                      "lng": 142.63115000000002
                    },
                    {
                      "lat": 43.062720000000006,
                      "lng": 142.63186000000002
                    },
                    {
                      "lat": 43.06271,
                      "lng": 142.63219
                    },
                    {
                      "lat": 43.06271,
                      "lng": 142.63238
                    },
                    {
                      "lat": 43.06273,
                      "lng": 142.63248000000002
                    },
                    {
                      "lat": 43.06277,
                      "lng": 142.63256
                    },
                    {
                      "lat": 43.06279000000001,
                      "lng": 142.63262
                    },
                    {
                      "lat": 43.062920000000005,
                      "lng": 142.63296000000003
                    },
                    {
                      "lat": 43.063010000000006,
                      "lng": 142.63313000000002
                    },
                    {
                      "lat": 43.06311,
                      "lng": 142.63337
                    },
                    {
                      "lat": 43.06324,
                      "lng": 142.63374000000002
                    },
                    {
                      "lat": 43.06329,
                      "lng": 142.63387
                    },
                    {
                      "lat": 43.06333,
                      "lng": 142.63394000000002
                    },
                    {
                      "lat": 43.063390000000005,
                      "lng": 142.63399
                    }
                  ],
                  "lat_lngs": [
                    {
                      "lat": 43.062940000000005,
                      "lng": 142.63008000000002
                    },
                    {
                      "lat": 43.06288000000001,
                      "lng": 142.63053000000002
                    },
                    {
                      "lat": 43.062830000000005,
                      "lng": 142.63081000000003
                    },
                    {
                      "lat": 43.062810000000006,
                      "lng": 142.63094
                    },
                    {
                      "lat": 43.062780000000004,
                      "lng": 142.63115000000002
                    },
                    {
                      "lat": 43.062720000000006,
                      "lng": 142.63186000000002
                    },
                    {
                      "lat": 43.06271,
                      "lng": 142.63219
                    },
                    {
                      "lat": 43.06271,
                      "lng": 142.63238
                    },
                    {
                      "lat": 43.06273,
                      "lng": 142.63248000000002
                    },
                    {
                      "lat": 43.06277,
                      "lng": 142.63256
                    },
                    {
                      "lat": 43.06279000000001,
                      "lng": 142.63262
                    },
                    {
                      "lat": 43.062920000000005,
                      "lng": 142.63296000000003
                    },
                    {
                      "lat": 43.063010000000006,
                      "lng": 142.63313000000002
                    },
                    {
                      "lat": 43.06311,
                      "lng": 142.63337
                    },
                    {
                      "lat": 43.06324,
                      "lng": 142.63374000000002
                    },
                    {
                      "lat": 43.06329,
                      "lng": 142.63387
                    },
                    {
                      "lat": 43.06333,
                      "lng": 142.63394000000002
                    },
                    {
                      "lat": 43.063390000000005,
                      "lng": 142.63399
                    }
                  ],
                  "instructions": "向<b>左</b>轉",
                  "start_point": {
                    "lat": 43.06294159999999,
                    "lng": 142.63008479999996
                  },
                  "end_point": {
                    "lat": 43.0633861,
                    "lng": 142.63399349999997
                  }
                },
                {
                  "distance": {
                    "text": "0.1 公里",
                    "value": 123
                  },
                  "duration": {
                    "text": "2 分",
                    "value": 92
                  },
                  "end_location": {
                    "lat": 43.0643356,
                    "lng": 142.63341590000005
                  },
                  "maneuver": "turn-slight-left",
                  "polyline": {
                    "points": "eyyeGmeqeZKIMCU?G@YRWXUNQJGJIJQTGD"
                  },
                  "start_location": {
                    "lat": 43.0633861,
                    "lng": 142.63399349999997
                  },
                  "travel_mode": "DRIVING",
                  "encoded_lat_lngs": "eyyeGmeqeZKIMCU?G@YRWXUNQJGJIJQTGD",
                  "path": [
                    {
                      "lat": 43.063390000000005,
                      "lng": 142.63399
                    },
                    {
                      "lat": 43.06345,
                      "lng": 142.63404
                    },
                    {
                      "lat": 43.063520000000004,
                      "lng": 142.63406
                    },
                    {
                      "lat": 43.06363,
                      "lng": 142.63406
                    },
                    {
                      "lat": 43.06367,
                      "lng": 142.63405
                    },
                    {
                      "lat": 43.0638,
                      "lng": 142.63395
                    },
                    {
                      "lat": 43.06392,
                      "lng": 142.63382000000001
                    },
                    {
                      "lat": 43.06403,
                      "lng": 142.63374000000002
                    },
                    {
                      "lat": 43.06412,
                      "lng": 142.63368
                    },
                    {
                      "lat": 43.06416,
                      "lng": 142.63362
                    },
                    {
                      "lat": 43.06421,
                      "lng": 142.63356000000002
                    },
                    {
                      "lat": 43.0643,
                      "lng": 142.63345
                    },
                    {
                      "lat": 43.06434,
                      "lng": 142.63342
                    }
                  ],
                  "lat_lngs": [
                    {
                      "lat": 43.063390000000005,
                      "lng": 142.63399
                    },
                    {
                      "lat": 43.06345,
                      "lng": 142.63404
                    },
                    {
                      "lat": 43.063520000000004,
                      "lng": 142.63406
                    },
                    {
                      "lat": 43.06363,
                      "lng": 142.63406
                    },
                    {
                      "lat": 43.06367,
                      "lng": 142.63405
                    },
                    {
                      "lat": 43.0638,
                      "lng": 142.63395
                    },
                    {
                      "lat": 43.06392,
                      "lng": 142.63382000000001
                    },
                    {
                      "lat": 43.06403,
                      "lng": 142.63374000000002
                    },
                    {
                      "lat": 43.06412,
                      "lng": 142.63368
                    },
                    {
                      "lat": 43.06416,
                      "lng": 142.63362
                    },
                    {
                      "lat": 43.06421,
                      "lng": 142.63356000000002
                    },
                    {
                      "lat": 43.0643,
                      "lng": 142.63345
                    },
                    {
                      "lat": 43.06434,
                      "lng": 142.63342
                    }
                  ],
                  "instructions": "靠<b>左</b>行駛<div style=\"font-size:0.9em\">目的地在左邊</div>",
                  "start_point": {
                    "lat": 43.0633861,
                    "lng": 142.63399349999997
                  },
                  "end_point": {
                    "lat": 43.0643356,
                    "lng": 142.63341590000005
                  }
                }
              ],
              "traffic_speed_entry": [],
              "via_waypoint": [],
              "via_waypoints": []
            }
          ],
          "overview_polyline": "{xyeGatpeZFtDDLRLl@NJyALqAPwD@gBKc@]oAe@qAc@cBSWYM]@q@l@g@ZQVYZ",
          "summary": "",
          "warnings": [],
          "waypoint_order": [],
          "overview_path": [
            {
              "lat": 43.063340000000004,
              "lng": 142.63121
            },
            {
              "lat": 43.063300000000005,
              "lng": 142.6303
            },
            {
              "lat": 43.06327,
              "lng": 142.63023
            },
            {
              "lat": 43.06317000000001,
              "lng": 142.63016000000002
            },
            {
              "lat": 43.062940000000005,
              "lng": 142.63008000000002
            },
            {
              "lat": 43.06288000000001,
              "lng": 142.63053000000002
            },
            {
              "lat": 43.062810000000006,
              "lng": 142.63094
            },
            {
              "lat": 43.062720000000006,
              "lng": 142.63186000000002
            },
            {
              "lat": 43.06271,
              "lng": 142.63238
            },
            {
              "lat": 43.06277,
              "lng": 142.63256
            },
            {
              "lat": 43.062920000000005,
              "lng": 142.63296000000003
            },
            {
              "lat": 43.06311,
              "lng": 142.63337
            },
            {
              "lat": 43.06329,
              "lng": 142.63387
            },
            {
              "lat": 43.063390000000005,
              "lng": 142.63399
            },
            {
              "lat": 43.063520000000004,
              "lng": 142.63406
            },
            {
              "lat": 43.06367,
              "lng": 142.63405
            },
            {
              "lat": 43.06392,
              "lng": 142.63382000000001
            },
            {
              "lat": 43.06412,
              "lng": 142.63368
            },
            {
              "lat": 43.06421,
              "lng": 142.63356000000002
            },
            {
              "lat": 43.06434,
              "lng": 142.63342
            }
          ]
        }
      ],
      "duration": 3,
      "method": "DRIVING",
      "routes": 0
    }
};

storiesOf('TrafficContent', module)
  .add('traffic_content', () => <TrafficContent datas={datas} action={actions} />);