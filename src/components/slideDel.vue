<template>
    <div>
      <ul>
        <li v-for="(item,index) in list" class="list-item" :key="index" data-type="0">
          <div class="slide" @touchstart.stop="start" @touchmove.stop="move" @touchend.stop="end">
            <img :src="item.imgUrl" alt="">
            <div class="list-content">
              {{item.title}}
            </div>
            <div class="del">删除</div>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
    export default{
      data(){
        return {
          list : [
            {
              title : 'Chrome更新了' ,
              imgUrl : './static/images/Chrome.png' ,
              tips : '不再支持Flash视频播放' ,
              time : '上午 8:30'
            },
            {
              title : '电影新资讯' ,
              imgUrl : './static/images/Sina.png' ,
              tips : '电影《红海行动》上映以来票房暴涨，很多国人表示对国产电影有了新的改观' ,
              time : '上午 12:00'
            },
            {
              title : '聚焦两会·共筑中国梦' ,
              imgUrl : './static/images/video.png' ,
              tips : '习近平代表的两会故事' ,
              time : '下午 17:45'
            },
            {
              title : '微信团队' ,
              imgUrl : './static/images/Wechat.png' ,
              tips : '您的帐号有异常登录，如非本人操作，请及时修改密码' ,
              time : '昨天'
            }
          ],
          Pstart : {
            x : 0,
            y : 0
          },
          Pmove : {
            x : 0,
            y : 0
          }
        }
      },
      methods: {
        start(e) {
          console.log("start")
          console.log(e.touches[0])
          this.Pstart.x = e.touches[0].clientX
          this.Pstart.y = e.touches[0].clientY
        },
        move(e) {
          
        },
        end(e) {
          console.log("end")
          let move = e.changedTouches[0].clientX - this.Pstart.x
          if ( move > 40 ) {
            e.target.parentNode.parentNode.dataset.type = 0
            return false
          } else if(move <= -40 ){
            console.log()
            e.target.parentNode.parentNode.dataset.type = 1
          }
        },
        setTransition() {

        }
      }
    }
</script>
<style lang="stylus" scoped>
  .list-item
    position relative
    box-sizing border-box
    width 100%
    height: 60px
    line-height: 60px
    transition all 0.3s
    border-bottom 1px solid #ccc
    background-color #fff
    vertical-align middle
    &[data-type="0"]
     transform translate3d(0,0,0)
    &[data-type="1"]
      transform translate3d(-80px,0,0)
    .slide
      box-sizing border-box
      display flex
      img
        padding-top 10px
        padding-right 10px
        padding-left 10px
        width: 60px
        height: 40px
      .list-content
        flex: 1
      .del
        position absolute
        text-align center
        font-size 14px
        top: 0
        right -80px
        width 80px
        height 59px
        line-height 60px
        background-color: orangered
        color #FFF
</style>
