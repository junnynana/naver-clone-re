import React from 'react';
import logo from './logo.svg';
import {Route, Link, Router} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import './App4.scss';


function App(props) {
  return (
<body className="SHOME">
  <div id="root">
    <div className="wrap">
      <header className="SportsHeader_sports_header__nJNR6 SportsHeader_type_responsive__eRQYD">
        <div className="SportsHeader_sports_gnb__WLTfM">
          <h1 className="SportsHeader_logo_area__E3ea3">
            <a href="https://m.naver.com" className="SportsHeader_link_naver__c6PoO">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon_naver" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M20 20h-6.146L6.44 9.296V20H0V0h6.147l7.414 10.704V0h6.44v20z" fill="#3CD14B"></path>
              </svg>
            </a>
            <a href="/index" className="SportsHeader_link_sports__Tku1X">
              <svg width="56" height="18" viewBox="0 0 56 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="SportsHeader_icon_sports__3SVqD" aria-hidden="true">
                <path d="M.66 17.9v-2.46H18.3v2.46H.66zm.7-8c2.453-1.133 4.213-2.287 5.28-3.46 1.067-1.187 1.6-2.433 1.6-3.74V1.3h2.7v1.4c0 1.867-.667 3.6-2 5.2s-3.44 3.04-6.32 4.32L1.36 9.9zm14.76 2.32L8.2 7.12l1.2-2.36 8.2 5.22-1.48 2.24zm10.485 5.06V10.6h2.7v6.68h-2.7zm-7.48.62v-2.46h17.64v2.46h-17.64zm1.74-13.86V1.6h14.18v2.44h-14.18zm0 8.06V9.68h14.18v2.42h-14.18zm2.78-1.2V2.56h2.6v8.34h-2.6zm6.02 0V2.56h2.6v8.34h-2.6zm7.925 6.98v-2.44h17.64v2.44H37.59zm.88-7.48c2.266-.92 3.94-1.86 5.02-2.82 1.093-.96 1.64-1.88 1.64-2.76V3.9h2.7v.92c0 1.507-.674 2.947-2.02 4.32-1.334 1.36-3.38 2.58-6.14 3.66l-1.2-2.4zm14.56 2.4l-7.96-4.24 1.18-2.34 8.1 4.24-1.32 2.34zm-13.4-7.66V2.7h13.58v2.44H39.63zm5.5-1.58V.66h2.7v2.9h-2.7z" fill="#222"></path>
              </svg>
            </a>
          </h1>
          <div class="SportsHeader_tool_area__DXwkF">
            <a href="#" class="SportsHeader_link_talk__kdwA7" aria-describedby="wa_link_talk_tooltip">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="SportsHeader_icon_talk__8IZ34" aria-hidden="true">
                <path d="M10.116 23.698h0a21.323 21.323 0 01-4.034-.971l-.02-.007-.019-.005c-.31-.093-.483-.302-.544-.542-.063-.246-.02-.582.25-.908l.009-.01.008-.01c.188-.242.352-.46.507-.74.152-.274.28-.583.437-1.008.18-.488.157-1.02-.066-1.486h0l-.003-.004a8.66 8.66 0 011.77-10c3.513-3.395 9.11-3.364 12.593.071l.277.274c3.14 3.575 2.978 9.036-.428 12.425h0l-.002.002c-1.73 1.645-3.952 2.776-6.353 2.94-1.496.1-2.927.141-4.38-.02v-.001h-.002zm11.006-2.636h0z" stroke="#222" stroke-width="1.8"></path>
                <ellipse cx="18.306" cy="14.55" rx="1.084" ry="1.097" fill="#222"></ellipse>
                <ellipse cx="14.693" cy="14.55" rx="1.084" ry="1.097" fill="#222"></ellipse>
                <ellipse cx="11.078" cy="14.55" rx="1.084" ry="1.097" fill="#222"></ellipse>
              </svg>
            </a>
            <button type="button" class="SportsHeader_button_menu__9wB9p" aria-haspopup="dialog" aria-expanded="false">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="SportsHeader_icon_menu__UtBwF" aria-hidden="true">
                <path d="M6 7.9a.9.9 0 01.9-.9h16.2a.9.9 0 110 1.8H6.9a.9.9 0 01-.9-.9zM6 14.9a.9.9 0 01.9-.9h16.2a.9.9 0 110 1.8H6.9a.9.9 0 01-.9-.9z" fill="#222"></path>
                <rect x="6" y="21" width="18" height="1.8" rx="0.9" fill="#222"></rect>
              </svg>
            </button>
          </div>
        </div>
        <nav className="SportsHeader_sports_lnb__QSQ0i">
          <ul className="SportsHeader_lnb_list__PE51p" style={{ userSelect: "none", WebkitUserDrag: "none", touchAction: "auto" }}>
            <li className="lnb_item" data-section-id="shome">
              <a href="/index" className="SportsHeader_link_lnb__eMjAa" aria-current="true"><span className="SportsHeader_menu__cIdjU">홈</span></a>
            </li>
            <li className="lnb_item" data-section-id="kbaseball">
              <a href="/kbaseball/index" className="SportsHeader_link_lnb__eMjAa" aria-current="false"><span className="SportsHeader_menu__cIdjU">야구</span></a>
            </li>
            <li className="lnb_item" data-section-id="wbaseball">
              <a href="/wbaseball/index" className="SportsHeader_link_lnb__eMjAa" aria-current="false"><span className="SportsHeader_menu__cIdjU">해외야구</span></a>
            </li>
            <li className="lnb_item" data-section-id="kfootball">
              <a href="/kfootball/index" className="SportsHeader_link_lnb__eMjAa" aria-current="false"><span className="SportsHeader_menu__cIdjU">축구</span></a>
            </li>
            <li className="lnb_item" data-section-id="wfootball">
              <a href="/wfootball/index" className="SportsHeader_link_lnb__eMjAa" aria-current="false"><span className="SportsHeader_menu__cIdjU">해외축구</span></a>
            </li>
            <li className="lnb_item" data-section-id="basketball">
              <a href="/basketball/index" className="SportsHeader_link_lnb__eMjAa" aria-current="false"><span className="SportsHeader_menu__cIdjU">농구</span></a>
            </li>
            <li className="lnb_item" data-section-id="volleyball">
              <a href="/volleyball/index" className="SportsHeader_link_lnb__eMjAa" aria-current="false"><span className="SportsHeader_menu__cIdjU">배구</span></a>
            </li>
            <li className="lnb_item" data-section-id="golf">
              <a href="/golf/index" className="SportsHeader_link_lnb__eMjAa" aria-current="false"><span className="SportsHeader_menu__cIdjU">N골프</span></a>
            </li>
            <li className="lnb_item" data-section-id="general">
              <a href="/general/index" className="SportsHeader_link_lnb__eMjAa" aria-current="false"><span className="SportsHeader_menu__cIdjU">일반</span></a>
            </li>
            <li className="lnb_item" data-section-id="esports">
              <a href="https://game.naver.com/esports" className="SportsHeader_link_lnb__eMjAa"><span className="SportsHeader_menu__cIdjU">e스포츠</span></a>
            </li>
            <li className="lnb_item" data-section-id="outdoor">
              <a href="/outdoor/index" className="SportsHeader_link_lnb__eMjAa" aria-current="false"><span className="SportsHeader_menu__cIdjU">아웃도어</span></a>
            </li>
          </ul>
        </nav>
        <nav id="sports_lnb_sub" className="SportsHeader_sports_lnb_sub__76rVx">
          <ul className="SportsHeader_lnb_sub_list__LGCpG" style={{ userSelect: "none", WebkitUserDrag: "none", touchAction: "auto" }}>
            <li className="SportsHeader_lnb_sub_item__DAuYt" data-menu-id="scoreboard"><a href="/scoreboard/index" className="SportsHeader_link_lnb_sub__cs0qI"><span className="SportsHeader_menu__cIdjU">오늘의 경기</span></a></li>
            <li className="SportsHeader_lnb_sub_item__DAuYt" data-menu-id="predict"><a href="/predict?tab=today&amp;date=2025-08-25" className="SportsHeader_link_lnb_sub__cs0qI"><span className="SportsHeader_menu__cIdjU">승부예측</span></a></li>
            <li className="SportsHeader_lnb_sub_item__DAuYt" data-menu-id="column"><a href="/column/press/columnist?categoryId=ALL" className="SportsHeader_link_lnb_sub__cs0qI"><span className="SportsHeader_menu__cIdjU">연재</span></a></li>
            <li className="SportsHeader_lnb_sub_item__DAuYt" data-menu-id="issuetalk"><a href="/community/issuetalk/index" className="SportsHeader_link_lnb_sub__cs0qI"><span className="SportsHeader_menu__cIdjU">이슈톡</span></a></li>
            <li className="SportsHeader_lnb_sub_item__DAuYt" data-menu-id="ranking"><a href="/ranking/index" className="SportsHeader_link_lnb_sub__cs0qI"><span className="SportsHeader_menu__cIdjU">랭킹</span></a></li>
          </ul>
        </nav>
      </header>
      <div id="content" className="Home_section_home__GqsI9" role="main">
        <div className="Home_spotlight__2bDe+">
          <div className="Home_inner__LH2BJ">
            <div className="Home_group__G+w3j">
              <div id="feed-v2-renderer-root">
                <div className="grid_layout">
                  <div className="grid_item" style={{width:"100%"}}>
                    <div className="comp_home_group Home_comp_headline_news__R8AMZ Home_type_main_pos__wZYRK">
                      <div className="Home_group_title_area__CKWvR">
                        <h3 className="Home_group_title__95UzJ">
                          종합 <span>NOW</span>
                        </h3>
                      </div>
                      <div className="Home_group_content__dH9+i">
                        <ul className="Home_news_list__0CkfL">
                          <li className="Home_news_item__hyocH Home_type_main__O8XAW">
                            <div className="Home_item_content__EOjJp" data-sports-shome-exposure-click-delegate="false">
                              <a href="https://m.sports.naver.com/wfootball/article/139/0002231211" className="Home_link_thumbnail__wt2A7" target="_blank" rel="noopener noreferrer"><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fimgnews.naver.net%2Fimage%2F139%2F2025%2F08%2F24%2F0002231211_001_20250824210310948.jpg%22&type=nf1160_652&service=sports" alt="" width="177" height="177"/><span className="blind">기사엔드 바로가기</span></a>
                              <div className="Home_title_area__Fxfwm">
                                <a href="https://m.sports.naver.com/wfootball/article/139/0002231211" className="Home_link_title__W6Auj" target="_blank" rel="noopener noreferrer">'韓 역대급 괴물 수비' 김민재, 마침내 '차기 거취' 분명해졌다! 獨 1티어 매체, "KIM, 사우디아라비아서 '비상식적 수준 제안' 오지 않는 한 잔류" [속보]</a>
                                <div className="Home_sub_info_area__PlS3O">
                                  <a href="https://media.naver.com/journalist/139/81764" className="Home_link_sub_info__+A94E" target="_blank" rel="noopener noreferrer">
                                    <div className="Home_emblem__t4YRd"><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Fupload%2Fspubs%2FyQG0000139%2Fprofile%2F2025%2F03%2F18%2Fprofile_135952753.PNG%22&type=f78_78&service=sports" alt="" width="20" height="20"/></div>
                                    <div className="Home_emblem__t4YRd Home_type_press__qKgzh"><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fmimgnews.pstatic.net%2Fimage%2Fupload%2Foffice_logo%2F139%2F2025%2F07%2F10%2Flogo_139_100_20250710182020.jpg%22&type=f78_78&service=sports" alt="" width="20" height="20"/></div>
                                    <div className="Home_source__mtYbm">김경태 기자</div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="Home_news_item__hyocH Home_type_sub__4Xmfv">
                            <div className="Home_item_content__EOjJp" data-sports-shome-exposure-click-delegate="false">
                              <a href="https://m.sports.naver.com/kbaseball/article/529/0000072918" className="Home_link_thumbnail__wt2A7" target="_blank" rel="noopener noreferrer"><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fimgnews.naver.net%2Fimage%2F529%2F2025%2F08%2F24%2F0000072918_001_20250824225708338.jpg%22&type=nf353_353&service=sports" alt="" width="177" height="177"/><span className="blind">기사엔드 바로가기</span></a>
                              <div className="Home_title_area__Fxfwm">
                                <a href="https://m.sports.naver.com/kbaseball/article/529/0000072918" className="Home_link_title__W6Auj" target="_blank" rel="noopener noreferrer">동명이인 데이비슨 홈런치고 투수 등판한 날 롯데 12연패 탈출...데이비슨의 저주 이제 끝? [스춘 리뷰]</a>
                                <div className="Home_sub_info_area__PlS3O">
                                  <a href="https://media.naver.com/journalist/529/74513" className="Home_link_sub_info__+A94E" target="_blank" rel="noopener noreferrer">
                                    <div className="Home_emblem__t4YRd"><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Fupload%2Fspubs%2FxOG0000529%2Fprofile%2F2025%2F07%2F26%2Fprofile_122827288.jpeg%22&type=f78_78&service=sports" alt="" width="20" height="20"/></div>
                                    <div className="Home_emblem__t4YRd Home_type_press__qKgzh"><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fmimgnews.pstatic.net%2Fimage%2Fupload%2Foffice_logo%2F529%2F2025%2F08%2F07%2Flogo_529_100_20250807161307.png%22&type=f78_78&service=sports" alt="" width="20" height="20"/></div>
                                    <div className="Home_source__mtYbm">배지헌 기자</div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="Home_news_item__hyocH Home_type_sub__4Xmfv">
                            <div className="Home_item_content__EOjJp" data-sports-shome-exposure-click-delegate="false">
                              <a href="https://m.sports.naver.com/kbaseball/article/529/0000072918" className="Home_link_thumbnail__wt2A7" target="_blank" rel="noopener noreferrer"><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fimgnews.naver.net%2Fimage%2F529%2F2025%2F08%2F24%2F0000072918_001_20250824225708338.jpg%22&type=nf353_353&service=sports" alt="" width="177" height="177"/><span className="blind">기사엔드 바로가기</span></a>
                              <div className="Home_title_area__Fxfwm">
                                <a href="https://m.sports.naver.com/kbaseball/article/529/0000072918" className="Home_link_title__W6Auj" target="_blank" rel="noopener noreferrer">동명이인 데이비슨 홈런치고 투수 등판한 날 롯데 12연패 탈출...데이비슨의 저주 이제 끝? [스춘 리뷰]</a>
                                <div className="Home_sub_info_area__PlS3O">
                                  <a href="https://media.naver.com/journalist/529/74513" className="Home_link_sub_info__+A94E" target="_blank" rel="noopener noreferrer">
                                    <div className="Home_emblem__t4YRd"><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Fupload%2Fspubs%2FxOG0000529%2Fprofile%2F2025%2F07%2F26%2Fprofile_122827288.jpeg%22&type=f78_78&service=sports" alt="" width="20" height="20"/></div>
                                    <div className="Home_emblem__t4YRd Home_type_press__qKgzh"><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fmimgnews.pstatic.net%2Fimage%2Fupload%2Foffice_logo%2F529%2F2025%2F08%2F07%2Flogo_529_100_20250807161307.png%22&type=f78_78&service=sports" alt="" width="20" height="20"/></div>
                                    <div className="Home_source__mtYbm">배지헌 기자</div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="Home_news_item__hyocH Home_type_sub__4Xmfv">
                            <div className="Home_item_content__EOjJp" data-sports-shome-exposure-click-delegate="false">
                              <a href="https://m.sports.naver.com/kbaseball/article/529/0000072918" className="Home_link_thumbnail__wt2A7" target="_blank" rel="noopener noreferrer"><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fimgnews.naver.net%2Fimage%2F529%2F2025%2F08%2F24%2F0000072918_001_20250824225708338.jpg%22&type=nf353_353&service=sports" alt="" width="177" height="177"/><span className="blind">기사엔드 바로가기</span></a>
                              <div className="Home_title_area__Fxfwm">
                                <a href="https://m.sports.naver.com/kbaseball/article/529/0000072918" className="Home_link_title__W6Auj" target="_blank" rel="noopener noreferrer">동명이인 데이비슨 홈런치고 투수 등판한 날 롯데 12연패 탈출...데이비슨의 저주 이제 끝? [스춘 리뷰]</a>
                                <div className="Home_sub_info_area__PlS3O">
                                  <a href="https://media.naver.com/journalist/529/74513" className="Home_link_sub_info__+A94E" target="_blank" rel="noopener noreferrer">
                                    <div className="Home_emblem__t4YRd"><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Fupload%2Fspubs%2FxOG0000529%2Fprofile%2F2025%2F07%2F26%2Fprofile_122827288.jpeg%22&type=f78_78&service=sports" alt="" width="20" height="20"/></div>
                                    <div className="Home_emblem__t4YRd Home_type_press__qKgzh"><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fmimgnews.pstatic.net%2Fimage%2Fupload%2Foffice_logo%2F529%2F2025%2F08%2F07%2Flogo_529_100_20250807161307.png%22&type=f78_78&service=sports" alt="" width="20" height="20"/></div>
                                    <div className="Home_source__mtYbm">배지헌 기자</div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="Home_news_item__hyocH Home_type_sub__4Xmfv">
                            <div className="Home_item_content__EOjJp" data-sports-shome-exposure-click-delegate="false">
                              <a href="https://m.sports.naver.com/kbaseball/article/529/0000072918" className="Home_link_thumbnail__wt2A7" target="_blank" rel="noopener noreferrer"><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fimgnews.naver.net%2Fimage%2F529%2F2025%2F08%2F24%2F0000072918_001_20250824225708338.jpg%22&type=nf353_353&service=sports" alt="" width="177" height="177"/><span className="blind">기사엔드 바로가기</span></a>
                              <div className="Home_title_area__Fxfwm">
                                <a href="https://m.sports.naver.com/kbaseball/article/529/0000072918" className="Home_link_title__W6Auj" target="_blank" rel="noopener noreferrer">동명이인 데이비슨 홈런치고 투수 등판한 날 롯데 12연패 탈출...데이비슨의 저주 이제 끝? [스춘 리뷰]</a>
                                <div className="Home_sub_info_area__PlS3O">
                                  <a href="https://media.naver.com/journalist/529/74513" className="Home_link_sub_info__+A94E" target="_blank" rel="noopener noreferrer">
                                    <div className="Home_emblem__t4YRd"><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Fupload%2Fspubs%2FxOG0000529%2Fprofile%2F2025%2F07%2F26%2Fprofile_122827288.jpeg%22&type=f78_78&service=sports" alt="" width="20" height="20"/></div>
                                    <div className="Home_emblem__t4YRd Home_type_press__qKgzh"><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fmimgnews.pstatic.net%2Fimage%2Fupload%2Foffice_logo%2F529%2F2025%2F08%2F07%2Flogo_529_100_20250807161307.png%22&type=f78_78&service=sports" alt="" width="20" height="20"/></div>
                                    <div className="Home_source__mtYbm">배지헌 기자</div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="Home_news_item__hyocH Home_type_sub__4Xmfv">
                            <div className="Home_item_content__EOjJp" data-sports-shome-exposure-click-delegate="false">
                              <a href="https://m.sports.naver.com/kbaseball/article/529/0000072918" className="Home_link_thumbnail__wt2A7" target="_blank" rel="noopener noreferrer"><img src="https://dthumb-phinf.pstatic.net/?src=%22http%3A%2F%2Fimgnews.naver.net%2Fimage%2F529%2F2025%2F08%2F24%2F0000072918_001_20250824225708338.jpg%22&type=nf353_353&service=sports" alt="" width="177" height="177"/><span className="blind">기사엔드 바로가기</span></a>
                              <div className="Home_title_area__Fxfwm">
                                <a href="https://m.sports.naver.com/kbaseball/article/529/0000072918" className="Home_link_title__W6Auj" target="_blank" rel="noopener noreferrer">동명이인 데이비슨 홈런치고 투수 등판한 날 롯데 12연패 탈출...데이비슨의 저주 이제 끝? [스춘 리뷰]</a>
                                <div className="Home_sub_info_area__PlS3O">
                                  <a href="https://media.naver.com/journalist/529/74513" className="Home_link_sub_info__+A94E" target="_blank" rel="noopener noreferrer">
                                    <div className="Home_emblem__t4YRd"><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Fupload%2Fspubs%2FxOG0000529%2Fprofile%2F2025%2F07%2F26%2Fprofile_122827288.jpeg%22&type=f78_78&service=sports" alt="" width="20" height="20"/></div>
                                    <div className="Home_emblem__t4YRd Home_type_press__qKgzh"><img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fmimgnews.pstatic.net%2Fimage%2Fupload%2Foffice_logo%2F529%2F2025%2F08%2F07%2Flogo_529_100_20250807161307.png%22&type=f78_78&service=sports" alt="" width="20" height="20"/></div>
                                    <div className="Home_source__mtYbm">배지헌 기자</div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>
</body>
  );
}

export default App;