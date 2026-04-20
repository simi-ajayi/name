import type { Gallery } from '../types/site'

const groupClient = 'client-1'
const groupHome = 'home-portfolio'
const groupMain = 'main-portfolio'

export const galleries: Gallery[] = [
  {
    slug: 'infrared',
    title: 'Infrared',
    path: '/galleries/infrared/',
    coverImage:
      'https://images.pixieset.com/282818211/5ed5b735d857bf9ea0d413da4259e9ce-medium.JPG',
    groups: [groupHome, groupMain],
    description: 'Natural light transformed into surreal tones, texture, and atmosphere.',
    images: [
      'https://images.pixieset.com/282818211/61aebc5dffb0228ff7d61c68513a8cff-medium.JPG',
      'https://images.pixieset.com/282818211/7c191d1d70cdcf0bd2d7ef4a1e9ca369-medium.JPG',
      'https://images.pixieset.com/282818211/9a906ce0c60eb38f7d911fb340fbdc1c-medium.JPG',
      'https://images.pixieset.com/282818211/a91083c859f64063469aac4f988f3b9d-medium.JPG',
      'https://images.pixieset.com/282818211/a96ecdde9c6f2a9ea8cdb9b813210586-medium.JPG',
      'https://images.pixieset.com/282818211/b54edd662efca3b99e0b22dbf7f17e46-medium.JPG',
      'https://images.pixieset.com/282818211/ca1e376c10d8df532c6ea1ec6e4898a5-medium.JPG',
      'https://images.pixieset.com/282818211/dd12589f3926c1798e8c107ef1ea45c2-medium.JPG',
    ],
  },
  {
    slug: 'flora',
    title: 'Flora',
    path: '/galleries/flora/',
    coverImage:
      'https://images.pixieset.com/282818211/efbbeec1307f90e3024a7d65e58abd80-medium.JPG',
    groups: [groupHome, groupMain],
    description: 'Botanical studies and color-forward natural forms captured with cinematic light.',
    images: [
      'https://images.pixieset.com/326575211/006707905b03e295442508da9c825f68-cover.JPG',
      'https://images.pixieset.com/326575211/08bc31f57830ec2397ac34d4c62fc913-medium.JPG',
      'https://images.pixieset.com/326575211/169c044da9fcc3505c0722dea9c3eec8-medium.JPG',
      'https://images.pixieset.com/326575211/1de83d7760bce0223503918c0f3d0549-medium.JPG',
      'https://images.pixieset.com/326575211/44538e378f5fb738c0616d0f4a25947e-medium.JPG',
      'https://images.pixieset.com/326575211/4f5d2d5881d58435df4765d4640e5894-medium.JPG',
      'https://images.pixieset.com/326575211/5846d0c268e336b5c871a80be0c85d16-medium.JPG',
      'https://images.pixieset.com/326575211/74c4570f9cd02623db8820eeec9098aa-medium.JPG',
      'https://images.pixieset.com/326575211/770096fe73d1c28f5c1593efa3725407-medium.JPG',
      'https://images.pixieset.com/326575211/7e1e8e41a0b9a23087375b6e9cfde1bb-medium.JPG',
    ],
  },
  {
    slug: 'cityscapes',
    title: 'Cityscapes',
    path: '/galleries/cityscapes/',
    coverImage:
      'https://images.pixieset.com/326575211/8f823a42845d7d16c68270e97976af77-medium.JPG',
    groups: [groupClient, groupHome, groupMain],
    description: 'Urban geometry, scale, and street energy from global metropolitan scenes.',
    images: [
      'https://images.pixieset.com/326575211/a3b1d22b7926632a21faba4efa3e0407-medium.JPG',
      'https://images.pixieset.com/326575211/b2774b1e1cf2668426afc54a34ed3a90-medium.JPG',
      'https://images.pixieset.com/326575211/c08c2537d6a19d989b0f6952182bfaaf-medium.JPG',
      'https://images.pixieset.com/326575211/c4ca0efffecce2825f6bd1e40707469f-medium.JPG',
      'https://images.pixieset.com/326575211/d627fdc599ba559e39283e0ac1214a0d-medium.JPG',
      'https://images.pixieset.com/326575211/e3a7c49a09e2d353ead4d388b5101e1b-medium.JPG',
      'https://images.pixieset.com/506818211/0755e8cb45b1fcc44fbcdeac7c8e8d3d-medium.JPG',
      'https://images.pixieset.com/506818211/1bc495422eacf75e967f50a12dffe371-medium.JPG',
      'https://images.pixieset.com/506818211/239ac07d36440d9041c90020b20cc53f-medium.JPG',
      'https://images.pixieset.com/506818211/34af06ee9535c6e3b2df3904763aa589-medium.JPG',
    ],
  },
  {
    slug: 'random-thoughts',
    title: 'Random Thoughts',
    path: '/galleries/random-thoughts/',
    coverImage:
      'https://images.pixieset.com/506818211/452d9bb6ce8a6fc77db29dee9e9d9c16-medium.JPG',
    groups: [groupClient, groupMain],
    description: 'Loose visual notes, spontaneous moments, and experimental narrative fragments.',
    images: [
      'https://images.pixieset.com/506818211/7d57ccfc8d443b7886a99ff7bcc680da-medium.JPG',
      'https://images.pixieset.com/506818211/83edf5a93ee175968dded983d3d6fd43-medium.JPG',
      'https://images.pixieset.com/506818211/8d037855f95d9ac490f1f0c6135b8f8b-medium.JPG',
      'https://images.pixieset.com/506818211/99df2dfa72d11b25dbbf303d0ab3e70a-cover.JPG',
      'https://images.pixieset.com/506818211/9d388cf7c58c6e50af87e7494401de01-medium.JPG',
      'https://images.pixieset.com/506818211/a42ecb3fa02dba0fe2687f5cec76c704-medium.JPG',
      'https://images.pixieset.com/506818211/b1c373a1c8290737071281fdfddb1928-medium.JPG',
      'https://images.pixieset.com/506818211/b2f2144752fdc936036ba83ede52dd8f-medium.JPG',
    ],
  },
  {
    slug: 'one-camera-one-lens',
    title: 'One Camera One Lens',
    path: '/galleries/one-camera-one-lens/',
    coverImage:
      'https://images.pixieset.com/506818211/bd4dbcc9f72608be2ed8de4c59d3703b-medium.JPG',
    groups: [groupMain],
    description: 'A disciplined visual study created through a single-camera, single-lens constraint.',
    images: [
      'https://images.pixieset.com/506818211/cd63fcae43f2af601bd4deaf6959a244-medium.JPG',
      'https://images.pixieset.com/506818211/db625df6684925e333ab307fec8a93d0-medium.JPG',
      'https://images.pixieset.com/506818211/f7a1be6aa03cd4c4699686510fb87ce6-medium.JPG',
      'https://images.pixieset.com/507588211/296cc917fca4e11b0b7d6bd656ad87cb-medium.JPG',
      'https://images.pixieset.com/507588211/2a17aa4d89f3a318d6066c61391724f8-medium.JPG',
      'https://images.pixieset.com/507588211/2be7dd1c43a130b08b4f0555e086e7c2-medium.JPG',
      'https://images.pixieset.com/507588211/36630f944e733c9ebdda22dad2ea821f-medium.JPG',
      'https://images.pixieset.com/507588211/455e0b3dd874bf8325ba6f4ea2ccb48b-medium.JPG',
      'https://images.pixieset.com/507588211/4a625df127166897a6aeba1be025aa88-medium.JPG',
    ],
  },
  {
    slug: 'old-school-shots',
    title: 'Old School Shots',
    path: '/galleries/old-school-shots/',
    coverImage:
      'https://images.pixieset.com/507588211/50ed655f05547a77894dd6569dbd5208-medium.JPG',
    groups: [groupMain],
    description: 'Square-format photographs with timeless tone and classic composition.',
    images: [
      'https://images.pixieset.com/507588211/5146bc2c912a56c90b9e0059016fea77-cover.JPG',
      'https://images.pixieset.com/507588211/59e5d823afbcba33bb197f43961fe3d2-medium.JPG',
      'https://images.pixieset.com/507588211/7cfc63df25592b690c66b604cddbead9-medium.JPG',
      'https://images.pixieset.com/507588211/7f133f628be48174021b81dff47177cc-medium.JPG',
      'https://images.pixieset.com/507588211/80c71361dcc16b0c92b915163ace0000-medium.JPG',
      'https://images.pixieset.com/507588211/9ca9aaa621972bbe37a4d380c5e87cc4-medium.JPG',
      'https://images.pixieset.com/507588211/a2832b0d1aaf23425da1fb5d1e98207b-medium.JPG',
      'https://images.pixieset.com/507588211/b3f2190c7787700892a141a6581d1d3b-medium.JPG',
    ],
  },
  {
    slug: 'vietnam',
    title: 'Vietnam',
    path: '/galleries/vietnam/',
    coverImage:
      'https://images.pixieset.com/507588211/bf6b2c2a3dde6575da3c2b17a38ca4e5-medium.JPG',
    groups: [groupMain],
    description: 'Street rhythm, portraiture, and texture from journeys through Vietnam.',
    images: [
      'https://images.pixieset.com/507588211/e7994a0af678e450f9ea0269a23a01c0-medium.JPG',
      'https://images.pixieset.com/557126001/0795244917adbec5aee040bcf689fc0e-medium.JPG',
      'https://images.pixieset.com/557126001/144120709aa5509f5c86d83007d83628-medium.JPG',
      'https://images.pixieset.com/557126001/352e4b3c46e2201eb8c3490ceaf1b9c1-cover.JPG',
      'https://images.pixieset.com/557126001/4902d9a0e853f3690aab1fa233f66e14-medium.JPG',
      'https://images.pixieset.com/557126001/4d4cbbc6a831876f4b524d30c57f4527-medium.JPG',
      'https://images.pixieset.com/557126001/702ba508b4fa5d8174e1e86d6c964822-medium.JPG',
      'https://images.pixieset.com/557126001/a4615a674017403bba7784bae963b98f-medium.JPG',
    ],
  },
  {
    slug: 'morocco',
    title: 'Morocco',
    path: '/galleries/morocco/',
    coverImage:
      'https://images.pixieset.com/557126001/b17132ec0eadc5c2b29b39bfa85ff03e-medium.JPG',
    groups: [groupMain],
    description: 'North African light, architecture, and motion rendered with high contrast drama.',
    images: [
      'https://images.pixieset.com/557126001/b49bbda3b979668b8d5e7b7244539396-medium.JPG',
      'https://images.pixieset.com/557126001/ba407607f63317b5cb14837c2eb957c8-medium.JPG',
      'https://images.pixieset.com/557126001/fa07d6e52d4fb39d823fa99d8762ba52-medium.JPG',
      'https://images.pixieset.com/620533211/188809b69ccc305f6f685e1b264f6b1b-medium.JPG',
      'https://images.pixieset.com/620533211/2bd91afda90e7410c59f3ddbf18da9a1-medium.JPG',
      'https://images.pixieset.com/620533211/2cb2eaa146fea781c6ab2a878cf6d960-medium.JPG',
      'https://images.pixieset.com/620533211/32ea3e118f7f7702ff71c7290b779052-medium.JPG',
      'https://images.pixieset.com/620533211/3e1a148e413eddbf32b360c5cb0d92b2-medium.JPG',
    ],
  },
  {
    slug: 'marilyn',
    title: 'Marilyn',
    path: '/galleries/marilyn/',
    coverImage:
      'https://images.pixieset.com/620533211/4a98df555e07d17b39c0e8956ef0531b-medium.JPG',
    groups: [groupMain],
    description: 'Portrait-focused studies balancing edge detail with classic glamour lighting.',
    images: [
      'https://images.pixieset.com/620533211/6b248130d691c7a8d286fe5d346a14f0-medium.JPG',
      'https://images.pixieset.com/620533211/7372c86b2b92ecc67ab155f868311d2d-medium.JPG',
      'https://images.pixieset.com/620533211/8ba32ea8206089e0f1e9a636046786d3-cover.JPG',
      'https://images.pixieset.com/620533211/aa27becbaefa61590a98639c0ea5860f-medium.JPG',
      'https://images.pixieset.com/620533211/b9538b77f5d5e0c79f60b7dc021de6ed-medium.JPG',
      'https://images.pixieset.com/620533211/bbbe2ff6be6e5ad9fada1d1dba7e1461-medium.JPG',
      'https://images.pixieset.com/620533211/c46e1af3f2de02bc45ec72a114ddb6aa-medium.JPG',
      'https://images.pixieset.com/620533211/dcf28b95e37ae3588c53227f3c4c5d5e-medium.JPG',
    ],
  },
  {
    slug: 'india',
    title: 'India',
    path: '/galleries/india/',
    coverImage:
      'https://images.pixieset.com/620533211/df4e0851b27bbadfc0941eba8d3f9517-medium.JPG',
    groups: [groupHome, groupMain],
    description: 'Color, ritual, portrait, and place across observational street narratives.',
    images: [
      'https://images.pixieset.com/620533211/e3f39017dbb5034c5900cb288d027993-medium.JPG',
      'https://images.pixieset.com/620533211/e6a8f1684b69a50aad49361c8e943790-medium.JPG',
      'https://images.pixieset.com/67381088/01415727ca32c4c840b9b0259562ea98-medium.jpg',
      'https://images.pixieset.com/67381088/065a4ed0a74a7bc68f444f569478fbd4-medium.jpg',
      'https://images.pixieset.com/67381088/0a464ac875484a03c36c7b0cec7a6490-medium.jpg',
      'https://images.pixieset.com/67381088/0a56f8607073bb17598c218bc8ab8ce3-medium.jpg',
      'https://images.pixieset.com/67381088/3ad4f99506732dc725c7ea79dcbd4c2c-medium.jpg',
      'https://images.pixieset.com/67381088/3d600f601b061300e8ac08b1e20ad553-medium.jpg',
      'https://images.pixieset.com/67381088/403ae9e763d929ab72f81a9b5a4e6715-medium.jpg',
    ],
  },
  {
    slug: 'burma',
    title: 'Burma',
    path: '/galleries/burma/',
    coverImage:
      'https://images.pixieset.com/67381088/61362a677bae81286e7d858c2acde745-medium.jpg',
    groups: [groupHome, groupMain],
    description: 'Documentary portrait and landscape moments from Burma in dramatic natural light.',
    images: [
      'https://images.pixieset.com/67381088/7aee25a0f843a6484e81036a6642255b-medium.jpg',
      'https://images.pixieset.com/67381088/8798c3aa278946a04e7e6e9108d10f09-cover.jpg',
      'https://images.pixieset.com/67381088/9495a91e69e6c08556a632fdaac846e9-medium.jpg',
      'https://images.pixieset.com/67381088/b3c6d46e28344739f5dfb065c04e0335-medium.jpg',
      'https://images.pixieset.com/67381088/b49695c77abf0aa9ad967a9b66cdc91e-medium.jpg',
      'https://images.pixieset.com/67381088/c1a918ae2d94670c18528509f30c4aa6-medium.jpg',
      'https://images.pixieset.com/67381088/d29fce81105baa705f1cd125f7569542-medium.jpg',
      'https://images.pixieset.com/67381088/de09bc929c3dba66ab39a1b3ac22b4f9-medium.jpg',
    ],
  },
  {
    slug: 'cuba',
    title: 'Cuba',
    path: '/galleries/cuba/',
    coverImage:
      'https://images.pixieset.com/67381088/e7a91ea0ea4c288576e391f42000eb8f-medium.jpg',
    groups: [groupMain],
    description: 'Music, movement, and culture from Cuba through a layered street photography style.',
    images: [
      'https://logos.pixieset.com/0319251/8878948fdc755a202144dee522afe164-medium.jpg',
      'https://images.pixieset.com/282818211/017b27e57245dd2e5a2a4e21b36f209a-large.JPG',
      'https://images.pixieset.com/282818211/382814e84c1335aceb77810cd62c7fd3-large.JPG',
      'https://images.pixieset.com/282818211/38babda5a94839a8b11f1836bd6b6075-large.JPG',
      'https://images.pixieset.com/282818211/41a3ba9dbdb448c90bfe168001ba1195-large.JPG',
      'https://images.pixieset.com/282818211/4372424c9b67935794bb95f631540539-large.JPG',
      'https://images.pixieset.com/282818211/4cfabb4ae02d0ebc33dd47006d5398e3-large.JPG',
      'https://images.pixieset.com/282818211/5ed5b735d857bf9ea0d413da4259e9ce-large.JPG',
      'https://images.pixieset.com/282818211/61aebc5dffb0228ff7d61c68513a8cff-large.JPG',
      'https://images.pixieset.com/282818211/7c191d1d70cdcf0bd2d7ef4a1e9ca369-large.JPG',
    ],
  },
]

export const galleriesBySlug = Object.fromEntries(
  galleries.map((gallery) => [gallery.slug, gallery]),
)

export const galleryPaths = galleries.map((gallery) => gallery.path)

export const featuredHomeSlugs = ['burma', 'india', 'cityscapes', 'flora']

export const portfolioGroupMap: Record<string, string[]> = {
  [groupClient]: galleries
    .filter((gallery) => gallery.groups.includes(groupClient))
    .map((gallery) => gallery.slug),
  [groupHome]: galleries
    .filter((gallery) => gallery.groups.includes(groupHome))
    .map((gallery) => gallery.slug),
  [groupMain]: galleries
    .filter((gallery) => gallery.groups.includes(groupMain))
    .map((gallery) => gallery.slug),
}
