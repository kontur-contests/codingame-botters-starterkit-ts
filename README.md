# Botters of the Galaxy Contest TypeScript Starter Kit

## Исходный код

Исходный код находится в директории `src`. Файлы с тестами находятся в той же директории и называются `*.test.ts`.
Для тестов используется [jest](https://facebook.github.io/jest/docs/en/api.html).

Основные файлы:

* [`State.ts`](src/State.ts) — класс с состоянием игры
* [`StateReader.ts`](src/StateReader.ts) — класс для чтения состояния игры. Логирует прочитанное состояние с помощью `printErr`
* [`Ai.ts`](src/Ai.ts) — ваш алгоритм бота
* [`Ai.test.ts`](src/Ai.test.ts) — тесты на бота организованные так, чтобы было удобно копировать в него залогированное состояние из визуализатора

## Запуск

### Установка

Клонируйте репозиторий: `git clone https://github.com/nanot1m/codeingame-botters-ts-starter.git`

Установите зависимости: `npm install` или `yarn install`

### Сборка исходников для вставки на CodinGame

`npm run build` или `yarn build` — собирает исходный код в файл `dist/bundle.js`. и копирует его в буфер обмена для вставки на CodinGame.com.
Для копирования в буфер обмена используется специфичная для macOS утилита `pbcopy`.
На Windows откорректируйте в файле package.json строчку с параметром "build", чтобы получилось следующее:

```
"build": "webpack -p && && clip < dist\bundle.js",
```

`npm run watch` или `yarn watch` — непрерывно следит за изменениями исходного кода и пересобирает `dist/bundle.js`.

### Тестирование

`npm test` или `yarn test` — собирает и запускает тесты.
`npm test -- --watchAll` или `yarn test --watchAll` — непрерывно следит за изменениями в коде и перезапускает тесты

### Чем отличается от [основного стартера](https://github.com/skbkontur/codingame-botters-starterkit-js)

* TypeScript
* Тесты на [jest](https://facebook.github.io/jest/docs/en/api.html)
* Изначально рабочие тесты
* Глобальные функцие `print`, `printErr`, `readline` вынесены в модуль `IO.ts`
* Сборка через `webpack` (если это важно)
