## Важное уведомление

Проект находится в стадии разработки и будет дополняться. Некоторые функции могут быть не реализованы или работать нестабильно. Пожалуйста, учитывайте это при использовании проекта.

## Описание проекта

Данный репозиторий содержит исходный код итоговой работы по автоматическому развертыванию web-приложений.

Проект включает в себя стек технологий:

-   React
-   Django
-   Django REST framework (drf)
-   Docker
-   Docker-compose
-   PostgreSQL (не реализовано)

На стороне клиента находится простое приложение на React, которое включает в себя функционал чата, реализованный с использованием соответствующей библиотеки. Серверная часть представлена фреймворками Django и Django REST framework для создания REST API.

Главная цель финального проекта — обеспечить прием сообщений от клиента, обработку этих сообщений с помощью LLM (Language Learning Models — моделей машинного обучения для работы с языком), а также сохранение истории общения в базу данных.

## Установка и запуск

#### Предварительные требования

Убедитесь, что на вашей системе установлено следующее программное обеспечение:

-   [Node.js](https://nodejs.org/)
-   [Docker](https://www.docker.com/get-started)

Убедитесь, что на вашем компьютере установлен Make

```sh
make --version
```

> Если make не установлен, учтите это при запуске проекта

#### Установка проекта

Клонируйте репозиторий на вашу локальную машину:

```sh
git clone https://github.com/shanth1/django-rest-api.git
cd django-rest-api
```

#### Запуск проекта

###### С помощью make

Запустите проект с помощью make скрипта:

```sh
make up
```

###### Без make

> Убедитесь, что вы находитесь в корне проекта

1. Скопируйте тестовый пример файла окружения

```sh
cp docker/.example.env docker/.env
```

2. Соберите build-версию клиента

```sh
cd frontend && npm run build && cd ..
```

3. Запустите docker compose в фоновом режиме

```sh
cd docker && docker compose up -d
```

#### Использование приложения

Запущенный через docker compose сайт будет доступен на http://0.0.0.0:4000/
