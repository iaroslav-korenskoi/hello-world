import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vk-connect';
import App from './App';
// import registerServiceWorker from './sw';

// Init VK  Mini App
connect.send('VKWebAppInit', {});
connect.send("VKWebAppGetAuthToken", {"app_id": 7137782, "scope": "friends,photos," +
             "audio,video,docs,notes,pages,status,wall,groups,notifications,stats"});
connect.send("VKWebAppCallAPIMethod", {"method": "wall.get", "request_id": "YARtest", "params":
             {"user_ids": "6845142", "v":"5.101", "access_token":"your_token"}});
// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT
// registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));
