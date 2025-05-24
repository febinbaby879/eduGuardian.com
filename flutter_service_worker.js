'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ad22755e4e25e612c64589839158bd04",
"version.json": "89a23ceb77571254ad27444391a8e438",
"index.html": "23bae3711bc3dd3d4b5135ddfede02f2",
"/": "23bae3711bc3dd3d4b5135ddfede02f2",
"main.dart.js": "884164ddcba84c066fbd7f0b02f76ea2",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/companylogonewfinal.png": "97fd43cf180ee87dfdfaa0e62f9b3f3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "027f30f23b48d9ca86b94dad1b3be0ea",
".git/ORIG_HEAD": "0a0340a64583b9071491349d942b26aa",
".git/config": "302e0d49cf8c157408008f22db7403a2",
".git/objects/0d/16e3878af11766d11d0f5e104b665ab6b4ef8c": "dbba941747c03f8359433373756b85e0",
".git/objects/0d/38ecd154bc94922b83e17f101024d5a994354c": "8612612c5aa0014f66fef521ea1af9ac",
".git/objects/66/289c62c8ed9650a861abd0a103925c9332ba3b": "e1fe112c0166eeaf24551daab6615272",
".git/objects/50/405b49478f543f751df67b11bd706169032343": "9ed39199c03795e2a4b87a054e69647e",
".git/objects/68/44ace74ac4f2e5869fb1798e2dd1940fcf795a": "ab877ab84298c29735f621140ce39c9b",
".git/objects/68/d092dfecf319b03fec8aa9b1c78cfdd00164b8": "a75b160bdc2853b687ed83d183c00ca7",
".git/objects/57/424a9a9ba476b6167f2a4952fec0490a392755": "bc3a86427d3e3bc2493a39479c754124",
".git/objects/57/85bccdc07271194e20bd8995223048d541187d": "8765cd9fd9014156fa57b2c0cceff600",
".git/objects/03/20cf393794b16951d870c8cc732b07f8fd436c": "823ad76e4ff904866b099b10f319c46d",
".git/objects/9b/3ff1f3e5833bbaa98ab4b7375318a831e001b6": "e6e2da328af81d79d6bf9f271a497542",
".git/objects/9e/5ef1c172d392216ded670c015f88742214bd91": "d9e7e0260a6e39d5f9ce8393b1f768e4",
".git/objects/04/d5187e95499faafb89420a807cde5a1d70923f": "a7ec7fcd1b817cc4ea93889f4a48eae0",
".git/objects/04/cd28a43bd88ec69268b9950a5d6a7a0d69b274": "ccccba4435c036fe282e4f92d9790a8e",
".git/objects/56/acd13be2590fa8f47b7651c1f0fd726b0ae84f": "7706eb566bb0f1190b5278595f9a999f",
".git/objects/56/3d201f292cf3527db42248a6821ab8b4996fa3": "9b84901daa9e314abb292881b290db27",
".git/objects/93/c9986efee9a6f1829e9d07012971935cd47f24": "d5582ab8ff206795e27e5278b6b6a528",
".git/objects/5a/e1ff17e9049f8fcdc5da2cf2bf703467907856": "43a6c740565a22cc808eade37c8ae297",
".git/objects/33/20adc49fe5ae1cf7f1dc0c76e728b1ef812aad": "1c4a8e7bd3105c6769648f52ec6f7663",
".git/objects/05/165cd6ae0292a355f263217adaa60dd0d0578f": "ee231d57ae467d029bf48376a65a1580",
".git/objects/9d/9f163db8b4bc69b438ad4bc7ff74e0b7f693bc": "2d600fde81b9c39e0fc3913e70fae39d",
".git/objects/02/774f097a16878430f37684222670e0f0074608": "15c7e6ad0034bfe5c7792a8006ead1d1",
".git/objects/a3/da2f0a825eaac13af32338ad24b4ddd9cc9b36": "dc84b7393d6030f2abaf50a65666d0fa",
".git/objects/b5/3fa7d3b46e75ed664361b50b451882befd8b3a": "30a6a79c2d3d30d0f543bcd01b46a63f",
".git/objects/b2/631aeceeda196338f527b3a131eb3a20cf9776": "7de85cfe2f256f31a4fa8e6fe3ac9e28",
".git/objects/d9/a104cecc8b6e55ebfb2b2bca609dc1ece0a80c": "c1025a784f8a6d16f7c27fdb7cc74069",
".git/objects/ac/83c09e5210cec192f71c30be0c27e4c66c58c9": "7693c330b913ad79e5f57ba288bcd0f9",
".git/objects/ad/b1116a7bebcc0a7991d7ddb4cc66bc4c150ba6": "92e62a774bea1fab981ff978b3fb67e0",
".git/objects/da/3305598df042b55ac465f64506e2f7dd0cf3e9": "58d6523f420af5ff35596552bd78ac31",
".git/objects/da/68e9264fb3aca7500ed2ca1a330cf03af7f98f": "fdf543656a35a7f7589bc47b75d46f01",
".git/objects/da/1d9a2f0f6a01e19ac44c62b065a9ea4ec75d5f": "7f4ce4aaec785444e52aa2d869a28a50",
".git/objects/b4/5e5c3857030f6ec86ba02d9c221e706c6d2024": "46b2887d70d48be89046141b35ef5a79",
".git/objects/b4/ad134fcc96581b01ed4f28f89874cddbe574ce": "8a842c370c4d5161d18768637d6eff23",
".git/objects/a2/6153d4e87312315284f49bb64ff84101f6030c": "942dc137027373e75b418c5ef1b32c84",
".git/objects/bd/324c0f884e324be983d51f100e71e321eff6f8": "0324e5b8a92b417e9c73dc5abbb550c2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/3fbcd84ff4fc0d908f5e6c6e0222ecd616989e": "3a3205cd0d1d4878b8a016fa5473d62e",
".git/objects/ae/f9d522b5ae2904a52544fd8c2281a2b343b66d": "060c2e68b9a8019177982acee7f0d5c7",
".git/objects/ab/7dde27ba1ddbd9709176faab6142fc27b1bec6": "80d111c1c379cdf08dbc3b560275999a",
".git/objects/e5/aec28237c189a6798af360543b3c1d8d534374": "d5a7722cdc4385ffb3de43e9f3837eb9",
".git/objects/e2/78d6c6a0cbe9003f4a1cb72252a6d517d84eea": "9de0c826ee01b23a67c6b8e3e588fda6",
".git/objects/e2/9708658d168f605c1e6988d4aaddf34178ca10": "02c41a42d1e5b2c50d600c15dca4b908",
".git/objects/f4/27d85db611d543ae898c7b0b86d5cc8d4ebcdc": "b231827878ab30d0300bd4df55cbfe4b",
".git/objects/f4/474c7c6383d21ba4da9c796ec58c4fb476c29e": "3d1c81fd45655a21686155171356007b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/d29f094b41f19321864ea1745a7e4c7e14f981": "045d1dbffea5f0744973a1bebdc96ffb",
".git/objects/ee/8685470f580accd7a8702eee4ffa2b10a3acde": "cb7138846e43c8ba4ee683131d07b3ac",
".git/objects/c9/3a2f4e77c02fe49a30b187c2c89fa633d3b9c2": "590f3c07d51010109426255bf3bcb6d1",
".git/objects/fc/6fc821f6c42bf17eb960ddc96cfc048b3fef86": "c24d998f551ca388ae17fb085c73b39c",
".git/objects/fd/ced2571285435d287cefdc3e0a2e4891768ad1": "53bcf87561d3b5570290b0eb035d247e",
".git/objects/f2/c9e97c91d0ca32002d6eba53cf1981031047bb": "05d147ca28fabf58f251c18d62f64056",
".git/objects/f2/52512b71ef81d7ac3dff55f346e5d60b384d35": "e9381ff7322878661f990c3e404b9320",
".git/objects/f2/67c86edaa569106b15aa1d1ee56455764bb307": "6a994275330da98119d60ca54438e246",
".git/objects/cf/ef8ef07b06273ada589257a31b413d703618a2": "88f2c99a2b4d6df270eea7d292e680c9",
".git/objects/c8/d8c01e5cbcd264636b8264c932b2c11d4945ab": "10398f527b95255541efce29f83fc4c3",
".git/objects/c8/650964b7d35ad39d607c4fd7f7e5ea01d3f7c4": "a460d538eed06127775580dd1e325aff",
".git/objects/fb/48a6e392ee21dfff636351d3bd917f88f9ed73": "bc0d53ecd34d9af5a91b609652ad11a0",
".git/objects/ec/710a14f3731aeefbfaab9f19f0bb089f478ab5": "845dccf105bccc54178595869a0b1376",
".git/objects/4e/f5317aac66b8dc7ffe66ad057f2ea77e55f1e4": "9296404b9f43338be698a18e03ea217e",
".git/objects/4e/a10fec18f9edeabcabbbd231ceafed497959c5": "959143da95c01fda526c2616a89a86d9",
".git/objects/4e/d9f5f69f360ee6ce4ca0e2ba23589ca5167bd0": "9e504699c12f62b6a2027a205de270bb",
".git/objects/18/f64b6d0a05c24a9c0b1867b9b3dcedf92e929b": "36a751818415a826155f2fb2b0f269e7",
".git/objects/27/177638eaae340894763eb557369072eab05ba2": "28b05ab23dbcd604a0f492fabe787664",
".git/objects/pack/pack-2e8a3a02bf68431c689fa9cd07247ea41e48f675.pack": "7d98d23f9d18f63f5079d97698dce2c1",
".git/objects/pack/pack-2e8a3a02bf68431c689fa9cd07247ea41e48f675.idx": "d8ea98bfe05fe7b3a4d0ae7435558477",
".git/objects/pack/pack-6246496996046c8ef0c7288dc3ebf8261a6dc7b2.pack": "1e6e69f50cc85f5cdf288962f388b0fd",
".git/objects/pack/pack-459304b66d4890ba5ca062ccf0c2a8461c8ba6cd.idx": "723fe94d0390c17e0b823d2d6f563a56",
".git/objects/pack/pack-459304b66d4890ba5ca062ccf0c2a8461c8ba6cd.pack": "71a97b30069a26ebc35eebc6fc32c131",
".git/objects/pack/pack-f15e55b95fd7465a6bbe1f52541d7fa181a34ca1.pack": "7f4958ce036f4dead2446146763331a8",
".git/objects/pack/pack-f15e55b95fd7465a6bbe1f52541d7fa181a34ca1.idx": "2be6904178dd95c8f23744945da9e9de",
".git/objects/pack/pack-3883f10d2e089ea8c5d4853924da7aae2ce88326.idx": "e914464942d1f419406a3d3107effca8",
".git/objects/pack/pack-449a6c4769bbe39ce866da4bb7f4a925a37d5a8a.idx": "492379b92ff9228020570b8a48d91b09",
".git/objects/pack/pack-449a6c4769bbe39ce866da4bb7f4a925a37d5a8a.pack": "5db701fbc4f49c879c3cffa3785657d1",
".git/objects/pack/pack-4024e923733652a1fc8fad32800f4d91b0447b91.idx": "f8461f9e19592d1e4bd737213c9c033b",
".git/objects/pack/pack-043434b7da8a903e2605ee0b2010bf7ec8c0bf93.pack": "46211c78339f7d7a612ac65cdbea9a1c",
".git/objects/pack/pack-4024e923733652a1fc8fad32800f4d91b0447b91.pack": "4933eed6f924737cb80fa15df82dab45",
".git/objects/pack/pack-3883f10d2e089ea8c5d4853924da7aae2ce88326.pack": "b6e89748bed4fb5a257bb3c8c13d39bf",
".git/objects/pack/pack-6246496996046c8ef0c7288dc3ebf8261a6dc7b2.idx": "9550c51994294bfa90dfd86a2ad44a7b",
".git/objects/pack/pack-043434b7da8a903e2605ee0b2010bf7ec8c0bf93.idx": "a4d5e61cc973bfcf92744fed85507058",
".git/objects/7d/a5c2dd289fd3d62b1317993f91359170246d85": "c056df94e507b13a9c523ed2086ae802",
".git/objects/7d/2af613c95710708e3755ff8e7b290666fa6dbf": "8470eb9d0949b49622388450007977fb",
".git/objects/7d/09fc259f17fe679fb181daad3d5edda396ffea": "15c727496e2dc0be383221722676cf33",
".git/objects/7c/38eb0f34301c98007ad87b69441cbc989384b4": "5251e02663aecf33f0e8fde5e23b023f",
".git/objects/7c/0d37741d77cbe4cb4156df92de686f55de6efb": "44fb5307fb6b9074a0f184c79016f229",
".git/objects/16/b781780872c900573303b3c5b88a8e7e19498e": "28f4ba2fdab80a3482b20629021367f1",
".git/objects/1f/f26a05568536b4348941a8f87fd1bf59d0f6f9": "0ba2f49d9662e329cbb1952d457b5ebb",
".git/objects/73/3c6d947f77a843f7c7641731656ece242ce71a": "dcc0afb4af408183d258c3c506b0999a",
".git/objects/80/b1428dd1f024bfe51386c4a1d43ef233c6b2f7": "c7eec57e30af7058a8195be03617876c",
".git/objects/74/860a4b854f27ac6b52f70a6eb4e598def4b9d5": "1ab215939957931a18c4d930bf14b042",
".git/objects/74/8ee9a382a600cfceb3fdaaae4e99955cb9a05e": "255b510b194f9753e3d3f3d180e34879",
".git/objects/1a/1319c9f7cb143e1bee18b8e52db893beb3c581": "b2372ae0826c3d471d7cce5949ac342e",
".git/objects/28/791b5aada21e48c1cec634fe85b1307b6a4db3": "13867175ab9b58e445c2bfc038455547",
".git/objects/28/66c91b8635da8d4c4c60829611176b7b57375e": "d0d55081a07df3a20f584136c5af3100",
".git/objects/28/b0a099677b4a9da5efaf6a9d3672da7f7df17b": "5c699a0e5ef8609b37435375d272e3a0",
".git/objects/7b/a80e40ea6c5514e0552beff1f158ea8b23b23b": "14de04d1d7f7b54f070555b56392d532",
".git/objects/7b/d835b11b4ff0b3d84937a9c6685b26218e47cd": "bb4ebb500a5d342b96c07f2d0ace556f",
".git/objects/8a/1096def4c81e927d0915f6d3ddc70e6793063c": "7d60d61d1bac413cb5eae0e8bd1e5368",
".git/objects/8a/7d9300d590dc1740f9a9989ef30691501177d0": "a3b97f5c3849a925452a989bcae0e871",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/4d5e81834a8c3bce710aa38f1982e8bc9f955d": "e00e4449d40d742e6d9deeb32a587aa2",
".git/objects/21/9b71b1324a3b8ce280777917ff9438537a2c81": "6a7ab9874cb1de465c0445fc1a5ab2b2",
".git/objects/4d/71f284bef3e259c36f82e36a279487ad1a658f": "d78a608e97b100697cd53e677734f353",
".git/objects/81/5780b1dfda434bea71abfa1653f652201bbc29": "6c635a3cfaa23a38a20d304aefc6d083",
".git/objects/72/e483556d76e466b5997cc2efb6e666267a0f6a": "ec0ad389538dbf700a7c9788ea144842",
".git/objects/2a/528cbd13e08876462256dd77c577661c1e1b94": "f6cfb3561fecb3e3f99b5560ebf8e36d",
".git/objects/88/ebc972877493f66819ac95a9bc3db8ed349534": "d2c5b7853f383759d0e80df585105ead",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/244b9bb03dd3d9629e61ed0a8cba684694b3fe": "f308a67c6ede2b9949549ffc933c6ac2",
".git/objects/6b/f3c48eb0eb97e8989ce8319b2a5faf1bebadb6": "22cedf9df7e4fbf029ab90e0cca63228",
".git/objects/00/469d2b8071dea1f91418cf0e9d5388d1f866e2": "b82333b968a5c633f29d25160c450366",
".git/objects/6e/9fc1efde9d6cc84ced26a2faf28219dd3d503f": "581d2037af4578eb11267478a4ca2022",
".git/objects/6e/02d1f3d9d0112cecc9c733b1f26c84352acbbc": "4497489e51fa4e83a7f3e6f06d9fe14c",
".git/objects/36/0c4b33259f7769e1a3d9dc5b3ec959207a3085": "9847f5761a6cbd6bd81027eef76aeda2",
".git/objects/5d/785204fb5efb1609015a1f63e34a53afb9e546": "609d241376c093a3f92ba4ce2c73e6a6",
".git/objects/5d/35c67f1dd7cbcbe54a3dbddd0625f4b45cc73c": "300ff66b07edd5d5ff2581227f509bd9",
".git/objects/62/e2a7f67dd552de95fb41ecd9b03b8c3fc68ef5": "d978d555fbc84d1a0f1bcf15fa6bc68a",
".git/objects/98/11fc663531a183f2bff1c41bc19db8060c5482": "a0c29099d45610a72485e27910b8e055",
".git/objects/30/bea12f42ce58e30983e8fedc89ee9502617ad9": "ee09685a31164c9cd7ef0a3ae39e5cdb",
".git/objects/30/ba34eb85cbff65360b073d52ec6bf2fe42f884": "4e7f3c7acfd7c52e613c63701a9e05a4",
".git/objects/37/3bd4e16db1fa3567d6fa0a38963dca2f13afb9": "4740d22932be64e32522a7f993fb006a",
".git/objects/08/49f60bfd374ea1bb38c9ce34fe11204228f4f6": "a0a207ceb32a460762e5677964e3884e",
".git/objects/01/273921e01a07fdff32d38467d15568a65dc8a1": "0013dbdc76309b612b53f6c2a0fa67e5",
".git/objects/06/8da06b141ed7aa5e1757b6a599fb2c675dc9ae": "8a5cb6ad8cbaa2aeb9389c8bc27b61a2",
".git/objects/52/dd7425f3fa0bcc42796a728c504347456fbd38": "9e7dd078be7cd283c9fe6bee6e9f6d0b",
".git/objects/97/8e7eca31c68c380a4eb3bf93c9072c35327b93": "24d290486ed29ab99d68ced75b6f902f",
".git/objects/97/a5a6c2b88a9ec1edc88c2c15a60ddfb799965f": "882388d96f838313c0e59de63f56164b",
".git/objects/63/b122380fac9234e5d2085f40518659d63409b4": "bd1270973b2229b2c641a9614777d960",
".git/objects/0f/0de19ba958bb2033bb620833a5cddc3203bd7b": "b3333864add0c22ff786d49560ddf89e",
".git/objects/0a/323f5f4fc664265098c3e97ff6d4d5dc7afd00": "2ee0e2d4c4ebe89b3ad68a6308678dec",
".git/objects/64/251f74d641d48540febd84f8d2d9f3ddeed301": "ea089acc034a4559c6a8d5aada0309bc",
".git/objects/a7/51f915ca87bd73e71195031af88828d84cf2ef": "fd2c9b43f88d77783d89b47b230fd4b4",
".git/objects/b8/15317bb2f4d1a339664f218703edf890d05c79": "782fc2266f466ad24a26ae4e44d4e59d",
".git/objects/b6/fa5fc02258fd5011eddaeed8d3b586f99b6078": "c90f1680de2a55649f6b5fcfdfe8df93",
".git/objects/d5/6aebcc862217b5e3ccbf4ea1fa0044c0c2f670": "7ca2f142d5768bb90813c415c3681c46",
".git/objects/aa/bb9865cb02842c721a419a41e03b5cd7951ffa": "afd9761eda6a4597794df311c7cceafd",
".git/objects/af/a9b4becb850db34353b02578eedbbba31b28d5": "523ba164ddd3d3de45b3c17b02b16364",
".git/objects/af/ddde7474881849b8bc7c93db0812045c0f4b39": "71ced24a7a22eb5ed545172f57c49044",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/0c6fa2a0f2ab604e9475fa7132ebe7f861db91": "4a47ce992a8a4d6f1dbebf7578005b89",
".git/objects/db/7993f8da0424cacc13307cd130f1129d016560": "4c4d2e11267a0f0f786150f5046913a9",
".git/objects/a8/1b511eb30616eb5efd593d927d7a96fee89cbf": "8a3c08ca6ed11a7ba2292c7cbb06294a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/89c6e38ff6d6ddf7ba2fb5a19d8e5e1141de00": "e969257e88767fd417d459b94bce36d7",
".git/objects/b9/e08b251b29f20a68c46c8302e6db0773dec8f5": "d84a254d232cf4d4fc000d91aab233d5",
".git/objects/b9/84c1ecc192712c0da136c3ec48376fc80c435c": "284aeeb8616559bab27c2eb0f66e473a",
".git/objects/ef/1aa8624a121c04d1c6acb58965f1a480c2fbcc": "511bd84e705f6fc34bdfe82d9c5d6515",
".git/objects/c4/593e8450b277a1d1bf2ab5d5be825208de3120": "6492c4e5a727d71ef44774176472bcc1",
".git/objects/cc/0678b804ce761bae0108ab4daea2bfeb08b669": "ae598131c09dba0fc691bb47814489f4",
".git/objects/f9/2b19435fbd0005d255d4d388e4af2fb910a968": "5a0c2f3e83d013cdeb9c9a0bc11b0325",
".git/objects/f0/a5f0f2dcbc2bd57acda9adfe6274ac79d3ff0e": "f430ea181a2660e1775e0040e8195f4c",
".git/objects/e8/d3c409d58eb35b4db1d081c6ed2f9eac0c24f1": "59020fc5827f1353ca1be0860733d85e",
".git/objects/fa/2aa2dcc36ebe992ddd1258cc3347413d58fbea": "fb2fb1022b333ab915fa5ec81894a0ba",
".git/objects/ff/78087dc85244bdec679696a31d006ae7996bd9": "ac0f68ccf3b5cb8f77beed2b91b06fb2",
".git/objects/c2/aecf8ae408ce27882c810de2aec92dcd74b770": "8e2be77acc680e3654c48430ace31061",
".git/objects/c2/d483b26cb801fd76da3c60303cd639a50a5320": "92c4745decb573834d2f0abf1a3e899e",
".git/objects/e7/b131d0fb56c0e2a00374d1933608c696d3b7d4": "4bd810ee0fc39f5115d7c36a34a6d793",
".git/objects/cb/0fc8b227763125acc5d2abd8696dcd3a70e6a1": "d747062bf477dbb32a7e508d680c80b5",
".git/objects/e0/507e8b0e2488db572a6e17d4187b0bc65bfdb9": "a29f54e997b5cbbe7397cfda64e1f2d6",
".git/objects/2c/761a04ff54a647d9fd00c62c42f811c9378806": "42a7ebbde984aa09265935a993e8deda",
".git/objects/79/18e0829cb7f9265dd6660a07c89c01ce666c44": "61d29b46d82987e75b5118311cc019d8",
".git/objects/41/0878d649f218fd174aa613dca9fe2d734c8be7": "61f97fb11348115bc0cdcad47c152688",
".git/objects/41/f7b0b7d46da94cc14c001827d82f2572f3d8af": "29766350429db9f9e8b7b0376c36239d",
".git/objects/83/ce363403ebd07b1d25bf5e4f54156e9cb0c524": "010d252aef6bc62603c86b45648131e0",
".git/objects/1b/851301b57b3a35a6c91c54e261055d1b3368a2": "fe80c7791e7e7c514e49aa26a58210a0",
".git/objects/1b/55cd5af8df3c1cd21c9ff9d9af97bfbd610cf2": "4338fff3307060622a445d26fa456d27",
".git/objects/77/5d94b403ecc4d5faf5e24f5a09ed944edc6e1f": "d3dc6ab2acef22f6dd3ebcafc0c881dc",
".git/objects/48/486d0abd41ff764c6c684654392835c928c4a2": "600ab618855e33d58c863d0b526c02d8",
".git/objects/70/94aea24ab1b5c8969c442de5c45e631f823d0b": "0fd6010152f469d6c9a22aaa57de7d21",
".git/objects/4a/e2ad5690ce81ea3f4a5c1e4ca2f5e3dd7d9aba": "57f5fc1504f080be5988e080235e06b0",
".git/objects/23/6e35f6c1b27d8e3133c7c7ffe02ba2a5b20145": "6341b83ee9112d81ed77a35843a80c63",
".git/objects/8d/1f047fdaf1fba1f5d17774a70b85e97bcbf852": "f91343e23b89bc47309b2449bfca5110",
".git/objects/15/406d3ab474671719eeacd55e99f92355b2e426": "8f94c439b7de83bbf096054698f6d16e",
".git/objects/15/6b66d142238b00065f71bff6f462fe1a5bbcc7": "8bc3236d0432feea9e8bd0a77bfe0708",
".git/objects/12/fad7a8ee7ce5e442d8854c4393f03921bc3416": "4560e7c1158febbc6d2b9000f14ccfa8",
".git/objects/8c/d1edc736238fac6f268791a07a96cb5f2fe835": "c83c02d036175b4ab9c744836fe789e6",
".git/objects/85/0eee90cd0c0a0493b48b5ec9914ffbbcba21e8": "dba74d222070e1836050034253fdce0a",
".git/objects/85/fec6bf86d8643dac4865d766df93385d2b25b2": "391de3893a161187dda8b8fdcc9ea390",
".git/objects/85/4cdc42770ab875673a4b9ce12a05368bbc4e7c": "08fea2d17d077cfae8a67611249471bf",
".git/objects/71/66052a7b7e577d3641225be0016deda8f3220c": "2b7765aa02e7fc44471d00fd1344feed",
".git/objects/71/d05b8c87b87331f80a5c48c377ff3aaaaeaacf": "0bed11fcc347268e6235902a815ae1ed",
".git/objects/76/2b2fd2996d0c72f2f65e72f9e800f0059c7dad": "f2e8c40e4b9d98b4e4fdd4cd0691bb97",
".git/objects/76/39594eedf91b3e9f9b5fb76ec816a115a35251": "7230322bc0926aee2a5fa1015d464692",
".git/objects/82/a18a533c6925d26a7524056b869078c263db25": "afcfe651f4b4463cb966971f5edb4284",
".git/objects/82/9cbee7283dc4ed3cfc1580b93c2f762521b324": "eece939d50816e55c60a26625ee07c3f",
".git/objects/40/7c845729986b3db5fcba39596b9db0a6566248": "39e7687b17508b2176874bd7c16a3279",
".git/objects/2b/a822eff607de8edfa5bf9a42fdc34cf52484b7": "473a865354ed0e9ea467ecb681746091",
".git/objects/78/397fbe989de143feb35546f5bb3c136d6c331e": "3f8363365307512eec11c5bbcb747cd0",
".git/objects/13/d71e7818ccad520f17c0c89036ed957d5e4163": "0d7199a78a86d97d09db070e7d513c90",
".git/objects/13/ae24947843e9d04fff7bfd08207b4ff56b688f": "5227949fac4adc4658dec2f06ba0622f",
".git/objects/7a/75a18c869657b326b8f42e60fdbdda0d126da6": "0e0a35717c76e22d01a21caadd2cca40",
".git/objects/8e/04bfb25cb71eff63c5519966c1de40f7e78672": "a7569f79d9b3ec3d5e41a93b8ebf0c46",
".git/objects/22/c54c75bb8974c73b8224fcf9c4278bbed158d0": "fbaf0359fc77950b1f21a9a6a45efda7",
".git/objects/25/a2957a5c9e1625e6a9934c9aab7c125ffc9b47": "2a59f2e208cfac1a479543fbdf787e8a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "64743ebdfdb9019d43815bf4d5d37179",
".git/logs/refs/heads/main": "bbcd24de52b161ce8eb60cad5febcf06",
".git/logs/refs/remotes/origin/main": "53029b4e0329ce4af446e2b8240c704a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ac152b0128e9be640b0a15900c7f8381",
".git/refs/remotes/origin/main": "d0d8118266bb7878853a532ffe9322f0",
".git/index": "36f96f16cb303df6d179badaf51954f5",
".git/COMMIT_EDITMSG": "0fe530e1743a693f0d31824e68aa84b6",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "68184b2854c7d1842f3b44814f06a2cc",
"assets/NOTICES": "70e684edededc5faf50d3eba9e3dd2eb",
"assets/FontManifest.json": "fe95dcf393a3c3d942ac7de6f6fd3673",
"assets/AssetManifest.bin.json": "8ffc16c312329ee2334e8d88e5e27095",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d78dffc9e3458f0120ffab743fbe23ba",
"assets/fonts/MaterialIcons-Regular.otf": "f44207bee0d6dc214653dfa5ae7a1778",
"assets/assets/images/instagram_image.jpeg": "d0994c3e82c00f7a05f58b12f876cfce",
"assets/assets/images/application.png": "d904891bff8b1756cf73c5f70dcd0c4c",
"assets/assets/images/landing_screen_image.jpeg": "9c3867090c4cb4eb182224bb1ed19e71",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.44.57.jpeg": "08212e37b201ab05d617f053235cf699",
"assets/assets/images/classroom2.png": "6920fd54ef3ad9661c7163bec341749d",
"assets/assets/images/eACCC4.png": "cdb1a65179fd5203fb8623f4461afa0a",
"assets/assets/images/fund1.png": "447e623788b7007e24cfcc78846bd063",
"assets/assets/images/150175.png": "db08aee854aad6bef6654f7d59b15244",
"assets/assets/images/aboutus.png": "59ee81b7624bfda7c253b9d521cd4841",
"assets/assets/images/scholarships_financial_aid.png": "ce4bfdc17692c54eb2e58ef95788d0a8",
"assets/assets/images/nodataImage.png": "383aef1a9a6d353459669f2f4fb94a0a",
"assets/assets/images/BritishCouncil_Logo.png": "2e7c25007ec3721c74e4fdf5ce7cdc17",
"assets/assets/images/whatsapp_image.jpeg": "d4213c9456bb3473bd4938084b6871f0",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.44.57%2520(1).jpeg": "5defc5d386d227b6113635c668af81cc",
"assets/assets/images/likedin_image.jpeg": "633255efc6348b00f48186fc79817cff",
"assets/assets/images/egstudio1new.png": "eeb41211d0f25bcf945bbebc156ccda0",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.45.00.jpeg": "ffbb48c636f4cf88dd1e60915e0b855f",
"assets/assets/images/faceboook_image.png": "8cf5e300b2e3086e6fd464c573b01b74",
"assets/assets/images/bcaccreditation.png": "9d16dec1763b2515310b5f6518cc8e85",
"assets/assets/images/jobrequirements.png": "dd10cf3675981f18db9312fa5489c762",
"assets/assets/images/call_image.jpeg": "aa907afebdcee6420696b28bab3bbe79",
"assets/assets/images/Quora_icon.png": "674856c2afa89e3f4b4ffed48705bc2c",
"assets/assets/images/Mail%2520Envelope%2520With%25201%2520Alert.jpg": "047057d9856e809f0f1d7e780a45c7fd",
"assets/assets/images/careerhub.png": "7fc8a58c365adddf9be6465e719881a0",
"assets/assets/images/STP4.png": "0bc7a932b349a81fb6d454056b024324",
"assets/assets/images/corsera1.png": "e76d3a79cb4e8b851cd2655ef96418d1",
"assets/assets/images/testimonial9.png": "5855261322acfe4527d8e1a92d41f05d",
"assets/assets/images/requirements.png": "efdda30a0b55b6cf9ed9d428a1cd0b55",
"assets/assets/images/testimonial8.png": "410eefb23cb9a2a7d2159e2aa7aced44",
"assets/assets/images/cimage2.png": "ca0a8c8ed11eed19dc9022e69d9852a8",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.44.59%2520(2).jpeg": "a80d6f43167a449753d0a8aa44cbed7b",
"assets/assets/images/testimonial5.png": "e1d3b1b84754bc66bb8d0d2f6c02c441",
"assets/assets/images/submit.png": "4e4bec3e00928dd5c39d1de72adf8094",
"assets/assets/images/tiktok.png": "55046fbdea38fe825e8b1bcee7de32c0",
"assets/assets/images/testimonial4.png": "0ee04c2393389929b613ccefac8c8480",
"assets/assets/images/studyabroad.png": "639558bdb015831366d1f81bd4508e66",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.45.00%2520(1).jpeg": "f182bbdca31865507b1266943bae0950",
"assets/assets/images/cimage1.png": "da75e588dbb458713e64381ff24a5fa3",
"assets/assets/images/testimonial6.png": "8d4654f8370bf3fedf7e06510fe724a7",
"assets/assets/images/destinationstudents.png": "ff08a731985ced306d9c40a2e8544aed",
"assets/assets/images/newsletter1.png": "d60e2e0427125e5171c3dcc91dce3761",
"assets/assets/images/testimonial7.png": "30406b3368e92dc320958732f259f3ca",
"assets/assets/images/scholarshipsapplyprocess.png": "a4e886517c32ddefe570d5520e603ff3",
"assets/assets/images/Germany.png": "efd0dcabf004e280259ef2045a957171",
"assets/assets/images/pinterest_logo.png": "358a500d8d0fa1da04475ecd3d14ccb7",
"assets/assets/images/elearning3.png": "0777e127aa1e7a14fa19a355005b51b2",
"assets/assets/images/transportationappln.png": "ae7185b5d3de6111b6e4310f9d3a237c",
"assets/assets/images/rightprogram.png": "3da339169102b9b4439cfd36e96107ce",
"assets/assets/images/socialmediafb_1.png": "6395c24854b248606314e23ed2c7c5a9",
"assets/assets/images/eJBS3.png": "fdf1fcba5766077ff0d1e972142d10fd",
"assets/assets/images/testimonial3.png": "2b31350328cf861ba307c689fddd029d",
"assets/assets/images/about22.png": "71485e9b7ecaa63eaeb7afb95e03f0af",
"assets/assets/images/testimonial2.png": "24da18ca5b597dd848e03b889cdbc7f9",
"assets/assets/images/companylogonewfinal.png": "97fd43cf180ee87dfdfaa0e62f9b3f3c",
"assets/assets/images/socialmediafb_0.png": "04f554fcbe92d91ff67f11ba43ffce32",
"assets/assets/images/socialmediafb_2.png": "515fbef0a4c8c52eb555596665d8d11e",
"assets/assets/images/appdownload.png": "e3e1fe9bf0c1d73af6ae6cc614549f77",
"assets/assets/images/ABST2.png": "7ecbae1079c5a7d051db8ee9f963e69e",
"assets/assets/images/testimonial1.png": "f08b0d91f20940523ca633992742c54c",
"assets/assets/images/programlength.png": "b8b66386c7e16b3abcc7ce6dffed53bc",
"assets/assets/images/France.png": "5056bd9b68abb3399388e15a88ddb37a",
"assets/assets/images/socialmediafb_3.png": "e2799821a4126c3b268b60a8f46f9d93",
"assets/assets/images/Pathwaysenroll.png": "399d5473f4cbefce56d205fb306388af",
"assets/assets/images/education.png": "b3cd8eba2f6fd70c4d7f106f230fc4a3",
"assets/assets/images/about1.png": "403f83879700c5a7e8038f30b0974ba1",
"assets/assets/images/contactusnewfinalnew.png": "f5f083f381480b7694a7c1bfd2837890",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.44.59%2520(1).jpeg": "a38e0d3650621d39887c5e41d677159e",
"assets/assets/images/snap_chat.png.jpeg": "6bded6e85fc90fa66834de42f0ae2bf3",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.44.59.jpeg": "fe28c332502501d79aa4def2f51bbb97",
"assets/assets/images/applyprocess.png": "4425d31320a8561eaf7617420a88c254",
"assets/assets/images/teenyicons_shield-tick-outline.png": "09e01150f4e4c82cf878fd9bae27431f",
"assets/assets/images/eG1.png": "5c0a7b69e848b8bbd279c202e863b262",
"assets/assets/images/coursera2.png": "0cee6ca79ddbe25f3a586471ec7fa498",
"assets/assets/images/signin.png": "acfb03187a65a2019c4720c13b6fb52f",
"assets/assets/images/about2.png": "bb7c6ecc90dd1d26e5a394b2e413acfd",
"assets/assets/images/level7six.png": "f8988435e289da07abc843b5c30d723a",
"assets/assets/images/socialmedia_2.png": "09e42dab797f8a3d25a9768e6e2226fe",
"assets/assets/images/about6.png": "fac9d0996479e02ca0b42e6814254243",
"assets/assets/images/eduGuardian_logo.jpeg": "b38a8a8706d6847cfd6c40752d30b575",
"assets/assets/images/university_of_bolton.jpeg": "64aa52f90e27bc756443f910e946d286",
"assets/assets/images/credit4.png": "b90890ae8f2b2136223f062d6a7f866d",
"assets/assets/images/uiversityofbolton_logo.jpeg": "70fe5acc06667e8e752ed20f25e65682",
"assets/assets/images/about7.png": "c0b65d2995c54deac71443ddf63f4cbc",
"assets/assets/images/socialmedia_3.png": "08e0df4a4e3509dd13ef348f2db5b079",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.44.58.jpeg": "61edd1e39b1ab942f3eb59f9fc2e7fdf",
"assets/assets/images/Japan.png": "53e20bf38f69ad0a1ae32dd84c024fbc",
"assets/assets/images/images.png": "b5b96f7f348fec2fb37a4ba5a4b691e7",
"assets/assets/images/socialmedia_1.png": "3e4c64258a752fbed335dd789ef842a2",
"assets/assets/images/level3twelve.png": "31f6b0254dc5d9d6d2a2bb4e9ff1183f",
"assets/assets/images/x.png.webp": "045545dbf4e47c0376e7ac3bd919cdf3",
"assets/assets/images/finance.png": "b3920c97ff4225521cf745f91e463bd1",
"assets/assets/images/about4.png": "8d09e31a7184cb465a98fdc5b15f05f5",
"assets/assets/images/socialmedia_0.png": "a8edba43f9bf1a42513f55ec089ac62c",
"assets/assets/partners/birmigham_university.jpeg": "b58489cf88bc93ad6c8db902ecb70f7c",
"assets/assets/partners/midddle_sex_university.joeg.jpeg": "15172dbcf64857db1577fd1800911fd2",
"assets/assets/partners/northwood-light-logo.jpeg": "4b4edcf2c942412385239ddfd6cb0694",
"assets/assets/partners/curtin_university.jpeg": "9fc667ff42f7a1e29602eabe11ff50e7",
"assets/assets/partners/dementfort_university.jpeg": "135bd973777aec131a2a4d2c178cef50",
"assets/assets/partners/amity_university.lpeg.jpeg": "90d8a58baa7cf3d3f9039074700acb8f",
"assets/assets/partners/city_university_ajman.jpeg": "4eae4bde3bcd084da9b94e66d12f9672",
"assets/assets/partners/MIBD.jpeg": "f2afb58db45b2a4a0b2f92c6efd1c6a0",
"assets/assets/partners/global_pathways.jpeg": "a5b38dd8a60d70ad074de05cbce646b8",
"assets/assets/partners/symboisis_international_university.jpeg": "d4a176c679564a2bb649c478df906b3e",
"assets/assets/partners/harriotwarriot_university.jpeg": "0ea1d2c73c8246deadc6d44e1543fe92",
"assets/assets/dev/28468.jpg": "862d7fe98ebe1854629043c1b9bd7d55",
"assets/assets/dev/19197556.jpg": "9bb997318ef8398a094cf77c693f9c98",
"assets/assets/dev/arrow_image.png": "17854b9cc6f3c201c10efd16b6644096",
"assets/assets/dev/careerhub.png": "7fc8a58c365adddf9be6465e719881a0",
"assets/assets/dev/accommodationappln-1.png": "d042b3eb879643623d186a04413f024f",
"assets/assets/dev/studyabroad.png": "639558bdb015831366d1f81bd4508e66",
"assets/assets/dev/homeimage3.png": "8fc3d0bb15e364d90503b71d0ac25d82",
"assets/assets/dev/service_icons/icon_bus.png": "c4e2ef2da11e07d3957cfef402f9dfc2",
"assets/assets/dev/service_icons/icon_bag.png": "bbd406716bf04349919fae36f012ce6c",
"assets/assets/dev/service_icons/ion_book.png": "b641357924fcf96005daeb6fef485d99",
"assets/assets/dev/service_icons/icon_Door.png": "0ff23bf40d817d0686a820199fdcf292",
"assets/assets/dev/service_icons/icon_cap.png": "770de42f1ca58b6962c928fec62b766b",
"assets/assets/dev/service_icons/icon_head.png": "5f1479e74e3e46e9fcbf9db56ea97fe1",
"assets/assets/dev/service_icons/icon_location.png": "55ad64975008db0b240f25f210deeb13",
"assets/assets/dev/service_icons/icon_bulb.png": "e99036ba60b84273765d0432b6c4af87",
"assets/assets/dev/service_icons/icon_book.png": "acacde0715c84b55cf015ce00f84b9c0",
"assets/assets/dev/service_icons/icon_plane.png": "fc932f3e3d4004e4f08d8041e9603123",
"assets/assets/dev/service_icons/icon_worshop.png": "58e4629b2f2adf30123bc303207d26e2",
"assets/assets/dev/eSPG3.png": "be42ed268758d9fe96189acbd56164cd",
"assets/assets/dev/eCRSB1-1.png": "4930ffec52c293a373ac7a62dc1b0def",
"assets/assets/dev/scholarshipsapplyprocess.png": "a4e886517c32ddefe570d5520e603ff3",
"assets/assets/dev/Germany.png": "efd0dcabf004e280259ef2045a957171",
"assets/assets/dev/elearning3.png": "0777e127aa1e7a14fa19a355005b51b2",
"assets/assets/dev/transportationappln.png": "ae7185b5d3de6111b6e4310f9d3a237c",
"assets/assets/dev/rightprogram.png": "3da339169102b9b4439cfd36e96107ce",
"assets/assets/dev/eJBS3.png": "fdf1fcba5766077ff0d1e972142d10fd",
"assets/assets/dev/testimonial3.png": "1834627133df890f78583de7a6e81996",
"assets/assets/dev/about22.png": "71485e9b7ecaa63eaeb7afb95e03f0af",
"assets/assets/dev/France.png": "5056bd9b68abb3399388e15a88ddb37a",
"assets/assets/dev/school3.jpg": "02060f30dc47fcf7defb70de3ad7e568",
"assets/assets/dev/2302.q702.010.S.m005.c12.student%2520campus.jpg": "877b6d9526181f5af4f6941fbf7f3736",
"assets/assets/dev/level7seven-1.png": "62032d53d72d1048d991a9a2f346a0ba",
"assets/assets/dev/applyprocess.png": "4425d31320a8561eaf7617420a88c254",
"assets/assets/dev/faculties-1.png": "d7d6a324c4de1ec4bf5adb7216eb5c16",
"assets/assets/dev/Japan.png": "53e20bf38f69ad0a1ae32dd84c024fbc",
"assets/assets/fonts/Arvo-Regular.ttf": "afb50701726581f5f817faab8f7cf1b7",
"assets/assets/fonts/Merriweather-VariableFont_opsz,wdth,wght.ttf": "4c27d0a30c5346c22f1be560631ecabb",
"assets/assets/fonts/BigShoulders-VariableFont_opsz,wght.ttf": "d243b0542ccfccbc06e5d2bc3580c808",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
