<template>
    <div id="wrap">
        <router-view id="mainViewWrap"></router-view>
        <div id="mainMenuWrap">
            <div class="mainMenuItem color" @click="changeMenu(0)">
                <div id="foundDiv" :class="{selected: selected == 0, unselected: selected != 0}"></div>
                <span :class="{selectedText: selected == 0, unselectedText: selected != 0}">发现</span>
            </div>
            <div class="mainMenuItem" @click="changeMenu(1)">
                <div id="foundDiv" :class="{selected: selected == 1, unselected: selected != 1}"></div>
                <span :class="{selectedText: selected == 1, unselectedText: selected != 1}">书架</span>
            </div>
            <div class="mainMenuItem" @click="changeMenu(2)">
                <div id="foundDiv" :class="{selected: selected == 2, unselected: selected != 2}"></div>
                <span :class="{selectedText: selected == 2, unselectedText: selected != 2}">想法</span>
            </div>
            <div class="mainMenuItem" @click="changeMenu(3)">
                <div id="foundDiv" :class="{selected: selected == 3, unselected: selected != 3}"></div>
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
    height: 92%;
    background-color: #f9f9;
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
    height: 8%;
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
    bottom: 4px;
    font-size: 12px;
    text-align: center;
}
.color {
    background-color: #f2f2f2;
}
#foundDiv {
    position: absolute;
    left: 50%;
    margin-left: -12px;
    top: 5px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
}
.unselected {
    border: 1px solid #bebebe;
}
.selected {
    background-color: #5cc3ff;
    border: 1px solid #5cc3ff;
}
.unselectedText {
    color: #bebebe;
}
.selectedText {
    color: #5cc3ff;
}
</style>
