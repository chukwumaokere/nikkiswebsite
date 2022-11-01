import { DiscountType, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main () {
    const customer = await prisma.customer.create({
        data: {
            name: 'Chuckles Ohare',
            address: '1234 S Fake St, Chicago, IL 60660',
            phone: '+1 555-807-8542',
            email: 'chuckhasfuntoo@yahoo.com',
            cart: {
                create: {
                    items: [
                        {
                            productId: '635daa3037b043c86adc6295',
                            name: 'Kiriko Sticker',
                            productImage: {
                                url: 'https://liquipedia.net/commons/images/3/30/Kiriko_announcement.jpg',
                            },
                            quantity: 3,
                            price: 9.99,
                        },
                        {
                            productId: '635daa3037b043c86adc6296',
                            name: 'Lucio Sticker',
                            description: 'A sticker from the Overwatch Character Lucio',
                            price: 5.99,
                            quantity: 1,
                            productImage: {
                                url: 'https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt77c5cddf632a67d7/631a8b2bf581050de0035dee/1600_Lucio.jpg',
                            },
                        },
                    ],
                },
            },
            orders: {
                create: {
                    items: [
                        {
                            productId: '635daa3037b043c86adc6296',
                            name: 'Lucio Sticker',
                            description: 'A sticker from the Overwatch Character Lucio',
                            price: 5.99,
                            quantity: 5,
                            productImage: {
                                url: 'https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt77c5cddf632a67d7/631a8b2bf581050de0035dee/1600_Lucio.jpg',
                            },
                        },
                    ],
                    total: 32.72,
                    coupon: false,
                    discount: false,
                    notes: 'Put a smiley face on the note!',
                },
            },
        },
    });
    console.log(customer);
};

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
