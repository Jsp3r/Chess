import { Strategy } from "./strategy"


export const STRATEGY: Strategy[]=[
    {
        name: 'Good vs Bad Bishop',
        image: './assets/strategy/gbbishop.PNG',
        keypoint: 'If a chess game is open, then bishops will reign supreme. If the game is closed, then bishops are no longer as valuable.',
        description: 'Also, if your bishop can only attack your pawns and none of your opponents, then its a bad bishop. You would like a bishop in either an open game or in a game where it can attack all of your opponents pieces instead of being blocked in and can only attack its pieces.',
        link: 'https://youtu.be/phI82EetT_w'
    },
    {
        name: 'Attacking the F7 Square',
        image: './assets/strategy/f7.PNG',
        keypoint: 'The f7 square is widely considered the blacks weakest point on the board. It is the only square not defended by any of the minor or significant pieces and a pivotal square protecting the black king. For this reason, many traps are formed to attack this square and why black should always be looking out for any attacks on the court.',
        description: 'Remember that your middle game strategy might change depending on the opening. If your opponent puts pawns on d5 and e6, then you will not have a clear path at the f7 square with your bishop like you would if those same pawns were on d6 and e5.',
        link: 'https://youtu.be/p9rK4cvNsOA'
    },
    {
        name: 'Chess Windmill',
        image: './assets/strategy/windmill.PNG',
        keypoint: 'The windmill in chess looks to gobble up numerous pieces of your opponents by using a series of discovered attacks that your opponent can respond to in a limited number of ways.',
        description: 'Each time a part is captured, the discovered attack is set in motion again. While you should always be on the lookout for tactics in your chess game, keep a special mental note for the windmill because it will change the course of any game in a hurry.',
        link: 'https://youtu.be/BnL3BqalJFI',
    },
    {
        name: 'Chess Outposts',
        image: './assets/strategy/outpost.PNG',
        keypoint: 'An outpost is a square where you can keep a piece where your opponent cant capture the piece without giving up a material advantage.',
        description: 'Outposts can be one of the essential strategies in a chess game as it gives you a vast spacial advantage and puts constant pressure on your opponents position. A great outpost can change a game from even to a decisive win.',
        link: 'https://youtu.be/o1T7TuP0Ad0'
    },
    {
        name: 'Open vs Closed Chess Game',
        image: './assets/strategy/open.PNG',
        keypoint: 'Chess games are usually either open or closed, and its essential to know the difference between them.',
        description: 'Open games are those where the pawn structure is not locking up the middle, and there are many wide open spaces for pieces to move. Closed games are those where the pawns have a defined structure and block the mobility of different pieces. \n Bishops tend to fair better in open games as their strength is using long diagonals. Knights do better in closed games as they can move around to every square, where a bishop can easily get blocked in and become useless. Always be mindful in every chess game, whether open or closed and act accordingly.',
        link: 'https://youtu.be/FjQ9k2ZKZB4'
    },
    {
        name: 'Pinning the Knight',
        image: './assets/strategy/pknight.PNG',
        keypoint: 'It is common for people to develop knights before bishops to control the center without putting out their powerful bishops too early.',
        description: 'When people build their bishops, trying to pin down a knight to a king or queen is prevalent. Although this isnt always bad, there are times that you need to be aware of when you should not try to pin down a knight with your bishop.',
        link: 'https://youtu.be/s9Sbg2A8Go0'
    },
    {
        name: 'Bishop Sacrifice',
        image: './assets/strategy/bsacrifice.PNG',
        keypoint: 'It is essential to know when to sacrifice a bishop on h7 and when it is not.',
        description: 'When you want to offer your bishop on h7, you need a few things in place for it to work.' +      '\n 1. Need light square bishop on the b1-h7 diagonal' + '\n 2. Need knight on f3' + '\n 3. Need Queen that can jump to h5' + '\n 4. Need bishop along the c1-h6 diagonal (usually seen on c1).' + '\n 5Need pawn on e5',
        link: 'https://youtu.be/mWXes8auzk4'
    },
    {
        name: 'Trading',
        image: './assets/strategy/trading.PNG',
        keypoint: 'Many chess players have yet to learn when they should trade. Some players will trade whenever given the opportunity, while others will try to keep all their pieces as long as possible. Both of these mindsets can hinder the growth of a chess player.',
        description: 'There are critical times when a chess player should trade and other times when a chess player should not change. Some key points when you should trade include:  When you have a material advantage. When you have a spacial disadvantage. When trading will allow one of your other pieces to become more valuable. When you are trading off one of your opponents very good pieces.',
        link: 'https://youtu.be/Ef0YKI93g9s'
    },
    {
        name: 'Chess Deflection',
        image: './assets/strategy/deflection.PNG',
        keypoint: 'In a chess game, you are often presented with an opportunity to capture a powerful piece or checkmate your opponents king. The only problem is that your opponent is using one of their pieces to defend or block your plan.',
        description: 'Deflection is the tactic that looks to remove that defender from their square at all costs. It doesnt matter where they go as long as they leave their post and are no longer defending the square you want to occupy. \n Sometimes you can gain a significant material advantage with the deflection. Still, you will often give up lots of your material to remove any defenders your opponent may have so that you can checkmate your opponents king.',
        link: 'https://youtu.be/WS6fZIJcM2s'
    },
    {
        name: 'Chess Decoy',
        image: './assets/strategy/decoy.PNG',
        keypoint: 'Chess games are often won and lost because of a single tactical move. One of the most common tactics that you will see in any chess game is the decoy.',
        description: 'The decoy in chess is finding a poisoned square that your opponent would never want to go to and doing everything you can to make them go there. You usually are trying to force either a king or queen to a poison square, especially if you are giving up substantial material to do such. \n It is essential to know that just because you move them to a poisoned square does not mean you will have an advantage in material. You often want them to move their king to a particular poisoned square so that you can have a more powerful attack.',
        link: 'https://youtu.be/eSZU_tuXinE'
    },
    {
        name: 'Blockade',
        image: './assets/strategy/bloackde.PNG',
        keypoint: 'The blockade is a chess tactic to block your opponent from pushing pawns up the board. The pawns value comes from the promotion threat to a more powerful piece.',
        description: 'When one side gets an isolated or a passed pawn, its common for them to push that pawn up the board. This forces the opponent to respond and play defensively. The best piece to block your opponents pawns with is the knight. \n It can easily hop over material to reach the optimal square. For this reason, if you see your opponent pushing forward with a pawn, try manoeuvring your knight to block the pawn from advancing.',
        link: 'https://youtu.be/Tp1B22zazzo'
    },
    {
        name: 'Prophylaxis',
        image: './assets/strategy/pro.PNG',
        keypoint: 'There are two things that any chess player should consider during a chess game. First, have a game plan and make sure your moves have a purpose to help execute your game plan. Second, stop your opponent from running their game plan. Prophylaxis is a weapon for this second point.',
        description: 'Prophylaxis is a chess tactic where one side tries to prevent their opponent from moving to a critical square or executing their game plan. While these moves are usually seen as purely defensive, they can improve ones position and open up options that would not be available if a prophylactic move wasnt made.',
        link: 'https://youtu.be/caYjV4vJFhY'
    },
    {
        name: 'X-Rays',
        image: './assets/strategy/xray.PNG',
        keypoint: 'In the middle of a chess game, there are level-one thinking tactics where you can pin your opponents pieces down or fork your opponents king and queen. ',
        description: 'The X-ray is a classic example of level-two thinking in chess. It can be in the form of a pin, a skewer, or on its own, but an X-ray looks to attack a specific square indirectly. It is always important to look not only at where all your pieces are directly attacking but also at where they are indirectly attacking or defending. \n This tactic can be one of the most vital tactics that you will find in chess. If you can master X-rays, you will get the most out of all your chess pieces.',
        link: 'https://youtu.be/Bw8VIZGhfgI'
    },
    {
        name: 'Chess Mating Patterns',
        image: './assets/strategy/matting.PNG',
        keypoint: 'The goal of any chess game is to checkmate your opponent, so all players should be aware of the most common mating patterns that occur frequently in chess games. You would be surprised how many beginners AND skilled chess players draw a game or even lose a game after missing a checkmate.',
        description: 'You often must sacrifice a queen or a queen and rook to win a game. There are other times when you must remove a particular defender before continuing your master plan to checkmate your opponent. \n Whatever the case, there are many checkmates that you will see repeatedly; the goal is to not only know how to notice them but also learn to see how a position can lead to one of these mating patterns. Once you learn all these mating patterns, you will start winning more games.',
        link: 'https://youtu.be/EnXIlR_wqQI'
    },
    {
        name: 'Fastest Checkmate in Chess',
        image: './assets/strategy/fcheckmate.PNG',
        keypoint: 'After learning to play chess, one of the first things someone does is figure out the fastest possible checkmate. When you ask most people the fewest number of moves it takes to checkmate your opponent, the answer usually is four or more. Only someone that is well-versed in the game knows the true answer.',
        description: 'Two moves are the fastest checkmate. This opening is called the Fools Mate because its a severe blunder for one side to lose in only two moves. For some, that is hard to understand. There needs to be more development of pieces to checkmate an opponent in two moves. It all comes down to the weakness of the kingside for white. If the pawns move, there is no material to protect the king; it only takes a single piece to deliver the final blow. \n The move order for a two-move checkmate is as follows:' + '\n 1. f4 e6' +  '\n2. g4 Qh4#' + '\n Not only is this a two-move checkmate, but its black that delivers the final move. There are different variations on how this can play out, but a few things need to happen for a two-move checkmate.' + '\n Criteria to pull off a checkmate in two moves:' + '\n 1. White has to go first.' + '\n2. Black must move the e-pawn on the first move to allow the queen to come to h4.' + '\n 3. White must move the f and g-pawn so neither can block the queen on h4.' + '\n It is rare, but now you can checkmate your opponent in only two moves.',
        link: 'https://youtu.be/tkuW0bocGXo'
    },
    {
        name: 'Top 6 Chess Traps',
        image: './assets/strategy/t6.PNG',
        keypoint: 'Chess traps are one of the most satisfying things in chess. Not all chess traps are created equal, though. Some surprises leave you in a disastrous state if your opponent doesnt fall for the trap. Other traps dont leave you in the wrong position, and you can use them more often without worrying about your opponent not losing them.',
        description: '1. The Fishing Pole Trap is one of the easiest traps for White to fall for. Grandmasters have often lost to club players at the hands of the fishing pole. If a player is unfamiliar with the fishing pole, the number of ways to hang themselves is sometimes too great, and the game can end quickly.' + 
        '\n 2. The Englund Gambit Trap is an ambitious attempt by Black to lure White into making rational but dangerous moves. Black will give up the e-pawn early on and then bring out his queen for a quick attack on the queenside of the board. The critical move comes after Black takes with 5…Qxb2.' + '\n 3. The Lasker Trap derives from the Queens Gambit Declined lines and, in particular, comes from the Albin Countergambit. Black immediately challenges the centre by offering up his unprotected pawn on e5. After White takes the pawn on e5, black has a few options. This simple move applies immense pressure on White, and they are forced to deal with this thorn. If White defends incorrectly, he can easily fall into the Lasker Trap.' + '\n 4. The Elephant Trap derives from the Queens Gambit Declined lines. Black defends the Queens Gambit by developing his pawn to e6, keeping the tension on the d5 pawn. White continues to grow his knight and apply even more pressure. It will be a huge mistake if White sees this and falls for the trap. Black can sacrifice his queen with the forced moves to win back Whites queen and put Black in a dominating position.' + '\n 5. The Blackburne Shilling Trap is a gambit many black players like to try in the typical Italian game from White. Instead of playing the standard Giuoco Piano or even the Ruy Lopez, black offers up a pawn sacrifice on e5.' + '\n 6. The Legal Trap is one of the more common traps any chess player will encounter. This is because it is found in a widespread opening, and none of the moves made by black look terrible on the surface. Anytime a player exposes his queen, and it is hard for the other player not to take it. That is why this trap works so well. Also, if they dont take the bait, you are still in a great position.',
        link: 'https://youtu.be/tYOnym3ZINU'
    }

]