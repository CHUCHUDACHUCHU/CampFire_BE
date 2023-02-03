/**
 * @swagger
 * tags:
 *   name: Camps
 *   description: 이벤트 캠핑장 관련 조회
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      Camps:
 *        type: object
 *        required:
 *          - campId
 *          - hostId
 *          - campName
 *          - campAddress
 *          - campMainImage
 *          - campSubImages
 *          - campDesc
 *          - checkIn
 *          - checkOut
 *          - likes
 *          - mapX
 *          - mapY
 *          - homepage
 *          - premium
 *          - createdAt
 *          - updatedAt
 *        properties:
 *          campId:
 *            type: number
 *            primaryKey: true
 *            allowNull: false,
 *            autoIncrement: true,
 *          hostId:
 *            type: number
 *            allowNull: false
 *            references:
 *              model: Hosts
 *              key: hostId
 *            onDelete: cascade
 *          campName:
 *            type: string
 *            unique: true
 *            allowNull: false
 *          campAdress:
 *            type: string
 *            unique: true
 *            allowNull: false
 *          campMainImage:
 *            type: string
 *            allowNull: false
 *          campSubImages:
 *            type: string
 *          checkIn:
 *            type: string
 *            allowNull: false
 *          checkOut:
 *            type: string
 *            allowNull: false
 *          likes:
 *            type: number
 *            allowNull: false
 *            defaultValue: 0
 *          mapX:
 *            type: string
 *          mapY:
 *            type: string
 *          homepage:
 *            type: string
 *          premium:
 *            type: boolean
 *            defaultValue: true
 *            allowNull: false
 *          createdAt:
 *            type: string
 *            allowNull: false
 *          updatedAt:
 *            type: string
 *            allowNull: false
 */
