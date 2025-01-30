const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');

const app = express();
const port = 3000;

// Разрешаем все источники для CORS
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: '****', // Укажите свой API-ключ OpenAI
});

// Маршрут для чата
app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;

    try {
        // Отправка запроса к OpenAI API
        const completion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: userMessage }],
            model: 'gpt-3.5-turbo',
        });

        // Отправка ответа пользователю
        res.json({ reply: completion.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: 'Error generating response' });
    }
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
const corsOptions = {
    origin: 'http://127.0.0.1:5500', // Разрешаем запросы с вашего фронтенда
    methods: ['GET', 'POST'], // Разрешаем методы POST и GET
    allowedHeaders: ['Content-Type'], // Разрешаем заголовок Content-Type
};

app.use(cors(corsOptions));  // Используем эту настройку CORS
app.options('*', cors(corsOptions)); // Обрабатываем запросы OPTIONS для всех маршрутов
const cors = require('cors');
app.use(cors());
