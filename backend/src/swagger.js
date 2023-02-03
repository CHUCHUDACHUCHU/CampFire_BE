const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        openapi: '3.0.3',
        info: {
            version: '1.0.0',
            title: 'Campfire_항해99 10기 E반 4조',
            description:
                '쉽고 편한 캠핑장 예약 시스템 캠프파이어_RestFul API 클라이언트 UI',
        },
        servers: [
            {
                url: 'https://dev.sparta-chuchu.shop', // 요청 URL
            },
        ],
    },
    apis: ['./src/swagger/*.js'], //Swagger 파일 연동
};
const specs = swaggereJsdoc(options);

module.exports = { swaggerUi, specs };
