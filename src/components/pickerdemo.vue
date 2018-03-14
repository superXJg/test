<template>
    <div class="city">
        <p>城市选择器</p>
        <button @click="_show(0)">显示按钮1</button>
        <button @click="_show(1)">显示按钮2</button>
        <picker ref="picker0" :data="list[1]" :selected-index="selectedIndex[1]" title="test"></picker>
        <picker ref="picker1" :data="list[2]" :selected-index="selectedIndex[2]" title="test"></picker>
        <city-picker ref="picker2" :data="list[3]" :selected-index="selectedIndex[3]"></city-picker>
    </div>
</template>

<script>
    import picker from 'components/picker'
    import CityPicker from 'components/cityPicker'
    import {provinceList, cityList, areaList} from 'common/js/data.js'
    let data1 = [
        {
            text: '剧毒',
            value: 1
        }, {
            text: '蚂蚁',
            value: 2
        },
        {
            text: '幽鬼',
            value: 3
        },
        {
            text: '主宰',
            value: 4
        },
        {
            text: '卡尔',
            value: 5
        },
        {
            text: '宙斯',
            value: 6
        },
        {
            text: '巫医',
            value: 7
        }, {
            text: '巫妖',
            value: 8
        },
        {
            text: '神谕者',
            value: 9
        },
        {
            text: '撼地神牛',
            value: 10
        },
        {
            text: '蓝胖子',
            value: 11
        },
        {
            text: '水晶室女',
            value: 12
        },
        {
            text: '莉娜',
            value: 13
        },
        {
            text: '斯拉克',
            value: 14
        },
        {
            text: '斯拉达',
            value: 15
        }
    ]

    let data2 = [
        {
            text: '输出',
            value: 'a'
        }, {
            text: '控制',
            value: 'b'
        },
        {
            text: '核心',
            value: 'c'
        },
        {
            text: '爆发',
            value: 'd'
        },
        {
            text: '辅助',
            value: 'e'
        },
        {
            text: '打野',
            value: 'f'
        },
        {
            text: '逃生',
            value: 'g'
        }, {
            text: '先手',
            value: 'h'
        }
    ]

    let data3 = [
        {
            text: '梅肯',
            value: 's'
        }, {
            text: '秘法鞋',
            value: 'ss'
        },
        {
            text: '假腿',
            value: 'sss'
        },
        {
            text: '飞鞋',
            value: 'ssss'
        },
        {
            text: '辉耀',
            value: 'sssss'
        },
        {
            text: '金箍棒',
            value: 'ssssss'
        }
    ]
    export default {
        name: "city-picker",
        data () {
            return{
                list:[
                    [data1],
                    [data1, data2],
                    [data1, data2, data3],
                    [provinceList, cityList, areaList]
                ],
                selectedIndex: [
                    [0],
                    [1, 0],
                    [0, 1, 2],
                    [0, 0, 0]
                ]
            }
        },
        mounted() {
            this.$refs.picker0.setData([data1])
            this.$refs.picker0.setSelectedIndex([1])
        },
        components : {
            picker,
            CityPicker
        },
        methods : {
            _show(index) {
                this.$refs['picker'+index].show()
                console.log(index)
            },
            _hide(index) {
                this.$refs.picker.hide()
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .city
        position absolute
        left: 0
        right: 0
        top: 0
        bottom: 0
        background-color: #ccc
        z-index 99
</style>