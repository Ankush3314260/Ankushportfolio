
import React,{useEffect} from "react"


function Home(){
        
         useEffect(()=>{
            
         
             setTimeout(()=>{
                  document.querySelector('#faded').style.opacity=1
             },300)
         },[])
    return (
        <> 
        <div className="absolute  -z-10  max-sm:-top-72  -top-60   max-sm:w-full sm:-left-96  max-sm:overflow-hidden  ">
      
        <svg  xmlns="http://www.w3.org/2000/svg" version="1.0" width="1040px" height="640px" viewBox="0 0 1280.000000 640.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
<path d="M9470 4404 c0 -39 -78 -180 -155 -279 -88 -113 -105 -147 -105 -206 0 -76 52 -129 129 -129 54 0 94 36 126 115 l25 60 0 -50 c0 -44 -4 -53 -41 -91 l-42 -43 36 9 c67 15 127 51 155 93 23 35 27 51 26 111 0 79 -19 139 -91 306 -50 114 -63 135 -63 104z"/>
<path d="M1124 4346 c-62 -29 -125 -91 -227 -223 -93 -123 -101 -138 -61 -122 42 16 212 13 341 -6 128 -19 174 -12 225 34 26 23 32 37 36 82 7 86 -37 128 -137 130 -26 1 -58 -2 -72 -5 l-24 -7 25 21 c19 18 34 21 75 18 27 -3 59 -8 70 -13 43 -18 -51 68 -100 91 -63 30 -87 30 -151 0z"/>
<path d="M7989 4307 c-183 -52 -266 -268 -159 -416 58 -79 139 -103 218 -62 66 34 122 113 122 172 0 66 -74 139 -142 139 -42 0 -89 -34 -114 -82 -17 -33 -8 -54 10 -23 26 46 74 85 104 85 37 0 90 -42 108 -86 34 -81 -67 -204 -169 -204 -64 0 -148 88 -161 170 -9 55 1 106 30 156 73 128 218 171 352 104 134 -67 202 -200 189 -368 -18 -232 -240 -422 -539 -462 -98 -13 -167 -1 -257 44 -75 39 -177 130 -199 179 -39 88 -101 136 -202 158 -33 7 -85 33 -153 78 -303 201 -507 283 -696 283 -105 0 -159 -15 -226 -60 -22 -15 -50 -28 -63 -29 -63 -6 -142 -97 -156 -180 -6 -35 -15 -44 -114 -109 -119 -79 -281 -203 -417 -320 -124 -106 -193 -138 -312 -142 -241 -9 -487 125 -581 317 -35 73 -37 80 -37 181 0 93 3 112 27 162 57 122 169 202 283 201 72 0 119 -18 175 -69 101 -92 115 -227 33 -324 -45 -52 -86 -74 -130 -67 -111 18 -193 152 -140 227 23 32 68 60 98 60 32 0 74 -32 94 -71 18 -35 40 -39 29 -6 -19 61 -94 113 -145 102 -43 -10 -106 -76 -114 -119 -19 -99 91 -216 201 -216 52 0 114 45 152 108 23 40 27 58 27 122 0 65 -4 82 -31 130 -96 170 -310 196 -460 58 -95 -87 -129 -176 -122 -323 3 -82 8 -101 41 -168 66 -133 193 -236 359 -291 83 -28 217 -50 256 -43 49 9 4 -12 -102 -47 -282 -96 -502 -122 -773 -94 l-115 12 -60 89 c-68 101 -104 176 -119 249 -8 34 -14 47 -21 40 -25 -25 29 -164 111 -288 28 -42 49 -79 46 -82 -9 -10 -199 26 -245 46 -63 27 -101 70 -177 197 -70 120 -164 255 -175 255 -17 0 -6 -23 33 -76 48 -65 200 -314 192 -314 -28 0 -362 232 -363 251 0 4 11 10 24 13 39 10 86 71 86 112 0 48 -35 109 -85 146 l-40 30 35 -6 c41 -7 88 -54 97 -97 9 -49 23 -33 23 29 0 77 -15 126 -51 167 -50 56 -102 70 -269 70 -80 0 -175 -4 -211 -8 l-66 -8 94 -94 c51 -51 93 -98 93 -104 0 -6 -35 18 -77 54 -172 145 -435 301 -567 337 -91 25 -291 35 -400 19 -72 -10 -108 -9 -323 17 -215 24 -264 26 -235 8 7 -4 395 -56 425 -56 7 0 -16 -16 -51 -34 -167 -91 -362 -297 -362 -385 0 -12 -5 -32 -12 -44 -31 -60 -144 -194 -252 -302 -173 -171 -290 -237 -510 -286 -117 -25 -126 -28 -126 -40 0 -12 20 -9 170 28 169 40 297 108 431 228 71 63 173 175 239 262 26 34 50 60 54 56 3 -3 6 -46 6 -94 0 -48 7 -121 15 -161 18 -90 80 -218 134 -280 100 -113 92 -359 -15 -515 -39 -57 -54 -66 -54 -32 0 31 -60 86 -103 94 -28 6 -48 2 -84 -16 -41 -21 -60 -42 -132 -149 -81 -119 -158 -208 -210 -243 -14 -9 -22 -19 -18 -23 3 -4 102 -7 219 -8 200 -1 215 0 253 20 77 42 105 97 104 201 l-1 68 -18 -40 c-24 -52 -56 -81 -100 -90 l-35 -8 45 34 c25 19 55 54 68 79 12 25 28 45 35 45 21 0 95 123 117 192 22 72 27 212 10 272 -5 19 -8 36 -7 37 9 10 376 -302 407 -346 21 -30 40 -39 40 -20 0 26 -139 154 -368 339 -108 87 -168 154 -207 230 -31 63 -61 164 -69 236 l-7 60 33 -60 c18 -33 64 -92 103 -130 173 -174 394 -198 530 -58 19 20 33 38 31 40 -2 2 -19 -5 -38 -17 -99 -58 -245 -77 -342 -44 -141 48 -266 262 -266 455 0 86 39 165 131 263 77 82 161 136 274 173 73 25 93 27 230 27 177 -1 259 -19 387 -86 195 -101 514 -340 577 -432 35 -50 91 -101 122 -111 12 -4 61 -39 108 -78 184 -151 419 -278 556 -302 141 -24 373 -45 505 -45 206 0 460 54 686 145 46 18 84 32 84 30 0 -8 -193 -147 -255 -183 -171 -100 -315 -137 -504 -129 -150 5 -213 21 -453 111 -267 101 -380 123 -480 95 -40 -11 -54 -35 -15 -26 116 29 211 13 449 -77 303 -113 445 -144 603 -131 137 12 314 74 445 155 34 22 34 22 10 1 -58 -49 -211 -146 -295 -186 -155 -74 -388 -131 -494 -121 -190 19 -462 94 -641 178 -143 66 -137 60 -106 91 14 14 26 35 26 45 0 28 -32 52 -71 52 -25 0 -30 3 -19 10 8 5 26 7 40 4 l25 -6 -25 21 c-52 43 -108 36 -155 -21 l-25 -29 -59 41 c-84 56 -245 185 -323 259 l-66 61 15 43 c30 85 -1 193 -73 256 -62 55 -109 63 -203 36 l-52 -16 -76 70 c-43 39 -100 83 -128 98 -46 25 -59 27 -155 27 -148 0 -216 -22 -298 -98 -62 -57 -92 -124 -92 -206 0 -79 23 -133 73 -177 106 -93 274 -54 467 108 47 40 112 90 145 111 l60 39 37 -42 36 -42 -34 -32 c-30 -29 -34 -38 -34 -84 0 -94 45 -157 121 -171 51 -9 121 9 154 40 l22 21 99 -89 c114 -101 204 -173 287 -227 31 -21 57 -42 57 -48 0 -6 -11 -24 -24 -41 l-23 -31 91 -1 c89 0 93 -2 176 -46 167 -90 383 -164 598 -203 73 -14 138 -25 144 -25 6 0 -20 -16 -58 -35 -72 -35 -214 -156 -214 -181 0 -21 4 -18 63 40 110 111 196 152 422 202 254 56 418 139 659 335 60 49 83 63 69 43 -38 -53 -110 -207 -136 -289 -45 -145 -74 -334 -52 -345 6 -3 11 11 12 30 11 158 64 344 145 503 33 66 43 70 27 12 -18 -64 -7 -202 20 -254 37 -70 107 -138 180 -173 56 -27 78 -32 141 -32 78 0 111 11 175 59 70 52 110 180 85 272 -18 61 -89 137 -145 152 -124 34 -202 -11 -227 -133 -10 -46 -9 -60 6 -100 25 -64 87 -95 157 -76 57 16 81 52 77 119 -2 31 -7 55 -12 53 -6 -1 -9 -25 -7 -52 3 -68 -27 -100 -94 -100 -98 0 -139 104 -85 211 39 75 146 88 229 28 106 -76 115 -231 20 -334 -54 -58 -108 -78 -196 -73 -118 6 -228 79 -280 186 -24 50 -28 68 -28 147 1 120 31 222 83 276 35 36 192 153 531 396 79 57 147 103 151 103 4 0 11 -12 15 -27 29 -122 173 -198 397 -210 138 -7 211 10 376 88 178 84 166 83 159 13 -4 -33 -26 -131 -50 -219 -56 -203 -63 -239 -45 -233 7 3 14 13 16 24 4 23 82 323 90 344 3 8 9 -6 13 -33 10 -66 41 -125 91 -176 80 -80 171 -111 271 -91 129 25 182 76 200 188 l11 69 83 -60 c46 -33 95 -75 109 -93 42 -55 67 -147 68 -254 1 -85 -2 -101 -27 -151 -104 -213 -398 -262 -503 -84 -40 69 -49 124 -30 188 28 98 91 146 191 149 46 1 59 -3 81 -23 45 -42 58 -81 55 -161 -1 -14 -13 -40 -27 -57 -22 -27 -32 -31 -75 -31 -40 0 -55 5 -75 25 -22 22 -25 33 -23 78 2 28 -1 52 -6 52 -6 0 -11 -25 -13 -56 -3 -49 1 -61 23 -87 48 -57 153 -51 197 11 47 65 20 207 -47 251 -88 58 -231 9 -287 -97 -33 -63 -31 -165 4 -233 111 -212 433 -176 556 61 29 58 41 179 23 255 -5 24 -8 46 -6 48 7 7 72 -132 103 -218 35 -102 61 -212 70 -306 8 -80 29 -90 24 -11 -11 178 -93 421 -194 577 -22 34 -20 33 37 -16 136 -115 245 -189 375 -254 100 -50 192 -81 351 -115 191 -42 279 -85 379 -188 55 -58 70 -67 70 -44 0 30 -154 156 -234 192 l-50 22 85 12 c189 28 414 96 588 177 52 24 101 44 111 44 31 0 160 -38 185 -54 31 -20 31 -19 -1 77 -14 43 -24 80 -23 81 2 2 33 22 69 46 91 62 178 130 300 236 l106 92 27 -24 c28 -24 85 -44 125 -44 12 0 40 9 61 20 50 25 81 86 81 159 0 48 -4 57 -34 86 l-35 32 39 38 39 38 34 -18 c19 -10 72 -49 118 -87 174 -142 250 -184 349 -195 141 -14 240 79 240 227 0 158 -120 274 -311 300 -80 11 -188 2 -230 -20 -30 -16 -145 -109 -182 -148 l-28 -29 -52 18 c-61 21 -79 23 -130 8 -111 -31 -184 -181 -144 -297 l15 -43 -52 -48 c-126 -118 -193 -172 -324 -263 l-93 -65 -29 28 c-31 31 -68 37 -117 18 -29 -12 -28 -13 20 -23 15 -4 27 -11 27 -17 0 -6 -6 -6 -19 1 -34 18 -78 12 -95 -12 -21 -30 -20 -50 4 -80 l20 -26 -103 -45 c-196 -87 -398 -144 -595 -168 -92 -12 -112 -11 -190 5 -225 47 -359 102 -539 222 -62 41 -113 76 -113 78 0 1 53 -24 118 -56 163 -81 243 -101 412 -102 163 0 251 20 508 118 246 93 339 112 460 91 61 -10 54 11 -8 24 -106 23 -194 6 -423 -80 -305 -114 -377 -132 -537 -132 -192 1 -367 61 -557 192 -93 64 -183 140 -146 121 51 -24 245 -91 333 -114 228 -61 444 -71 746 -36 221 25 245 31 389 103 196 98 261 144 540 392 267 237 382 323 590 439 137 76 236 100 410 100 149 0 219 -15 331 -70 116 -57 217 -159 278 -281 78 -155 -29 -449 -200 -549 -93 -55 -222 -51 -350 10 -60 28 -72 32 -64 17 15 -29 87 -82 130 -97 72 -25 116 -27 189 -9 130 32 254 127 326 251 21 35 40 64 42 64 6 0 -7 -87 -24 -155 -19 -76 -74 -182 -126 -241 -22 -25 -85 -82 -141 -127 -159 -128 -304 -255 -332 -293 -47 -61 -17 -48 53 22 63 64 364 316 370 310 2 -1 -2 -18 -7 -37 -15 -52 -12 -199 6 -260 18 -63 74 -166 103 -193 37 -34 33 -10 -8 49 -79 112 -106 239 -81 384 10 62 19 81 62 137 101 132 148 271 148 440 0 50 3 93 6 97 4 3 31 -26 62 -66 175 -228 342 -368 524 -441 58 -23 266 -76 297 -76 6 0 11 4 11 9 0 4 -60 23 -132 40 -219 54 -330 115 -491 270 -151 146 -277 309 -277 357 0 49 -49 121 -153 225 -117 116 -193 166 -312 206 -73 25 -93 27 -235 28 -240 0 -342 -36 -605 -210 -135 -89 -222 -159 -432 -347 -89 -80 -195 -170 -235 -201 -74 -57 -234 -157 -250 -157 -5 0 -1 12 10 28 11 15 42 65 70 112 27 47 75 120 105 162 31 43 52 80 48 82 -16 11 -86 -85 -186 -254 -80 -134 -115 -171 -188 -198 -53 -20 -206 -47 -226 -41 -5 2 17 46 49 97 60 95 93 169 105 235 9 44 -11 52 -21 10 -15 -72 -39 -128 -85 -203 -91 -151 -85 -146 -199 -159 -267 -30 -485 -5 -765 87 l-140 46 100 12 c282 32 499 187 561 401 24 84 16 220 -18 295 -71 153 -239 244 -379 205z m-1629 -177 c79 -13 160 -38 179 -56 12 -10 1 -12 -61 -7 -81 6 -183 -8 -259 -37 l-46 -17 -38 28 c-21 16 -40 30 -42 33 -9 9 80 48 126 56 66 11 69 11 141 0z m4478 -34 c29 -8 72 -26 96 -40 183 -107 179 -377 -7 -427 -90 -24 -221 30 -367 153 -47 39 -110 87 -140 106 l-54 35 76 72 c105 99 140 115 253 115 50 0 114 -7 143 -14z m-3945 -203 l78 -50 -53 -6 c-29 -3 -66 -9 -83 -12 -28 -6 -32 -3 -54 40 -31 59 -105 134 -164 165 -26 14 -47 29 -47 33 0 12 226 -108 323 -170z m-312 116 c16 -25 11 -105 -8 -121 -45 -40 -131 -30 -247 28 -69 35 -110 64 -91 64 6 1 46 12 90 25 64 20 96 24 163 22 59 -3 86 -8 93 -18z m-4343 -18 c40 -20 192 -147 192 -159 0 -4 -28 -27 -62 -50 -35 -23 -101 -74 -148 -113 -200 -165 -365 -187 -455 -60 -27 39 -30 50 -30 119 0 84 12 115 67 177 62 71 153 103 296 104 82 1 110 -3 140 -18z m3730 -36 c-30 -55 -45 -72 -55 -61 -11 10 19 66 49 91 16 14 31 25 33 25 2 0 -10 -25 -27 -55z m115 43 c15 -11 8 -17 -53 -49 -39 -20 -70 -34 -70 -31 0 3 12 24 28 48 29 47 61 57 95 32z m583 -27 c87 -62 151 -171 102 -171 -6 0 -54 -27 -107 -60 -156 -96 -250 -130 -360 -130 -61 0 -184 31 -255 65 -53 25 -126 95 -126 121 0 13 57 51 157 105 l62 34 38 -39 c59 -61 130 -89 227 -89 90 0 143 17 188 60 32 31 45 82 29 112 -16 29 -1 26 45 -8z m3637 -47 c13 -8 9 -16 -28 -57 -31 -33 -52 -47 -70 -47 -36 0 -85 -50 -85 -87 0 -20 -11 -40 -35 -63 -19 -18 -37 -31 -41 -28 -3 4 -10 25 -15 48 -21 91 24 191 106 239 22 13 142 9 168 -5z m-7655 -89 c67 -28 112 -88 126 -167 6 -34 -5 -112 -18 -126 -13 -12 -76 62 -76 89 0 37 -35 77 -78 89 -44 11 -134 96 -111 104 80 28 110 30 157 11z m7529 -72 c-14 -15 -29 -24 -32 -21 -3 3 7 17 21 32 15 14 29 24 32 21 3 -3 -6 -18 -21 -32z m126 5 c35 -41 14 -145 -38 -186 -44 -35 -141 -27 -188 15 -17 16 -16 18 14 49 l32 33 25 -19 c26 -21 82 -27 82 -10 0 6 -9 10 -21 10 -27 0 -59 18 -59 33 0 6 21 33 47 59 51 52 72 55 106 16z m-3078 -106 c178 -131 180 -133 150 -223 -20 -60 -67 -117 -112 -135 -89 -37 -223 -3 -296 75 -63 67 -77 100 -84 195 -8 113 1 154 35 167 32 12 123 38 137 38 6 0 82 -52 170 -117z m34 92 c42 -23 107 -91 97 -101 -3 -4 -133 94 -165 123 -15 14 29 0 68 -22z m-4654 -105 l50 -50 -24 -20 c-13 -10 -32 -19 -42 -19 -10 0 -19 -5 -19 -11 0 -16 68 -4 89 15 16 14 20 13 50 -18 l33 -34 -32 -22 c-20 -14 -51 -24 -88 -27 -47 -4 -61 -2 -83 16 -61 48 -79 152 -34 196 13 14 30 25 37 25 8 0 36 -23 63 -51z m45 11 c6 -11 7 -20 3 -20 -10 0 -53 42 -53 52 0 14 39 -11 50 -32z"/>
<path d="M8835 3892 c-1 -31 -5 -90 -9 -130 -8 -63 -7 -75 9 -92 21 -24 67 -26 85 -5 7 8 16 30 21 48 8 31 8 30 4 -7 l-4 -39 24 23 c53 50 41 103 -42 180 -93 88 -88 87 -88 22z"/>
<path d="M3670 3887 c0 -3 5 -18 11 -34 5 -15 14 -79 18 -143 9 -121 19 -151 58 -169 34 -15 47 -14 77 10 29 23 35 73 14 112 -10 20 -10 21 5 8 11 -8 17 -29 17 -55 l0 -41 20 25 c46 58 34 129 -29 179 -39 30 -191 116 -191 108z"/>
<path d="M12288 3618 c2 -33 -4 -95 -17 -157 -28 -139 -28 -204 1 -231 12 -11 25 -20 28 -20 4 0 5 26 4 58 l-3 57 11 -57 c6 -32 15 -58 19 -58 14 0 31 140 24 203 -7 60 -48 215 -64 245 -4 7 -6 -10 -3 -40z"/>
<path d="M507 3563 c-3 -5 -16 -48 -30 -98 -33 -116 -42 -205 -28 -280 12 -63 28 -92 29 -53 1 13 6 39 11 58 10 32 10 30 7 -22 -1 -32 0 -58 4 -58 4 0 16 10 28 23 29 30 29 91 1 227 -11 56 -19 126 -17 156 3 55 3 60 -5 47z"/>
<path d="M6523 3250 c-46 -28 -71 -86 -89 -203 -20 -140 -41 -221 -74 -292 -16 -33 -28 -61 -27 -62 5 -4 241 88 301 117 160 77 202 171 140 311 l-29 64 -6 -63 c-4 -46 -12 -69 -29 -87 -34 -37 -43 -30 -20 14 27 54 35 114 20 151 -26 64 -122 90 -187 50z"/>
<path d="M12360 3191 c-21 -8 -22 -9 -5 -11 11 -1 38 -10 60 -20 l40 -19 -40 6 c-22 3 -48 10 -57 15 -28 14 -22 -10 12 -43 l29 -30 163 2 c90 2 179 -1 198 -4 33 -7 32 -6 -15 19 -131 71 -312 110 -385 85z"/>
<path d="M12314 3095 c0 -30 -2 -55 -6 -55 -8 0 -13 46 -10 83 2 22 -11 22 -31 -1 -27 -29 -20 -76 29 -200 25 -64 52 -144 59 -177 l12 -60 8 90 c12 135 1 250 -29 318 -14 31 -27 57 -29 57 -3 0 -4 -25 -3 -55z"/>
<path d="M245 3084 c-33 -8 -100 -35 -150 -59 -50 -25 -79 -41 -65 -37 14 4 98 6 187 5 89 -2 173 1 187 7 26 9 63 56 53 66 -3 3 -14 1 -24 -4 -26 -13 -85 -23 -79 -13 3 4 26 14 51 21 102 29 -46 41 -160 14z"/>
<path d="M453 2993 c-30 -68 -40 -181 -28 -319 l8 -89 13 64 c7 35 34 114 59 176 51 128 56 171 22 204 l-24 22 -1 -47 c0 -25 -4 -50 -9 -55 -4 -4 -7 17 -7 46 1 30 0 55 -3 55 -2 0 -16 -26 -30 -57z"/>
<path d="M10495 2871 c-45 -27 -65 -54 -140 -186 -45 -78 -91 -142 -132 -185 -35 -35 -63 -66 -63 -67 0 -2 73 -3 163 -3 222 0 308 23 369 95 26 31 41 108 33 167 l-8 53 -22 -51 c-24 -54 -56 -84 -90 -84 -17 1 -16 4 12 28 71 61 93 144 52 196 -44 56 -119 72 -174 37z"/>
<path d="M2135 2681 c-17 -7 -13 -10 22 -20 49 -13 88 -45 98 -80 7 -23 4 -22 -36 12 -48 42 -105 63 -141 54 -64 -16 -106 -86 -94 -152 12 -60 52 -94 186 -158 140 -67 195 -101 258 -160 l42 -41 0 29 c0 76 -22 277 -36 337 -20 84 -60 149 -107 171 -37 18 -155 22 -192 8z"/>
<path d="M7792 2654 c-37 -25 -43 -56 -32 -152 5 -51 6 -103 1 -124 -5 -21 -7 -38 -4 -38 2 0 37 24 77 54 82 61 116 102 116 141 0 29 -21 75 -43 94 -13 10 -14 7 -10 -27 3 -24 1 -42 -6 -46 -7 -5 -9 -1 -5 9 12 30 -5 81 -32 93 -32 15 -35 15 -62 -4z"/>
<path d="M8823 2655 c-66 -29 -70 -89 -12 -213 23 -48 48 -117 57 -154 l16 -66 48 68 c100 142 126 219 97 284 -14 29 -85 80 -103 73 -7 -3 -23 1 -37 9 -29 16 -27 16 -66 -1z m137 -86 c0 -16 -5 -29 -12 -29 -6 0 -9 3 -6 6 6 5 1 28 -17 79 -6 17 -4 17 14 -4 12 -13 21 -36 21 -52z"/>
<path d="M11153 2629 c-39 -11 -83 -62 -84 -97 -3 -67 6 -96 72 -233 45 -94 75 -173 85 -220 8 -41 16 -78 17 -83 4 -12 160 223 193 290 50 102 45 202 -11 257 -35 34 -135 94 -135 81 0 -3 14 -22 30 -41 23 -26 30 -43 30 -76 0 -61 -16 -79 -22 -25 -7 61 -36 117 -72 139 -34 21 -54 22 -103 8z"/>
<path d="M3772 2577 c-12 -12 -28 -43 -37 -67 -9 -25 -29 -69 -46 -98 l-30 -53 48 6 c161 22 218 64 195 146 -9 33 -11 32 -26 -13 -3 -10 -10 -18 -15 -18 -5 0 -3 12 5 28 19 36 18 56 -4 75 -26 24 -65 21 -90 -6z"/>
<path d="M4718 2585 c-16 -9 -38 -35 -50 -58 -19 -37 -22 -66 -29 -227 -6 -148 -11 -197 -28 -244 -12 -33 -21 -61 -21 -63 0 -7 189 97 260 142 76 49 147 122 155 162 4 15 8 33 10 39 7 25 -18 102 -48 146 -18 27 -35 48 -39 48 -3 0 -2 -16 4 -36 13 -49 3 -96 -27 -124 -29 -27 -31 -23 -10 27 8 19 15 57 15 84 0 39 -5 55 -28 80 -24 27 -37 33 -83 36 -36 2 -63 -2 -81 -12z"/>
</g>
</svg>
       
</div>
       

                    
              
              <div  id='faded' className=" opacity-0 absolute max-sm:overflow-x-hidden    flex-wrap-reverse justify-evenly  max-sm:top-10 top-28  w-full  text-black   flex ">
             
                    <div className=" w-1/2 overflow-visible   max-sm:m-6 max-sm:w-full  sm:m-auto max-sm:relative max-sm:top-10   ">
                           <h1 className="text-6xl max-sm:text-5xl  font-bold im ">I'M</h1>
                           <p  id="name" className="  text-7xl max-sm:text-6xl  max-sm:justify-center max-sm:relative  font-bold  ">Ankush Kumar </p>
                           <div  className="max-sm:text-md relative  text-xl z-10 ">Profile  Summary:
                            <p>Passionate about coding, and Software Development. Thrive in a dynamic development environment. Bringing fresh ideas and a strong work ethic to a forward-thinking organization.
                                Let's connect! </p>
                           </div>
                           <br />
                           <div className=" flex space-x-4 relative left-2 m-2  ">
                        <a href="https://www.linkedin.com/in/ankushkumar47?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                              <svg className="hover:shadow-sh21 hover:shadow-black hover:cursor-pointer bg-transparent hover:rounded-md"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px" fill="#000">    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/></svg>
                             </a>
                         <a href="https://github.com/Ankush3314260" target="_blank">                           <svg className="hover:shadow-sh21 hover:shadow-black hover:rounded-xl hover:cursor-pointer " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" fill="#000">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg></a>

                        <a href="https://www.instagram.com/i_ankush_13?igsh=MW9uZnR0dnN3NGgyYg==" target="_blank" rel="noopener noreferrer">   <svg className="hover:shadow-sh21 hover:shadow-black hover:rounded-lg hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px" fill="#000"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/></svg></a>
                           </div>
                           <button className="p-2 w-36 bg-black text-white shadow-black shadow-lg rounded-full  max-sm:p-2 relative m-3  "> <a href="mailto:ankushsingh3314260@gmail?subject=Thanks%20For%20Reaching" className="">HIRE ME</a></button>
                        
                     </div>
                    <div className="sm:w-1/3 max-sm:w-full  max-sm:overflow-visible  flex relative -right-0 max-sm:m-auto     ">
                         <div className=" " >
                              <img  className="max-sm:w-max relative max-sm:top-16 sm:-top-6" src="/homeimage.jpg" alt="" srcSet="" />
                           
                                
                          </div>
                     </div>
                    
                    
              </div>
         </>
    )
}
export default Home