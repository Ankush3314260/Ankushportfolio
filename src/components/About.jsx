import React, { useState } from 'react'
import emailjs from '@emailjs/browser'



function About() {
    
      emailjs.init(import.meta.env.VITE_MY_ID );
    
  const [name ,setname ]=useState('')
  const [email ,setEmail ]=useState('')
  const [message ,setMessage ]=useState('')
  const handlename =(e)=>{
          setname(e.target.value)
  } 
  const handleemail =(e)=>{
          setEmail(e.target.value)
  } 
  const handlemessage =(e)=>{
          setMessage(e.target.value)
  } 
   const func=(e)=>{
     e.preventDefault()
   
     var templateParams = {
       name:name,
       email:email,
       message:message
      };
     
      
        emailjs.send(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID, templateParams)
        .then(function(response) {
          
          e.target.value ="Message Sent !"
       }, function(error) {
       e.target.value="Trouble in Sending !"
    }).then(()=>{
      setTimeout(()=>{
        const form =document.querySelector('form')
          form.reset()
         e.target.value="REACH"
         setEmail("")
         setMessage('')
         setname('')
      },6000)
    });

     
    
   }
        
  
   


  return (
    <> 
   
    <div className='absolute -z-10 w-full  h-full overflow-hidden -top-2 max-sm:-left-56  max-sm:-top-48 max-sm:overflow-x-hidden max-sm:absolute max-sm:w-full max-sm:rotate-45 '>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="1250px" height="758px" viewBox="0 0 1280.000000 758.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,758.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
<path d="M5610 7574 c-14 -2 -52 -9 -85 -15 -141 -24 -304 -91 -435 -177 -246 -162 -420 -398 -509 -687 -46 -152 -56 -223 -56 -417 0 -97 -1 -176 -1 -175 -1 1 -27 50 -57 109 -208 404 -559 750 -973 959 -75 38 -104 58 -104 71 0 58 -98 168 -167 188 -21 6 -59 10 -84 8 l-46 -3 13 -46 c24 -81 107 -147 216 -170 97 -21 283 -130 458 -269 100 -79 300 -282 390 -396 173 -217 325 -509 384 -739 43 -171 85 -580 93 -920 5 -228 -7 -589 -24 -700 -6 -40 -6 -40 -20 30 -21 105 -81 308 -120 410 -214 551 -572 910 -1030 1032 -85 23 -118 26 -258 27 -176 1 -245 -11 -385 -65 -251 -96 -451 -320 -516 -574 -23 -91 -23 -256 -1 -348 63 -256 257 -456 508 -524 86 -23 252 -23 339 0 240 63 431 264 475 500 19 98 19 153 0 242 -17 81 -63 197 -75 190 -5 -3 2 -29 15 -58 36 -79 59 -207 51 -286 -17 -167 -66 -272 -180 -386 -130 -132 -264 -188 -451 -188 -182 -1 -325 60 -460 197 -86 87 -128 156 -167 271 -20 61 -23 89 -22 210 0 124 3 148 26 212 178 499 772 700 1299 438 404 -200 694 -609 839 -1185 163 -647 95 -1341 -189 -1936 -177 -370 -417 -687 -676 -893 -388 -308 -805 -713 -1110 -1077 -58 -69 -105 -129 -105 -134 0 -9 99 -90 109 -89 3 0 35 37 71 82 193 242 541 608 795 836 337 303 733 601 1096 826 127 79 154 90 310 124 253 57 393 72 654 72 221 0 352 -14 581 -62 194 -40 332 -86 491 -164 106 -52 144 -76 191 -123 68 -69 123 -88 217 -77 51 7 55 9 49 29 -21 73 -97 118 -203 117 -39 0 -76 -3 -81 -6 -6 -4 -47 17 -92 46 -217 139 -515 237 -853 280 -225 29 -636 11 -868 -37 -38 -8 -71 -14 -75 -14 -13 1 193 111 373 199 394 193 824 365 985 392 108 19 354 16 475 -6 524 -92 953 -416 1175 -888 55 -118 90 -224 122 -369 30 -139 32 -445 4 -583 -72 -357 -252 -621 -510 -746 -110 -53 -203 -72 -329 -67 -120 5 -197 29 -293 89 -80 51 -135 113 -180 204 -94 189 -58 393 95 546 228 227 599 201 715 -51 37 -80 36 -157 -4 -237 -96 -191 -346 -190 -447 1 -23 43 -23 160 1 205 13 24 14 32 4 29 -24 -8 -49 -98 -43 -161 21 -240 309 -331 474 -151 150 164 81 425 -138 527 -194 91 -449 40 -612 -123 -215 -215 -212 -549 5 -765 76 -75 150 -120 261 -156 101 -34 287 -34 395 0 349 109 592 412 677 846 23 114 25 463 4 570 -78 403 -248 707 -545 973 -228 204 -558 354 -861 392 -129 16 -158 21 -153 25 2 2 100 29 218 59 574 147 1078 219 1700 241 85 3 306 10 490 15 626 19 979 56 1294 136 93 24 119 26 331 27 221 1 234 0 330 -26 59 -16 149 -52 220 -87 298 -149 498 -398 587 -728 26 -100 36 -322 18 -441 -39 -267 -188 -526 -398 -693 -341 -271 -781 -321 -1167 -134 -133 65 -214 125 -320 238 -135 143 -228 332 -256 518 -47 321 113 643 386 778 137 68 310 82 454 37 355 -113 498 -536 274 -813 -45 -55 -33 -71 13 -17 83 98 131 253 119 380 -13 140 -64 245 -169 351 -334 334 -928 164 -1096 -314 -41 -116 -54 -204 -47 -334 7 -145 33 -244 102 -383 155 -313 454 -536 815 -606 98 -19 328 -16 428 5 242 51 432 153 603 325 457 457 467 1181 24 1660 -193 208 -487 349 -770 370 l-90 6 145 71 c242 118 395 222 559 379 240 231 401 515 467 825 25 119 25 363 0 480 -55 254 -164 459 -329 617 -213 204 -473 304 -752 290 -401 -21 -727 -278 -826 -652 -31 -121 -29 -290 6 -410 80 -271 271 -460 537 -527 117 -29 291 -23 400 16 84 29 168 73 168 86 0 5 -30 -6 -67 -25 -206 -103 -447 -102 -652 5 -180 94 -314 268 -366 475 -22 89 -23 256 -1 347 63 268 264 493 525 588 241 88 493 74 726 -39 554 -271 755 -962 458 -1571 -162 -330 -432 -592 -808 -782 -480 -243 -952 -326 -1955 -343 -381 -6 -777 -21 -902 -33 -43 -5 -78 -5 -77 -2 0 3 49 29 109 58 222 109 430 263 620 458 164 169 278 329 376 527 23 46 42 73 50 70 7 -2 30 5 53 16 92 47 151 125 151 200 0 67 -5 72 -56 56 -25 -7 -60 -25 -79 -39 -40 -31 -95 -136 -95 -181 0 -38 -65 -161 -148 -280 -209 -300 -552 -596 -892 -769 -193 -99 -324 -145 -472 -166 -692 -102 -1303 -275 -1998 -567 -8 -3 21 32 65 78 356 372 552 787 597 1263 9 94 15 126 25 126 24 0 82 73 104 130 24 63 20 115 -12 167 l-21 33 -26 -19 c-89 -63 -122 -166 -90 -273 23 -79 -37 -396 -112 -582 -48 -121 -182 -381 -247 -478 -78 -116 -205 -269 -301 -360 -146 -139 -225 -194 -415 -289 -266 -134 -509 -273 -756 -433 -56 -36 -104 -66 -107 -66 -3 0 10 21 29 48 197 271 382 707 456 1077 43 212 54 333 57 605 2 176 8 299 18 365 40 256 51 434 51 815 0 442 -9 550 -87 1100 -29 210 -32 535 -5 658 101 457 400 779 837 903 74 21 106 24 255 24 133 0 186 -4 245 -19 368 -92 642 -356 737 -712 23 -86 26 -118 26 -244 0 -123 -4 -160 -26 -243 -72 -271 -264 -505 -522 -635 -320 -160 -706 -113 -929 112 -198 201 -239 494 -98 711 186 289 610 298 740 16 32 -70 36 -176 8 -229 -9 -18 -15 -39 -13 -45 3 -7 15 11 28 38 33 72 32 171 -3 247 -50 108 -140 180 -263 213 -164 42 -329 -8 -462 -140 -120 -119 -170 -254 -160 -430 6 -109 25 -175 79 -278 43 -82 173 -212 263 -265 501 -293 1210 23 1398 623 76 244 59 531 -46 758 -142 306 -425 528 -770 603 -70 15 -306 27 -357 18z"/>
<path d="M3463 7528 c-24 -36 -28 -51 -28 -117 0 -60 5 -86 24 -125 24 -49 90 -126 108 -126 5 0 20 21 33 48 32 63 39 175 15 237 -15 41 -94 125 -116 125 -5 0 -21 -19 -36 -42z"/>
<path d="M3312 7094 c-70 -18 -119 -53 -153 -108 l-28 -45 50 -16 c67 -23 149 -16 213 15 44 23 146 120 146 140 0 11 -91 30 -138 29 -20 0 -61 -7 -90 -15z"/>
<path d="M55 6529 c-10 -15 3 -25 16 -12 7 7 7 13 1 17 -6 3 -14 1 -17 -5z"/>
<path d="M0 6495 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0 -15 -7 -15 -15z"/>
<path d="M7750 6299 c-6 -23 -9 -58 -5 -78 10 -60 61 -139 109 -169 48 -30 118 -128 161 -225 14 -32 25 -59 25 -62 0 -2 -24 20 -52 49 -93 92 -205 131 -308 106 -47 -11 -51 -15 -46 -36 21 -82 72 -140 158 -179 75 -34 233 -49 249 -24 14 23 25 -1 40 -86 19 -108 16 -243 -6 -340 l-19 -80 -8 55 c-24 157 -164 291 -321 307 l-53 5 -12 -39 c-17 -58 -15 -92 12 -148 41 -87 147 -169 265 -206 35 -10 66 -17 69 -15 2 3 -45 53 -104 113 -90 89 -208 233 -191 233 3 0 29 -33 60 -72 62 -82 137 -162 215 -230 l52 -46 -35 -68 c-20 -37 -53 -91 -75 -120 -21 -28 -36 -54 -33 -57 3 -4 31 7 62 23 55 27 59 32 105 124 26 53 58 138 71 188 13 51 24 80 24 65 1 -18 5 -26 12 -21 6 3 14 2 18 -4 10 -16 113 29 168 74 99 81 141 192 113 296 -10 35 -13 37 -43 31 -121 -22 -211 -107 -253 -238 l-13 -40 0 50 c-1 72 -18 165 -45 251 -13 40 -20 72 -16 69 4 -2 32 12 61 33 96 67 162 197 144 288 -7 39 -41 114 -51 114 -20 0 -108 -58 -129 -85 -53 -71 -74 -183 -53 -285 7 -32 6 -31 -21 16 -33 61 -66 110 -95 142 -18 20 -21 37 -21 111 0 73 -4 94 -26 136 -25 49 -79 96 -126 110 -19 5 -23 1 -33 -36z m630 -789 c-6 -11 -13 -20 -16 -20 -2 0 0 9 6 20 6 11 13 20 16 20 2 0 0 -9 -6 -20z m-140 -184 c0 -2 -8 -10 -17 -17 -16 -13 -17 -12 -4 4 13 16 21 21 21 13z"/>
<path d="M12203 6278 c-39 -75 -14 -183 64 -269 44 -49 87 -138 119 -248 26 -90 32 -140 9 -78 -52 141 -211 248 -341 230 l-41 -5 9 -52 c17 -92 74 -157 183 -207 68 -31 185 -50 185 -29 0 9 4 9 16 -1 15 -12 16 -32 11 -154 -16 -383 -177 -646 -523 -851 -33 -20 -9 -25 61 -13 49 8 79 20 113 46 155 116 290 297 352 470 13 35 29 68 37 74 11 10 12 8 7 -6 -7 -16 -3 -17 37 -11 69 11 164 60 217 113 55 55 82 119 82 195 l0 48 -55 0 c-94 0 -184 -50 -242 -135 l-35 -50 5 45 c6 44 -5 194 -19 258 -5 24 -3 32 7 32 30 0 116 49 157 89 80 78 109 177 80 272 -12 43 -22 46 -79 25 -101 -36 -168 -138 -178 -270 l-6 -81 -13 45 c-8 25 -32 81 -54 126 l-40 81 16 47 c37 109 1 228 -86 280 -35 21 -35 21 -55 -16z m507 -861 c0 -1 -24 -25 -52 -52 l-53 -50 50 53 c46 48 55 57 55 49z m-110 -110 c0 -2 -10 -12 -22 -23 l-23 -19 19 23 c18 21 26 27 26 19z m-80 -71 c0 -2 -8 -10 -17 -17 -16 -13 -17 -12 -4 4 13 16 21 21 21 13z"/>
<path d="M11984 5514 c-30 -44 -31 -143 -3 -201 30 -63 129 -160 206 -200 95 -51 95 -47 0 79 -59 79 -157 243 -157 264 0 5 26 -36 58 -91 65 -112 87 -146 152 -228 41 -52 46 -56 58 -40 9 13 12 43 10 98 -2 67 -9 92 -36 147 -46 94 -143 172 -239 192 -27 6 -34 4 -49 -20z"/>
<path d="M8608 4502 c-31 -80 -18 -156 40 -229 45 -56 137 -112 155 -94 7 7 11 43 11 84 -1 124 -64 225 -159 254 -34 11 -37 10 -47 -15z"/>
<path d="M9053 4271 c-57 -21 -137 -73 -151 -98 -24 -43 73 -79 191 -71 51 4 87 13 124 31 48 25 103 80 103 105 0 5 -19 20 -43 31 -55 27 -152 28 -224 2z"/>
<path d="M5712 4086 c6 -69 42 -126 106 -167 57 -36 141 -62 175 -54 23 6 24 9 15 47 -27 123 -145 228 -257 228 l-43 0 4 -54z"/>
<path d="M10864 4126 c-9 -24 4 -48 23 -44 12 2 18 12 18 28 0 29 -32 41 -41 16z"/>
<path d="M6282 4084 c-63 -31 -134 -101 -161 -160 -23 -49 -25 -58 -12 -49 5 3 12 1 16 -5 10 -17 91 -11 161 12 90 29 158 91 179 161 18 62 14 67 -71 67 -45 0 -73 -7 -112 -26z"/>
<path d="M10912 4063 c-17 -33 10 -72 35 -51 16 13 17 40 1 56 -16 16 -26 15 -36 -5z"/>
<path d="M10825 4049 c-10 -30 18 -58 40 -39 22 18 15 54 -12 58 -15 2 -23 -3 -28 -19z"/>
<path d="M8820 2355 c-16 -19 -3 -55 20 -55 23 0 36 36 20 55 -7 8 -16 15 -20 15 -4 0 -13 -7 -20 -15z"/>
<path d="M8775 2279 c-8 -26 16 -54 39 -46 19 7 21 38 4 55 -18 18 -36 14 -43 -9z"/>
<path d="M8866 2281 c-23 -26 -14 -53 16 -49 18 2 23 10 23 32 0 36 -16 43 -39 17z"/>
<path d="M6758 2071 c-67 -22 -154 -75 -169 -103 -14 -25 -13 -26 52 -38 112 -22 251 13 327 84 l44 41 -38 17 c-51 23 -143 22 -216 -1z"/>
<path d="M6468 1873 c-92 -95 -102 -216 -24 -275 22 -16 24 -16 58 12 75 62 91 169 38 253 -16 26 -31 47 -33 47 -2 0 -19 -17 -39 -37z"/>
<path d="M4867 1482 c-75 -78 -76 -195 -1 -303 21 -30 23 -40 14 -66 -6 -17 -17 -75 -24 -129 -8 -55 -14 -88 -15 -74 -2 43 -57 145 -102 190 -53 52 -111 79 -178 85 l-51 4 0 -61 c0 -104 57 -185 173 -244 58 -30 134 -46 140 -30 10 26 25 -14 41 -104 10 -53 32 -133 51 -179 l33 -83 -32 34 c-51 56 -102 89 -167 109 -68 21 -107 24 -160 9 l-37 -10 9 -41 c13 -57 31 -88 76 -132 44 -45 86 -68 162 -91 63 -19 181 -22 181 -5 0 6 7 8 16 5 12 -4 15 -2 10 9 -3 8 -9 23 -13 33 -3 9 15 -11 40 -45 53 -68 144 -157 212 -203 32 -22 60 -32 104 -37 78 -8 79 5 4 47 -78 44 -173 120 -173 138 0 8 6 12 14 9 38 -15 168 130 201 223 31 88 11 195 -48 249 l-25 23 -57 -38 c-65 -42 -117 -108 -140 -173 -22 -64 -19 -169 5 -226 11 -25 15 -43 10 -40 -26 16 -115 148 -150 220 -41 86 -87 241 -75 253 4 4 10 2 12 -5 3 -7 13 -9 32 -3 177 50 291 202 254 339 -5 21 -10 22 -47 17 -76 -12 -144 -53 -190 -115 -23 -32 -48 -77 -55 -102 -23 -77 -26 -76 -29 11 -4 110 11 191 48 264 23 45 30 72 30 117 0 69 -11 101 -49 145 l-29 32 -25 -26z m433 -868 c-21 -88 -84 -260 -102 -279 -5 -5 -2 8 7 30 37 85 83 233 96 305 8 41 15 65 17 53 2 -12 -6 -61 -18 -109z"/>
<path d="M9884 1103 c-34 -7 -105 -73 -125 -117 -10 -23 -19 -57 -19 -77 0 -45 -38 -132 -91 -210 -22 -32 -41 -59 -43 -59 -2 0 3 21 11 48 29 95 -4 215 -75 266 l-37 27 -32 -35 c-80 -86 -63 -235 37 -332 l39 -38 -42 -38 c-67 -61 -198 -146 -277 -178 -40 -16 -75 -30 -78 -30 -3 0 12 15 34 34 22 19 55 63 74 97 45 85 47 169 6 252 l-27 56 -51 -19 c-65 -25 -101 -59 -129 -123 -18 -44 -21 -64 -17 -142 4 -57 12 -103 23 -127 10 -21 17 -40 14 -42 -9 -9 -135 -26 -196 -26 -35 0 -63 -4 -63 -8 0 -5 24 -18 53 -30 48 -20 61 -21 123 -12 82 11 162 32 233 59 38 14 49 16 40 5 -8 -10 -8 -14 0 -14 6 0 10 -5 8 -12 -1 -6 25 -25 58 -42 48 -24 76 -31 143 -34 48 -3 100 1 126 8 44 12 139 77 140 95 2 19 -95 74 -151 85 -55 12 -141 5 -198 -15 -11 -4 5 10 35 31 30 21 87 71 126 111 67 67 94 86 94 64 0 -13 82 -31 143 -31 108 0 213 55 253 133 15 28 15 28 -32 49 -95 42 -233 11 -330 -74 l-38 -33 29 49 c16 27 38 76 50 109 19 52 27 61 57 72 72 24 130 82 149 148 11 38 2 108 -14 106 -7 -1 -22 -4 -33 -6z m-713 -484 c-11 -24 -20 -41 -20 -37 -1 12 31 89 35 85 3 -2 -4 -24 -15 -48z m-31 -86 c-11 -17 -11 -17 -6 0 3 10 6 24 7 30 0 9 2 9 5 0 3 -7 0 -20 -6 -30z m-13 -55 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-30 -150 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z"/>
<path d="M3426 605 c-20 -20 -4 -58 22 -53 22 4 27 41 9 57 -12 9 -18 8 -31 -4z"/>
<path d="M3392 538 c-17 -17 -15 -32 7 -52 24 -22 41 -13 41 19 0 29 -31 50 -48 33z"/>
<path d="M3470 531 c-13 -25 -3 -51 21 -51 20 0 36 40 24 59 -10 17 -33 13 -45 -8z"/>
</g>
</svg>
</div>
    <div className='z-10 relative top-10 justify-evenly  w-full flex-wrap max-sm:-top-3   flex text-black' >
      <div className='w-1/2 max-sm:w-full bg-white max-sm:bg-white/5 max-sm:backdrop-blur-sm downside    max-sm:m-6 sm:max-h-fit  rounded-xl shadow-2xl shadow-slate-600   border-2   '>
        <div className='relative top-2'>
         <p className=' text-center text-3xl text-black font-semibold'>ABOUT</p>
         </div>
         <div className=' flex flex-wrap w-full justify-center p-2 relative top-3'>
       
        
         
          <img src="/myphoto2.jpg" alt="" className='w-48 relative rounded-full top-4 max-sm:ml-8 max-h-48  m-2 mr-10  sp  ' />
          
      
          <div className='float-end flex w-1/2 max-sm:w-full max-sm:m-3 flex-wrap relative mt-2 '>
            "Hi,I'm Ankush Kumar ,Skilled with expertise in React.js ,Java Script and Web Technologies such as HTML ,Tailwind Css and Core Java. I'm always eager to learn and grow as a professional, and i believe in staying up-to-date with latest trend and technologies in my field. If you're looking for a software developer who can bring innovative ideas and solid execution to your team, i am your guy Feel free to connect with me to discuss potential collaborations or to simply chat about software development and technologies.  
           </div>
        </div>
        <div className='flex z-20 justify-center m-2 p-3  space-x-6 sm:top-10'>
         <a href="https://www.linkedin.com/in/ankushkumar47?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                              <svg className="hover:shadow-sh21 hover:shadow-black hover:cursor-pointer bg-transparent hover:rounded-md"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px" fill="#000">    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/></svg>
                             </a>
                          <a href="https://github.com/Ankush3314260"> <svg className="hover:shadow-sh21 hover:shadow-black hover:rounded-xl hover:cursor-pointer " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" fill="#000">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg></a>
                          <a href="https://www.instagram.com/i_ankush_13?igsh=MW9uZnR0dnN3NGgyYg=="> <svg className="hover:shadow-sh21  hover:rounded-lg  hover:cursor-pointer hover:shadow-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px" fill="#000"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/></svg></a>
                           </div>
                          
      </div>
       
      <div className='leftside w-1/4  border-white/5 backdrop-blur-sm border-2  shadow-xl shadow-slate-600 rounded-2xl align-middle  max-sm:w-full  max-sm:m-6'>
          <div className='w-full text-center text-3xl relative top-3 '>
            <p>Contact Me</p>
          </div>
          <div className='flex justify-center m-3 '>
       <form action="" id='form'  method="post">
        <p > Name</p>
          <br />
          <div className='float-end relative bottom-5'>
            <svg id='personicon' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#000'><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
          </div>
         <input required id='names'  type="text" onChange={handlename} className='w-full bottom-10 outline-none bg-transparent relative border-b-2 border-black  'placeholder='name' />
         <br />
        
        <p className='relative bottom-4'>Your @Mail</p>
          <br />
          <div id='svgmail' className='float-end ml-7 relative bottom-10 '>
          <svg  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#000'><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
          </div>
       <input required id='mail' onChange={handleemail}  type="text"placeholder='YourName2430@Gmail.com' className='w-full outline-none border-b-2 relative  border-black bottom-16 bg-transparent ' />
       <br />
       <div className='relative bottom-6'>
         <label htmlFor="textarea" >Your Valueable Words</label>
         <br />
         <textarea name="textarea" id="textarea" onChange={handlemessage}  cols="20" rows="5" className='outline-none text-black w-full rounded-lg border-black border-2  ' placeholder='Keep Your Thought Here' ></textarea>

      
         </div>
         <div className='flex bg-green-500 rounded-3xl justify-center p-1 hover:cursor-pointer w-full ' id='newone'  onClick={func}>
         <input type="submit" id='submites' value= "REACH" onClick={func}  className='p-2 text-white hover:cursor-pointer' />
         <div className='relative top-3 _1 opacity-100  '>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#FFFFFF'><path d="M480-440 160-640v400h360v80H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v280h-80v-200L480-440Zm0-80 320-200H160l320 200ZM760-40l-56-56 63-64H600v-80h167l-64-64 57-56 160 160L760-40ZM160-640v440-240 3-283 80Z"/></svg>
            <div className='relative bottom-6 opacity-0 _2'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='white'><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
            </div>
            </div>
         </div>
       </form>
          </div>
      </div>
      
      
     </div>
         
    </>
  )
}

export default About