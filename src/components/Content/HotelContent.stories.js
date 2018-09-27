import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import HotelContent from './HotelContent';
import { task, actions } from '../Base/Base.func';

//資料
let datas = {
  "id": 194,
  "name": "星野TOMAMU渡假村",
  "en_name": "HOSHINO RESORT TOMAMU",
  "isFavorite": false,
  "latitude": "43.063569",
  "longitude": "142.631352",
  "address": "北海道勇払郡占冠村中トマム",
  "phone": "181167581111",
  "time": "00:00-24:00",
  "img": [
    {
      "img": "https://photopdm.liontravel.com/194/星野渡假村.jpg"
    }
  ],
  "guideList": [
    {
      "id": 123,
      "name": "住宿-一泊二食",
      "serviceTimeStart": "1500",
      "serviceTimeEnd": "0900",
      "duration": "480.0",
      "brief": "從高樓的雲海露台上能看到壯觀的雲海。冬天可滑雪，夏季有高爾夫、網球、遊泳池、熱氣球等設施以外，度假村內的「冰之教堂」是冬季最冷時大自然所締造，是日本唯一的由冰雪建造的婚禮教堂。然而夏季的「水之教堂」以與自然共生為主題，由世界著名建築家安藤忠雄所設計。",
      "startLongitude": "142.631352",
      "startLatitude": "43.063569",
      "endLongitude": "142.631352",
      "endLatitude": "43.063569",
      "startCity": "占冠村",
      "endCity": "占冠村"
    },
    {
      "id": 2271,
      "name": "付費體驗活動-雪上活動",
      "serviceTimeStart": "0900",
      "serviceTimeEnd": "1600",
      "duration": "60.0",
      "brief": "特別安排體驗北海道冬季獨有的雪上活動，體驗刺激的雪上香蕉船或雪上泛舟，一起去發現北海道「雪遊」樂趣吧。",
      "startLongitude": "142.631352",
      "startLatitude": "43.063569",
      "endLongitude": "142.631352",
      "endLatitude": "43.063569",
      "startCity": "占冠村",
      "endCity": "占冠村"
    },
    {
      "id": 26949,
      "name": "付費體驗活動-滑雪(教練教學)",
      "serviceTimeStart": "1000",
      "serviceTimeEnd": "1230",
      "duration": "150.0",
      "brief": "TOMAMU半日滑雪行程 渡假村內備有日、中文滑雪教練，規劃了約2個半小時私人及小班制的滑雪課程（SKI）。☆每10~15人指派一名教練/20人以上2名教練(16~19人多派一位助教)。☆贈送全天滑雪用具免費租用，包含SKI三項─雪鞋、雪板、雪杖；防水雪衣雪褲、小物─風鏡、毛帽、手套。(滑雪用具僅可租借至每日16:00)☆吊椅一次卷☆贈送一次雪盆體驗(限用一次，時間60分鐘)。※ 雪盆戲雪依天候狀況調整營業時間，預計營業時間為12/1~3/31 ※ 雪盆戲雪使用時間為9:00~16:00 逾時",
      "startLongitude": "142.631352",
      "startLatitude": "43.063569",
      "endLongitude": "142.631352",
      "endLatitude": "43.063569",
      "startCity": "占冠村",
      "endCity": "占冠村"
    }
  ],
  "relativePoi": null,
  "key": "1_194",
  "thumbnail": [
    {
      "img": "https://photopdm.liontravel.com/194/星野渡假村.jpg"
    }
  ]
};

storiesOf('HotelContent', module)
  .add('hotel_content', () => <HotelContent datas={datas} action={actions} />);