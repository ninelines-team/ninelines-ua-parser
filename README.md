#  ninelines-ua-parser

Обертка библиотеки [ua-parser-js](https://github.com/faisalman/ua-parser-js), которая автоматически проставляет классы
`<html>` элементу.

## Установка

### NPM

```
npm install --save ninelines-ua-parser
```

### Использование

После установки необходимо подключить библиотеку:

```js
import 'ninelines-ua-parser';
```

Основная информация описана в [документации ua-parser-js](https://github.com/faisalman/ua-parser-js).

Данная библиотека устанавливает следующие классы:

* `is-device-{model}` - модель устройства;
* `is-device-{type}` - тип устройства (mobile, tablet, desktop);
* `is-os-{name}` - название операционной системы (windows, mac-os, linux, android, ios);
* `is-os-{name}-{version}` - название операционной системы, включая версию;
* `is-engine-{name}` - движок браузера (edgehtml, gecko, trident, webkit);
* `is-browser-{name}` - название браузера (chrome, edge, firefox, safari, mobile-safari, opera, ucbrowser, yandex);
* `is-browser-{name}-{major}` - название браузера, включая версию;

Пример:

```html
<!doctype html>
<html class="is-device-desktop is-os-windows is-os-windows-10 is-engine-webkit is-browser-chrome is-browser-chrome-64" lang="ru">
    <!-- ... -->
</html>
```
