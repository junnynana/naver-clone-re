import React from 'react';
import logo from './logo.svg';
import {Route, Link, Router} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import './App3.scss';


function App(props) {
  return (
<body className="as_mp_layout body_main">
<div id="header">
  <div className="u_skip">
    <a href="#ct">본문 바로가기</a>
  </div>

  <section className="news_header">
    <header className="nh_header" role="banner">
      <div className="Ngnb">
        <div className="Ngnb_inner">
          <div className="Ngnb_both">
            <div className="Ngnb_left">
              <span className="Ngnb_logo">
                <a href="https://www.naver.com" className="Nlogo_link">
                  <span className="Nicon_logo">NAVER</span>
                </a>
              </span>
              <div className="Ngnb_service">
                <h1 className="Nservice_item">
                  <a href="https://news.naver.com">
                    <span className="Nicon_service">뉴스</span>
                  </a>
                </h1>
                <span className="Nservice_subitem">
                  <a href="https://entertain.naver.com/home">
                    <span className="Nicon_family Nicon_entertain">엔터</span>
                  </a>
                </span>
                <span className="Nservice_subitem">
                  <a href="https://sports.news.naver.com/index">
                    <span className="Nicon_family Nicon_sports">스포츠</span>
                  </a>
                </span>
                <span className="Nservice_subitem">
                  <a href="https://weather.naver.com/">
                    <span className="Nicon_family Nicon_weather">날씨</span>
                  </a>
                </span>
                <span className="Nservice_subitem">
                  <a href="https://contents.premium.naver.com/">
                    <span className="Nicon_family Nicon_premium">프리미엄</span>
                  </a>
                </span>
              </div>
              <div className="Nlnb _float_lnb">
                <div className="Nlnb_inner">
                  <div className="Nlnb_both">
                    <div className="Nlnb_left _lnb_scroll">
                      <div className="Nlnb_menu Ntype_scroll">
                        <div className="Nlnb_menu_inner _scroll" style={{ touchAction: "pan-y pinch-zoom", height: "46px", position: "relative", overflow: "hidden" }}>
                          <ul className="Nlnb_menu_list" role="menu" style={{ position: "absolute",transitionTimingFunction: "cubic-bezier(0.1, 0.57, 0.1, 1)",transitionDuration: "0ms",transform: "translate(0px, 0px)",}}>
                            <li className="Nlist_item is_active">
                              <a href="https://news.naver.com/?viewType=pc" className="Nitem_link" role="menuitem" aria-selected="true">
                                <span className="Nitem_link_menu">언론사별</span>
                              </a>
                            </li>
                            <li className="Nlist_item">
                              <a href="https://news.naver.com/section/100" className="Nitem_link" role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">정치</span>
                              </a>
                            </li>
                            <li className="Nlist_item">
                              <a href="https://news.naver.com/section/101" className="Nitem_link" role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">경제</span>
                              </a>
                            </li>
                            <li className="Nlist_item">
                              <a href="https://news.naver.com/section/102" className="Nitem_link" role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">사회</span>
                              </a>
                            </li>
                            <li className="Nlist_item">
                              <a href="https://news.naver.com/section/103" className="Nitem_link" role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">생활/문화</span>
                              </a>
                            </li>
                            <li className="Nlist_item">
                              <a href="https://news.naver.com/section/105" className="Nitem_link" role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">IT/과학</span>
                              </a>
                            </li>
                            <li className="Nlist_item">
                              <a href="https://news.naver.com/section/104" className="Nitem_link" role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">세계</span>
                              </a>
                            </li>
                            <li className="Nlist_item _isNew">
                              <a  href="https://news.naver.com/main/ranking/popularDay.naver" className="Nitem_link" role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">랭킹</span>
                              </a>
                            </li>
                            <li className="Nlist_item _isNew">
                              <a href="https://news.naver.com/newspaper/home?viewType=pc" className="Nitem_link" role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">신문보기</span>
                              </a>
                            </li>
                            <li className="Nlist_item">
                              <a href="https://news.naver.com/opinion/home" className="Nitem_link" role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">오피니언</span>
                              </a>
                            </li>
                            <li className="Nlist_item">
                              <a href="https://news.naver.com/main/tv/index.naver?mid=tvh" className="Nitem_link" role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">TV</span>
                              </a>
                            </li>
                            <li className="Nlist_item">
                              <a href="https://news.naver.com/factcheck/main" className="Nitem_link" role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">팩트체크</span>
                              </a>
                            </li>
                            <li className="Nlist_item">
                              <a href="https://media.naver.com/algorithm" className="Nitem_link" role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">알고리즘 안내</span>
                              </a>
                            </li>
                            <li className="Nlist_item _isNew">
                              <a href="https://news.naver.com/ombudsman/errorArticleList" className="Nitem_link"  role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">정정보도 모음</span>
                              </a>
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
    </header>
  </section>
  <div className="lnb">
    <span className="lnb_date">
      <strong>08</strong>.<strong>22</strong><span className="day">(금)</span></span>
    <ul class="lnb_side" tabindex="0">
      <li><a href="https://news.naver.com/main/officeList.naver" class="nclicks(slb.allmedia)" title="전체 언론사">전체 언론사</a></li>
      <li><a href="https://newsstand.naver.com/" class="nclicks(slb.newsstand)" title="뉴스스탠드" target="_blank">뉴스스탠드</a></li>
      <li><a href="https://newslibrary.naver.com/search/searchByDate.nhn" class="nclicks(slb.library)" title="라이브러리" target="_blank">라이브러리</a></li>
    </ul>
  </div>
  <div className="rankingnews _popularWelBase _persist">
    <div className="rankingnews_head">
      <h2 className="rankingnews_tit">언론사별 <em>랭킹뉴스</em></h2>
      <ul className="rankingnews_tab">
        <li className="rankingnews_tab_item nclicks('RBP.rnk')  is_selected">
          <a href="/main/ranking/popularDay.naver">많이 본 뉴스</a>
          <span className="blind">선택됨</span>
        </li>
        <li className="rankingnews_tab_item nclicks('RBP.cmt') ">
          <a href="/main/ranking/popularMemo.naver">댓글 많은 뉴스</a>
        </li>
      </ul>
      <button type="button" className="button_rankingnews_info _infoButton nclicks('RBP.inf')">집계안내</button>
    </div>
    <div className="rankingnews_box_wrap_popularRanking">
      <div className="_officeCard _officeCard0" >
        <div className="rankingnews_box">
          <a href="https://media.naver.com/press/660/ranking?type=popular" className="rankingnews_box_head nclicks('RBP.rnkpname')">
            <span className="rankingnews_thumb"><img src="https://mimgnews.pstatic.net/image/upload/office_logo/660/2025/03/07/logo_660_100_20250307145705.png" width="26" height="26" alt="kbc광주방송" onError={(e) => { e.target.src = "https://ssl.pstatic.net/static.news/image/news/errorimage/noimage_52x52.png"; }} /></span>
            <strong className="rankingnews_name">kbc광주방송</strong>
            <p className="rankingnews_tooltip _infoTooltip" style={{ display: "none" }}>랭킹 결과를 더 볼 수 있어요.</p>
          </a>
          <ul className="rankingnews_list">
            <li>
              <em className="list_ranking_num">1</em>
              <div className="list_content">
                <a href="https://n.news.naver.com/article/660/0000091433?ntype=RANKING" className="list_title nclicks('RBP.rnknws')">'극우 논란' 양궁 국대 장채환, 계약 해지?...부산 사상구 "검토 안 해"</a>
                <span className="list_time">15시간전</span>
              </div>
              <a href="https://n.news.naver.com/article/660/0000091433?ntype=RANKING" className="list_img nclicks('RBP.rnknws')"><img src="https://mimgnews.pstatic.net/image/origin/660/2025/08/22/91433.jpg?type=nf70_70" width="70" height="70" alt="" onError={(e) => { e.target.src = "https://ssl.pstatic.net/static.news/image/news/errorimage/noimage_70x70_1.png"; }} /></a>
            </li>
            <li>
              <em className="list_ranking_num">2</em>
              <div className="list_content">
                <a href="https://n.news.naver.com/article/660/0000091436?ntype=RANKING" className="list_title nclicks('RBP.rnknws')">"생활고"...마트서 90만 원 물품 훔친 50대 구속 송치</a>
                <span className="list_time">15시간전</span>
              </div>
              <a href="https://n.news.naver.com/article/660/0000091436?ntype=RANKING" className="list_img nclicks('RBP.rnknws')"><img src="https://mimgnews.pstatic.net/image/origin/660/2025/08/22/91436.jpg?type=nf70_70" width="70" height="70" alt="" onError={(e) => { e.target.src = "https://ssl.pstatic.net/static.news/image/news/errorimage/noimage_70x70_1.png"; }} /></a>
            </li>
            <li>
              <em className="list_ranking_num">3</em>
              <div className="list_content">
                <a href="https://n.news.naver.com/article/660/0000091463?ntype=RANKING" className="list_title nclicks('RBP.rnknws')">올해는 '처서 매직'도 없다..."이번 주말, 더 더워진다"</a>
                <span className="list_time">8시간전</span>
              </div>
              <a href="https://n.news.naver.com/article/660/0000091463?ntype=RANKING" className="list_img nclicks('RBP.rnknws')"><img src="https://mimgnews.pstatic.net/image/origin/660/2025/08/22/91463.jpg?type=nf70_70" width="70" height="70" alt="" onError={(e) => { e.target.src = "https://ssl.pstatic.net/static.news/image/news/errorimage/noimage_70x70_1.png"; }} /></a>
            </li>
          </ul>
        </div>
        <div className="rankingnews_box">
          <a href="https://media.naver.com/press/660/ranking?type=popular" className="rankingnews_box_head nclicks('RBP.rnkpname')">
            <span className="rankingnews_thumb"><img src="https://mimgnews.pstatic.net/image/upload/office_logo/660/2025/03/07/logo_660_100_20250307145705.png" width="26" height="26" alt="kbc광주방송" onError={(e) => { e.target.src = "https://ssl.pstatic.net/static.news/image/news/errorimage/noimage_52x52.png"; }} /></span>
            <strong className="rankingnews_name">kbc광주방송</strong>
            <p className="rankingnews_tooltip _infoTooltip" style={{ display: "none" }}>랭킹 결과를 더 볼 수 있어요.</p>
          </a>
          <ul className="rankingnews_list">
            <li>
              <em className="list_ranking_num">1</em>
              <div className="list_content">
                <a href="https://n.news.naver.com/article/660/0000091433?ntype=RANKING" className="list_title nclicks('RBP.rnknws')">'극우 논란' 양궁 국대 장채환, 계약 해지?...부산 사상구 "검토 안 해"</a>
                <span className="list_time">15시간전</span>
              </div>
              <a href="https://n.news.naver.com/article/660/0000091433?ntype=RANKING" className="list_img nclicks('RBP.rnknws')"><img src="https://mimgnews.pstatic.net/image/origin/660/2025/08/22/91433.jpg?type=nf70_70" width="70" height="70" alt="" onError={(e) => { e.target.src = "https://ssl.pstatic.net/static.news/image/news/errorimage/noimage_70x70_1.png"; }} /></a>
            </li>
            <li>
              <em className="list_ranking_num">2</em>
              <div className="list_content">
                <a href="https://n.news.naver.com/article/660/0000091436?ntype=RANKING" className="list_title nclicks('RBP.rnknws')">"생활고"...마트서 90만 원 물품 훔친 50대 구속 송치</a>
                <span className="list_time">15시간전</span>
              </div>
              <a href="https://n.news.naver.com/article/660/0000091436?ntype=RANKING" className="list_img nclicks('RBP.rnknws')"><img src="https://mimgnews.pstatic.net/image/origin/660/2025/08/22/91436.jpg?type=nf70_70" width="70" height="70" alt="" onError={(e) => { e.target.src = "https://ssl.pstatic.net/static.news/image/news/errorimage/noimage_70x70_1.png"; }} /></a>
            </li>
            <li>
              <em className="list_ranking_num">3</em>
              <div className="list_content">
                <a href="https://n.news.naver.com/article/660/0000091463?ntype=RANKING" className="list_title nclicks('RBP.rnknws')">올해는 '처서 매직'도 없다..."이번 주말, 더 더워진다"</a>
                <span className="list_time">8시간전</span>
              </div>
              <a href="https://n.news.naver.com/article/660/0000091463?ntype=RANKING" className="list_img nclicks('RBP.rnknws')"><img src="https://mimgnews.pstatic.net/image/origin/660/2025/08/22/91463.jpg?type=nf70_70" width="70" height="70" alt="" onError={(e) => { e.target.src = "https://ssl.pstatic.net/static.news/image/news/errorimage/noimage_70x70_1.png"; }} /></a>
            </li>
          </ul>
        </div>
        <div className="rankingnews_box">
          <a href="https://media.naver.com/press/660/ranking?type=popular" className="rankingnews_box_head nclicks('RBP.rnkpname')">
            <span className="rankingnews_thumb"><img src="https://mimgnews.pstatic.net/image/upload/office_logo/660/2025/03/07/logo_660_100_20250307145705.png" width="26" height="26" alt="kbc광주방송" onError={(e) => { e.target.src = "https://ssl.pstatic.net/static.news/image/news/errorimage/noimage_52x52.png"; }} /></span>
            <strong className="rankingnews_name">kbc광주방송</strong>
            <p className="rankingnews_tooltip _infoTooltip" style={{ display: "none" }}>랭킹 결과를 더 볼 수 있어요.</p>
          </a>
          <ul className="rankingnews_list">
            <li>
              <em className="list_ranking_num">1</em>
              <div className="list_content">
                <a href="https://n.news.naver.com/article/660/0000091433?ntype=RANKING" className="list_title nclicks('RBP.rnknws')">'극우 논란' 양궁 국대 장채환, 계약 해지?...부산 사상구 "검토 안 해"</a>
                <span className="list_time">15시간전</span>
              </div>
              <a href="https://n.news.naver.com/article/660/0000091433?ntype=RANKING" className="list_img nclicks('RBP.rnknws')"><img src="https://mimgnews.pstatic.net/image/origin/660/2025/08/22/91433.jpg?type=nf70_70" width="70" height="70" alt="" onError={(e) => { e.target.src = "https://ssl.pstatic.net/static.news/image/news/errorimage/noimage_70x70_1.png"; }} /></a>
            </li>
            <li>
              <em className="list_ranking_num">2</em>
              <div className="list_content">
                <a href="https://n.news.naver.com/article/660/0000091436?ntype=RANKING" className="list_title nclicks('RBP.rnknws')">"생활고"...마트서 90만 원 물품 훔친 50대 구속 송치</a>
                <span className="list_time">15시간전</span>
              </div>
              <a href="https://n.news.naver.com/article/660/0000091436?ntype=RANKING" className="list_img nclicks('RBP.rnknws')"><img src="https://mimgnews.pstatic.net/image/origin/660/2025/08/22/91436.jpg?type=nf70_70" width="70" height="70" alt="" onError={(e) => { e.target.src = "https://ssl.pstatic.net/static.news/image/news/errorimage/noimage_70x70_1.png"; }} /></a>
            </li>
            <li>
              <em className="list_ranking_num">3</em>
              <div className="list_content">
                <a href="https://n.news.naver.com/article/660/0000091463?ntype=RANKING" className="list_title nclicks('RBP.rnknws')">올해는 '처서 매직'도 없다..."이번 주말, 더 더워진다"</a>
                <span className="list_time">8시간전</span>
              </div>
              <a href="https://n.news.naver.com/article/660/0000091463?ntype=RANKING" className="list_img nclicks('RBP.rnknws')"><img src="https://mimgnews.pstatic.net/image/origin/660/2025/08/22/91463.jpg?type=nf70_70" width="70" height="70" alt="" onError={(e) => { e.target.src = "https://ssl.pstatic.net/static.news/image/news/errorimage/noimage_70x70_1.png"; }} /></a>
            </li>
          </ul>
        </div>
        <div className="rankingnews_box">
          <a href="https://media.naver.com/press/660/ranking?type=popular" className="rankingnews_box_head nclicks('RBP.rnkpname')">
            <span className="rankingnews_thumb"><img src="https://mimgnews.pstatic.net/image/upload/office_logo/660/2025/03/07/logo_660_100_20250307145705.png" width="26" height="26" alt="kbc광주방송" onError={(e) => { e.target.src = "https://ssl.pstatic.net/static.news/image/news/errorimage/noimage_52x52.png"; }} /></span>
            <strong className="rankingnews_name">kbc광주방송</strong>
            <p className="rankingnews_tooltip _infoTooltip" style={{ display: "none" }}>랭킹 결과를 더 볼 수 있어요.</p>
          </a>
          <ul className="rankingnews_list">
            <li>
              <em className="list_ranking_num">1</em>
              <div className="list_content">
                <a href="https://n.news.naver.com/article/660/0000091433?ntype=RANKING" className="list_title nclicks('RBP.rnknws')">'극우 논란' 양궁 국대 장채환, 계약 해지?...부산 사상구 "검토 안 해"</a>
                <span className="list_time">15시간전</span>
              </div>
              <a href="https://n.news.naver.com/article/660/0000091433?ntype=RANKING" className="list_img nclicks('RBP.rnknws')"><img src="https://mimgnews.pstatic.net/image/origin/660/2025/08/22/91433.jpg?type=nf70_70" width="70" height="70" alt="" onError={(e) => { e.target.src = "https://ssl.pstatic.net/static.news/image/news/errorimage/noimage_70x70_1.png"; }} /></a>
            </li>
            <li>
              <em className="list_ranking_num">2</em>
              <div className="list_content">
                <a href="https://n.news.naver.com/article/660/0000091436?ntype=RANKING" className="list_title nclicks('RBP.rnknws')">"생활고"...마트서 90만 원 물품 훔친 50대 구속 송치</a>
                <span className="list_time">15시간전</span>
              </div>
              <a href="https://n.news.naver.com/article/660/0000091436?ntype=RANKING" className="list_img nclicks('RBP.rnknws')"><img src="https://mimgnews.pstatic.net/image/origin/660/2025/08/22/91436.jpg?type=nf70_70" width="70" height="70" alt="" onError={(e) => { e.target.src = "https://ssl.pstatic.net/static.news/image/news/errorimage/noimage_70x70_1.png"; }} /></a>
            </li>
            <li>
              <em className="list_ranking_num">3</em>
              <div className="list_content">
                <a href="https://n.news.naver.com/article/660/0000091463?ntype=RANKING" className="list_title nclicks('RBP.rnknws')">올해는 '처서 매직'도 없다..."이번 주말, 더 더워진다"</a>
                <span className="list_time">8시간전</span>
              </div>
              <a href="https://n.news.naver.com/article/660/0000091463?ntype=RANKING" className="list_img nclicks('RBP.rnknws')"><img src="https://mimgnews.pstatic.net/image/origin/660/2025/08/22/91463.jpg?type=nf70_70" width="70" height="70" alt="" onError={(e) => { e.target.src = "https://ssl.pstatic.net/static.news/image/news/errorimage/noimage_70x70_1.png"; }} /></a>
            </li>
          </ul>
        </div>
        <div className="rankingnews_box">
          <a href="https://media.naver.com/press/660/ranking?type=popular" className="rankingnews_box_head nclicks('RBP.rnkpname')">
            <span className="rankingnews_thumb"><img src="https://mimgnews.pstatic.net/image/upload/office_logo/660/2025/03/07/logo_660_100_20250307145705.png" width="26" height="26" alt="kbc광주방송" onError={(e) => { e.target.src = "https://ssl.pstatic.net/static.news/image/news/errorimage/noimage_52x52.png"; }} /></span>
            <strong className="rankingnews_name">kbc광주방송</strong>
            <p className="rankingnews_tooltip _infoTooltip" style={{ display: "none" }}>랭킹 결과를 더 볼 수 있어요.</p>
          </a>
          <ul className="rankingnews_list">
            <li>
              <em className="list_ranking_num">1</em>
              <div className="list_content">
                <a href="https://n.news.naver.com/article/660/0000091433?ntype=RANKING" className="list_title nclicks('RBP.rnknws')">'극우 논란' 양궁 국대 장채환, 계약 해지?...부산 사상구 "검토 안 해"</a>
                <span className="list_time">15시간전</span>
              </div>
              <a href="https://n.news.naver.com/article/660/0000091433?ntype=RANKING" className="list_img nclicks('RBP.rnknws')"><img src="https://mimgnews.pstatic.net/image/origin/660/2025/08/22/91433.jpg?type=nf70_70" width="70" height="70" alt="" onError={(e) => { e.target.src = "https://ssl.pstatic.net/static.news/image/news/errorimage/noimage_70x70_1.png"; }} /></a>
            </li>
            <li>
              <em className="list_ranking_num">2</em>
              <div className="list_content">
                <a href="https://n.news.naver.com/article/660/0000091436?ntype=RANKING" className="list_title nclicks('RBP.rnknws')">"생활고"...마트서 90만 원 물품 훔친 50대 구속 송치</a>
                <span className="list_time">15시간전</span>
              </div>
              <a href="https://n.news.naver.com/article/660/0000091436?ntype=RANKING" className="list_img nclicks('RBP.rnknws')"><img src="https://mimgnews.pstatic.net/image/origin/660/2025/08/22/91436.jpg?type=nf70_70" width="70" height="70" alt="" onError={(e) => { e.target.src = "https://ssl.pstatic.net/static.news/image/news/errorimage/noimage_70x70_1.png"; }} /></a>
            </li>
            <li>
              <em className="list_ranking_num">3</em>
              <div className="list_content">
                <a href="https://n.news.naver.com/article/660/0000091463?ntype=RANKING" className="list_title nclicks('RBP.rnknws')">올해는 '처서 매직'도 없다..."이번 주말, 더 더워진다"</a>
                <span className="list_time">8시간전</span>
              </div>
              <a href="https://n.news.naver.com/article/660/0000091463?ntype=RANKING" className="list_img nclicks('RBP.rnknws')"><img src="https://mimgnews.pstatic.net/image/origin/660/2025/08/22/91463.jpg?type=nf70_70" width="70" height="70" alt="" onError={(e) => { e.target.src = "https://ssl.pstatic.net/static.news/image/news/errorimage/noimage_70x70_1.png"; }} /></a>
            </li>
          </ul>
        </div>
        <div className="rankingnews_box">
          <a href="https://media.naver.com/press/660/ranking?type=popular" className="rankingnews_box_head nclicks('RBP.rnkpname')">
            <span className="rankingnews_thumb"><img src="https://mimgnews.pstatic.net/image/upload/office_logo/660/2025/03/07/logo_660_100_20250307145705.png" width="26" height="26" alt="kbc광주방송" onError={(e) => { e.target.src = "https://ssl.pstatic.net/static.news/image/news/errorimage/noimage_52x52.png"; }} /></span>
            <strong className="rankingnews_name">kbc광주방송</strong>
            <p className="rankingnews_tooltip _infoTooltip" style={{ display: "none" }}>랭킹 결과를 더 볼 수 있어요.</p>
          </a>
          <ul className="rankingnews_list">
            <li>
              <em className="list_ranking_num">1</em>
              <div className="list_content">
                <a href="https://n.news.naver.com/article/660/0000091433?ntype=RANKING" className="list_title nclicks('RBP.rnknws')">'극우 논란' 양궁 국대 장채환, 계약 해지?...부산 사상구 "검토 안 해"</a>
                <span className="list_time">15시간전</span>
              </div>
              <a href="https://n.news.naver.com/article/660/0000091433?ntype=RANKING" className="list_img nclicks('RBP.rnknws')"><img src="https://mimgnews.pstatic.net/image/origin/660/2025/08/22/91433.jpg?type=nf70_70" width="70" height="70" alt="" onError={(e) => { e.target.src = "https://ssl.pstatic.net/static.news/image/news/errorimage/noimage_70x70_1.png"; }} /></a>
            </li>
            <li>
              <em className="list_ranking_num">2</em>
              <div className="list_content">
                <a href="https://n.news.naver.com/article/660/0000091436?ntype=RANKING" className="list_title nclicks('RBP.rnknws')">"생활고"...마트서 90만 원 물품 훔친 50대 구속 송치</a>
                <span className="list_time">15시간전</span>
              </div>
              <a href="https://n.news.naver.com/article/660/0000091436?ntype=RANKING" className="list_img nclicks('RBP.rnknws')"><img src="https://mimgnews.pstatic.net/image/origin/660/2025/08/22/91436.jpg?type=nf70_70" width="70" height="70" alt="" onError={(e) => { e.target.src = "https://ssl.pstatic.net/static.news/image/news/errorimage/noimage_70x70_1.png"; }} /></a>
            </li>
            <li>
              <em className="list_ranking_num">3</em>
              <div className="list_content">
                <a href="https://n.news.naver.com/article/660/0000091463?ntype=RANKING" className="list_title nclicks('RBP.rnknws')">올해는 '처서 매직'도 없다..."이번 주말, 더 더워진다"</a>
                <span className="list_time">8시간전</span>
              </div>
              <a href="https://n.news.naver.com/article/660/0000091463?ntype=RANKING" className="list_img nclicks('RBP.rnknws')"><img src="https://mimgnews.pstatic.net/image/origin/660/2025/08/22/91463.jpg?type=nf70_70" width="70" height="70" alt="" onError={(e) => { e.target.src = "https://ssl.pstatic.net/static.news/image/news/errorimage/noimage_70x70_1.png"; }} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
      <hr/>
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
</body>
  );
}

export default App;