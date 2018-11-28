<template>
    <div id="wrap">
        <div id="search">
            <div id="searchIcon">
                <img width="100%" src="../../assets/img/search_icon.png"/>
            </div>
            <el-input type="primery" class="searchInput" v-model="searchKeyWord" clearable placeholder="情书"></el-input>
            <span id="searchTitle">搜索</span>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="news"></div>
                </div>
                <div class="swiper-slide">
                    <div class="news"></div>
                </div>
                <div class="swiper-slide">
                    <div class="news"></div>
                </div>
                <div class="swiper-slide">
                    <div class="news"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'Swiper'
export default {
    data() {
        return {
            searchKeyWord: ''
        }
    },
    mounted: function() {
        var mySwiper = new Swiper('.swiper-container', {
            slidesPerView : 1,
            centeredSlides : true,
        });
    }
}
</script>
<style scoped>
#wrap {
    width: 100%;
    height: 100%;
    background-color: rgb(196, 56, 56);
}
#search {
    margin: 10px auto;
    padding: 0;
    width: 85%;
    height: 40px;
    background-color: #ffffff;
    border-top-left-radius: 20px 50%;
    border-bottom-left-radius: 20px 50%;
    border-top-right-radius: 20px 50%;
    border-bottom-right-radius: 20px 50%;
}
#searchIcon {
    position: relative;
    display: inline-block;
    width: 15%;
    height: 40px;
}
#searchIcon img {
    display: inline-table;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -12.5px;
    width: 25px;
    height: 25px;
}
.searchInput {
    width: 65%;
    top: -15px;
}
.searchInput::after {
    position: absolute;
    top: 50%;
    margin-top: -7px;
    width: 1px;
    height: 14px;
    content: "";
    background-color: #dcdfe6;
}
.searchInput >>> .el-input__inner {
    padding: 0 5px;
    border: 0px solid #dcdfe6;
    border-radius: 0px;
}
#searchTitle {
    position: relative;
    display: inline-block;
    padding-left: 10px; 
    top: -15px;
    width: 10%;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
    color: #606266;
}
.news {
    margin: auto;
    width: 85%;
    height: 550px;
    border-radius: 8px;
    background-color: #000;
}
@media screen and (max-width: 320px){
    #search {
        height: 30px;
    }
    #searchIcon {
        width: 12%;
        height: 30px;
    }
    #searchIcon img {
        margin-top: -10px;
        width: 20px;
        height: 20px;
    }
    .searchInput {
        width: 65%;
        top: -10px;
    }
    .searchInput >>> .el-input__inner {
        height: 30px;
        line-height: 30px;
    }
    #searchTitle {
        top: -16px;
        font-size: 12px;
    }
    #searchTitle {
        top: -11px;
        font-size: 12px;
        line-height: 30px;
    }
}
</style>
