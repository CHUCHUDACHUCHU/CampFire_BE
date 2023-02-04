/**
 * @swagger
 * tags:
 *   name: Auths
 *   description: 이벤트 캠핑장 관련 조회
 */
//수정중
// router.get('/kakao', authLoginUserMiddleware, authsController.loginKakao);
/**
 * @swagger
 * /api/auths/kakao?code={code}:
 *  get:
 *    summary: "카카오 로그인 Query 방식"
 *    description: "요청 경로에 값을 담아 서버에 보낸다."
 *    tags: [Auths]
 *    parameters:
 *      - in: query
 *        name: code
 *        required: true
 *        description: 유저 아이디
 *        schema:
 *          type: string
 *    responses:
 *      "201":
 *        description: db에 정보가 없는 경우(회원가입)
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                users:
 *                  type: object
 *                  example: [{ "userId": 1 }]
 *      "200":
 *        description: db에 정보가 있는 경우(로그인)
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                users:
 *                  type: object
 *                  example: [{ "userId": 1,
 *  }]
 */

// router.get('/naver', authLoginUserMiddleware, authsController.loginNaver);
// router.get('/google', authLoginUserMiddleware, authsController.loginGoogle);
// router.get('/sms/:phoneNumber', authsController.sendMessage);
// router.post('/sms/verify', authsController.verifyCode);
// router.post('/signup', authLoginUserMiddleware, authsController.signUp);
