import React from 'react';
import logo from './logo.svg';
import {Route, Link, Router} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import './App1.scss';



function App(props) {
  return (

<body className="as_mp_layout body_main">
    
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
  <hr/>

  <div id= "ct" role="main" className="main_wrap">
    <div className="main_container">
      <section className="main_content">
        <h3 className="blind">콘텐츠</h3>
        <div className="main_sublnb">
          <div className="main_sublnb_date">
            <strong>8</strong>.<strong>20</strong><span>(수)</span>
          </div>
          <ul className="main_sublnb_menu">
            <li className="main_sublnb_item"><a href="https://news.naver.com/main/officeList.naver " className="main_sublnb_link">전체 언론사</a></li>
            <li className="main_sublnb_item"><a href="https://newsstand.naver.com/" className="main_sublnb_link" target="_blank">뉴스스탠드</a></li>
            <li className="main_sublnb_item"><a href="https://newslibrary.naver.com/search/searchByDate.naver" className="main_sublnb_link" target="_blank" >라이브러리</a></li>
          </ul>
        </div>
        <div className="main_brick">
          <div className="grid1_wrap brick-house _brick_gid_wrapper">
            <div className="brick-vowel _brick_column">
              <div className="main_brick_item _channel_main_news_card_wrapper">
                <div className="comp_news_feed comp_news_none">
                  <div className="cnf_journal_area">
                    <a href="https://media.naver.com/press/666" className="cnf_journal">
                    <div className="cnf_journal_thumb">
                      <img loading="lazy" width="18" height="18" alt="" src="https://mimgnews.pstatic.net/image/upload/office_logo/666/2025/03/07/logo_666_100_20250307145718.png?type=nf36_36" />
                    </div>
                    <em className="cnf_journal_name">경기일보</em>
                    <span className="cnf_journal_sub">08월 20일 16:26</span>
                    </a>
                    <button type="button" className="cnf_btn_subscription _subscribe_btn" data-office_id="666" data-office_name="경기일보"><span className="blind">구독</span></button>
                  </div>
                  <a href="https://n.news.naver.com/article/666/0000081858?cds=news_media_pc&type=editn" className="cnf_news_area _cds_link _editn_link">
                  <div className="cnf_news_thumb">
                    <img loading="lazy" width="80" height="54" alt="" src="https://mimgnews.pstatic.net/image/origin/666/2025/08/22/81858.jpg?type=nf168_108&ut=20250822113817" />
                  </div>
                  <strong className="cnf_news_title">李 대통령 "내년 R&amp;D 예산 35.3조원…과학기술 천대 나라 대개 망해”</strong>
                  </a>
                  <ul className="cnf_news_list">
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081860?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">[단독] 안산시의회 항공료 조작 의혹…경찰, 압수수색</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081849?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">인천 사망사건 현장서 사라진 20돈짜리 금목걸이…경찰, 조사 착수</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081869?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">정청래, '황금 왕관' 쓴 사진 올리자 "왕 노릇하냐" 비난 쇄도</a></li>
                  </ul>
                </div>
              </div>
              <div className="main_brick_item _channel_main_news_card_wrapper">
                <div className="comp_news_feed comp_news_none">
                  <div className="cnf_journal_area">
                    <a href="https://media.naver.com/press/666" className="cnf_journal">
                    <div className="cnf_journal_thumb">
                      <img loading="lazy" width="18" height="18" alt="" src="https://mimgnews.pstatic.net/image/upload/office_logo/666/2025/03/07/logo_666_100_20250307145718.png?type=nf36_36" />
                    </div>
                    <em className="cnf_journal_name">경기일보</em>
                    <span className="cnf_journal_sub">08월 20일 16:26</span>
                    </a>
                    <button type="button" className="cnf_btn_subscription _subscribe_btn" data-office_id="666" data-office_name="경기일보"><span className="blind">구독</span></button>
                  </div>
                  <a href="https://n.news.naver.com/article/666/0000081858?cds=news_media_pc&type=editn" className="cnf_news_area _cds_link _editn_link">
                  <div className="cnf_news_thumb">
                    <img loading="lazy" width="80" height="54" alt="" src="https://mimgnews.pstatic.net/image/origin/666/2025/08/22/81858.jpg?type=nf168_108&ut=20250822113817" />
                  </div>
                  <strong className="cnf_news_title">李 대통령 "내년 R&amp;D 예산 35.3조원…과학기술 천대 나라 대개 망해”</strong>
                  </a>
                  <ul className="cnf_news_list">
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081860?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">[단독] 안산시의회 항공료 조작 의혹…경찰, 압수수색</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081849?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">인천 사망사건 현장서 사라진 20돈짜리 금목걸이…경찰, 조사 착수</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081869?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">정청래, '황금 왕관' 쓴 사진 올리자 "왕 노릇하냐" 비난 쇄도</a></li>
                  </ul>
                </div>
              </div>
              <div className="main_brick_item _channel_main_news_card_wrapper">
                <div className="comp_news_feed comp_news_none">
                  <div className="cnf_journal_area">
                    <a href="https://media.naver.com/press/666" className="cnf_journal">
                    <div className="cnf_journal_thumb">
                      <img loading="lazy" width="18" height="18" alt="" src="https://mimgnews.pstatic.net/image/upload/office_logo/666/2025/03/07/logo_666_100_20250307145718.png?type=nf36_36" />
                    </div>
                    <em className="cnf_journal_name">경기일보</em>
                    <span className="cnf_journal_sub">08월 20일 16:26</span>
                    </a>
                    <button type="button" className="cnf_btn_subscription _subscribe_btn" data-office_id="666" data-office_name="경기일보"><span className="blind">구독</span></button>
                  </div>
                  <a href="https://n.news.naver.com/article/666/0000081858?cds=news_media_pc&type=editn" className="cnf_news_area _cds_link _editn_link">
                  <div className="cnf_news_thumb">
                    <img loading="lazy" width="80" height="54" alt="" src="https://mimgnews.pstatic.net/image/origin/666/2025/08/22/81858.jpg?type=nf168_108&ut=20250822113817" />
                  </div>
                  <strong className="cnf_news_title">李 대통령 "내년 R&amp;D 예산 35.3조원…과학기술 천대 나라 대개 망해”</strong>
                  </a>
                  <ul className="cnf_news_list">
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081860?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">[단독] 안산시의회 항공료 조작 의혹…경찰, 압수수색</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081849?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">인천 사망사건 현장서 사라진 20돈짜리 금목걸이…경찰, 조사 착수</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081869?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">정청래, '황금 왕관' 쓴 사진 올리자 "왕 노릇하냐" 비난 쇄도</a></li>
                  </ul>
                </div>
              </div>
              <div className="main_brick_item _channel_main_news_card_wrapper">
                <div className="comp_news_feed comp_news_none">
                  <div className="cnf_journal_area">
                    <a href="https://media.naver.com/press/666" className="cnf_journal">
                    <div className="cnf_journal_thumb">
                      <img loading="lazy" width="18" height="18" alt="" src="https://mimgnews.pstatic.net/image/upload/office_logo/666/2025/03/07/logo_666_100_20250307145718.png?type=nf36_36" />
                    </div>
                    <em className="cnf_journal_name">경기일보</em>
                    <span className="cnf_journal_sub">08월 20일 16:26</span>
                    </a>
                    <button type="button" className="cnf_btn_subscription _subscribe_btn" data-office_id="666" data-office_name="경기일보"><span className="blind">구독</span></button>
                  </div>
                  <a href="https://n.news.naver.com/article/666/0000081858?cds=news_media_pc&type=editn" className="cnf_news_area _cds_link _editn_link">
                  <div className="cnf_news_thumb">
                    <img loading="lazy" width="80" height="54" alt="" src="https://mimgnews.pstatic.net/image/origin/666/2025/08/22/81858.jpg?type=nf168_108&ut=20250822113817" />
                  </div>
                  <strong className="cnf_news_title">李 대통령 "내년 R&amp;D 예산 35.3조원…과학기술 천대 나라 대개 망해”</strong>
                  </a>
                  <ul className="cnf_news_list">
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081860?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">[단독] 안산시의회 항공료 조작 의혹…경찰, 압수수색</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081849?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">인천 사망사건 현장서 사라진 20돈짜리 금목걸이…경찰, 조사 착수</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081869?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">정청래, '황금 왕관' 쓴 사진 올리자 "왕 노릇하냐" 비난 쇄도</a></li>
                  </ul>
                </div>
              </div>
              <div className="main_brick_item _channel_main_news_card_wrapper">
                <div className="comp_news_feed comp_news_none">
                  <div className="cnf_journal_area">
                    <a href="https://media.naver.com/press/666" className="cnf_journal">
                    <div className="cnf_journal_thumb">
                      <img loading="lazy" width="18" height="18" alt="" src="https://mimgnews.pstatic.net/image/upload/office_logo/666/2025/03/07/logo_666_100_20250307145718.png?type=nf36_36" />
                    </div>
                    <em className="cnf_journal_name">경기일보</em>
                    <span className="cnf_journal_sub">08월 20일 16:26</span>
                    </a>
                    <button type="button" className="cnf_btn_subscription _subscribe_btn" data-office_id="666" data-office_name="경기일보"><span className="blind">구독</span></button>
                  </div>
                  <a href="https://n.news.naver.com/article/666/0000081858?cds=news_media_pc&type=editn" className="cnf_news_area _cds_link _editn_link">
                  <div className="cnf_news_thumb">
                    <img loading="lazy" width="80" height="54" alt="" src="https://mimgnews.pstatic.net/image/origin/666/2025/08/22/81858.jpg?type=nf168_108&ut=20250822113817" />
                  </div>
                  <strong className="cnf_news_title">李 대통령 "내년 R&amp;D 예산 35.3조원…과학기술 천대 나라 대개 망해”</strong>
                  </a>
                  <ul className="cnf_news_list">
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081860?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">[단독] 안산시의회 항공료 조작 의혹…경찰, 압수수색</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081849?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">인천 사망사건 현장서 사라진 20돈짜리 금목걸이…경찰, 조사 착수</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081869?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">정청래, '황금 왕관' 쓴 사진 올리자 "왕 노릇하냐" 비난 쇄도</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="brick-vowel _brick_column">
              <div className="main_brick_item _channel_main_news_card_wrapper">
                <div className="comp_news_feed comp_news_none">
                  <div className="cnf_journal_area">
                    <a href="https://media.naver.com/press/666" className="cnf_journal">
                    <div className="cnf_journal_thumb">
                      <img loading="lazy" width="18" height="18" alt="" src="https://mimgnews.pstatic.net/image/upload/office_logo/666/2025/03/07/logo_666_100_20250307145718.png?type=nf36_36" />
                    </div>
                    <em className="cnf_journal_name">경기일보</em>
                    <span className="cnf_journal_sub">08월 20일 16:26</span>
                    </a>
                    <button type="button" className="cnf_btn_subscription _subscribe_btn" data-office_id="666" data-office_name="경기일보"><span className="blind">구독</span></button>
                  </div>
                  <a href="https://n.news.naver.com/article/666/0000081858?cds=news_media_pc&type=editn" className="cnf_news_area _cds_link _editn_link">
                  <div className="cnf_news_thumb">
                    <img loading="lazy" width="80" height="54" alt="" src="https://mimgnews.pstatic.net/image/origin/666/2025/08/22/81858.jpg?type=nf168_108&ut=20250822113817" />
                  </div>
                  <strong className="cnf_news_title">李 대통령 "내년 R&amp;D 예산 35.3조원…과학기술 천대 나라 대개 망해”</strong>
                  </a>
                  <ul className="cnf_news_list">
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081860?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">[단독] 안산시의회 항공료 조작 의혹…경찰, 압수수색</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081849?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">인천 사망사건 현장서 사라진 20돈짜리 금목걸이…경찰, 조사 착수</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081869?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">정청래, '황금 왕관' 쓴 사진 올리자 "왕 노릇하냐" 비난 쇄도</a></li>
                  </ul>
                </div>
              </div>
              <div className="main_brick_item _channel_main_news_card_wrapper">
                <div className="comp_news_feed comp_news_none">
                  <div className="cnf_journal_area">
                    <a href="https://media.naver.com/press/666" className="cnf_journal">
                    <div className="cnf_journal_thumb">
                      <img loading="lazy" width="18" height="18" alt="" src="https://mimgnews.pstatic.net/image/upload/office_logo/666/2025/03/07/logo_666_100_20250307145718.png?type=nf36_36" />
                    </div>
                    <em className="cnf_journal_name">경기일보</em>
                    <span className="cnf_journal_sub">08월 20일 16:26</span>
                    </a>
                    <button type="button" className="cnf_btn_subscription _subscribe_btn" data-office_id="666" data-office_name="경기일보"><span className="blind">구독</span></button>
                  </div>
                  <a href="https://n.news.naver.com/article/666/0000081858?cds=news_media_pc&type=editn" className="cnf_news_area _cds_link _editn_link">
                  <div className="cnf_news_thumb">
                    <img loading="lazy" width="80" height="54" alt="" src="https://mimgnews.pstatic.net/image/origin/666/2025/08/22/81858.jpg?type=nf168_108&ut=20250822113817" />
                  </div>
                  <strong className="cnf_news_title">李 대통령 "내년 R&amp;D 예산 35.3조원…과학기술 천대 나라 대개 망해”</strong>
                  </a>
                  <ul className="cnf_news_list">
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081860?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">[단독] 안산시의회 항공료 조작 의혹…경찰, 압수수색</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081849?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">인천 사망사건 현장서 사라진 20돈짜리 금목걸이…경찰, 조사 착수</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081869?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">정청래, '황금 왕관' 쓴 사진 올리자 "왕 노릇하냐" 비난 쇄도</a></li>
                  </ul>
                </div>
              </div>
              <div className="main_brick_item _channel_main_news_card_wrapper">
                <div className="comp_news_feed comp_news_none">
                  <div className="cnf_journal_area">
                    <a href="https://media.naver.com/press/666" className="cnf_journal">
                    <div className="cnf_journal_thumb">
                      <img loading="lazy" width="18" height="18" alt="" src="https://mimgnews.pstatic.net/image/upload/office_logo/666/2025/03/07/logo_666_100_20250307145718.png?type=nf36_36" />
                    </div>
                    <em className="cnf_journal_name">경기일보</em>
                    <span className="cnf_journal_sub">08월 20일 16:26</span>
                    </a>
                    <button type="button" className="cnf_btn_subscription _subscribe_btn" data-office_id="666" data-office_name="경기일보"><span className="blind">구독</span></button>
                  </div>
                  <a href="https://n.news.naver.com/article/666/0000081858?cds=news_media_pc&type=editn" className="cnf_news_area _cds_link _editn_link">
                  <div className="cnf_news_thumb">
                    <img loading="lazy" width="80" height="54" alt="" src="https://mimgnews.pstatic.net/image/origin/666/2025/08/22/81858.jpg?type=nf168_108&ut=20250822113817" />
                  </div>
                  <strong className="cnf_news_title">李 대통령 "내년 R&amp;D 예산 35.3조원…과학기술 천대 나라 대개 망해”</strong>
                  </a>
                  <ul className="cnf_news_list">
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081860?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">[단독] 안산시의회 항공료 조작 의혹…경찰, 압수수색</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081849?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">인천 사망사건 현장서 사라진 20돈짜리 금목걸이…경찰, 조사 착수</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081869?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">정청래, '황금 왕관' 쓴 사진 올리자 "왕 노릇하냐" 비난 쇄도</a></li>
                  </ul>
                </div>
              </div>
              <div className="main_brick_item _channel_main_news_card_wrapper">
                <div className="comp_news_feed comp_news_none">
                  <div className="cnf_journal_area">
                    <a href="https://media.naver.com/press/666" className="cnf_journal">
                    <div className="cnf_journal_thumb">
                      <img loading="lazy" width="18" height="18" alt="" src="https://mimgnews.pstatic.net/image/upload/office_logo/666/2025/03/07/logo_666_100_20250307145718.png?type=nf36_36" />
                    </div>
                    <em className="cnf_journal_name">경기일보</em>
                    <span className="cnf_journal_sub">08월 20일 16:26</span>
                    </a>
                    <button type="button" className="cnf_btn_subscription _subscribe_btn" data-office_id="666" data-office_name="경기일보"><span className="blind">구독</span></button>
                  </div>
                  <a href="https://n.news.naver.com/article/666/0000081858?cds=news_media_pc&type=editn" className="cnf_news_area _cds_link _editn_link">
                  <div className="cnf_news_thumb">
                    <img loading="lazy" width="80" height="54" alt="" src="https://mimgnews.pstatic.net/image/origin/666/2025/08/22/81858.jpg?type=nf168_108&ut=20250822113817" />
                  </div>
                  <strong className="cnf_news_title">李 대통령 "내년 R&amp;D 예산 35.3조원…과학기술 천대 나라 대개 망해”</strong>
                  </a>
                  <ul className="cnf_news_list">
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081860?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">[단독] 안산시의회 항공료 조작 의혹…경찰, 압수수색</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081849?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">인천 사망사건 현장서 사라진 20돈짜리 금목걸이…경찰, 조사 착수</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081869?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">정청래, '황금 왕관' 쓴 사진 올리자 "왕 노릇하냐" 비난 쇄도</a></li>
                  </ul>
                </div>
              </div>
              <div className="main_brick_item _channel_main_news_card_wrapper">
                <div className="comp_news_feed comp_news_none">
                  <div className="cnf_journal_area">
                    <a href="https://media.naver.com/press/666" className="cnf_journal">
                    <div className="cnf_journal_thumb">
                      <img loading="lazy" width="18" height="18" alt="" src="https://mimgnews.pstatic.net/image/upload/office_logo/666/2025/03/07/logo_666_100_20250307145718.png?type=nf36_36" />
                    </div>
                    <em className="cnf_journal_name">경기일보</em>
                    <span className="cnf_journal_sub">08월 20일 16:26</span>
                    </a>
                    <button type="button" className="cnf_btn_subscription _subscribe_btn" data-office_id="666" data-office_name="경기일보"><span className="blind">구독</span></button>
                  </div>
                  <a href="https://n.news.naver.com/article/666/0000081858?cds=news_media_pc&type=editn" className="cnf_news_area _cds_link _editn_link">
                  <div className="cnf_news_thumb">
                    <img loading="lazy" width="80" height="54" alt="" src="https://mimgnews.pstatic.net/image/origin/666/2025/08/22/81858.jpg?type=nf168_108&ut=20250822113817" />
                  </div>
                  <strong className="cnf_news_title">李 대통령 "내년 R&amp;D 예산 35.3조원…과학기술 천대 나라 대개 망해”</strong>
                  </a>
                  <ul className="cnf_news_list">
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081860?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">[단독] 안산시의회 항공료 조작 의혹…경찰, 압수수색</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081849?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">인천 사망사건 현장서 사라진 20돈짜리 금목걸이…경찰, 조사 착수</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081869?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">정청래, '황금 왕관' 쓴 사진 올리자 "왕 노릇하냐" 비난 쇄도</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="brick-vowel _brick_column">
              <div className="main_brick_item _channel_main_news_card_wrapper">
                <div className="comp_news_feed comp_news_none">
                  <div className="cnf_journal_area">
                    <a href="https://media.naver.com/press/666" className="cnf_journal">
                    <div className="cnf_journal_thumb">
                      <img loading="lazy" width="18" height="18" alt="" src="https://mimgnews.pstatic.net/image/upload/office_logo/666/2025/03/07/logo_666_100_20250307145718.png?type=nf36_36" />
                    </div>
                    <em className="cnf_journal_name">경기일보</em>
                    <span className="cnf_journal_sub">08월 20일 16:26</span>
                    </a>
                    <button type="button" className="cnf_btn_subscription _subscribe_btn" data-office_id="666" data-office_name="경기일보"><span className="blind">구독</span></button>
                  </div>
                  <a href="https://n.news.naver.com/article/666/0000081858?cds=news_media_pc&type=editn" className="cnf_news_area _cds_link _editn_link">
                  <div className="cnf_news_thumb">
                    <img loading="lazy" width="80" height="54" alt="" src="https://mimgnews.pstatic.net/image/origin/666/2025/08/22/81858.jpg?type=nf168_108&ut=20250822113817" />
                  </div>
                  <strong className="cnf_news_title">李 대통령 "내년 R&amp;D 예산 35.3조원…과학기술 천대 나라 대개 망해”</strong>
                  </a>
                  <ul className="cnf_news_list">
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081860?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">[단독] 안산시의회 항공료 조작 의혹…경찰, 압수수색</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081849?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">인천 사망사건 현장서 사라진 20돈짜리 금목걸이…경찰, 조사 착수</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081869?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">정청래, '황금 왕관' 쓴 사진 올리자 "왕 노릇하냐" 비난 쇄도</a></li>
                  </ul>
                </div>
              </div>
              <div className="main_brick_item _channel_main_news_card_wrapper">
                <div className="comp_news_feed comp_news_none">
                  <div className="cnf_journal_area">
                    <a href="https://media.naver.com/press/666" className="cnf_journal">
                    <div className="cnf_journal_thumb">
                      <img loading="lazy" width="18" height="18" alt="" src="https://mimgnews.pstatic.net/image/upload/office_logo/666/2025/03/07/logo_666_100_20250307145718.png?type=nf36_36" />
                    </div>
                    <em className="cnf_journal_name">경기일보</em>
                    <span className="cnf_journal_sub">08월 20일 16:26</span>
                    </a>
                    <button type="button" className="cnf_btn_subscription _subscribe_btn" data-office_id="666" data-office_name="경기일보"><span className="blind">구독</span></button>
                  </div>
                  <a href="https://n.news.naver.com/article/666/0000081858?cds=news_media_pc&type=editn" className="cnf_news_area _cds_link _editn_link">
                  <div className="cnf_news_thumb">
                    <img loading="lazy" width="80" height="54" alt="" src="https://mimgnews.pstatic.net/image/origin/666/2025/08/22/81858.jpg?type=nf168_108&ut=20250822113817" />
                  </div>
                  <strong className="cnf_news_title">李 대통령 "내년 R&amp;D 예산 35.3조원…과학기술 천대 나라 대개 망해”</strong>
                  </a>
                  <ul className="cnf_news_list">
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081860?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">[단독] 안산시의회 항공료 조작 의혹…경찰, 압수수색</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081849?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">인천 사망사건 현장서 사라진 20돈짜리 금목걸이…경찰, 조사 착수</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081869?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">정청래, '황금 왕관' 쓴 사진 올리자 "왕 노릇하냐" 비난 쇄도</a></li>
                  </ul>
                </div>
              </div>
              <div className="main_brick_item _channel_main_news_card_wrapper">
                <div className="comp_news_feed comp_news_none">
                  <div className="cnf_journal_area">
                    <a href="https://media.naver.com/press/666" className="cnf_journal">
                    <div className="cnf_journal_thumb">
                      <img loading="lazy" width="18" height="18" alt="" src="https://mimgnews.pstatic.net/image/upload/office_logo/666/2025/03/07/logo_666_100_20250307145718.png?type=nf36_36" />
                    </div>
                    <em className="cnf_journal_name">경기일보</em>
                    <span className="cnf_journal_sub">08월 20일 16:26</span>
                    </a>
                    <button type="button" className="cnf_btn_subscription _subscribe_btn" data-office_id="666" data-office_name="경기일보"><span className="blind">구독</span></button>
                  </div>
                  <a href="https://n.news.naver.com/article/666/0000081858?cds=news_media_pc&type=editn" className="cnf_news_area _cds_link _editn_link">
                  <div className="cnf_news_thumb">
                    <img loading="lazy" width="80" height="54" alt="" src="https://mimgnews.pstatic.net/image/origin/666/2025/08/22/81858.jpg?type=nf168_108&ut=20250822113817" />
                  </div>
                  <strong className="cnf_news_title">李 대통령 "내년 R&amp;D 예산 35.3조원…과학기술 천대 나라 대개 망해”</strong>
                  </a>
                  <ul className="cnf_news_list">
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081860?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">[단독] 안산시의회 항공료 조작 의혹…경찰, 압수수색</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081849?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">인천 사망사건 현장서 사라진 20돈짜리 금목걸이…경찰, 조사 착수</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081869?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">정청래, '황금 왕관' 쓴 사진 올리자 "왕 노릇하냐" 비난 쇄도</a></li>
                  </ul>
                </div>
              </div>
              <div className="main_brick_item _channel_main_news_card_wrapper">
                <div className="comp_news_feed comp_news_none">
                  <div className="cnf_journal_area">
                    <a href="https://media.naver.com/press/666" className="cnf_journal">
                    <div className="cnf_journal_thumb">
                      <img loading="lazy" width="18" height="18" alt="" src="https://mimgnews.pstatic.net/image/upload/office_logo/666/2025/03/07/logo_666_100_20250307145718.png?type=nf36_36" />
                    </div>
                    <em className="cnf_journal_name">경기일보</em>
                    <span className="cnf_journal_sub">08월 20일 16:26</span>
                    </a>
                    <button type="button" className="cnf_btn_subscription _subscribe_btn" data-office_id="666" data-office_name="경기일보"><span className="blind">구독</span></button>
                  </div>
                  <a href="https://n.news.naver.com/article/666/0000081858?cds=news_media_pc&type=editn" className="cnf_news_area _cds_link _editn_link">
                  <div className="cnf_news_thumb">
                    <img loading="lazy" width="80" height="54" alt="" src="https://mimgnews.pstatic.net/image/origin/666/2025/08/22/81858.jpg?type=nf168_108&ut=20250822113817" />
                  </div>
                  <strong className="cnf_news_title">李 대통령 "내년 R&amp;D 예산 35.3조원…과학기술 천대 나라 대개 망해”</strong>
                  </a>
                  <ul className="cnf_news_list">
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081860?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">[단독] 안산시의회 항공료 조작 의혹…경찰, 압수수색</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081849?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">인천 사망사건 현장서 사라진 20돈짜리 금목걸이…경찰, 조사 착수</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081869?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">정청래, '황금 왕관' 쓴 사진 올리자 "왕 노릇하냐" 비난 쇄도</a></li>
                  </ul>
                </div>
              </div>
              <div className="main_brick_item _channel_main_news_card_wrapper">
                <div className="comp_news_feed comp_news_none">
                  <div className="cnf_journal_area">
                    <a href="https://media.naver.com/press/666" className="cnf_journal">
                    <div className="cnf_journal_thumb">
                      <img loading="lazy" width="18" height="18" alt="" src="https://mimgnews.pstatic.net/image/upload/office_logo/666/2025/03/07/logo_666_100_20250307145718.png?type=nf36_36" />
                    </div>
                    <em className="cnf_journal_name">경기일보</em>
                    <span className="cnf_journal_sub">08월 20일 16:26</span>
                    </a>
                    <button type="button" className="cnf_btn_subscription _subscribe_btn" data-office_id="666" data-office_name="경기일보"><span className="blind">구독</span></button>
                  </div>
                  <a href="https://n.news.naver.com/article/666/0000081858?cds=news_media_pc&type=editn" className="cnf_news_area _cds_link _editn_link">
                  <div className="cnf_news_thumb">
                    <img loading="lazy" width="80" height="54" alt="" src="https://mimgnews.pstatic.net/image/origin/666/2025/08/22/81858.jpg?type=nf168_108&ut=20250822113817" />
                  </div>
                  <strong className="cnf_news_title">李 대통령 "내년 R&amp;D 예산 35.3조원…과학기술 천대 나라 대개 망해”</strong>
                  </a>
                  <ul className="cnf_news_list">
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081860?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">[단독] 안산시의회 항공료 조작 의혹…경찰, 압수수색</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081849?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">인천 사망사건 현장서 사라진 20돈짜리 금목걸이…경찰, 조사 착수</a></li>
                    <li className="cnf_news_item"><a href="https://n.news.naver.com/article/666/0000081869?cds=news_media_pc&type=editn" className="cnf_news _cds_link _editn_link">정청래, '황금 왕관' 쓴 사진 올리자 "왕 노릇하냐" 비난 쇄도</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <hr/>

  <div className="mp_footer">
    <div className="f_maininfo">
      <div className="f_maininfoinner">
        <a href="#top" className="r_pg_top _go_top show" id="goTop">맨위로</a>
        <footer role="contentinfo">
          <p className="u_cr">
            <span className="u_ftm _footer_login">
              <span className="u_cri u_cri_v1"><a href="https://nid.naver.com/nidlogin.login" className="u_cra" id="news_login">로그인</a></span>
              <span className="u_cri u_cri_v1"><a href="https://www.naver.com/more.html" className="u_cra">전체서비스</a></span>
            </span>
            <span className="u_ftm">
              <span className="u_cri u_cri_v1"><a href="https://news.naver.com/ombudsman" className="u_cra">서비스안내</a></span>
              <span className="u_cri u_cri_v1"><a href="https://help.naver.com/alias/news/news_001.naver" className="u_cra">오류신고</a></span>
              <span className="u_cri u_cri_v1"><a href="https://help.naver.com/alias/news/news_007.naver" className="u_cra">고객센터</a></span>
            </span>
            <span className="cr_rule"><span className="cr_rulea">청소년 보호 책임자 : 이정규</span></span>
            <span className="u_presscopy">각 언론사가 직접 콘텐츠를 편집합니다.</span>
            <span className="u_copyright">이 콘텐츠의 저작권은 저작권자 또는 제공처에 있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 법적 책임을 질 수 있습니다.</span>
            <span className="u_naverlogo"><a href="https://www.navercorp.com/" className="u_naverlogo_a" id="nhnLink">NAVER</a></span>
          </p>
        </footer>
      </div>
    </div>
  </div>

</body>

  );
}

export default App;