This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Tasty Rocks
## Phases
### Rock collecting Phase
Rock is random but can be improved by training and items. Player is limited to regions at the start but unlocks new regions over time.
### Rock eating Phase
Consume rocks to gain prestige. 

You get more prestige if you take rockstagram pictures of your rocks before you eat them.
Can get sponsors and be a rock influencer.

Rocks can be improved by cutting and polishing. They're worth more.
## Rock properties
- Weight
- Size
- Clarity
- Luster
- Impurities
- type: igneous, metamorphic, sedimentary 
# Brainstorming bucket

There are two ways to gain advantages: randomly and deterministically. Random power ups can act like item drops or cards in other games. They can be permanent, single use, or have charges. They can provide a persistent advantage that can improve your economy or create an economy of their own. Deterministic power ups would be like a tech tree or skill tree. They can be followed each time whereas random power ups will be reset and different each run. 

The game is status gathering satire where the player eats rocks in order to gain status. 
Tasty rocks has two main game phases. The first phase is rock collecting. The player clicks a button to receive rocks. The quality of the rocks are at random. 
The player has a limited amount of space in their inventory before they have to go back to their base.
When the player eats rocks they gain status based on the rarity of the rock.
Quests to find certain rocks can help unlock new features.
Statistics page that includes things like best kinds of rocks and how much you've eaten of that type.
NFT
Social media: eventually the player will be able to post their best rocks on social media including instagranite and roktok. As they do they'll get more followers which gives them a multiplier for clout per rock eaten 

Rockster
MyStone
RockBook
Stonr
instagranite
RokTok

If you want to prestige your socials you can get "cancelled" where you lose your followers but make it easier to get new ones because the algorithms love controversy

Farm rocks/grow crystals

User can't identify rocks without education. Sources of education include books, community college, geology class, chemistry, mining school. Identified rocks also makes rocks more valuable. Education can help the use find better rocks and might unlock new regions 

We should track both rocks/minerals eaten and clout separately. When the game starts the only thing available to users is the collect rock button. Once they have a full inventory they go to the eat rocks screen. Then they unlock sharing the rocks they're eating which starts getting them clout
# Versions
## MVP: V.01
- [x] Collect rocks
- [x] Eat Rocks
- [x] Change between rock eating and collecting phases
## Inventory V.02
- [ ] Collect rocks adds a rock to inventory
    - [ ] Rocks have properties that are displayed in the inventory
- [ ] Display inventory
- [ ] Update Eat Rocks to increase clout based on rock's property
## Automation V.03
- [ ] Players can spend clout to automatically collect rocks when they're at the quarry
- [ ] Players can spend clout to automatically eat rocks when they're at the rock kitchen
## Locations V.03
- [ ] Replace phases with locations
- [ ] The player starts in the rock quarry and locations are only unlocked once they fill their inventory for the first time.
- [ ] Different rock quarries have different rocks available
- [ ] Create a rock dex that keeps track of all stats of rocks seen
- [ ] Create quests to find certain rocks at different locations which unlocks new features
## Social Media V.04
- [ ] Add social media where you can post rocks you eat rocks to gain followers and followers give you passive clout
    - [ ] Rockster
    - [ ] MyStone
    - [ ] RockBook
    - [ ] Stonr
    - [ ] instagranite
    - [ ] RokTok
- [ ] Allow players to get cancelled. When the player is cancelled they lose almost all their followers but gain notoriety. Notoriety gives you a multiplier for getting new followers.
## Rock farming V.05
- [ ] Player can grow rocks/crystal
- [ ] Player can breed two rocks together. The child rock will have a set of the parent's properties and some random new stats.

