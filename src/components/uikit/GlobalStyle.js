import React from 'react';

function GlobalStyle() {
    return (
        <div>

            <h1>Глобольные классы</h1>

            <h1>Заголовок</h1>
            <h2>Подзаголовок</h2>
            <p>Текст</p>
            <p>Текст жирный</p>
            <p>Текст курсивом</p>
            <a href=''>ссылка</a>

            <p>Классы сетки (используем flex)</p>

            <div>Flex container</div>
            <div>Flex row</div>
            <div>Flex column</div>
            <p>Классы сетки модификаторы</p>
            <div>Flex center (для строки и колонки)</div>
            <div>Flex space-between (для строки и колонки)</div>
            <div>Flex wrap</div>

            <p>Глобольные классы margin-bottom</p>

            <div>Margin-bottom 10</div>
            <div>Margin-bottom 16</div>
            <div>Margin-bottom 24</div>
            <div>Margin-bottom 36</div>
        </div>
    )
}

export default GlobalStyle