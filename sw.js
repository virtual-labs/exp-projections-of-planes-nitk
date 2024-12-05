importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"b42e34aca6da49d61ac9b00d93ec37b4","url":"contributors.html"},{"revision":"1763adfe879e122ba65a7386b4063463","url":"feedback.html"},{"revision":"264e970e3e8ef76739e5278ae00e85c1","url":"images/2.png"},{"revision":"57014c573e8c5376d5ed83b3cf5cef2f","url":"images/apparatus-icon.png"},{"revision":"0021c41661ff66203bca8c0cb7bfe023","url":"images/appratus_screen.png"},{"revision":"f4785eead1417f0432aa604153d8397f","url":"images/Desicon.png"},{"revision":"4afeba79572c7c94326109b52591bdc5","url":"images/nextButton-icon.png"},{"revision":"5f8e479e0ad032c2ce881556866171b9","url":"images/objecticon.png"},{"revision":"680731f525260550cb46bc849b074063","url":"images/objectscreen.png"},{"revision":"1b6644591cffdc6d6d666ddf546de0dd","url":"images/proc1.png"},{"revision":"7f6512382680571c07f6f9a0ae5dd205","url":"images/proc10.png"},{"revision":"c4b56a9da96206202db3cef667eba461","url":"images/proc11.png"},{"revision":"00b9c11819b458cd42277b1acdf7619e","url":"images/proc2.png"},{"revision":"ed58f705b44824708c0dcf13831eef65","url":"images/proc3.png"},{"revision":"d7015ac615ca3ad10b1365dcc3114506","url":"images/proc4.png"},{"revision":"3436e74064d3283bb631458547e554f6","url":"images/proc5.png"},{"revision":"7826b9f7dfb6eb7c267a55f750096242","url":"images/proc6.png"},{"revision":"d7d8d64749f1dda5ab27952f7b14d46f","url":"images/proc7.png"},{"revision":"9fbedea078124b064882cd3349961685","url":"images/proc8.png"},{"revision":"2ae71a6da37471550d4712cf2268ea7a","url":"images/proc9.png"},{"revision":"67a87e0dbb7934ddf239228f19c5f08e","url":"images/resetButton-icon.png"},{"revision":"0e48d013d232c9ac2de13d99092c07de","url":"images/Simscreen1.png"},{"revision":"01880a1797bca0b8787ba3b3c3c62c00","url":"images/solution_screen.png"},{"revision":"f8969c1eb32d623ef37db120803cdf89","url":"images/solutions-icon.png"},{"revision":"ca790637e8852b858e888100ac2263a5","url":"index.html"},{"revision":"52e9bc284974c876271c5aef359bc241","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"16eb719964b764ab9855407e4f5956ae","url":"posttest.html"},{"revision":"c9d44d2a8e5fc20e167b0f347eafb5e2","url":"posttest.json"},{"revision":"f8ea7641ef3b22a18b5d709da4390244","url":"pretest.html"},{"revision":"7e77c6a82c9001ed6ce63859b2d2ebfc","url":"pretest.json"},{"revision":"5e900d49c16248945111a7bcfff84c76","url":"procedure.html"},{"revision":"13547f6873e643699f0d9b10c75c192e","url":"references.html"},{"revision":"253f6a6fe1e0275ffa03a009b08604d2","url":"simulation.html"},{"revision":"c162b0fa77b644ca6b802c18b3d4cd6a","url":"simulation/css/general.css"},{"revision":"3e795b8e5867cd06a70b638f3d58d4fa","url":"simulation/css/jquery-ui.css"},{"revision":"85cf36ba1120407235801ae9385dd7fb","url":"simulation/css/query.css"},{"revision":"3477ec542db2b6c8eeb279a21127a5f4","url":"simulation/css/style.css"},{"revision":"1255ed414d1aee435f9c2a0f508aa02d","url":"simulation/images/apparatus.png"},{"revision":"ec86134d7ad32a3ece8866fef10f9790","url":"simulation/images/bluebkdulls.svg"},{"revision":"8c66a36cd036f83d336f38db1312b346","url":"simulation/images/bluecwdull.svg"},{"revision":"596409ca9143cac570c46c4e23715456","url":"simulation/images/bluefwdulls.svg"},{"revision":"ac4263b09cfc8fa1e695234eea1a25a3","url":"simulation/images/icon_sprite.png"},{"revision":"1e01241b44562ec9be28ccdaee5741c2","url":"simulation/images/logo_nitk.png"},{"revision":"21f1a48c0819c739dad7b85718bb5ceb","url":"simulation/images/objective.png"},{"revision":"07e89577f8ca0542866b288debe87ac1","url":"simulation/images/ruler.png"},{"revision":"02b3856455113dbe967bd95f04df94f7","url":"simulation/images/slider_handles.png"},{"revision":"a605d206cda0e7fd00ccd1d57c2ec380","url":"simulation/images/solution.png"},{"revision":"ebe6b6902a408fbf9cac6379a1477525","url":"simulation/images/ui-icons_222222_256x240.png"},{"revision":"119dd0c2e94ad689de873ef39fd43e6e","url":"simulation/images/ui-icons_454545_256x240.png"},{"revision":"b054cd3cd9bc0315c6ba4d6d7631df2f","url":"simulation/index.html"},{"revision":"84ca747eb5f076445ff836de49608628","url":"simulation/js/jquery-3.6.0.js"},{"revision":"5da2fa2a91f7059b60e7fd508be63d02","url":"simulation/js/jquery-ui.js"},{"revision":"08a481084856867d371586cbf8e835ef","url":"simulation/js/jquery.ui.touch-punch.js"},{"revision":"9b9e5df5ef16f8fdd3e65c14e2149f1f","url":"simulation/js/jquery.ui.touch-punch.min.js"},{"revision":"ed6d701fa2712bcf1e4732995e49fef9","url":"simulation/js/script.js"},{"revision":"40377da5753f17d60c58fd18ebb7e03f","url":"theory.html"},{"revision":"8d7140012bca6bbbf1e53a0f6111422e","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );