@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&family=Orbitron&display=swap');

:root {
     --red:
    --red-gradient:
}

.parties-view
{
    background: url(https://i.ibb.co/2gcsyDw/igtakashyxdd01lolxd.jpg) !important;
}
.parties-view .parties-background {
    opacity:0;
}
.collections-application{
    background: url(https://i.ibb.co/2gcsyDw/igtakashyxdd01lolxd.jpg?width=1202&height=676) !important;
}

div[data-screen-name='rcp-fe-lol-navigation-screen'] {
    height: 79px;
    width: 1278px;
    border-top: 0px solid #785a28!important;
    box-sizing: border-box;
}

#rcp-fe-viewport-root {
    display: flex;
    width: 1280px;
    height: 720px;
    position: relative;
    border: 1px solid rgba(255, 0, 0, 0.5) !important;
    box-sizing: border-box;
    overflow: hidden;
    background: #000;
}

#rcp-fe-viewport-root #rcp-fe-lol-navigation-app {
    pointer-events: none;
    background: #00000000!important;
}

.lol-social-sidebar {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    color: #ff000008;
    font-size: 12px;
    cursor: default;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    background-color:#ff000000 !important;
    background:url('https://i.ibb.co/GCpCvN6/friendbarraxd.png')!important;
    box-shadow: inset 0px 0px 150px  rgba(255, 255, 255, 0.2) ;        
    border-radius:20px 20px 0px 0px;
}
.social-scroll::-webkit-scrollbar {
    width: 0px!important;    
}

.section, :host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: #f1f1f1!important;
    border: none;
    margin: 0;
    text-decoration: none;
    outline: none;
    transition: text-shadow 0.3s ease-in-out, background 1.5s;
    width: 100%;
    height: 100%;
    min-height: 20px;
    cursor: pointer;
}

.section.active .section-glow {
    height: 1px;
    width: 100%;
    position: absolute;
    left: 0;
    top: 20px;
    margin: 0;
    background: linear-gradient(to left, transparent, #4600ad, transparent)!important;
}

.section.active, :host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section.active {
    color: #846bff;
    text-shadow: 0px 0px 21px #4600ad !important;
    /* opacity: 1; */
}

 .section.active {
    background-image: linear-gradient(0deg, rgba(70, 0, 173, 0.3) 0%, rgba(70, 0, 173, 0.19) 55%)!important;
}

.section.active, :host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section.active {
    color: #ffffff!important;
    text-shadow: 0px 1px 15px white!important;
    font-family: 'Orbitron', sans-serif!important;
}

.section, :host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: #facfffc2!important;
    border: none;
    margin: 0;
    text-decoration: none;
    outline: none;
    transition: text-shadow 0.3s ease-in-out, background 1.5s;
    width: 100%;
    height: 100%;
    min-height: 20px;
    cursor: pointer;
    font-family: 'Orbitron', sans-serif!important;
}

::content .lol-uikit-video-content {
    position: absolute;
    pointer-events: none;
    opacity: 0;
    filter: brightness(0) invert(0)!important;
}

.lol-uikit-full-page-backdrop {
    background: linear-gradient(rgba(0, 0, 0, 0),rgba(255, 255, 255, 0.3) 120%)!important;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}


.loot-backdrop {
    position: absolute;
    width: 1055px;
    height: 718px;
    overflow: hidden;
    filter: hue-rotate(170deg);
}

.game-type-card .parties-game-type-upper-half {
    position: relative;
    cursor: pointer;
    width: 185px;
    height: 230px;
    filter: grayscale(100%)!important;
}

.parties-header-button-container .back-button-container.back-button-shown {
    display: block;
    filter: saturate(0);
}


#rcp-fe-viewport-root > .rcp-fe-viewport-full-screen {
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    -webkit-user-select: none;
    box-shadow: inset 0px 0px 40px rgba(255, 0, 0, 0.2);
}



.update-available-proxy {
    position: absolute;
    top: 11px;
    left: 509px;
    width: 141px;
    height: 76px;
    padding: 7px 0;
    pointer-events: none;
}

.left-nav-menu, .right-nav-menu {
    display: flex;
    /* align-items: center; */
    /* height: 79px; */
    /* right: 14px; */
    /* margin-left: -136px; */
}






:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section.active {
    background-image: linear-gradient(0deg, rgba(205,190,145,0.15) 0%, rgba(31,37,38,0) 55%);
    color: #fdfdfd !important;
}






.currency-be-icon-container {
  
    filter: brightness(0) invert(1)!important;
}

.currency-rp {
    filter: brightness(0) invert(1)!important;
}


.main-navigation-menu-item {
    min-width: 40px;
    height: 100%;
    pointer-events: auto;
    position: relative;
    --disabled-color: rgba(240,230,210,0.5);
    filter: brightness(0) invert(1)!important;
}



.member-name-wrapper .member-name {
    color: #ffffff!important;
    font-size: 14px;
    font-weight: bold!important;
    line-height: 20px;
    text-shadow: 1px  1px 1px black !important;   
    letter-spacing: 0.025em;
    -webkit-font-smoothing: subpixel-antialiased;
}
.member-status{
    color: #7cd87c !important;
    text-shadow: 1px  1px 1px #000000 !important; 
}

.group-header {
    background: rgba(1,10,19,0.7)!important;          
    transition: 0.5s;
    height: 24px;
    cursor: pointer;
    display: flex;
    margin-bottom: 4px;
    color: rgba(255,255,255,1)!important;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.075em;
        
}
.lol-social-sidebar .alpha-version-panel {
    filter: grayscale(100%) ;
}

.friend-requests {
    height: 44px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background: rgba(1,10,19,0.7)!important;
    box-shadow 0 5px 45px rgba(0,0,0,0.5);
}

.friend-requests-header {
    color: #ffc13d !important; 
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-right: 5px;
}
.lol-social-actions-bar .buttons {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin-top: -2px;
    transition: width 200ms cubic-bezier(0, 0, 0, 1);
    filter: brightness(0) invert(1)!important;    
}

.player-party-controls.main-player-controls .parties-player-labels-wrapper .parties-player-name-container .parties-player-name {
    color: #fabe0a;
    max-width: 170px;
    filter: brightness(0) invert(1)!important;
}

.player-party-controls .parties-player-labels-wrapper .parties-player-name-container .parties-player-leader-icon {
    position: absolute!important;    
    padding-bottom: 60px!important;    
}

.parties-game-navs-list .parties-game-navs-item {    
    filter: brightness(0) invert(1)!important;
}

.game-type-card.selected .parties-game-type-card-category-btn {
    filter: brightness(0) invert(1)!important;
}
/* LOBBY */
#ember2262, .chat-room-input, .toggle-container, .parties-game-type-card-category-radio-option {
    filter: grayscale(100%) ;
}

.arrow-footer {
    filter: grayscale(100%) brightness(1.2) ;
}



/* HOME */
.rcp-fe-lol-home-sub-nav{
    filter: brightness(0) invert(1)!important;
}

/* Profile */
.style-profile-sub-nav {
    filter: brightness(0) invert(1)!important;
}
.style-profile-skin-picker-button {
    filter: grayscale(100%) brightness(1.2);
}





lol-social-roster-member {
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: flex-end;
    padding-left: 25px!important;
    padding-bottom: 5px!important;
}

lol-social-roster-member .layout{    
    padding: 10px!important;
    background: rgba(0,0,0,0.5);
    border-radius: 10px 0px 0px 10px!important;
}

lol-social-roster-member .layout:hover{    
    background: rgba(0,0,0,0.3)!important;
}

lol-social-roster-member .member-icon {
    height: 32px;
    width: 32px;
    margin: 0 8px 0 -28px!important;
    flex-shrink: 0;
}

.icon-ring{
    background-image:none!important;    
}
lol-social-roster-member .party-join-button {
    filter: brightness(0.7) invert(1);    
}

:host .parties-status-card.open {
    opacity:0.7;
}




.hover-card-root-container {
    opacity:0.95;
}

.parties-invite-info-panel{
    filter: grayscale(100%) brightness(1.2);
}


.champion-image-container {
    opacity:0.9!important;
}

.champion-name{
    color:white!important;
    font-size:17px!important;
    text-shadow:2px 2px black!important;
        
}




:host .parties-status-card-header .parties-status-card-header-text {
  font-family: var(--font-display);
}
:host .parties-status-card-header .parties-status-card-header-text {
  -webkit-user-select: none;
}
:host .parties-status-card-header .parties-status-card-header-text {
  font-kerning: normal;
  -webkit-font-feature-settings: "kern" 1;
  -webkit-font-smoothing: antialiased;
}
:host .parties-status-card-header .parties-status-card-header-text {
  text-transform: uppercase;
}
:host .parties-status-card-header .parties-status-card-header-text:lang(ko-kr),
:host .parties-status-card-header .parties-status-card-header-text:lang(ja-jp),
:host .parties-status-card-header .parties-status-card-header-text:lang(tr-tr),
:host .parties-status-card-header .parties-status-card-header-text:lang(el-gr),
:host .parties-status-card-header .parties-status-card-header-text:lang(th-th),
:host .parties-status-card-header .parties-status-card-header-text:lang(zh-tw) {
  text-transform: none;
}
:host .parties-status-card-header .parties-status-card-header-text {
  color: #f0e6d2;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.075em;
}
:host .parties-status-card-header .parties-status-card-header-text:lang(ja-jp) {
  font-size: 13px;
}
:host .parties-status-card-header .parties-status-card-header-text:lang(ar-ae) {
  letter-spacing: 0;
}
:host .parties-status-card-header .parties-status-card-header-text {
  font-family: var(--font-display);
}
:host .parties-status-card-body .parties-status-card-map {
  width: 34px;
  height: 32px;
  background-size: auto 64px;
  background-repeat: no-repeat;
}
:host .parties-status-card-body .parties-status-card-map.game_map_howling_abyss {
  background-image: url(/fe/lol-parties/map_ha.png);
  filter: hue-rotate(170deg);
}
:host .parties-status-card-body .parties-status-card-map.game_map_summoners_rift {
  background-image: url(/fe/lol-parties/map_sr.png);
  filter: hue-rotate(170deg);
}
:host .parties-status-card-body .parties-status-card-map.game_map_twisted_treeline {
  background-image: url(/fe/lol-parties/map_tt.png);
  filter: hue-rotate(170deg);
}
:host .parties-status-card-body .parties-status-card-map.game_map_rotating_game_mode {
  background-image: url(https://media.tenor.com/images/a68ad287b5afa6ed7a6087e2ee586b4e/tenor.gif);
  filter: hue-rotate(170deg);
}
:host .parties-status-card-body .parties-status-card-map.game_map_21 {
  background-image: url(/fe/lol-parties/map_21.png);
  filter: hue-rotate(170deg);
}
:host .parties-status-card-body .parties-status-card-map.game_map_22 {
  background-image: url(/fe/lol-parties/map_tft.png);
  filter: hue-rotate(170deg);
}
lol-uikit-content-block.parties-status-card-info {
  width: 250px;
  white-space: normal;
}
lol-uikit-content-block.parties-status-card-info h6 {
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
}
lol-uikit-content-block.parties-status-card-info h6 .parties-status-card-header-text {
  margin-left: 2px;
  margin-top: 2px;
}
.parties-status-card-header-icon {
  background-image: url(/fe/lol-parties/party_panel_header_icon.png);
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
}
:host .parties-status-card {
  position: relative;
  cursor: pointer;
}
:host .parties-status-card.open {
  background: #143c14;
}
:host .parties-status-card.closed {
  background: #611919;
}
:host .parties-status-card .parties-status-card-bg-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 202px;
  color: #4bb44b;
}
:host .parties-status-card-hide {
  display: none;
}
:host .parties-status-card-header {
  direction: ltr;
  display: flex;
  justify-content: space-between;
  height: 22px;
  position: relative;
  align-items: center;
  padding: 5px;
  margin: 0 0 0 8px /*rtl:0 8px 0 0*/;
}
:host .parties-status-card-header .parties-status-card-header-icon {
  background-image: url(/fe/lol-parties/party_panel_header_icon.png);
  width: 20px;
  height: 20px;
  flex-grow: 0;
  background-repeat: no-repeat;
  background-size: contain;
}
:host .parties-status-card-header .parties-status-card-header-text {
  display: flex;
  align-items: center;
  height: 32px;
  color: #a09b8c;
  padding: 0 5px 0 9px;
  flex-grow: 1;
  pointer-events: none;
  margin-top: 1px;
  text-transform: uppercase;
}
:host .parties-status-card-header .parties-status-card-header-info {
  flex-grow: 0;
  width: 16px;
  height: 16px;
  margin-right: 10px;
  visibility: hidden;
}
:host .parties-status-card-body {
  direction: ltr;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: -4px;
  padding: 0 5px 10px 10px /*rtl:0 10px 10px 5px*/;
}
:host .parties-status-card-body .parties-status-card-map {
  margin: 7px 10px 0 0 /*rtl:7px 0 0 10px*/;
}
:host .parties-status-card-body .parties-status-member-icons {
  display: flex;
  align-items: flex-start;
  padding: 0 0 0 6px /*rtl:0 6px 0 0*/;
}
:host .parties-status-card-body .parties-status-member-icons .parties-status-member-empty {
  width: 34px;
  height: 34px;
  margin: 0 0 0 -16px /*rtl:0 -16px 0 0*/;
  background-image: url(/fe/lol-parties/player_empty.png);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
}
:host .parties-status-card-body .parties-status-member-icons .parties-status-member-joined {
  width: 34px;
  height: 34px;
  margin: 0 0 0 -16px /*rtl:0 -16px 0 0*/;
  background-image: url(/fe/lol-parties/player_joined.png);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
}
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&family=Orbitron&display=swap');

:root {
     --white:
    --white-gradient:
}

.parties-view
{
    background: url(https://i.ibb.co/2gcsyDw/igtakashyxdd01lolxd.jpg) !important;
}
.parties-view .parties-background {
    opacity:0;
}
.collections-application{
    background: url(https://i.ibb.co/2gcsyDw/igtakashyxdd01lolxd.jpg?width=1202&height=676) !important;
}

div[data-screen-name='rcp-fe-lol-navigation-screen'] {
    height: 79px;
    width: 1278px;
    border-top: 0px solid #785a28!important;
    box-sizing: border-box;
}

#rcp-fe-viewport-root {
    display: flex;
    width: 1280px;
    height: 720px;
    position: relative;
    border: 1px solid rgba(255, 0, 0, 0.5) !important;
    box-sizing: border-box;
    overflow: hidden;
    background: #000;
}

#rcp-fe-viewport-root #rcp-fe-lol-navigation-app {
    pointer-events: none;
    background: #00000000!important;
}

.lol-social-sidebar {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    color: #ff000008;
    font-size: 12px;
    cursor: default;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    background-color:#ff000000 !important;
    background:url('https://i.ibb.co/GCpCvN6/friendbarraxd.png')!important;
    box-shadow: inset 0px 0px 150px  rgba(255, 255, 255, 0.2) ;        
    border-radius:20px 20px 0px 0px;
}
.social-scroll::-webkit-scrollbar {
    width: 0px!important;    
}

.section, :host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: #f1f1f1!important;
    border: none;
    margin: 0;
    text-decoration: none;
    outline: none;
    transition: text-shadow 0.3s ease-in-out, background 1.5s;
    width: 100%;
    height: 100%;
    min-height: 20px;
    cursor: pointer;
}

.section.active .section-glow {
    height: 1px;
    width: 100%;
    position: absolute;
    left: 0;
    top: 20px;
    margin: 0;
    background: linear-gradient(to left, transparent, #9e6dff, transparent)!important;
}

.section.active, :host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section.active {
    color: #846bff;
    text-shadow: 0px 0px 21px #8500ff !important;
    /* opacity: 1; */
}

 .section.active {
    background-image: linear-gradient(0deg, rgba(157, 84, 255, 0.3) 0%, rgba(34, 0, 66, 0.19) 55%)!important;
}

.section.active, :host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section.active {
    color: #ffffff!important;
    text-shadow: 0px 1px 15px white!important;
    font-family: 'Orbitron', sans-serif!important;
}

.section, :host-context(lol-uikit-navigation-bar[type=nav-bar-secondary]) .section {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: #facfffc2!important;
    border: none;
    margin: 0;
    text-decoration: none;
    outline: none;
    transition: text-shadow 0.3s ease-in-out, background 1.5s;
    width: 100%;
    height: 100%;
    min-height: 20px;
    cursor: pointer;
    font-family: 'Orbitron', sans-serif!important;
}

::content .lol-uikit-video-content {
    position: absolute;
    pointer-events: none;
    opacity: 0;
    filter: brightness(0) invert(0)!important;
}

.lol-uikit-full-page-backdrop {
    background: linear-gradient(rgba(0, 0, 0, 0),rgba(255, 255, 255, 0.3) 120%)!important;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}


.loot-backdrop {
    position: absolute;
    width: 1055px;
    height: 718px;
    overflow: hidden;
    filter: hue-rotate(170deg);
}

.game-type-card .parties-game-type-upper-half {
    position: relative;
    cursor: pointer;
    width: 185px;
    height: 230px;
    filter: grayscale(100%)!important;
}

.parties-header-button-container .back-button-container.back-button-shown {
    display: block;
    filter: saturate(0);
}


#rcp-fe-viewport-root > .rcp-fe-viewport-full-screen {
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    -webkit-user-select: none;
    box-shadow: inset 0px 0px 40px rgba(255, 0, 0, 0.2);
}



.update-available-proxy {
    position: absolute;
    top: 11px;
    left: 509px;
    width: 141px;
    height: 76px;
    padding: 7px 0;
    pointer-events: none;
}

.left-nav-menu, .right-nav-menu {
    /* display: flex; */
    /* align-items: center; */
    /* height: 79px; */
    /* right: 14px; */
    /* margin-left: -136px; */
}



:host-context(lol-uikit-navigation-bar[type=nav-bar]) .section::after {
    content: '';
    background-image: linear-gradient(0deg, rgba(205,190,145,0.2) 0%, rgba(31,37,38,0) 55%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.4s ease-in;
}










.currency-be-icon-container {
  
    filter: brightness(0) invert(1)!important;
}

.currency-rp {
    filter: brightness(0) invert(1)!important;
}








.main-navigation-menu-item {
    min-width: 40px;
    height: 100%;
    pointer-events: auto;
    position: relative;
    --disabled-color: rgba(240,230,210,0.5);
    filter: brightness(0) invert(1)!important;
}





.member-name-wrapper .member-name {
    color: #ffffff!important;
    font-size: 14px;
    font-weight: bold!important;
    line-height: 20px;
    text-shadow: 1px  1px 1px black !important;   
    letter-spacing: 0.025em;
    -webkit-font-smoothing: subpixel-antialiased;
}
.member-status{
    color: #7cd87c !important;
    text-shadow: 1px  1px 1px #000000 !important; 
}

.group-header {
    background: rgba(1,10,19,0.7)!important;          
    transition: 0.5s;
    height: 24px;
    cursor: pointer;
    display: flex;
    margin-bottom: 4px;
    color: rgba(255,255,255,1)!important;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.075em;
        
}
.lol-social-sidebar .alpha-version-panel {
    filter: grayscale(100%) ;
}

.friend-requests {
    height: 44px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background: rgba(1,10,19,0.7)!important;
    box-shadow 0 5px 45px rgba(0,0,0,0.5);
}

.friend-requests-header {
    color: #ffc13d !important; 
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-right: 5px;
}
.lol-social-actions-bar .buttons {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin-top: -2px;
    transition: width 200ms cubic-bezier(0, 0, 0, 1);
    filter: brightness(0) invert(1)!important;    
}

.player-party-controls.main-player-controls .parties-player-labels-wrapper .parties-player-name-container .parties-player-name {
    color: #fabe0a;
    max-width: 170px;
    filter: brightness(0) invert(1)!important;
}

.player-party-controls .parties-player-labels-wrapper .parties-player-name-container .parties-player-leader-icon {
    position: absolute!important;    
    padding-bottom: 60px!important;    
}

.parties-game-navs-list .parties-game-navs-item {    
    filter: brightness(0) invert(1)!important;
}

.game-type-card.selected .parties-game-type-card-category-btn {
    filter: brightness(0) invert(1)!important;
}
/* LOBBY */
#ember2262, .chat-room-input, .toggle-container, .parties-game-type-card-category-radio-option {
    filter: grayscale(100%) ;
}

.arrow-footer {
    filter: grayscale(100%) brightness(1.2) ;
}



/* HOME */
.rcp-fe-lol-home-sub-nav{
    filter: brightness(0) invert(1)!important;
}

/* Profile */
.style-profile-sub-nav {
    filter: brightness(0) invert(1)!important;
}
.style-profile-skin-picker-button {
    filter: grayscale(100%) brightness(1.2);
}





lol-social-roster-member {
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: flex-end;
    padding-left: 25px!important;
    padding-bottom: 5px!important;
}

lol-social-roster-member .layout{    
    padding: 10px!important;
    background: rgba(0,0,0,0.5);
    border-radius: 10px 0px 0px 10px!important;
}

lol-social-roster-member .layout:hover{    
    background: rgba(0,0,0,0.3)!important;
}

lol-social-roster-member .member-icon {
    height: 32px;
    width: 32px;
    margin: 0 8px 0 -28px!important;
    flex-shrink: 0;
}

.icon-ring{
    background-image:none!important;    
}
lol-social-roster-member .party-join-button {
    filter: brightness(0.7) invert(1);    
}

:host .parties-status-card.open {
    opacity:0.7;
}




.hover-card-root-container {
    opacity:0.95;
}

.parties-invite-info-panel{
    filter: grayscale(100%) brightness(1.2);
}


.champion-image-container {
    opacity:0.9!important;
}

.champion-name{
    color:white!important;
    font-size:17px!important;
    text-shadow:2px 2px black!important;
        
}




:host .parties-status-card-header .parties-status-card-header-text {
  font-family: var(--font-display);
}
:host .parties-status-card-header .parties-status-card-header-text {
  -webkit-user-select: none;
}
:host .parties-status-card-header .parties-status-card-header-text {
  font-kerning: normal;
  -webkit-font-feature-settings: "kern" 1;
  -webkit-font-smoothing: antialiased;
}
:host .parties-status-card-header .parties-status-card-header-text {
  text-transform: uppercase;
}
:host .parties-status-card-header .parties-status-card-header-text:lang(ko-kr),
:host .parties-status-card-header .parties-status-card-header-text:lang(ja-jp),
:host .parties-status-card-header .parties-status-card-header-text:lang(tr-tr),
:host .parties-status-card-header .parties-status-card-header-text:lang(el-gr),
:host .parties-status-card-header .parties-status-card-header-text:lang(th-th),
:host .parties-status-card-header .parties-status-card-header-text:lang(zh-tw) {
  text-transform: none;
}
:host .parties-status-card-header .parties-status-card-header-text {
  color: #f0e6d2;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.075em;
}
:host .parties-status-card-header .parties-status-card-header-text:lang(ja-jp) {
  font-size: 13px;
}
:host .parties-status-card-header .parties-status-card-header-text:lang(ar-ae) {
  letter-spacing: 0;
}
:host .parties-status-card-header .parties-status-card-header-text {
  font-family: var(--font-display);
}
:host .parties-status-card-body .parties-status-card-map {
  width: 34px;
  height: 32px;
  background-size: auto 64px;
  background-repeat: no-repeat;
}
:host .parties-status-card-body .parties-status-card-map.game_map_howling_abyss {
  background-image: url(/fe/lol-parties/map_ha.png);
  filter: hue-rotate(170deg);
}
:host .parties-status-card-body .parties-status-card-map.game_map_summoners_rift {
  background-image: url(/fe/lol-parties/map_sr.png);
  filter: hue-rotate(170deg);
}
:host .parties-status-card-body .parties-status-card-map.game_map_twisted_treeline {
  background-image: url(/fe/lol-parties/map_tt.png);
  filter: hue-rotate(170deg);
}
:host .parties-status-card-body .parties-status-card-map.game_map_rotating_game_mode {
  background-image: url(https://media.tenor.com/images/a68ad287b5afa6ed7a6087e2ee586b4e/tenor.gif);
  filter: hue-rotate(170deg);
}
:host .parties-status-card-body .parties-status-card-map.game_map_21 {
  background-image: url(/fe/lol-parties/map_21.png);
  filter: hue-rotate(170deg);
}
:host .parties-status-card-body .parties-status-card-map.game_map_22 {
  background-image: url(/fe/lol-parties/map_tft.png);
  filter: hue-rotate(170deg);
}
lol-uikit-content-block.parties-status-card-info {
  width: 250px;
  white-space: normal;
}
lol-uikit-content-block.parties-status-card-info h6 {
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
}
lol-uikit-content-block.parties-status-card-info h6 .parties-status-card-header-text {
  margin-left: 2px;
  margin-top: 2px;
}
.parties-status-card-header-icon {
  background-image: url(/fe/lol-parties/party_panel_header_icon.png);
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
}
:host .parties-status-card {
  position: relative;
  cursor: pointer;
}
:host .parties-status-card.open {
  background: #143c14;
}
:host .parties-status-card.closed {
  background: #611919;
}
:host .parties-status-card .parties-status-card-bg-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 202px;
  color: #4bb44b;
}
:host .parties-status-card-hide {
  display: none;
}
:host .parties-status-card-header {
  direction: ltr;
  display: flex;
  justify-content: space-between;
  height: 22px;
  position: relative;
  align-items: center;
  padding: 5px;
  margin: 0 0 0 8px /*rtl:0 8px 0 0*/;
}
:host .parties-status-card-header .parties-status-card-header-icon {
  background-image: url(/fe/lol-parties/party_panel_header_icon.png);
  width: 20px;
  height: 20px;
  flex-grow: 0;
  background-repeat: no-repeat;
  background-size: contain;
}
:host .parties-status-card-header .parties-status-card-header-text {
  display: flex;
  align-items: center;
  height: 32px;
  color: #a09b8c;
  padding: 0 5px 0 9px;
  flex-grow: 1;
  pointer-events: none;
  margin-top: 1px;
  text-transform: uppercase;
}
:host .parties-status-card-header .parties-status-card-header-info {
  flex-grow: 0;
  width: 16px;
  height: 16px;
  margin-right: 10px;
  visibility: hidden;
}
:host .parties-status-card-body {
  direction: ltr;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: -4px;
  padding: 0 5px 10px 10px /*rtl:0 10px 10px 5px*/;
}
:host .parties-status-card-body .parties-status-card-map {
  margin: 7px 10px 0 0 /*rtl:7px 0 0 10px*/;
}
:host .parties-status-card-body .parties-status-member-icons {
  display: flex;
  align-items: flex-start;
  padding: 0 0 0 6px /*rtl:0 6px 0 0*/;
}
:host .parties-status-card-body .parties-status-member-icons .parties-status-member-empty {
  width: 34px;
  height: 34px;
  margin: 0 0 0 -16px /*rtl:0 -16px 0 0*/;
  background-image: url(/fe/lol-parties/player_empty.png);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
}
:host .parties-status-card-body .parties-status-member-icons .parties-status-member-joined {
  width: 34px;
  height: 34px;
  margin: 0 0 0 -16px /*rtl:0 -16px 0 0*/;
  background-image: url(/fe/lol-parties/player_joined.png);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
}
filter: hue-rotate(170deg);
:host .parties-game-search-elapsed,
:host .parties-game-search-header-text {
  font-family: var(--font-display);
}
:host .parties-game-search-info {
  font-family: var(--font-body);
}
:host .parties-game-search-info,
:host .parties-game-search-elapsed {
  -webkit-user-select: none;
}
:host .parties-game-search-info,
:host .parties-game-search-elapsed {
  font-kerning: normal;
  -webkit-font-feature-settings: "kern" 1;
  -webkit-font-smoothing: antialiased;
}
:host .parties-game-search-elapsed {
  text-transform: uppercase;
}
:host .parties-game-search-elapsed:lang(ko-kr),
:host .parties-game-search-elapsed:lang(ja-jp),
:host .parties-game-search-elapsed:lang(tr-tr),
:host .parties-game-search-elapsed:lang(el-gr),
:host .parties-game-search-elapsed:lang(th-th),
:host .parties-game-search-elapsed:lang(zh-tw) {
  text-transform: none;
}
:host .parties-game-search-elapsed {
  color: #f0e6d2;
  font-size: 30px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.05em;
}
:host .parties-game-search-elapsed:lang(ar-ae) {
  letter-spacing: 0;
}
:host .parties-game-search-info {
  color: #a09b8c;
  font-size: 12px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: 0.025em;
  -webkit-font-smoothing: subpixel-antialiased;
}
:host .parties-game-search-info:lang(ja-jp) {
  font-size: 13px;
}
:host .parties-game-search-info:lang(ar-ae) {
  letter-spacing: 0;
}
:host .parties-game-search-elapsed,
:host .parties-game-search-header-text {
  font-family: var(--font-display);
}
:host .parties-game-search-info {
  font-family: var(--font-body);
}
:host .parties-game-search-map {
  width: 34px;
  height: 32px;
  background-size: auto 64px;
  background-repeat: no-repeat;
}
:host .parties-game-search-map.game_map_howling_abyss {
  background-image: url(/fe/lol-parties/map_ha.png);
}
:host .parties-game-search-map.game_map_summoners_rift {
  background-image: url(/fe/lol-parties/map_sr.png);
}
:host .parties-game-search-map.game_map_twisted_treeline {
  background-image: url(/fe/lol-parties/map_tt.png);
}
:host .parties-game-search-map.game_map_rotating_game_mode {
  background-image: url(/fe/lol-parties/map_rgm.png);
}
:host .parties-game-search-map.game_map_21 {
  background-image: url(/fe/lol-parties/map_21.png);
}
:host .parties-game-search-map.game_map_22 {
  background-image: url(/fe/lol-parties/map_tft.png);
}
:host {
  display: block;
  position: relative;
  flex: 0 0 auto;
/* Divider line below each game queue */
/* Hide the divider if the game queue is hovered */
}
:host .parties-game-search-status {
  direction: ltr;
}
:host .parties-game-search-status.queue-delay .parties-game-search-info {
  position: relative;
  color: #a09b8c;
  display: flex;
}
:host .parties-game-search-status.queue-delay .parties-game-search-info::before {
  position: relative;
  top: 1px;
  width: 18px;
  height: 18px;
  margin-right: 5px;
  content: '';
  -webkit-mask: url(/fe/lol-parties/icon_warning_mask.png) no-repeat center;
  -webkit-mask-size: contain;
  background-color: #f0e6d2;
}
:host .parties-game-search-status.queue-delay .parties-game-search-info::before {
  position: absolute;
  left: 142px /*rtl:0px*/;
  top: -2px;
}
:host .parties-game-search-status.queue-delay .parties-game-search-divider {
  background-color: #413b07;
}
:host .parties-game-search-header {
  display: flex;
  justify-content: space-between;
  height: 32px;
  align-items: center;
  padding: 0 9px;
}
:host .parties-game-search-body-data {
  flex: 1;
}
:host .parties-game-search-info {
  color: #0acbe6;
}
:host .parties-game-search-elapsed {
  display: flex;
  align-items: center;
}
:host .parties-game-search-elapsed.priority-warning::before {
  position: relative;
  top: 1px;
  width: 18px;
  height: 18px;
  margin-right: 5px;
  content: '';
  -webkit-mask: url(/fe/lol-parties/icon_warning_mask.png) no-repeat center;
  -webkit-mask-size: contain;
  background-color: #c89b3c;
}
:host .parties-game-search-elapsed.priority-alert::before {
  position: relative;
  top: 1px;
  width: 18px;
  height: 18px;
  margin-right: 5px;
  content: '';
  -webkit-mask: url(/fe/lol-parties/icon_warning_mask.png) no-repeat center;
  -webkit-mask-size: contain;
  background-color: #ff2345;
}
:host .parties-game-search-elapsed.priority-max-alert {
  color: #ff2345;
}
:host .parties-game-search-elapsed.priority-max-alert::before {
  position: relative;
  top: 1px;
  width: 18px;
  height: 18px;
  margin-right: 5px;
  content: '';
  -webkit-mask: url(/fe/lol-parties/icon_warning_mask.png) no-repeat center;
  -webkit-mask-size: contain;
  background-color: #ff2345;
}
:host .parties-game-search-body {
  display: flex;
  align-items: flex-start;
  position: relative;
  padding: 0 5px 10px 10px /*rtl:0 10px 10px 5px*/;
}
:host .parties-game-search-map {
  margin: 5px 10px 0 0 /*rtl:5px 0 0 10px*/;
}
:host .parties-game-search-header-text {
  color: #a09b8c;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: normal;
  line-height: 16px;
  margin: 2px 0;
  letter-spacing: 1px;
  display: flex;
  position: relative;
}
:host .parties-game-search-cancel {
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  -webkit-mask: url(/fe/lol-parties/x_mask.png) no-repeat center;
  -webkit-mask-size: 18px;
  background-color: var(--color-gold3);
  width: 18px;
  height: 18px;
}
:host .parties-game-search-cancel:hover {
  background-color: var(--color-gold1);
}
:host .parties-game-search-cancel:active {
  background-color: var(--color-gold6);
}
:host .parties-game-search-divider {
  content: '';
  position: absolute;
  bottom: 0;
  left: 10px;
  width: calc(100% - 20px);
  height: 1px;
  background-color: #005a82;
}
:host .parties-game-search-status:hover .parties-game-search-divider {
  background: none;
}
:host .parties-game-search-hide {
  display: none;
}
.basic-button .play-button-container {

    position: relative;
    width: 100%;
    background-color: #03030a;
    height: 100%;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: 20px center;
    transition: 400ms 200ms background ease;
}

:host .parties-status-card .parties-status-card-bg-container {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 202px;
    color: #4bb44b;
}
:host .parties-status-card-header .parties-status-card-header-text {
  font-family: var(--font-display);
}
:host .parties-status-card-header .parties-status-card-header-text {
  -webkit-user-select: none;
}
:host .parties-status-card-header .parties-status-card-header-text {
  font-kerning: normal;
  -webkit-font-feature-settings: "kern" 1;
  -webkit-font-smoothing: antialiased;
}
:host .parties-status-card-header .parties-status-card-header-text {
  text-transform: uppercase;
}
:host .parties-status-card-header .parties-status-card-header-text:lang(ko-kr),
:host .parties-status-card-header .parties-status-card-header-text:lang(ja-jp),
:host .parties-status-card-header .parties-status-card-header-text:lang(tr-tr),
:host .parties-status-card-header .parties-status-card-header-text:lang(el-gr),
:host .parties-status-card-header .parties-status-card-header-text:lang(th-th),
:host .parties-status-card-header .parties-status-card-header-text:lang(zh-tw) {
  text-transform: none;
}
:host .parties-status-card-header .parties-status-card-header-text {
  color: #f0e6d2;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.075em;
}
:host .parties-status-card-header .parties-status-card-header-text:lang(ja-jp) {
  font-size: 13px;
}
:host .parties-status-card-header .parties-status-card-header-text:lang(ar-ae) {
  letter-spacing: 0;
}
:host .parties-status-card-header .parties-status-card-header-text {
  font-family: var(--font-display);
}
:host .parties-status-card-body .parties-status-card-map {
  width: 34px;
  height: 32px;
  background-size: auto 64px;
  background-repeat: no-repeat;
}
:host .parties-status-card-body .parties-status-card-map.game_map_howling_abyss {
  background-image: url(/fe/lol-parties/map_ha.png);
}
:host .parties-status-card-body .parties-status-card-map.game_map_summoners_rift {
  background-image: url(/fe/lol-parties/map_sr.png);
}
:host .parties-status-card-body .parties-status-card-map.game_map_twisted_treeline {
  background-image: url(/fe/lol-parties/map_tt.png);
}
:host .parties-status-card-body .parties-status-card-map.game_map_rotating_game_mode {
  background-image: url(/fe/lol-parties/map_rgm.png);
}
:host .parties-status-card-body .parties-status-card-map.game_map_21 {
  background-image: url(/fe/lol-parties/map_21.png);
}
:host .parties-status-card-body .parties-status-card-map.game_map_22 {
  background-image: url(/fe/lol-parties/map_tft.png);
}
lol-uikit-content-block.parties-status-card-info {
  width: 250px;
  white-space: normal;
}
lol-uikit-content-block.parties-status-card-info h6 {
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
}
lol-uikit-content-block.parties-status-card-info h6 .parties-status-card-header-text {
  margin-left: 2px;
  margin-top: 2px;
}
.parties-status-card-header-icon {
  background-image: url(/fe/lol-parties/party_panel_header_icon.png);
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
}
:host .parties-status-card {
  position: relative;
  cursor: pointer;
}
:host .parties-status-card.open {
  background: #143c14;
}
:host .parties-status-card.closed {
  background: #0d2641;
}
:host .parties-status-card .parties-status-card-bg-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 202px;
  color: #4bb44b;
}
:host .parties-status-card-hide {
  display: none;
}
:host .parties-status-card-header {
  direction: ltr;
  display: flex;
  justify-content: space-between;
  height: 22px;
  position: relative;
  align-items: center;
  padding: 5px;
  margin: 0 0 0 8px /*rtl:0 8px 0 0*/;
}
:host .parties-status-card-header .parties-status-card-header-icon {
  background-image: url(/fe/lol-parties/party_panel_header_icon.png);
  width: 20px;
  height: 20px;
  flex-grow: 0;
  background-repeat: no-repeat;
  background-size: contain;
}
:host .parties-status-card-header .parties-status-card-header-text {
  display: flex;
  align-items: center;
  height: 32px;
  color: #a09b8c;
  padding: 0 5px 0 9px;
  flex-grow: 1;
  pointer-events: none;
  margin-top: 1px;
  text-transform: uppercase;
}
:host .parties-status-card-header .parties-status-card-header-info {
  flex-grow: 0;
  width: 16px;
  height: 16px;
  margin-right: 10px;
  visibility: hidden;
}
:host .parties-status-card-body {
  direction: ltr;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: -4px;
  padding: 0 5px 10px 10px /*rtl:0 10px 10px 5px*/;
}
:host .parties-status-card-body .parties-status-card-map {
  margin: 7px 10px 0 0 /*rtl:7px 0 0 10px*/;
}
:host .parties-status-card-body .parties-status-member-icons {
  display: flex;
  align-items: flex-start;
  padding: 0 0 0 6px /*rtl:0 6px 0 0*/;
}
:host .parties-status-card-body .parties-status-member-icons .parties-status-member-empty {
  width: 34px;
  height: 34px;
  margin: 0 0 0 -16px /*rtl:0 -16px 0 0*/;
  background-image: url(/fe/lol-parties/player_empty.png);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
}
:host .parties-status-card-body .parties-status-member-icons .parties-status-member-joined {
  width: 34px;
  height: 34px;
  margin: 0 0 0 -16px /*rtl:0 -16px 0 0*/;
  background-image: url(/fe/lol-parties/player_joined.png);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
}

lol-social-panel {
    display: flex;
    flex-direction: column;
    animation: fadein 1s;
    filter: hue-rotate(140deg);
    font-size: 12px;
}

:host .parties-status-card-body .parties-status-card-map.game_map_summoners_rift {
    background-image: url(/fe/lol-parties/map_sr.png);
    filter: hue-rotate(240deg);
}

.placeholder-invited-container .placeholder-invited-image {
    background-image: url(/fe/lol-parties/invited-banner.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: -1px;
    width: 100%;
    filter: hue-rotate(140deg);
    height: 100%;
}