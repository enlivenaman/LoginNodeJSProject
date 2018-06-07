// add all schema validaion here for post call
const Joi = require('joi')


module.exports = {
    validateBody: (schema) => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema, { allowUnknown: true })
            if (result.error) {
                result.error.status = 400;
                return next(result.error);
            }

            if (!req.value) { req.value = {} }
            req.value['body'] = result.value
            req.body.tokentype = 1;
            next()
        }
    },

    schemas: {
        authSchema: Joi.object().keys({
            username: Joi.string().required(),
            password: Joi.string().required()
        }),

        tokenSchema: Joi.object().keys({
            code: Joi.string().required(),
        }),

        registerDeviceSchema: Joi.object().keys({
            DeviceToken: Joi.string().required(),
            UserEmail: Joi.string().email().required(),
            DeviceType: Joi.string().required(),
        }),

        emailAuthSchema: Joi.object().keys({
            username: Joi.string().required(),
        }),

        eventSchema: Joi.object().keys({
            MeetingName: Joi.string().required(),
            MeetingDescription: Joi.string().required(),
            MeetingStartTime: Joi.string().required(),
            MeetingEndTime: Joi.string().required(),
            Attendees: Joi.array().items(
                Joi.object().keys({
                    DispayName: Joi.string(),
                    EmailAddress: Joi.string().email().required()
                })
            ),
            Location: Joi.object({
                LocationEmailAddress: Joi.string().required(),
                DisplayName: Joi.string().required(),
            })
        }),

        CheckRoomAvailabilitySchema: Joi.object().keys({            
            MeetingStartTime: Joi.string().required(),
            MeetingEndTime: Joi.string().required(),
            Location: Joi.object({
                LocationEmailAddress: Joi.string().required()                
            })
        }),
        
        forwardEventSchema: Joi.object().keys({
            ForwardAttendees: Joi.array().min(1).items(
                Joi.object().keys({
                    DispayName: Joi.string(),
                    EmailAddress: Joi.string().email().required()
                })
            ).required()
        })
    }
}

