import '../css/App.scss';

function App() {
  return (
    <div className="HOME">
      <div id="root">
        <div className="u-skip"><a href="#content">본문 바로가기</a></div>
        <div id="wrap">
          <header className="EntertainHeader_entertain_header">
            <div className="EntertainHeader_entertain_gnb">
              <h1 className="EntertainHeader_logo_area">
                <a href="https://m.naver.com" className="EntertainHeader_link_naver">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon_naver" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M20 20h-6.146L6.44 9.296V20H0V0h6.147l7.414 10.704V0h6.44v20z" fill="#3CD14B"></path></svg><span className="blind">NAVER</span>
                </a>
                <a href="/home" className="EntertainHeader_link_entertain">
                  <svg width="35" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" className="EntertainHeader_icon_entertain__FJFKC" aria-hidden="true"><path d="M14.32.48h2.42V14.3h-2.42V.48zm-3.96 6.5H8.6c-.2 3.04-1.86 4.52-4.04 4.52-2.32 0-4.1-1.68-4.1-5.14v-.3c0-3.5 1.78-5.18 4.1-5.18 2 0 3.58 1.26 3.96 3.86h1.84V.68h2.34V13.7h-2.34V6.98zm-7.56-.9v.26c0 1.92.8 2.92 1.76 2.92.94 0 1.74-1 1.74-2.92v-.26c0-1.96-.8-2.96-1.74-2.96-.96 0-1.76 1-1.76 2.96zm3.46 7.04v3.72H17.4v2.32H3.7v-6.04h2.56zm26.025-5.7V.48h2.56v18.68h-2.56v-9.4h-2.68V7.42h2.68zm-10.18 6.86h1.68c2.02 0 4.26-.18 6.4-.52l.3 2.2c-2.02.4-4.54.62-7.14.62h-3.78V1.76h9.36v2.3h-6.82v3.88h6.64v2.24h-6.64v4.1z" fill="#222"></path></svg><span className="blind">엔터</span>
                </a>
              </h1>
              <div className="EntertainHeader_service_area"><a href="https://news.naver.com" className="EntertainHeader_link_service__news">뉴스</a><a href="https://sports.naver.com" className="EntertainHeader_link_service__sports">스포츠</a></div>
              <div className="EntertainHeader_tool_area">
                <a href="https://talks.naver.com/entertain?frm=pcgnb" className="EntertainHeader_link_talk__UkR3+">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="EntertainHeader_icon_talk__TEUXv" aria-hidden="true"><path d="M10.116 23.698h0a21.323 21.323 0 01-4.034-.971l-.02-.007-.019-.005c-.31-.093-.483-.302-.544-.542-.063-.246-.02-.582.25-.908l.009-.01.008-.01c.188-.242.352-.46.507-.74.152-.274.28-.583.437-1.008.18-.488.157-1.02-.066-1.486h0l-.003-.004a8.66 8.66 0 011.77-10c3.513-3.395 9.11-3.364 12.593.071l.277.274c3.14 3.575 2.978 9.036-.428 12.425 0 0 0 0 0 0h0l-.002.002c-1.73 1.645-3.952 2.776-6.353 2.94-1.496.1-2.927.141-4.38-.02 0 0 0 0 0 0v-.001h-.002zm11.006-2.636h0z" stroke="#222" strokeWidth="1.8"></path><ellipse cx="18.306" cy="14.55" rx="1.084" ry="1.097" fill="#222"></ellipse><ellipse cx="14.693" cy="14.55" rx="1.084" ry="1.097" fill="#222"></ellipse><ellipse cx="11.078" cy="14.55" rx="1.084" ry="1.097" fill="#222"></ellipse></svg><span className="blind">네이버톡</span>
                </a>
                <a href="https://m.entertain.naver.com/search" className="EntertainHeader_link_search__DPRxP">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="EntertainHeader_icon_search__7T-Zk" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M17.863 17.863a.9.9 0 011.273 0l4.334 4.334a.9.9 0 01-1.273 1.272l-4.334-4.333a.9.9 0 010-1.273z" fill="#222"></path><path fillRule="evenodd" clipRule="evenodd" d="M13.25 19.7a6.45 6.45 0 100-12.9 6.45 6.45 0 000 12.9zm0 1.8a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5z" fill="#222"></path></svg><span className="blind">검색</span>
                </a>
              </div>
            </div>
            <nav className="EntertainHeader_entertain_lnb">
              <div className="EntertainHeader_entertain_lnb_inner">
                <ul className="EntertainHeader_lnb_list">
                  <li className="lnb_item"><a href="https://m.entertain.naver.com/home" className="EntertainHeader_link_lnb__ERJJW" aria-current="true"><span className="EntertainHeader_menu__xa2cX">홈</span></a></li>
                  <li className="lnb_item"><a href="https://m.entertain.naver.com/drama" className="EntertainHeader_link_lnb__ERJJW" aria-current="false"><span className="EntertainHeader_menu__xa2cX">드라마</span></a></li>
                  <li className="lnb_item"><a href="https://m.entertain.naver.com/movie" className="EntertainHeader_link_lnb__ERJJW" aria-current="false"><span className="EntertainHeader_menu__xa2cX">영화</span></a></li>
                  <li className="lnb_item"><a href="https://m.entertain.naver.com/music" className="EntertainHeader_link_lnb__ERJJW" aria-current="false"><span className="EntertainHeader_menu__xa2cX">뮤직</span></a></li>
                  <li className="lnb_item"><a href="https://m.entertain.naver.com/relationship" className="EntertainHeader_link_lnb__ERJJW" aria-current="false"><span className="EntertainHeader_menu__xa2cX">연애</span></a></li>
                  <li className="lnb_item"><a href="https://m.entertain.naver.com/photo" className="EntertainHeader_link_lnb__ERJJW" aria-current="false"><span className="EntertainHeader_menu__xa2cX">포토</span></a></li>
                  <li className="lnb_item"><a href="https://m.entertain.naver.com/ranking" className="EntertainHeader_link_lnb__ERJJW" aria-current="false"><span className="EntertainHeader_menu__xa2cX">랭킹</span></a></li>
                  <li className="lnb_item"><a href="https://m.entertain.naver.com/now" className="EntertainHeader_link_lnb__ERJJW" aria-current="false"><span className="EntertainHeader_menu__xa2cX">최신뉴스</span></a></li>
                  <li className="lnb_item"><a href="https://m.entertain.naver.com/series" className="EntertainHeader_link_lnb__ERJJW" aria-current="false"><span className="EntertainHeader_menu__xa2cX">연재</span></a></li>
                </ul>
              </div>
            </nav>
          </header>
          <div id="content" className="Home_selection_home__GqsI9" role="main">
            <div id="feed-v2-renderer-root">
              <div className="grid_layout">
                <div className="grid_item" style={{ width: "100%" }}>
                  <div className="Home_comp_home_group__FGHiN Home_comp_main_ranking_40kof"></div>
                  <div className="Home_group_title_area__CKWvR">
                    <h3 className="Home_group_title__95UzJ">오늘의 엔터 랭킹</h3>
                    <div className="Home_group_info_AQEXP">
                      <button type="button" className="Home_button_tooltip__0A7bb" aria-describedby="wa_ranking_tooltip" aria-pressed="false">
                        <svg viewBox="0 0 15 17" width={15} height={17} xmlns="http://www.w3.org/2000/svg" className="Home_icon_tooltip__8kr-S" aria-hidden="true"><path d="M7.5 14.3a6.3 6.3 0 100-12.6 6.3 6.3 0 000 12.6zm0 1.2a7.5 7.5 0 100-15 7.5 7.5 0 000 15zm.8-10.623a.8.8 0 11-1.6 0 .8.8 0 011.6 0zm-.255 1.7H6.954v5.538h1.09V6.577z" clipRule="evenodd" fill="#929294" fillRule="evenodd"></path></svg><span className="blind">안내</span>
                      </button>
                      <div className="Home_layer_tooltip__+4qES">
                        <p className="Home_text__F6rex" role="tooltip" id="wa_ranking_tooltip">뉴스 : 기사 조회수 기준<br />영상 : 1시간 전 재생수 + 재생시간 기준<br />VIBE : 오늘 TOP 100 차트 기준</p>
                        <button type="button" className="Home_button_close__GWBr8">
                          <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon_close" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M16.937 3.687a.5.5 0 10-.707-.707L9.958 9.25 3.77 3.063a.5.5 0 00-.708.707l6.19 6.188-6.273 6.272a.5.5 0 10.708.707l6.271-6.272 6.355 6.355a.5.5 0 10.707-.707l-6.355-6.355 6.272-6.271z" fill="#929294"></path></svg><span className="blind">안내 레이어 닫기</span>
                        </button>
                      </div>
                    </div>
                  </div>
                <div className="Home_group_content__dH9+i">
                  <div className="Home_main_ranking_tab__7MJ6f" role="tablist">
                    <button role="tab" type="button" class="Home_button_tab__ku0ce" aria-selected="true">뉴스</button>
                    <button role="tab" type="button" class="Home_button_tab__ku0ce" aria-selected="false">영상</button>
                    <button role="tab" type="button" class="Home_button_tab__ku0ce" aria-selected="false">뮤직</button>
                  </div>
                  <div className="main_ranking_tab_panel" role="tabpanel">
                    <ol className="Home_main_ranking_list__MJJ8w">
                      <li className="Home_main_ranking_item__XwCz8">
                        <a class="Home_link_ranking__n5jPx" data-enter-home-exposure-click-delegate="false">
                          <div class="Home_thumbnail__cLneq">
                            <div class="Home_image__NAsCq">
                              <img src="https://s.pstatic.net/dthumb.phinf/?src=https://mimgnews.pstatic.net/image/origin/311/2025/08/15/1904920.jpg&amp;type=ff353_353&amp;service=enter" alt="" width="178" height="178"/>
                            </div>
                            <div class="Home_rank__-0JsA">
                              <svg viewBox="0 0 60 58" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="Home_icon_number__IHw7c">
                                <mask id="mainRank1_svg__a" x="3.5" y="14" width="29" height="45" fill="#000" maskUnits="userSpaceOnUse">
                                  <path fill="#fff" d="M3.5 14h29v45h-29z"></path>
                                  <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z"></path>
                                </mask>
                                <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z" fill="#1C1C1C"></path>
                                <path d="M10.578 58l-.978-.208L9.343 59h1.235v-1zm6.914-32.49l.978.208.257-1.208h-1.235v1zm-.205 0v-1h-.274l-.236.14.51.86zm-12.07 7.148l-.979-.206-.468 2.225 1.957-1.158-.51-.86zm2.021-9.609l-.51-.86-.378.224-.09.43.978.206zm12.334-7.324v-1h-.274l-.236.14.51.86zm10.723 0l.979.208.257-1.208h-1.235v1zM21.301 58v1h.81l.168-.792-.978-.208zm-9.744.208l6.914-32.49-1.956-.416L9.6 57.792l1.956.416zm5.936-33.698h-.205v2h.205v-2zm-.715.14l-12.07 7.148 1.02 1.72 12.07-7.148-1.02-1.72zM6.196 32.863l2.022-9.61-1.958-.41-2.021 9.608 1.957.412zM7.75 23.91l12.334-7.324-1.022-1.72-12.334 7.324 1.022 1.72zm11.823-7.184h10.723v-2H19.573v2zm9.744-1.208l-8.994 42.275 1.956.416 8.994-42.275-1.956-.416zM21.301 57H10.578v2h10.723v-2z" fill="#fff" mask="url(#mainRank1_svg__a)"></path>
                              </svg>
                              <span class="blind">1위
                              </span>
                            </div>
                          </div>
                          <div class="Home_info_area__H6Gwh">
                            <div class="Home_title__p5PQs">한가인, '눈·코' 똑 닮은 할아버지 최초 공개…"지금으로 치면 꽃미남" (자유부인)[종합]</div>
                            <div class="Home_press__n6JUb">엑스포츠뉴스</div>
                          </div>
                        </a>
                      </li>
                      <li className="Home_main_ranking_item__XwCz8">
                        <a class="Home_link_ranking__n5jPx" data-enter-home-exposure-click-delegate="false">
                          <div class="Home_thumbnail__cLneq">
                            <div class="Home_image__NAsCq">
                              <img src="https://s.pstatic.net/dthumb.phinf/?src=https://mimgnews.pstatic.net/image/origin/311/2025/08/15/1904920.jpg&amp;type=ff353_353&amp;service=enter" alt="" width="178" height="178"/>
                            </div>
                            <div class="Home_rank__-0JsA">
                              <svg viewBox="0 0 60 58" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="Home_icon_number__IHw7c">
                                <mask id="mainRank1_svg__a" x="3.5" y="14" width="29" height="45" fill="#000" maskUnits="userSpaceOnUse">
                                  <path fill="#fff" d="M3.5 14h29v45h-29z"></path>
                                  <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z"></path>
                                </mask>
                                <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z" fill="#1C1C1C"></path>
                                <path d="M10.578 58l-.978-.208L9.343 59h1.235v-1zm6.914-32.49l.978.208.257-1.208h-1.235v1zm-.205 0v-1h-.274l-.236.14.51.86zm-12.07 7.148l-.979-.206-.468 2.225 1.957-1.158-.51-.86zm2.021-9.609l-.51-.86-.378.224-.09.43.978.206zm12.334-7.324v-1h-.274l-.236.14.51.86zm10.723 0l.979.208.257-1.208h-1.235v1zM21.301 58v1h.81l.168-.792-.978-.208zm-9.744.208l6.914-32.49-1.956-.416L9.6 57.792l1.956.416zm5.936-33.698h-.205v2h.205v-2zm-.715.14l-12.07 7.148 1.02 1.72 12.07-7.148-1.02-1.72zM6.196 32.863l2.022-9.61-1.958-.41-2.021 9.608 1.957.412zM7.75 23.91l12.334-7.324-1.022-1.72-12.334 7.324 1.022 1.72zm11.823-7.184h10.723v-2H19.573v2zm9.744-1.208l-8.994 42.275 1.956.416 8.994-42.275-1.956-.416zM21.301 57H10.578v2h10.723v-2z" fill="#fff" mask="url(#mainRank1_svg__a)"></path>
                              </svg>
                              <span class="blind">1위
                              </span>
                            </div>
                          </div>
                          <div class="Home_info_area__H6Gwh">
                            <div class="Home_title__p5PQs">한가인, '눈·코' 똑 닮은 할아버지 최초 공개…"지금으로 치면 꽃미남" (자유부인)[종합]</div>
                            <div class="Home_press__n6JUb">엑스포츠뉴스</div>
                          </div>
                        </a>
                      </li>
                      <li className="Home_main_ranking_item__XwCz8">
                        <a class="Home_link_ranking__n5jPx" data-enter-home-exposure-click-delegate="false">
                          <div class="Home_thumbnail__cLneq">
                            <div class="Home_image__NAsCq">
                              <img src="https://s.pstatic.net/dthumb.phinf/?src=https://mimgnews.pstatic.net/image/origin/311/2025/08/15/1904920.jpg&amp;type=ff353_353&amp;service=enter" alt="" width="178" height="178"/>
                            </div>
                            <div class="Home_rank__-0JsA">
                              <svg viewBox="0 0 60 58" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="Home_icon_number__IHw7c">
                                <mask id="mainRank1_svg__a" x="3.5" y="14" width="29" height="45" fill="#000" maskUnits="userSpaceOnUse">
                                  <path fill="#fff" d="M3.5 14h29v45h-29z"></path>
                                  <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z"></path>
                                </mask>
                                <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z" fill="#1C1C1C"></path>
                                <path d="M10.578 58l-.978-.208L9.343 59h1.235v-1zm6.914-32.49l.978.208.257-1.208h-1.235v1zm-.205 0v-1h-.274l-.236.14.51.86zm-12.07 7.148l-.979-.206-.468 2.225 1.957-1.158-.51-.86zm2.021-9.609l-.51-.86-.378.224-.09.43.978.206zm12.334-7.324v-1h-.274l-.236.14.51.86zm10.723 0l.979.208.257-1.208h-1.235v1zM21.301 58v1h.81l.168-.792-.978-.208zm-9.744.208l6.914-32.49-1.956-.416L9.6 57.792l1.956.416zm5.936-33.698h-.205v2h.205v-2zm-.715.14l-12.07 7.148 1.02 1.72 12.07-7.148-1.02-1.72zM6.196 32.863l2.022-9.61-1.958-.41-2.021 9.608 1.957.412zM7.75 23.91l12.334-7.324-1.022-1.72-12.334 7.324 1.022 1.72zm11.823-7.184h10.723v-2H19.573v2zm9.744-1.208l-8.994 42.275 1.956.416 8.994-42.275-1.956-.416zM21.301 57H10.578v2h10.723v-2z" fill="#fff" mask="url(#mainRank1_svg__a)"></path>
                              </svg>
                              <span class="blind">1위
                              </span>
                            </div>
                          </div>
                          <div class="Home_info_area__H6Gwh">
                            <div class="Home_title__p5PQs">한가인, '눈·코' 똑 닮은 할아버지 최초 공개…"지금으로 치면 꽃미남" (자유부인)[종합]</div>
                            <div class="Home_press__n6JUb">엑스포츠뉴스</div>
                          </div>
                        </a>
                      </li>
                      <li className="Home_main_ranking_item__XwCz8">
                        <a class="Home_link_ranking__n5jPx" data-enter-home-exposure-click-delegate="false">
                          <div class="Home_thumbnail__cLneq">
                            <div class="Home_image__NAsCq">
                              <img src="https://s.pstatic.net/dthumb.phinf/?src=https://mimgnews.pstatic.net/image/origin/311/2025/08/15/1904920.jpg&amp;type=ff353_353&amp;service=enter" alt="" width="178" height="178"/>
                            </div>
                            <div class="Home_rank__-0JsA">
                              <svg viewBox="0 0 60 58" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="Home_icon_number__IHw7c">
                                <mask id="mainRank1_svg__a" x="3.5" y="14" width="29" height="45" fill="#000" maskUnits="userSpaceOnUse">
                                  <path fill="#fff" d="M3.5 14h29v45h-29z"></path>
                                  <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z"></path>
                                </mask>
                                <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z" fill="#1C1C1C"></path>
                                <path d="M10.578 58l-.978-.208L9.343 59h1.235v-1zm6.914-32.49l.978.208.257-1.208h-1.235v1zm-.205 0v-1h-.274l-.236.14.51.86zm-12.07 7.148l-.979-.206-.468 2.225 1.957-1.158-.51-.86zm2.021-9.609l-.51-.86-.378.224-.09.43.978.206zm12.334-7.324v-1h-.274l-.236.14.51.86zm10.723 0l.979.208.257-1.208h-1.235v1zM21.301 58v1h.81l.168-.792-.978-.208zm-9.744.208l6.914-32.49-1.956-.416L9.6 57.792l1.956.416zm5.936-33.698h-.205v2h.205v-2zm-.715.14l-12.07 7.148 1.02 1.72 12.07-7.148-1.02-1.72zM6.196 32.863l2.022-9.61-1.958-.41-2.021 9.608 1.957.412zM7.75 23.91l12.334-7.324-1.022-1.72-12.334 7.324 1.022 1.72zm11.823-7.184h10.723v-2H19.573v2zm9.744-1.208l-8.994 42.275 1.956.416 8.994-42.275-1.956-.416zM21.301 57H10.578v2h10.723v-2z" fill="#fff" mask="url(#mainRank1_svg__a)"></path>
                              </svg>
                              <span class="blind">1위
                              </span>
                            </div>
                          </div>
                          <div class="Home_info_area__H6Gwh">
                            <div class="Home_title__p5PQs">한가인, '눈·코' 똑 닮은 할아버지 최초 공개…"지금으로 치면 꽃미남" (자유부인)[종합]</div>
                            <div class="Home_press__n6JUb">엑스포츠뉴스</div>
                          </div>
                        </a>
                      </li>
                      <li className="Home_main_ranking_item__XwCz8">
                        <a class="Home_link_ranking__n5jPx" data-enter-home-exposure-click-delegate="false">
                          <div class="Home_thumbnail__cLneq">
                            <div class="Home_image__NAsCq">
                              <img src="https://s.pstatic.net/dthumb.phinf/?src=https://mimgnews.pstatic.net/image/origin/311/2025/08/15/1904920.jpg&amp;type=ff353_353&amp;service=enter" alt="" width="178" height="178"/>
                            </div>
                            <div class="Home_rank__-0JsA">
                              <svg viewBox="0 0 60 58" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="Home_icon_number__IHw7c">
                                <mask id="mainRank1_svg__a" x="3.5" y="14" width="29" height="45" fill="#000" maskUnits="userSpaceOnUse">
                                  <path fill="#fff" d="M3.5 14h29v45h-29z"></path>
                                  <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z"></path>
                                </mask>
                                <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z" fill="#1C1C1C"></path>
                                <path d="M10.578 58l-.978-.208L9.343 59h1.235v-1zm6.914-32.49l.978.208.257-1.208h-1.235v1zm-.205 0v-1h-.274l-.236.14.51.86zm-12.07 7.148l-.979-.206-.468 2.225 1.957-1.158-.51-.86zm2.021-9.609l-.51-.86-.378.224-.09.43.978.206zm12.334-7.324v-1h-.274l-.236.14.51.86zm10.723 0l.979.208.257-1.208h-1.235v1zM21.301 58v1h.81l.168-.792-.978-.208zm-9.744.208l6.914-32.49-1.956-.416L9.6 57.792l1.956.416zm5.936-33.698h-.205v2h.205v-2zm-.715.14l-12.07 7.148 1.02 1.72 12.07-7.148-1.02-1.72zM6.196 32.863l2.022-9.61-1.958-.41-2.021 9.608 1.957.412zM7.75 23.91l12.334-7.324-1.022-1.72-12.334 7.324 1.022 1.72zm11.823-7.184h10.723v-2H19.573v2zm9.744-1.208l-8.994 42.275 1.956.416 8.994-42.275-1.956-.416zM21.301 57H10.578v2h10.723v-2z" fill="#fff" mask="url(#mainRank1_svg__a)"></path>
                              </svg>
                              <span class="blind">1위
                              </span>
                            </div>
                          </div>
                          <div class="Home_info_area__H6Gwh">
                            <div class="Home_title__p5PQs">한가인, '눈·코' 똑 닮은 할아버지 최초 공개…"지금으로 치면 꽃미남" (자유부인)[종합]</div>
                            <div class="Home_press__n6JUb">엑스포츠뉴스</div>
                          </div>
                        </a>
                      </li>
                      <li className="Home_main_ranking_item__XwCz8">
                        <a class="Home_link_ranking__n5jPx" data-enter-home-exposure-click-delegate="false">
                          <div class="Home_thumbnail__cLneq">
                            <div class="Home_image__NAsCq">
                              <img src="https://s.pstatic.net/dthumb.phinf/?src=https://mimgnews.pstatic.net/image/origin/311/2025/08/15/1904920.jpg&amp;type=ff353_353&amp;service=enter" alt="" width="178" height="178"/>
                            </div>
                            <div class="Home_rank__-0JsA">
                              <svg viewBox="0 0 60 58" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="Home_icon_number__IHw7c">
                                <mask id="mainRank1_svg__a" x="3.5" y="14" width="29" height="45" fill="#000" maskUnits="userSpaceOnUse">
                                  <path fill="#fff" d="M3.5 14h29v45h-29z"></path>
                                  <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z"></path>
                                </mask>
                                <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z" fill="#1C1C1C"></path>
                                <path d="M10.578 58l-.978-.208L9.343 59h1.235v-1zm6.914-32.49l.978.208.257-1.208h-1.235v1zm-.205 0v-1h-.274l-.236.14.51.86zm-12.07 7.148l-.979-.206-.468 2.225 1.957-1.158-.51-.86zm2.021-9.609l-.51-.86-.378.224-.09.43.978.206zm12.334-7.324v-1h-.274l-.236.14.51.86zm10.723 0l.979.208.257-1.208h-1.235v1zM21.301 58v1h.81l.168-.792-.978-.208zm-9.744.208l6.914-32.49-1.956-.416L9.6 57.792l1.956.416zm5.936-33.698h-.205v2h.205v-2zm-.715.14l-12.07 7.148 1.02 1.72 12.07-7.148-1.02-1.72zM6.196 32.863l2.022-9.61-1.958-.41-2.021 9.608 1.957.412zM7.75 23.91l12.334-7.324-1.022-1.72-12.334 7.324 1.022 1.72zm11.823-7.184h10.723v-2H19.573v2zm9.744-1.208l-8.994 42.275 1.956.416 8.994-42.275-1.956-.416zM21.301 57H10.578v2h10.723v-2z" fill="#fff" mask="url(#mainRank1_svg__a)"></path>
                              </svg>
                              <span class="blind">1위
                              </span>
                            </div>
                          </div>
                          <div class="Home_info_area__H6Gwh">
                            <div class="Home_title__p5PQs">한가인, '눈·코' 똑 닮은 할아버지 최초 공개…"지금으로 치면 꽃미남" (자유부인)[종합]</div>
                            <div class="Home_press__n6JUb">엑스포츠뉴스</div>
                          </div>
                        </a>
                      </li>
                      <li className="Home_main_ranking_item__XwCz8">
                        <a class="Home_link_ranking__n5jPx" data-enter-home-exposure-click-delegate="false">
                          <div class="Home_thumbnail__cLneq">
                            <div class="Home_image__NAsCq">
                              <img src="https://s.pstatic.net/dthumb.phinf/?src=https://mimgnews.pstatic.net/image/origin/311/2025/08/15/1904920.jpg&amp;type=ff353_353&amp;service=enter" alt="" width="178" height="178"/>
                            </div>
                            <div class="Home_rank__-0JsA">
                              <svg viewBox="0 0 60 58" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="Home_icon_number__IHw7c">
                                <mask id="mainRank1_svg__a" x="3.5" y="14" width="29" height="45" fill="#000" maskUnits="userSpaceOnUse">
                                  <path fill="#fff" d="M3.5 14h29v45h-29z"></path>
                                  <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z"></path>
                                </mask>
                                <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z" fill="#1C1C1C"></path>
                                <path d="M10.578 58l-.978-.208L9.343 59h1.235v-1zm6.914-32.49l.978.208.257-1.208h-1.235v1zm-.205 0v-1h-.274l-.236.14.51.86zm-12.07 7.148l-.979-.206-.468 2.225 1.957-1.158-.51-.86zm2.021-9.609l-.51-.86-.378.224-.09.43.978.206zm12.334-7.324v-1h-.274l-.236.14.51.86zm10.723 0l.979.208.257-1.208h-1.235v1zM21.301 58v1h.81l.168-.792-.978-.208zm-9.744.208l6.914-32.49-1.956-.416L9.6 57.792l1.956.416zm5.936-33.698h-.205v2h.205v-2zm-.715.14l-12.07 7.148 1.02 1.72 12.07-7.148-1.02-1.72zM6.196 32.863l2.022-9.61-1.958-.41-2.021 9.608 1.957.412zM7.75 23.91l12.334-7.324-1.022-1.72-12.334 7.324 1.022 1.72zm11.823-7.184h10.723v-2H19.573v2zm9.744-1.208l-8.994 42.275 1.956.416 8.994-42.275-1.956-.416zM21.301 57H10.578v2h10.723v-2z" fill="#fff" mask="url(#mainRank1_svg__a)"></path>
                              </svg>
                              <span class="blind">1위
                              </span>
                            </div>
                          </div>
                          <div class="Home_info_area__H6Gwh">
                            <div class="Home_title__p5PQs">한가인, '눈·코' 똑 닮은 할아버지 최초 공개…"지금으로 치면 꽃미남" (자유부인)[종합]</div>
                            <div class="Home_press__n6JUb">엑스포츠뉴스</div>
                          </div>
                        </a>
                      </li>
                      <li className="Home_main_ranking_item__XwCz8">
                        <a class="Home_link_ranking__n5jPx" data-enter-home-exposure-click-delegate="false">
                          <div class="Home_thumbnail__cLneq">
                            <div class="Home_image__NAsCq">
                              <img src="https://s.pstatic.net/dthumb.phinf/?src=https://mimgnews.pstatic.net/image/origin/311/2025/08/15/1904920.jpg&amp;type=ff353_353&amp;service=enter" alt="" width="178" height="178"/>
                            </div>
                            <div class="Home_rank__-0JsA">
                              <svg viewBox="0 0 60 58" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="Home_icon_number__IHw7c">
                                <mask id="mainRank1_svg__a" x="3.5" y="14" width="29" height="45" fill="#000" maskUnits="userSpaceOnUse">
                                  <path fill="#fff" d="M3.5 14h29v45h-29z"></path>
                                  <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z"></path>
                                </mask>
                                <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z" fill="#1C1C1C"></path>
                                <path d="M10.578 58l-.978-.208L9.343 59h1.235v-1zm6.914-32.49l.978.208.257-1.208h-1.235v1zm-.205 0v-1h-.274l-.236.14.51.86zm-12.07 7.148l-.979-.206-.468 2.225 1.957-1.158-.51-.86zm2.021-9.609l-.51-.86-.378.224-.09.43.978.206zm12.334-7.324v-1h-.274l-.236.14.51.86zm10.723 0l.979.208.257-1.208h-1.235v1zM21.301 58v1h.81l.168-.792-.978-.208zm-9.744.208l6.914-32.49-1.956-.416L9.6 57.792l1.956.416zm5.936-33.698h-.205v2h.205v-2zm-.715.14l-12.07 7.148 1.02 1.72 12.07-7.148-1.02-1.72zM6.196 32.863l2.022-9.61-1.958-.41-2.021 9.608 1.957.412zM7.75 23.91l12.334-7.324-1.022-1.72-12.334 7.324 1.022 1.72zm11.823-7.184h10.723v-2H19.573v2zm9.744-1.208l-8.994 42.275 1.956.416 8.994-42.275-1.956-.416zM21.301 57H10.578v2h10.723v-2z" fill="#fff" mask="url(#mainRank1_svg__a)"></path>
                              </svg>
                              <span class="blind">1위
                              </span>
                            </div>
                          </div>
                          <div class="Home_info_area__H6Gwh">
                            <div class="Home_title__p5PQs">한가인, '눈·코' 똑 닮은 할아버지 최초 공개…"지금으로 치면 꽃미남" (자유부인)[종합]</div>
                            <div class="Home_press__n6JUb">엑스포츠뉴스</div>
                          </div>
                        </a>
                      </li>
                      <li className="Home_main_ranking_item__XwCz8">
                        <a class="Home_link_ranking__n5jPx" data-enter-home-exposure-click-delegate="false">
                          <div class="Home_thumbnail__cLneq">
                            <div class="Home_image__NAsCq">
                              <img src="https://s.pstatic.net/dthumb.phinf/?src=https://mimgnews.pstatic.net/image/origin/311/2025/08/15/1904920.jpg&amp;type=ff353_353&amp;service=enter" alt="" width="178" height="178"/>
                            </div>
                            <div class="Home_rank__-0JsA">
                              <svg viewBox="0 0 60 58" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="Home_icon_number__IHw7c">
                                <mask id="mainRank1_svg__a" x="3.5" y="14" width="29" height="45" fill="#000" maskUnits="userSpaceOnUse">
                                  <path fill="#fff" d="M3.5 14h29v45h-29z"></path>
                                  <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z"></path>
                                </mask>
                                <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z" fill="#1C1C1C"></path>
                                <path d="M10.578 58l-.978-.208L9.343 59h1.235v-1zm6.914-32.49l.978.208.257-1.208h-1.235v1zm-.205 0v-1h-.274l-.236.14.51.86zm-12.07 7.148l-.979-.206-.468 2.225 1.957-1.158-.51-.86zm2.021-9.609l-.51-.86-.378.224-.09.43.978.206zm12.334-7.324v-1h-.274l-.236.14.51.86zm10.723 0l.979.208.257-1.208h-1.235v1zM21.301 58v1h.81l.168-.792-.978-.208zm-9.744.208l6.914-32.49-1.956-.416L9.6 57.792l1.956.416zm5.936-33.698h-.205v2h.205v-2zm-.715.14l-12.07 7.148 1.02 1.72 12.07-7.148-1.02-1.72zM6.196 32.863l2.022-9.61-1.958-.41-2.021 9.608 1.957.412zM7.75 23.91l12.334-7.324-1.022-1.72-12.334 7.324 1.022 1.72zm11.823-7.184h10.723v-2H19.573v2zm9.744-1.208l-8.994 42.275 1.956.416 8.994-42.275-1.956-.416zM21.301 57H10.578v2h10.723v-2z" fill="#fff" mask="url(#mainRank1_svg__a)"></path>
                              </svg>
                              <span class="blind">1위
                              </span>
                            </div>
                          </div>
                          <div class="Home_info_area__H6Gwh">
                            <div class="Home_title__p5PQs">한가인, '눈·코' 똑 닮은 할아버지 최초 공개…"지금으로 치면 꽃미남" (자유부인)[종합]</div>
                            <div class="Home_press__n6JUb">엑스포츠뉴스</div>
                          </div>
                        </a>
                      </li>
                      <li className="Home_main_ranking_item__XwCz8">
                        <a class="Home_link_ranking__n5jPx" data-enter-home-exposure-click-delegate="false">
                          <div class="Home_thumbnail__cLneq">
                            <div class="Home_image__NAsCq">
                              <img src="https://s.pstatic.net/dthumb.phinf/?src=https://mimgnews.pstatic.net/image/origin/311/2025/08/15/1904920.jpg&amp;type=ff353_353&amp;service=enter" alt="" width="178" height="178"/>
                            </div>
                            <div class="Home_rank__-0JsA">
                              <svg viewBox="0 0 60 58" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="Home_icon_number__IHw7c">
                                <mask id="mainRank1_svg__a" x="3.5" y="14" width="29" height="45" fill="#000" maskUnits="userSpaceOnUse">
                                  <path fill="#fff" d="M3.5 14h29v45h-29z"></path>
                                  <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z"></path>
                                </mask>
                                <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z" fill="#1C1C1C"></path>
                                <path d="M10.578 58l-.978-.208L9.343 59h1.235v-1zm6.914-32.49l.978.208.257-1.208h-1.235v1zm-.205 0v-1h-.274l-.236.14.51.86zm-12.07 7.148l-.979-.206-.468 2.225 1.957-1.158-.51-.86zm2.021-9.609l-.51-.86-.378.224-.09.43.978.206zm12.334-7.324v-1h-.274l-.236.14.51.86zm10.723 0l.979.208.257-1.208h-1.235v1zM21.301 58v1h.81l.168-.792-.978-.208zm-9.744.208l6.914-32.49-1.956-.416L9.6 57.792l1.956.416zm5.936-33.698h-.205v2h.205v-2zm-.715.14l-12.07 7.148 1.02 1.72 12.07-7.148-1.02-1.72zM6.196 32.863l2.022-9.61-1.958-.41-2.021 9.608 1.957.412zM7.75 23.91l12.334-7.324-1.022-1.72-12.334 7.324 1.022 1.72zm11.823-7.184h10.723v-2H19.573v2zm9.744-1.208l-8.994 42.275 1.956.416 8.994-42.275-1.956-.416zM21.301 57H10.578v2h10.723v-2z" fill="#fff" mask="url(#mainRank1_svg__a)"></path>
                              </svg>
                              <span class="blind">1위
                              </span>
                            </div>
                          </div>
                          <div class="Home_info_area__H6Gwh">
                            <div class="Home_title__p5PQs">한가인, '눈·코' 똑 닮은 할아버지 최초 공개…"지금으로 치면 꽃미남" (자유부인)[종합]</div>
                            <div class="Home_press__n6JUb">엑스포츠뉴스</div>
                          </div>
                        </a>
                      </li>
                      <li className="Home_main_ranking_item__XwCz8">
                        <a class="Home_link_ranking__n5jPx" data-enter-home-exposure-click-delegate="false">
                          <div class="Home_thumbnail__cLneq">
                            <div class="Home_image__NAsCq">
                              <img src="https://s.pstatic.net/dthumb.phinf/?src=https://mimgnews.pstatic.net/image/origin/311/2025/08/15/1904920.jpg&amp;type=ff353_353&amp;service=enter" alt="" width="178" height="178"/>
                            </div>
                            <div class="Home_rank__-0JsA">
                              <svg viewBox="0 0 60 58" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="Home_icon_number__IHw7c">
                                <mask id="mainRank1_svg__a" x="3.5" y="14" width="29" height="45" fill="#000" maskUnits="userSpaceOnUse">
                                  <path fill="#fff" d="M3.5 14h29v45h-29z"></path>
                                  <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z"></path>
                                </mask>
                                <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z" fill="#1C1C1C"></path>
                                <path d="M10.578 58l-.978-.208L9.343 59h1.235v-1zm6.914-32.49l.978.208.257-1.208h-1.235v1zm-.205 0v-1h-.274l-.236.14.51.86zm-12.07 7.148l-.979-.206-.468 2.225 1.957-1.158-.51-.86zm2.021-9.609l-.51-.86-.378.224-.09.43.978.206zm12.334-7.324v-1h-.274l-.236.14.51.86zm10.723 0l.979.208.257-1.208h-1.235v1zM21.301 58v1h.81l.168-.792-.978-.208zm-9.744.208l6.914-32.49-1.956-.416L9.6 57.792l1.956.416zm5.936-33.698h-.205v2h.205v-2zm-.715.14l-12.07 7.148 1.02 1.72 12.07-7.148-1.02-1.72zM6.196 32.863l2.022-9.61-1.958-.41-2.021 9.608 1.957.412zM7.75 23.91l12.334-7.324-1.022-1.72-12.334 7.324 1.022 1.72zm11.823-7.184h10.723v-2H19.573v2zm9.744-1.208l-8.994 42.275 1.956.416 8.994-42.275-1.956-.416zM21.301 57H10.578v2h10.723v-2z" fill="#fff" mask="url(#mainRank1_svg__a)"></path>
                              </svg>
                              <span class="blind">1위
                              </span>
                            </div>
                          </div>
                          <div class="Home_info_area__H6Gwh">
                            <div class="Home_title__p5PQs">한가인, '눈·코' 똑 닮은 할아버지 최초 공개…"지금으로 치면 꽃미남" (자유부인)[종합]</div>
                            <div class="Home_press__n6JUb">엑스포츠뉴스</div>
                          </div>
                        </a>
                      </li>
                      <li className="Home_main_ranking_item__XwCz8">
                        <a class="Home_link_ranking__n5jPx" data-enter-home-exposure-click-delegate="false">
                          <div class="Home_thumbnail__cLneq">
                            <div class="Home_image__NAsCq">
                              <img src="https://s.pstatic.net/dthumb.phinf/?src=https://mimgnews.pstatic.net/image/origin/311/2025/08/15/1904920.jpg&amp;type=ff353_353&amp;service=enter" alt="" width="178" height="178"/>
                            </div>
                            <div class="Home_rank__-0JsA">
                              <svg viewBox="0 0 60 58" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="Home_icon_number__IHw7c">
                                <mask id="mainRank1_svg__a" x="3.5" y="14" width="29" height="45" fill="#000" maskUnits="userSpaceOnUse">
                                  <path fill="#fff" d="M3.5 14h29v45h-29z"></path>
                                  <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z"></path>
                                </mask>
                                <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z" fill="#1C1C1C"></path>
                                <path d="M10.578 58l-.978-.208L9.343 59h1.235v-1zm6.914-32.49l.978.208.257-1.208h-1.235v1zm-.205 0v-1h-.274l-.236.14.51.86zm-12.07 7.148l-.979-.206-.468 2.225 1.957-1.158-.51-.86zm2.021-9.609l-.51-.86-.378.224-.09.43.978.206zm12.334-7.324v-1h-.274l-.236.14.51.86zm10.723 0l.979.208.257-1.208h-1.235v1zM21.301 58v1h.81l.168-.792-.978-.208zm-9.744.208l6.914-32.49-1.956-.416L9.6 57.792l1.956.416zm5.936-33.698h-.205v2h.205v-2zm-.715.14l-12.07 7.148 1.02 1.72 12.07-7.148-1.02-1.72zM6.196 32.863l2.022-9.61-1.958-.41-2.021 9.608 1.957.412zM7.75 23.91l12.334-7.324-1.022-1.72-12.334 7.324 1.022 1.72zm11.823-7.184h10.723v-2H19.573v2zm9.744-1.208l-8.994 42.275 1.956.416 8.994-42.275-1.956-.416zM21.301 57H10.578v2h10.723v-2z" fill="#fff" mask="url(#mainRank1_svg__a)"></path>
                              </svg>
                              <span class="blind">1위
                              </span>
                            </div>
                          </div>
                          <div class="Home_info_area__H6Gwh">
                            <div class="Home_title__p5PQs">한가인, '눈·코' 똑 닮은 할아버지 최초 공개…"지금으로 치면 꽃미남" (자유부인)[종합]</div>
                            <div class="Home_press__n6JUb">엑스포츠뉴스</div>
                          </div>
                        </a>
                      </li>
                      <li className="Home_main_ranking_item__XwCz8">
                        <a class="Home_link_ranking__n5jPx" data-enter-home-exposure-click-delegate="false">
                          <div class="Home_thumbnail__cLneq">
                            <div class="Home_image__NAsCq">
                              <img src="https://s.pstatic.net/dthumb.phinf/?src=https://mimgnews.pstatic.net/image/origin/311/2025/08/15/1904920.jpg&amp;type=ff353_353&amp;service=enter" alt="" width="178" height="178"/>
                            </div>
                            <div class="Home_rank__-0JsA">
                              <svg viewBox="0 0 60 58" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="Home_icon_number__IHw7c">
                                <mask id="mainRank1_svg__a" x="3.5" y="14" width="29" height="45" fill="#000" maskUnits="userSpaceOnUse">
                                  <path fill="#fff" d="M3.5 14h29v45h-29z"></path>
                                  <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z"></path>
                                </mask>
                                <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z" fill="#1C1C1C"></path>
                                <path d="M10.578 58l-.978-.208L9.343 59h1.235v-1zm6.914-32.49l.978.208.257-1.208h-1.235v1zm-.205 0v-1h-.274l-.236.14.51.86zm-12.07 7.148l-.979-.206-.468 2.225 1.957-1.158-.51-.86zm2.021-9.609l-.51-.86-.378.224-.09.43.978.206zm12.334-7.324v-1h-.274l-.236.14.51.86zm10.723 0l.979.208.257-1.208h-1.235v1zM21.301 58v1h.81l.168-.792-.978-.208zm-9.744.208l6.914-32.49-1.956-.416L9.6 57.792l1.956.416zm5.936-33.698h-.205v2h.205v-2zm-.715.14l-12.07 7.148 1.02 1.72 12.07-7.148-1.02-1.72zM6.196 32.863l2.022-9.61-1.958-.41-2.021 9.608 1.957.412zM7.75 23.91l12.334-7.324-1.022-1.72-12.334 7.324 1.022 1.72zm11.823-7.184h10.723v-2H19.573v2zm9.744-1.208l-8.994 42.275 1.956.416 8.994-42.275-1.956-.416zM21.301 57H10.578v2h10.723v-2z" fill="#fff" mask="url(#mainRank1_svg__a)"></path>
                              </svg>
                              <span class="blind">1위
                              </span>
                            </div>
                          </div>
                          <div class="Home_info_area__H6Gwh">
                            <div class="Home_title__p5PQs">한가인, '눈·코' 똑 닮은 할아버지 최초 공개…"지금으로 치면 꽃미남" (자유부인)[종합]</div>
                            <div class="Home_press__n6JUb">엑스포츠뉴스</div>
                          </div>
                        </a>
                      </li>
                      <li className="Home_main_ranking_item__XwCz8">
                        <a class="Home_link_ranking__n5jPx" data-enter-home-exposure-click-delegate="false">
                          <div class="Home_thumbnail__cLneq">
                            <div class="Home_image__NAsCq">
                              <img src="https://s.pstatic.net/dthumb.phinf/?src=https://mimgnews.pstatic.net/image/origin/311/2025/08/15/1904920.jpg&amp;type=ff353_353&amp;service=enter" alt="" width="178" height="178"/>
                            </div>
                            <div class="Home_rank__-0JsA">
                              <svg viewBox="0 0 60 58" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="Home_icon_number__IHw7c">
                                <mask id="mainRank1_svg__a" x="3.5" y="14" width="29" height="45" fill="#000" maskUnits="userSpaceOnUse">
                                  <path fill="#fff" d="M3.5 14h29v45h-29z"></path>
                                  <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z"></path>
                                </mask>
                                <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z" fill="#1C1C1C"></path>
                                <path d="M10.578 58l-.978-.208L9.343 59h1.235v-1zm6.914-32.49l.978.208.257-1.208h-1.235v1zm-.205 0v-1h-.274l-.236.14.51.86zm-12.07 7.148l-.979-.206-.468 2.225 1.957-1.158-.51-.86zm2.021-9.609l-.51-.86-.378.224-.09.43.978.206zm12.334-7.324v-1h-.274l-.236.14.51.86zm10.723 0l.979.208.257-1.208h-1.235v1zM21.301 58v1h.81l.168-.792-.978-.208zm-9.744.208l6.914-32.49-1.956-.416L9.6 57.792l1.956.416zm5.936-33.698h-.205v2h.205v-2zm-.715.14l-12.07 7.148 1.02 1.72 12.07-7.148-1.02-1.72zM6.196 32.863l2.022-9.61-1.958-.41-2.021 9.608 1.957.412zM7.75 23.91l12.334-7.324-1.022-1.72-12.334 7.324 1.022 1.72zm11.823-7.184h10.723v-2H19.573v2zm9.744-1.208l-8.994 42.275 1.956.416 8.994-42.275-1.956-.416zM21.301 57H10.578v2h10.723v-2z" fill="#fff" mask="url(#mainRank1_svg__a)"></path>
                              </svg>
                              <span class="blind">1위
                              </span>
                            </div>
                          </div>
                          <div class="Home_info_area__H6Gwh">
                            <div class="Home_title__p5PQs">한가인, '눈·코' 똑 닮은 할아버지 최초 공개…"지금으로 치면 꽃미남" (자유부인)[종합]</div>
                            <div class="Home_press__n6JUb">엑스포츠뉴스</div>
                          </div>
                        </a>
                      </li>
                      <li className="Home_main_ranking_item__XwCz8">
                        <a class="Home_link_ranking__n5jPx" data-enter-home-exposure-click-delegate="false">
                          <div class="Home_thumbnail__cLneq">
                            <div class="Home_image__NAsCq">
                              <img src="https://s.pstatic.net/dthumb.phinf/?src=https://mimgnews.pstatic.net/image/origin/311/2025/08/15/1904920.jpg&amp;type=ff353_353&amp;service=enter" alt="" width="178" height="178"/>
                            </div>
                            <div class="Home_rank__-0JsA">
                              <svg viewBox="0 0 60 58" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="Home_icon_number__IHw7c">
                                <mask id="mainRank1_svg__a" x="3.5" y="14" width="29" height="45" fill="#000" maskUnits="userSpaceOnUse">
                                  <path fill="#fff" d="M3.5 14h29v45h-29z"></path>
                                  <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z"></path>
                                </mask>
                                <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z" fill="#1C1C1C"></path>
                                <path d="M10.578 58l-.978-.208L9.343 59h1.235v-1zm6.914-32.49l.978.208.257-1.208h-1.235v1zm-.205 0v-1h-.274l-.236.14.51.86zm-12.07 7.148l-.979-.206-.468 2.225 1.957-1.158-.51-.86zm2.021-9.609l-.51-.86-.378.224-.09.43.978.206zm12.334-7.324v-1h-.274l-.236.14.51.86zm10.723 0l.979.208.257-1.208h-1.235v1zM21.301 58v1h.81l.168-.792-.978-.208zm-9.744.208l6.914-32.49-1.956-.416L9.6 57.792l1.956.416zm5.936-33.698h-.205v2h.205v-2zm-.715.14l-12.07 7.148 1.02 1.72 12.07-7.148-1.02-1.72zM6.196 32.863l2.022-9.61-1.958-.41-2.021 9.608 1.957.412zM7.75 23.91l12.334-7.324-1.022-1.72-12.334 7.324 1.022 1.72zm11.823-7.184h10.723v-2H19.573v2zm9.744-1.208l-8.994 42.275 1.956.416 8.994-42.275-1.956-.416zM21.301 57H10.578v2h10.723v-2z" fill="#fff" mask="url(#mainRank1_svg__a)"></path>
                              </svg>
                              <span class="blind">1위
                              </span>
                            </div>
                          </div>
                          <div class="Home_info_area__H6Gwh">
                            <div class="Home_title__p5PQs">한가인, '눈·코' 똑 닮은 할아버지 최초 공개…"지금으로 치면 꽃미남" (자유부인)[종합]</div>
                            <div class="Home_press__n6JUb">엑스포츠뉴스</div>
                          </div>
                        </a>
                      </li>
                      <li className="Home_main_ranking_item__XwCz8">
                        <a class="Home_link_ranking__n5jPx" data-enter-home-exposure-click-delegate="false">
                          <div class="Home_thumbnail__cLneq">
                            <div class="Home_image__NAsCq">
                              <img src="https://s.pstatic.net/dthumb.phinf/?src=https://mimgnews.pstatic.net/image/origin/311/2025/08/15/1904920.jpg&amp;type=ff353_353&amp;service=enter" alt="" width="178" height="178"/>
                            </div>
                            <div class="Home_rank__-0JsA">
                              <svg viewBox="0 0 60 58" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="Home_icon_number__IHw7c">
                                <mask id="mainRank1_svg__a" x="3.5" y="14" width="29" height="45" fill="#000" maskUnits="userSpaceOnUse">
                                  <path fill="#fff" d="M3.5 14h29v45h-29z"></path>
                                  <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z"></path>
                                </mask>
                                <path d="M10.578 58l6.914-32.49h-.205l-12.07 7.148 2.021-9.609 12.334-7.324h10.723L21.301 58H10.578z" fill="#1C1C1C"></path>
                                <path d="M10.578 58l-.978-.208L9.343 59h1.235v-1zm6.914-32.49l.978.208.257-1.208h-1.235v1zm-.205 0v-1h-.274l-.236.14.51.86zm-12.07 7.148l-.979-.206-.468 2.225 1.957-1.158-.51-.86zm2.021-9.609l-.51-.86-.378.224-.09.43.978.206zm12.334-7.324v-1h-.274l-.236.14.51.86zm10.723 0l.979.208.257-1.208h-1.235v1zM21.301 58v1h.81l.168-.792-.978-.208zm-9.744.208l6.914-32.49-1.956-.416L9.6 57.792l1.956.416zm5.936-33.698h-.205v2h.205v-2zm-.715.14l-12.07 7.148 1.02 1.72 12.07-7.148-1.02-1.72zM6.196 32.863l2.022-9.61-1.958-.41-2.021 9.608 1.957.412zM7.75 23.91l12.334-7.324-1.022-1.72-12.334 7.324 1.022 1.72zm11.823-7.184h10.723v-2H19.573v2zm9.744-1.208l-8.994 42.275 1.956.416 8.994-42.275-1.956-.416zM21.301 57H10.578v2h10.723v-2z" fill="#fff" mask="url(#mainRank1_svg__a)"></path>
                              </svg>
                              <span class="blind">1위
                              </span>
                            </div>
                          </div>
                          <div class="Home_info_area__H6Gwh">
                            <div class="Home_title__p5PQs">한가인, '눈·코' 똑 닮은 할아버지 최초 공개…"지금으로 치면 꽃미남" (자유부인)[종합]</div>
                            <div class="Home_press__n6JUb">엑스포츠뉴스</div>
                          </div>
                        </a>
                      </li>
                    </ol>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <footer id="footer" className="DefaultFooter_entertain_footer__FOen1">
        <div className="DefaultFooter_inner__WerkZ">
          <div className="DefaultFooter_notice_area__mWnDC">
            <em className="DefaultFooter_mark__txgHr">공지</em>
            <a href="https://blog.naver.com/naver_entermain/223703349971" className="DefaultFooter_notice__K26kb">
              새로워진 엔터 서비스를 경험해보세요!
            </a>
          </div>
        <div className="DefaultFooter_link_area__1QY+3">
      <div className="DefaultFooter_main_area__L4Lu8">
        <a href="https://nid.naver.com/nidlogin.login?svctype=262144&amp;url=https%3A%2F%2Fm.entertain.naver.com%2Fhome" className="DefaultFooter_link__XjZhU">
          로그인
        </a>
        <a href="https://m.naver.com/services.html?f=svc.sports" className="DefaultFooter_link__XjZhU sitemap">
          전체서비스
        </a>
      </div>
      <div className="DefaultFooter_sub_area__OiN1S">
        <div className="DefaultFooter_sub_link_group__fHNoq">
          <span className="DefaultFooter_sub_item__v5uQT">
            <a href="https://help.naver.com/alias/TVENT/TVENT.naver" className="DefaultFooter_link__XjZhU">
              엔터도움말
            </a>
          </span>
          <span className="DefaultFooter_sub_item__v5uQT">
            <a href="https://help.naver.com/alias/TVENT/TVENT_6.naver" className="DefaultFooter_link__XjZhU">
              오류신고
            </a>
          </span>
          <span className="DefaultFooter_sub_item__v5uQT">
            <a href="https://www.navercorp.com/naver/proposalGuide" className="DefaultFooter_link__XjZhU">
              제휴제안
            </a>
          </span>
        </div>
        <div className="DefaultFooter_sub_charge_group__b1hfJ">
          <span className="DefaultFooter_sub_item__v5uQT">
            <a href="https://news.naver.com/main/ombudsman/edit.naver?mid=omb" className="DefaultFooter_link__XjZhU">
              기사배열 원칙 책임자 : 김수향
            </a>
          </span>
          <span className="DefaultFooter_sub_item__v5uQT">청소년 보호 책임자 : 이정규</span>
        </div>
      </div>
    </div>
    <p className="DefaultFooter_copyright__oOtCc">
      본 콘텐츠의 저작권은 제공처 또는 네이버에 있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 법적 책임을 질 수 있습니다.
    </p>
    <div className="DefaultFooter_corp_area__5CPIq">
      <a href="https://m.news.naver.com/ombudsman/index?mode=rule&amp;open=edit" className="DefaultFooter_link__XjZhU">
        서비스 운영 원칙
      </a>
      <span className="DefaultFooter_naver__CJHsi">
        ©<a href="https://www.navercorp.com/" className="DefaultFooter_link__XjZhU">NAVER Corp.</a>
      </span>
    </div>
  </div>
</footer>
<button type="button" className="GoToTopBtn_button_page_top__tNqeX GoToTopBtn_is_show__WBpPp">
  <svg width="16" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M2.5 7.305l5.138-5.139a.5.5 0 01.705-.003L13.5 7.24M8.007 2.326v14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"></path>
  </svg>
  <span className="blind">맨위로</span>
</button>
      </div>
    </div>
  );
}


export default App;
