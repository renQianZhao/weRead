<template>
    <div id="wrap">
        <router-view id="mainViewWrap"></router-view>
        <div id="mainMenuWrap">
            <div class="mainMenuItem" @click="changeMenu(0)">
                <div id="foundDiv">
                    <img width="100%" v-if="selected == 0" src="../../assets/img/found_selected.png" />
                    <img width="100%" v-else src="../../assets/img/found_unselected.png" />
                </div>
                <span :class="{selectedText: selected == 0, unselectedText: selected != 0}">发现</span>
            </div>
            <div class="mainMenuItem" @click="changeMenu(1)">
                <div id="foundDiv">
                    <img width="100%" v-if="selected == 1" src="../../assets/img/books_selected.png" />
                    <img width="100%" v-else src="../../assets/img/books_unselected.png" />
                </div>
                <span :class="{selectedText: selected == 1, unselectedText: selected != 1}">书架</span>
            </div>
            <div class="mainMenuItem" @click="changeMenu(2)">
                <div id="foundDiv">
                    <img width="100%" v-if="selected == 2" src="../../assets/img/minds_selected.png" />
                    <img width="100%" v-else src="../../assets/img/minds_unselected.png" />
                </div>
                <span :class="{selectedText: selected == 2, unselectedText: selected != 2}">想法</span>
            </div>
            <div class="mainMenuItem" @click="changeMenu(3)">
                <div id="foundDiv">
                    <img width="100%" v-if="selected == 3" src="../../assets/img/user_selected.png" />
                    <img width="100%" v-else src="../../assets/img/user_unselected.png" />
                </div>
                <span :class="{selectedText: selected == 3, unselectedText: selected != 3}">我</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selected: 0
        }
    },
    methods: {
        changeMenu: function(menuId) {
            let _this = this;
            _this.selected = menuId;
            switch(menuId) {
                case 0: 
                    _this.$router.push({
                        name: 'found'
                    });
                    break;
                case 1: 
                    _this.$router.push({
                        name: 'books'
                    });
                    break;
                case 2: 
                    _this.$router.push({
                        name: 'minds'
                    });
                    break;
                case 3: 
                    _this.$router.push({
                        name: 'user'
                    });
                    break;
            }
        }
    }
    
}
</script>
<style scoped>
#wrap {
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
}
#mainViewWrap {
    width: 100%;
    /* height: 92%; */
    background-color: #f2f2f2;
    border: 1px solid rgba(243, 151, 151, 0.438);
    box-sizing: border-box;
}
#mainMenuWrap {
    position: fixed;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    bottom: 0;
    width: 100%;
    /* height: 8%; */
    height: 46px;
    background-color: #ffffff;
}
.mainMenuItem {
    position: relative;
    flex-grow: 1;
    width: 24%;
    height: 100%;
    box-sizing: border-box;
}
.mainMenuItem span {
    display: block;
    position: absolute;
    width: 100%;
    bottom: 1px;
    font-size: 12px;
    text-align: center;
}
#foundDiv {
    position: absolute;
    left: 50%;
    margin-left: -12px;
    top: 3px;
    width: 24px;
    height: 24px;
    /* border-radius: 50%; */
}
.unselectedText {
    color: #bebebe;
}
.selectedText {
    color: #5cc3ff;
}
/* @media screen and (max-height: 480px) {
    #mainViewWrap {
        height: 89%;
    }
    #mainMenuWrap {
        height: 11%;
    }
} */
</style>
