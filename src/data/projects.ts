export type Project = {
  slug: string
  kind: 'photo' | 'video'
  top: string
  bottom: string
  image: string
  video?: string
}

const cdn = 'https://cdn.tbpdev.com/meech213/media/'

export const projects: Project[] = [
  { slug: 'kelly-rowland-for-grazia', kind: 'photo', top: 'Kelly Rowland', bottom: 'for Grazia', image: `${cdn}med_3a9dsaa59t6u8xgs/original/69bf02840e1495329c372083_Screenshot-2025-11-28-at-12.42.01-PM-1-1262x1572.webp` },
  { slug: 'dove-cameron', kind: 'video', top: 'Dove', bottom: 'Cameron', image: `${cdn}med_put8qh4sp3aakbt7/original/69c5acf88813eb9e1591bf53_IMG_6441-1-1179x2103.webp`, video: `${cdn}med_wzk9y472t23s8hy7/original/Dove-Cameron-CUT_h264-1.mp4` },
  { slug: 'elle', kind: 'photo', top: 'Elle', bottom: 'Q', image: `${cdn}med_n3avp6n85yr75ak7/original/69fd776a3ab3744c2a5f5f41_ELLE67855-1-1440x1920.webp` },
  { slug: 'brianne-h', kind: 'video', top: 'Brianna', bottom: 'Howey', image: `${cdn}med_8ebhr8jy8hdgzked/original/69c5b4a08466be93c8efcb5f_IMG_6446-1-1179x1465.webp`, video: `${cdn}med_3pkektvsuqhu4sf7/original/brianne_h264-1.mp4` },
  { slug: 'ali', kind: 'photo', top: 'Ali', bottom: 'D', image: `${cdn}med_rn8y53gkyn8ufqxt/original/69fd7c0702ddbeee73a1db10_ALI-DANSKY18408-1-1440x1920.webp` },
  { slug: 'may', kind: 'photo', top: 'MAY', bottom: 'Siu', image: `${cdn}med_uen9uzkgndt4255y/original/69f18328286ac647a962e4f5_MAY35-1-1440x1920.webp` },
  { slug: 'dom-r', kind: 'photo', top: 'Dom', bottom: 'R', image: `${cdn}med_7tygrmb99cugdy7w/original/69bd9917475663d65e65d337_DOM-NYC8292copy-1-1440x1920.webp` },
  { slug: 'boyslie', kind: 'video', top: 'BOYSLIE', bottom: '', image: `${cdn}med_hks79zh6v2aw72ph/original/69c3a6c1540daf399a6d655e_boyslie-1-1080x1350.webp`, video: `${cdn}med_bkzkb24asnwsyem6/original/BOYSLIE-NOV_1_h264-1.mp4` },
  { slug: 'fridayy-for-deeds', kind: 'photo', top: 'Fridayy', bottom: 'for DEEDS', image: `${cdn}med_xxxy78uxyyd2tcf2/original/69cd59b2576694f1d8b80606_IMG_6745-1-1080x1350.webp` },
  { slug: 'kamari-and-dom', kind: 'video', top: 'Kamari', bottom: 'and Dom', image: `${cdn}med_979kerrnsye6b2gn/original/69ce5770169495bc536cc8f1_IMG_6810-1-1179x1464.webp`, video: `${cdn}med_amj3e6q6uhgmcqyd/original/KAMARI-AND-DOM_h264-1.mp4` },
  { slug: '6lack-quin', kind: 'photo', top: '6lack', bottom: '& Quin', image: `${cdn}med_5regu49m76n9h2ac/original/69c5bd1ba90aa9cad0980c66_QUIN-BEAR32097-copy-1-1440x1920.webp` },
  { slug: 'ryan-numero', kind: 'video', top: 'RYAN', bottom: 'NUMERO', image: `${cdn}med_d4jgztxwnzttypqy/original/69c5baf469e98ce59bc90068_IMG_6450-1-1179x2089.webp`, video: `${cdn}med_rdf2q5cbzch9w2dj/original/RYAN-MOVING-COVER-OPTION-3_h264-1.mp4` },
  { slug: 'luna', kind: 'video', top: 'Luna', bottom: '', image: `${cdn}med_929e9g47qjytrvj3/original/69c5b8e4a52e61e45c4e1f0c_IMG_6448-1-1179x2089.webp`, video: `${cdn}med_jfy5m46yreaehsbg/original/Luna-Harpers-Bazar_h264-1.mp4` },
  { slug: 'asake', kind: 'photo', top: 'Asake', bottom: '', image: `${cdn}med_b9rx98wawsnkfc7p/original/69bdc4703ab83d0083009639_ASAKE--1-1080x1350.webp` },
  { slug: 'cassie-for-voir', kind: 'photo', top: 'Cassie', bottom: 'for VOIR', image: `${cdn}med_cvk4w8wsfet2b3xd/original/69beff22bc5cdd783a3506be_CASSIE-COVER-2-1432x1850.webp` },
  { slug: 'saweetie', kind: 'video', top: 'Saweetie For', bottom: 'Contents Mag', image: `${cdn}med_k6wpt7zxwgj4cdjj/original/69ce51d13ee195a5258b46de_IMG_6803-1-1179x1458.webp`, video: `${cdn}med_2japb5kqpaxc9k7g/original/saweetie-1.mp4` },
  { slug: 'mugler', kind: 'video', top: 'Mugler', bottom: '', image: `${cdn}med_mpgkn6fbmhtpamnk/original/69c3a6a2481ef4a5aa6b5083_mugler-1-1080x1350.webp`, video: `${cdn}med_8bn58u5axry49dzu/original/mugler-preview_h264-1.mp4` },
  { slug: 'sophia', kind: 'photo', top: 'Sophia', bottom: 'S', image: `${cdn}med_wkjxhy4cz699dnbk/original/69cd4bde8dbbde21936f13d5_Sophia-Lions28574-1-1440x1920.webp` },
  { slug: 'syd', kind: 'photo', top: 'SYD', bottom: 'G', image: `${cdn}med_dfhuhkpaes8bpf3r/original/69cd503a3fe7af1cd4ceb3c6_syd4-1-1440x1920.webp` },
  { slug: 'maitreyira', kind: 'video', top: 'Maitreyira', bottom: 'VOGUE', image: `${cdn}med_an26yh73k28nhpeq/original/69c5c8a12bec03983f66e0a4_IMG_6453-1-1179x2053.webp`, video: `${cdn}med_643csxkmxsg7d9ys/original/maitreyira-vogue-cut-1.mp4` },
  { slug: 'nicola-peltz', kind: 'video', top: 'Nicola', bottom: 'Peltz', image: `${cdn}med_5av3xd9hdvfwnrzc/original/69c5ccc789efabf1107f049d_IMG_6454-1-1179x2090.webp`, video: `${cdn}med_54tnc5j64zb5wxtm/original/Nicola-peltz-cut_h264-1.mp4` },
  { slug: 'paloma-mami-for-lofficiel-brasil', kind: 'photo', top: 'Paloma Mami', bottom: "for L'Officiel Brasil", image: `${cdn}med_ty9vyfc65yck4g46/original/69bfbbbac691c345de8339c0_paloma-for-l-officiel-1-965x1280.webp` },
  { slug: 'skims', kind: 'video', top: 'SKIMS', bottom: '', image: `${cdn}med_ndz2qp57r23kass3/original/69c5d512ad973083441a72b9_IMG_4690-1-1159x2073.webp`, video: `${cdn}med_whpzvnsb3auh2v6t/original/skims_h264-1.mp4` },
  { slug: 'lorve-b', kind: 'video', top: 'Lorvae Breaking', bottom: 'News Collection', image: `${cdn}med_69qxmk3szdn2hbz2/original/69c5d10aefb001f5e8ea62ba_IMG_6456-1-1179x649.webp`, video: `${cdn}med_x6qzupgkhsjygap6/original/Lorvae-cut_h264-1.mp4` },
  { slug: 'moon-choi', kind: 'photo', top: 'Moon', bottom: 'Choi', image: `${cdn}med_q8x7qcyr4uv4bsyw/original/69c60c5ab160f4416468ae6e_moon8-1-1440x1920.webp` },
  { slug: 'julia', kind: 'photo', top: 'Julia', bottom: 'B', image: `${cdn}med_32d5s8w45n9z9atx/original/69cd4e7e0d88e85aa8f85e0b_JULIA21-2-1440x1920.webp` },
  { slug: 'avril-numero', kind: 'video', top: 'Avril', bottom: 'Numero', image: `${cdn}med_djq9pgwpwcpw3k3b/original/69c3a734a4dc13ab6d4a5080_avril-1-1080x1350.webp`, video: `${cdn}med_sb75pyyu3vn3bcc9/original/AVRIL-COVER-NUMERO-3_h264-1.mp4` },
  { slug: 'chris-brown-for-swm', kind: 'photo', top: 'Chris Brown', bottom: 'for SWM', image: `${cdn}med_wz7autve7vvd47pb/original/69c5d2be2a39a92ae0ab35a7_IMG_6457-1-1179x1466.webp` },
  { slug: 'mya-for-scorpio-jin', kind: 'photo', top: 'Mya for', bottom: 'Scorpio Jin', image: `${cdn}med_7bk4xadndtmxd8zc/original/69cd4b20d3fc7cd0f99f99c0_IMG_6744-1-1080x1350.webp` },
  { slug: 'taylor-rooks-for-schon', kind: 'photo', top: 'Taylor Rooks', bottom: 'for SCHON', image: `${cdn}med_t9dmp6538nfa3yn3/original/69bfbc4722c54dca51833361_TR8-1-1440x1920.webp` },
  { slug: 'maitreyi-for-lofficiel', kind: 'photo', top: 'Maitreyi', bottom: "For L'Officiel", image: `${cdn}med_762bymqfsunjxh3s/original/69cd5b044b626114f3d8e417_IMG_6746-1-1440x1800.webp` },
  { slug: 'isla', kind: 'video', top: 'ISLA', bottom: 'FISHER', image: `${cdn}med_sa2r6p2vmgv5f5cq/original/69ce4d32ac3bcb1c87d30399_IMG_6797-1-1179x1456.webp`, video: `${cdn}med_w68rfcnkm8p5pwtn/original/ISLA-CUT_h264-1.mp4` },
  { slug: 'fran', kind: 'video', top: 'FRAN', bottom: 'For Numero', image: `${cdn}med_5d98wkan2w5ff3n2/original/69ce4fdacb12014359b19cc0_IMG_6800-1-1080x1920.webp`, video: `${cdn}med_my23dtta7u5fg23n/original/FRAN_h264-1.mp4` },
  { slug: 'paris', kind: 'video', top: 'Paris Jackson', bottom: 'Fashion Canada', image: `${cdn}med_dch6ca5fvsdgd2e2/original/69ce503903a9f43528959441_IMG_6801-1-1153x1459.webp`, video: `${cdn}med_wubthddkzawfzaf4/original/PARIS_h264-1.mp4` },
  { slug: 'moon-c', kind: 'photo', top: 'Moon', bottom: 'C', image: `${cdn}med_xqg6ab799gn2bw4t/original/69bd9a20667444af3536fe86_MOON5-1-1440x1920.webp` },
  { slug: 'dom-and-kamari', kind: 'video', top: 'DOM', bottom: '+ Kamari', image: `${cdn}med_mybsp22t5n8xtxhr/original/69ce54b9859331bf46650045_IMG_6809-1-1179x1162.webp`, video: `${cdn}med_pfdh5kcvb2vvc2nu/original/DOM-AND-KAMARI_h264-1.mp4` },
  { slug: 'boyslie-pt-2', kind: 'video', top: 'BOYSLIE', bottom: 'PT 2', image: `${cdn}med_6s4w925r9ypp9q6f/original/69ce55683f3bc2ec7fd637f5_IMG_6808-1-1179x1468.webp`, video: `${cdn}med_hbhezcpu5gsfefh8/original/BOYSLIE-VIDEO-12_h264-2.mp4` },
  { slug: 'alexandra', kind: 'photo', top: 'Alexandra', bottom: '', image: `${cdn}med_5utnaddy2z7ywfnt/original/69bdc724eaa9dcb180713f0a_alex3-1-1440x1920.webp` },
  { slug: 'dom', kind: 'photo', top: 'Dom', bottom: 'M', image: `${cdn}med_y7632fw4g4tneg94/original/69bdca0cec1cad6fa239b247_Untitled-Capture2691-copy-1-1920x1280.webp` },
  { slug: 'dom', kind: 'video', top: 'DOM', bottom: 'LATEXX', image: `${cdn}med_sv9j4z8ybqaqsfnt/original/69ce5b9a00eb7b3e05c48a86_IMG_6813-1-1179x1465.webp`, video: `${cdn}med_gxvve9bjfjdevqb6/original/dom_h264-1.mp4` },
  { slug: 'sofia', kind: 'video', top: 'Sofia', bottom: 'For harpers', image: `${cdn}med_gyp22pawqvaaft2c/original/69ce5be80c82b691c82bfe74_IMG_6814-1-1179x1467.webp`, video: `${cdn}med_hsfkpxr67pvecevp/original/sofia_h264-1.mp4` },
  { slug: 'josie', kind: 'photo', top: 'Josie', bottom: 'Lane', image: `${cdn}med_pekqmapq6fa9u73x/original/69ce5d432a3c889489a61beb_JOSIE40914-1-1440x1920.webp` },
]

export const projectTitle = (project: Project) => `${project.top} ${project.bottom}`.trim()
