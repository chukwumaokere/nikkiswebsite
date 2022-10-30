import { DiscountType, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main () {
    const collectionAndProducts = await prisma.collection.create({
        data: {
            name: 'Fall 2022',
            slug: 'fall-2022',
            collectionImage: 'https://placeimg.com/640/480/nature',
            images: [
                {url: 'https://placeimg.com/320/160/nature'},
                {url: 'https://placeimg.com/320/160/arch'},
                {url: 'https://placeimg.com/320/160/nature/sepia'},
            ],
            tags: [{name: 'fall'}, {name: '2022'}],
            discount: {
                value: 10,
                discountType: 'DOLLAR',
                active: true,
            },
            products: {
                createMany: {
                    data: [
                        {
                            name: 'Kiriko Sticker',
                            description: 'A sticker from the Overwatch Character Kiriko',
                            slug: 'kiriko-sticker',
                            images: [
                                {url: 'https://liquipedia.net/commons/images/3/30/Kiriko_announcement.jpg'},
                                {url: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Kiriko_Overwatch.png/220px-Kiriko_Overwatch.png'},
                                {url: 'https://cdn.shopify.com/s/files/1/0508/6747/0494/articles/unnamed_2404a86a-0c2e-4224-846a-11a597107ffc.jpg?v=1665577078'},
                                {url: 'https://i.ytimg.com/vi/9acxn7qAST4/maxresdefault.jpg'},
                                {url: 'https://www.gameinformer.com/sites/default/files/styles/thumbnail/public/2022/09/15/c968e9a3/kuriko-overwatch-2.jpeg'},
                            ],
                            tags: [{name: 'kiriko'}, {name: 'sticker'}],
                            price: 9.99,
                            stackable: true,
                            visible: true,
                        },
                        {
                            name: 'Lucio Sticker',
                            description: 'A sticker from the Overwatch Character Lucio',
                            slug: 'lucio-sticker',
                            images: [
                                {url: 'https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8c/Lucio-portrait.png/revision/latest?cb=20160620004212'},
                                {url: 'https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt77c5cddf632a67d7/631a8b2bf581050de0035dee/1600_Lucio.jpg'},
                                {url: 'https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c1/Lucio-ow2-portrait.png/revision/latest/scale-to-width-down/350?cb=20191104073705'},
                                {url: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JH3CUTHUH5DBNAIBBSEBXLZNCA.jpg'},
                                {url: 'https://assets2.razerzone.com/images/pnx.assets/9ad9615e49fbcc241a69e2ef367a19e1/razer-overwatch-lucio-edition-hero-mobile.jpg'},
                            ],
                            tags: [{name: 'lucio'}, {name: 'sticker'}],
                            price: 5.99,
                            stackable: false,
                            visible: true,
                        },
                    ],
                },
            },
        },
    });
    console.log(collectionAndProducts);
};

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
