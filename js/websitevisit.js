/**
 * Created by ly on 2017/10/25.
 */
function randomData() {
    return Math.round(Math.random()*500);
}
var _chart1 = echarts.init(document.getElementById('chart1'));
var option1 = {
    tooltip: {
        backgroundColor:'transparent',
        position: ['46%','42%'],
        formatter:function(params){
            var chart1show;
            chart1show = '<span style="color:#616871;font-size:18px;">' + params.name + '</span><br><br><span style="color:#1c478c;font-size:36px;font-weight:bold;">'+ params.percent + '%</span>'
            return chart1show;
        }

    },
    legend: [
        {
            orient: 'vertical',
            right:'80%',
            top:'center',
            data:[
                '北京',
                '天津',
                '山西',
                '黑龙江',
                '上海',
                '浙江',
                '安徽',
                '江西',
                '山东',
                '湖北'
            ]
        },
        {
            orient: 'vertical',
            left:'80%',
            top:'center',
            data:[
                '广东',
                '海南',
                '四川',
                '重庆',
                '贵州',
                '云南',
                '青海',
                '新疆',
                '湖南',
                '一级网'
            ]
        }
    ],
    color:[
        '#2860b7',
        '#466fc1',
        '#759cce',
        '#9fbfe7',
        '#5db9c5',
        '#28a1b0',
        '#007a8a',
        '#0d6d46',
        '#057c42',
        '#3e995f',
        '#71b87f',
        '#a9c882',
        '#c4de9f',
        '#accd5b',
        '#b3ce1c',
        '#ead632',
        '#f5cc02',
        '#f4a600',
        '#f59300',
        '#1c478c'
    ],
    series: [
        {
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    borderColor: '#fff',
                }
            },
            data:[
                {value:randomData(), name:'北京'},
                {value:randomData(), name:'天津'},
                {value:randomData(), name:'山西'},
                {value:randomData(), name:'黑龙江'},
                {value:randomData(), name:'上海'},
                {value:randomData(), name:'浙江'},
                {value:randomData(), name:'安徽'},
                {value:randomData(), name:'江西'},
                {value:randomData(), name:'山东'},
                {value:randomData(), name:'湖北'},
                {value:randomData(), name:'广东'},
                {value:randomData(), name:'海南'},
                {value:randomData(), name:'四川'},
                {value:randomData(), name:'重庆'},
                {value:randomData(), name:'贵州'},
                {value:randomData(), name:'云南'},
                {value:randomData(), name:'青海'},
                {value:randomData(), name:'新疆'},
                {value:randomData(), name:'湖南'},
                {value:randomData(), name:'一级网'}
            ]
        },
        {
            type:'pie',
            center:['50%','50%'],
            radius: ['49%', '50%'],
            avoidLabelOverlap: false,
            hoverAnimation:false,
            legendHoverLink:false,
            z:1,
            label: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color:'#ddd'
                }
            },
            data:[
                {value:1}
            ]
        }
    ]
};
_chart1.setOption(option1);

var _chart2 = echarts.init(document.getElementById('chart2'));
var option2 = {
    tooltip: {
        trigger: 'axis',
        backgroundColor:'transparent',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter:function(params){
            //console.log(params)
            var chart2show;
            chart2show = '<div style="background:#fff;background:rgba(255,255,255,.9);border:1px solid #c3c7cf;padding:10px;border-radius:4px;font-size:14px;color:#616871;">' + params[0].name + '<br>' + params[0].seriesName + '：<span style="color:#45b493;">' + params[0].value + '</span>' + '</div>';
            return chart2show;
        }
    },
    grid: {
        containLabel: true,
        left: '20',
        right: '20',
        top: '30',
        bottom: '50'
    },
    xAxis:  {
        type: 'category',
        axisLine: {
            lineStyle: {
                fontSize:14,
                color: '#7d8690'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            fontSize: 14,
            margin: 15
        },
        data: ['共享目录','工作动态','政策法规','关联查询','资源共享统计','法人基础信息','标准规范','使用情况统计','双公示','投资项目','联合惩戒','价格监管','黑名单','政策文件','文件资料','工作进度统计']
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#000'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
            }
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ['#f6f8fd','#fff']
            }
        },
        axisLabel: {
            fontSize: 14,
            margin: 15
        }
    },
    series: [
        {
            name:'直接访问',
            type:'bar',
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#3472cf'},
                            {offset: 1, color: '#66a1ef'}
                        ]
                    )
                }
            },
            data:[randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData(),randomData()]
        }
    ]
};
_chart2.setOption(option2);

