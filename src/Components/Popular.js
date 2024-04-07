import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/global';
import styled from 'styled-components';
import Sidebar from './Sidebar';

function Popular({ rendered }) {
    const { popularAnime, isSearch, searchResults } = useGlobalContext();
    const [showMore, setShowMore] = useState(false);

    const conditionalRender = () => {
        const data = isSearch ? searchResults : popularAnime;
        const displayedData = showMore ? data : data.slice(0, 12); // Chỉ hiển thị 12 bộ phim hoặc tất cả nếu showMore = true
        return displayedData.map((anime) => (
            <div className="" key={anime.mal_id} id='popular_anime_div'>
                <Link to={`/anime/${anime.mal_id}`}>
                    <img
                        className=""
                        src={anime.images.jpg.large_image_url}
                        alt={anime.title}
                    />
                    <div className="" id='nameAnime'>
                        {anime.title}
                    </div>
                    <div>Chapter :</div>
                    <div>View :</div>
                </Link>
            </div>
        ));
    };

    return (
        <PopularStyled>
            <div className="popular-anime">
                <h2>Phim mới cập nhật</h2>
                <div className='items_popu'>
                    {conditionalRender()}
                   
                </div>
                {!showMore && (
                        <button className="show-more-button" onClick={() => setShowMore(true)}>Xem thêm</button>
                    )}
                  
            </div>
         
           
        <div className='top-view'>
        <Sidebar />
        </div>
            {/* <Sidebar /> */}
        </PopularStyled>
    );
}


const PopularStyled = styled.section`
    display: flex;
    .title_oj {}
    .items_popu {
        display: flex;
        padding-bottom: 2rem;
        padding-left: 5% !important;
        padding-right: 0;
        width: 100%;
        display: grid;
        grid-auto-rows: 470px;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
    .popular-anime {
        padding-left: 15rem;
        padding-right: 15rem;
        width: 100%;
        display: grid;
        grid-gap: 2rem;
        background-color: #fff;
        border-top: 5px solid #e5e7eb;
        height: 50%;
        a {
            color: black;
            height: 500px;
            border-radius: 7px;
        }
        h2 {
            padding-left: 6% !important;
            color: red;
            font-family: sans-serif;
        }
        #nameAnime {
         
            color: black;
            white-space: nowrap; /* Không ngắt dòng */
            overflow: hidden; /* Ẩn phần dư thừa */
            text-overflow: ellipsis;
        }
        #popular_anime_div {
            margin-left: 5%;
            margin-right: 5%;
            border: 5px solid #e5e7eb;
            padding: 5%;
            height: 95%;
            margin-bottom: 5%;
            border-radius: 3%;
            grid-template-rows: repeat(auto-fill, minmax(300px, 1fr));
        }
        a img {
            width: 100%;
            height: 80%;
            object-fit: fill;
            border-radius: 5px;
        }
    }

    .show-more-button {
        font-size: 14px;
        padding: 8px 12px;
        border: none;
        background-color: rgb(240, 240, 240);
        border-radius: 5px;
        cursor: pointer;
        width: 30%; /* Thay đổi kích thước của nút */
        margin-left: auto; /* Căn chỉnh vị trí sang phải */
        margin-right: auto; /* Căn chỉnh vị trí sang trái */
        display: block; /* Đảm bảo nút được hiển thị trên một hàng */
        margin-top: 10px; /* Khoảng cách giữa nút và các phần tử khác */
    }
`;

export default Popular;
