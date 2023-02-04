/**
 * @swagger
 * tags:
 *   name: Books
 *   description: 이벤트 캠핑장 관련 조회
 */

/**
 * @swagger
 * /api/books/users/checkbooks:
 *    get:
 *      summary: "특정 유저 예약 목록 조회"
 *      tags: [Books]
 *      responses:
 *        "200":
 *          description: 특정 유저 예약 목록 조회
 *          content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                     books:
 *                       type: object
 *                       example:
 *                          [
 *                            {
 *                              "bookId": number,
 *                              "userId": number,
 *                              "hostId": number,
 *                              "campId": number,
 *                              "siteId": number,
 *                              "siteName": string,
 *                              "siteDesc": string,
 *                              "siteInfo": string,
 *                              "sitePrice": number,
 *                              "siteMainImage": string,
 *                              "checkInDate": string,
 *                              "checkOutDate": string,
 *                              "Camp_checkIn": string,
 *                              "Camp_checkOut": string,
 *                              "adults": number,
 *                              "children": number,
 *                              "confirmBook": boolean,
 *                              "createdAt": string,
 *                              "updatedAt": string
 *                            },
 *                            {
 *                              "bookId": 151,
 *                              "userId": 139,
 *                              "hostId": 1,
 *                              "campId": 2,
 *                              "siteId": 3,
 *                              "siteName": "[주문진]*글램핑 커플형*냉난방완비",
 *                              "siteDesc": "ㅁ 실내 화장실/샤워실 있습니다.\r\n\r\nㅁ 2인 기준이며 인원 초과 시 1인 1박당 10,000원 추가요금 있습니다. (현장결제)\r\n\r\nㅁ 2박 이상이거나 2동 이상일 경우 미리 캠핑장으로 확인부탁드립니다.\r\n\r\nㅁ 숲속의 아름다운 캠핑을 즐길 수 있는 최고시설의 글램핑",
 *                              "siteInfo": "ㅁ 원룸형, 침대, TV, 에어컨, 냉장고, 전자렌지, 커피포터, 싱크대, 전기장판, 릴렉스체어4, 폴딩테이블, 트윈투버너, 스텐냄비세트, 화로대, 스텐식기, 수저세트, 토치, 전기밥솥\r\n\r\nㅁ 수건과 세면도구는 개인 준비물이므로 지참해 주셔야 합니다.\r\n\r\nㅁ 숯,석쇠(면장갑, 부탄가스)+바베큐세트 15,000원 (현장결제)",
 *                              "sitePrice": 89000,
 *                              "siteMainImage": "https://campfire.s3.ap-northeast-2.amazonaws.com/postImg/1674703330283_15904760657727443_M.jpg",
 *                              "checkInDate": "2023-02-06",
 *                              "checkOutDate": "2023-02-07",
 *                              "Camp_checkIn": "16:00:00",
 *                              "Camp_checkOut": "10:00:00",
 *                              "adults": 2,
 *                              "children": 0,
 *                              "confirmBook": false,
 *                              "createdAt": "2023-02-04 21:44:03",
 *                              "updatedAt": "2023-02-04 21:44:03"
 *                            }
 *                          ]
 */
