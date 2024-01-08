## Краткая инструкция по работе
- [Установить node.js](https://nodejs.org/download/release/latest-v16.x/). Сборка работает на 16 версии
- С помощью терминала установить зависимости - `npm i`
- Запуск локального сервера без минификаций - `npm start`
- Запуск локального сервера c минификациями, <br>
данный вариант не используется в разработке, <br>
он нужен только для тестов производительности <br>
на локальном хосте  - `npm run dev`
- Сборка проекта, минификация скриптов <br>
и оптимизация изображений перед деплоем на прод - `npm run build`
- Запуск тестирования на соответствия кодгайдам - `npm test`
- Создание webp изображений в директории source - `npm run webp`
- Deploy проекта - `npm run deploy`


### Вся разработка ведётся в директории `source`
### Итоговый код попадает в директорию `build`
<br/>
<br/>
<br/>
<br/>


## Основные команды для работы

### инициализация
> git init\
> git status

### переименовали ветку
> git branch -m master main\
> git branch -M main

### коммитим
> git add .\
> git commit -m "initial project version"

### cвязываем наш локальный репозиторий с репозиторием на на GitHub
> git remote add origin https://github.com/rinserrr/web-template.git

### отправка изменений на сервер
> git push -u origin main

### запрос изменений с сервера
> git pull origin main\
> git pull origin module2-task1

### отправка изменений на сервер
> git branch module1-task1\
> git checkout module1-task1\
> git add .\
> git commit -m "Запустил проект"\
> git push --set-upstream origin module1-task1\

### мердж ветки в мастер
> git checkout main\
> git merge module1-task1\
> git push origin main

### отменить выполнение команды git add:
> git restore --staged .

### посмотреть коммиты:
> git log\
> git log --oneline\
> git log --oneline --graph\
> git log --oneline --graph --all

### посмотреть выбранный коммит:
> git show hash_commit

### переделать commit message и внести туда новый комментарий:
> git commit --amend -m 'Новый комментарий'

### удаление локальной ветки
> git branch -d mybranch

