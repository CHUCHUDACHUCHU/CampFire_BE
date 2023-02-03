/**
 * @swagger
 * tags:
 *   name: Events
 *   description: 이벤트 캠핑장 관련 조회
 */

/**
 * @swagger
 * /api/events/premium:
 *    get:
 *      summary: "프리미엄 캠핑장 조회"
 *      tags: [Events]
 *      responses:
 *        "200":
 *          description: 프리미엄 캠핑장 조회
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    premium:
 *                      type: object
 *                      example:
 *                          [
 *                            {
 *                              "campId": number,
 *                              "hostId": number,
 *                              "campName": string,
 *                              "campAddress": string,
 *                              "campMainImage": string,
 *                              "campSubImages": array,
 *                              "campDesc": string,
 *                              "typeLists": array,
 *                              "checkIn": string,
 *                              "checkOut": string,
 *                              "likes": number,
 *                              "likeStatus": boolean,
 *                              "mapX": string,
 *                              "mapY": string,
 *                              "premium": true,
 *                              "countReviews": number,
 *                              "createdAt": string,
 *                              "updatedAt": string
 *                            },
 *                            {
 *                              "campId": 4,
 *                              "hostId": 1,
 *                              "campName": "솔향강릉카라반캠핑장",
 *                              "campAddress": "강원 강릉시 경강로 2580 (견소동, 강릉경찰수련원)",
 *                              "campMainImage": "https://campfire.s3.ap-northeast-2.amazonaws.com/postImg/1675209728675_16546732139400871_M.jpg",
 *                              "campSubImages": [
 *                                  "https://campfire.s3.ap-northeast-2.amazonaws.com/postImg/1675209728676_campSubImages0",
 *                                  "https://campfire.s3.ap-northeast-2.amazonaws.com/postImg/1675209728681_campSubImages1"
 *                              ],
 *                              "campDesc": "하늘과 햇빛, 바다와 소나무가 함께하는 솔향 강릉 카라반 캠핑장\r\n**연박 예약 시 10% 할인 적용됩니다.**\r\n\r\n※※ 단체 회식 가능합니다. 50인 이상 동시 사용 가능한 그릴, 천막 운영중이니 단체 예약에 참고하시기 바랍니다. (이용 시 사전 문의 바랍니다.) ※※\r\n\r\n1. 기준인원 초과시 1인 1박당 1만원 추가비용 발생\r\n2. 15시 이전에는 객실 청소 및 정리로 입실불가\r\n3. 매너타임 22시\r\n4. 공용화장실, 공용샤워실 설치\r\n5. 개별 와이파이 설치 완료\r\n6. 매점 내 삼겹살등 육류들 시중 단가로 판매, 닭꼬치류, 각종 밀키트, 김치, 햇반, 라면, 안주류 판매 합니다.",
 *                              "typeLists": [
 *                                  "글램핑"
 *                              ],
 *                              "checkIn": "14:00:00",
 *                              "checkOut": "10:00:00",
 *                              "likes": 10,
 *                              "likeStatus": false,
 *                              "mapX": "128.941139040632",
 *                              "mapY": "37.77297376471",
 *                              "premium": true,
 *                              "countReviews": 0,
 *                              "createdAt": "2023-01-18 19:28:33",
 *                              "updatedAt": "2023-02-03 18:44:10"
 *                             }
 *                          ]
 */

/**
 * @swagger
 * /api/events/likes:
 *    get:
 *      summary: "찜하기 순위 조회"
 *      tags: [Events]
 *      responses:
 *        "200":
 *          description: 찜하기 많은 순으로 9개 나열
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    likes:
 *                      type: object
 *                      example:
 *                          [
 *                            {
 *                              "campName": string,
 *                              "campId": number,
 *                              "likes": number
 *                            },
 *                            {
 *                              "campName": "주문진 글램핑 오토캠핑장",
 *                              "campId": 2,
 *                              "likes": 10
 *                            },
 *                            {
 *                              "campName": "솔향강릉카라반캠핑장",
 *                              "campId": 4,
 *                              "likes": 10
 *                            }
 *                          ]
 */

/**
 * @swagger
 * /api/events/reviews:
 *    get:
 *      summary: "리뷰 순위 조회"
 *      tags: [Events]
 *      responses:
 *        "200":
 *          description: 리뷰 많은 순으로 9개 나열
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    reviews:
 *                      type: object
 *                      example:
 *                          [
 *                            {
 *                              "campName": string,
 *                              "campId": number,
 *                              "likes": number
 *                            },
 *                            {
 *                              "campName": "호수카라반캠핑장",
 *                              "campId": 18,
 *                              "countReviews": 2
 *                            },
 *                            {
 *                              "campName": "주문진 글램핑 오토캠핑장",
 *                              "campId": 2,
 *                              "countReviews": 1
 *                            },
 *                          ]
 */
