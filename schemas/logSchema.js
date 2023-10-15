const { z } = require('zod')

const logSchema = z.object({
    id: z.number({
        required_error: "ID is required"
    }),
    name: z.string({
        required_error: "Client name is required"
    }),
    details: z.string({
        required_error: "Log Details is required"
    }),
    price: z.number({
        required_error: "Log Price is required"
    }),
    date: z.string().datetime(),
    status: z.string({
        required_error: "Log status is required"
    }),
    pay: z.string({
        required_error: "Payment status is required"
    })
});

module.exports = {logSchema}