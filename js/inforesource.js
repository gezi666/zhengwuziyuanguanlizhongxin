/**
 * Created by ly on 2017/10/25.
 */
function randomData() {
    return Math.round(Math.random()*500);
}
var _chart1 = echarts.init(document.getElementById('chart1'));
var option1 = {
//    tooltip: {
//        backgroundColor:'transparent',
//        position: ['45%','10'],
//        formatter:function(params){
//            var chart1show;
//            chart1show = '<span style="color:#000;font-size:14px;">' + params.name + '</span>' +'<span style="margin-left:15px;color:#3e995f;font-size:24px">'+ params.percent + '%</span>'
//            return chart1show;
//        }
//
//    },
    legend: {
        orient: 'vertical',
        right:'80%',
        y:'center',
        data:['资源目录分类','用户登录','资源录入','用户登录-填报系统','用户登录-目录系统','资源审核','资源发布','目录导入','自查填报模板下载','资源注册']
    },
    color:['#2860b7','#466fc1','#759cce','#9fbfe7','#5db9c5','#28a1b0','#057c42','#3e995f','#ffad2c','#ffb16c'],
    series: [
        {
            type:'pie',
            radius: ['25%', '70%'],
            avoidLabelOverlap: false,
            roseType : 'radius',
            z:2,
            label: {
                normal: {
                    show: false,
                    fontSize: 20,
                },
                emphasis: {
                    show: true,
                    formatter:function(params){
                        var chart1show;
                        chart1show = params.name + params.percent + '%'
                        return chart1show;
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false,
                    length2:40
                },
                emphasis: {
                    show: true

                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    borderColor: '#fff',
                }
            },
            data:[
                {value:randomData(), name:'资源目录分类'},
                {value:randomData(), name:'用户登录'},
                {value:randomData(), name:'资源录入'},
                {value:randomData(), name:'用户登录-填报系统'},
                {value:randomData(), name:'用户登录-目录系统'},
                {value:randomData(), name:'资源审核'},
                {value:randomData(), name:'资源发布'},
                {value:randomData(), name:'目录导入'},
                {value:randomData(), name:'自查填报模板下载'},
                {value:randomData(), name:'资源注册'}
            ]
        },
        {
            name:'辅助',
            type:'pie',
            radius: ['73%', '74%'],
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
        backgroundColor:'transparent',
        position: ['43%','42%'],
        formatter:function(params){
            var chart1show;
            chart1show = '<span style="color:#616871;font-size:18px;">' + params.name + '</span><br><br><span style="color:#1c478c;font-size:36px;font-weight:bold;">'+ params.percent + '%</span>'
            return chart1show;
        }

    },
    legend: {
        orient: 'vertical',
        right: '80%',
        y:'center',
        data:['北京','内蒙古','浙江','江西','山东','河南','海南','\n','四川','重庆','贵州','云南','新疆','互联网','一级网']
    },
    color:['#2860b7','#466fc1','#466fc1','#759cce','#9fbfe7','#5db9c5','#28a1b0','#057c42','#3e995f','#71b87f','#a9c882','#c4de9f','#007a8a','#f5d601'],
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
                {value:randomData(), name:'内蒙古'},
                {value:randomData(), name:'浙江'},
                {value:randomData(), name:'江西'},
                {value:randomData(), name:'山东'},
                {value:randomData(), name:'河南'},
                {value:randomData(), name:'海南'},
                {value:randomData(), name:'四川'},
                {value:randomData(), name:'重庆'},
                {value:randomData(), name:'贵州'},
                {value:randomData(), name:'云南'},
                {value:randomData(), name:'新疆'},
                {value:randomData(), name:'互联网'},
                {value:randomData(), name:'一级网'}
            ]
        },
        {
            type:'pie',
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
_chart2.setOption(option2);

var _chart3 = echarts.init(document.getElementById('chart3'));
var option3 = {
    tooltip: {

    },
    legend: {
        orient: 'vertical',
        left: '0',
        y:'center',
        data:[
            '59.255.211.11',
            '59.255.211.12',
            '59.255.121.3',
            '59.255.188.8',
            '59.255.211.13',
            '59.255.121.27',
            '59.255.121.26',
            '59.255.3.140',
            '59.255.60.1',
            '59.255.56.23',
            '59.255.121.2',
            '59.255.70.147',
            '59.255.121.87',
            '59.255.121.22',
            '59.255.67.252',
            '59.255.121.16',
            '59.255.216.1',
            '59.255.70.215',
            '\n',
            '59.255.61.29',
            '59.255.13.66',
            '59.255.121.17',
            '59.255.211.4',
            '59.255.56.150',
            '59.255.68.61',
            '59.255.69.100',
            '59.255.70.211',
            '59.255.89.253',
            '59.255.70.240',
            '59.255.33.250',
            '59.255.121.6',
            '59.255.8.133',
            '59.255.70.138',
            '59.255.70.205',
            '59.255.70.129',
            '59.255.121.14',
            '59.255.50.26'
        ]
    },
    color:[
        '#001872',
        '#002a7e',
        '#001d8b',
        '#002c87',
        '#003195',
        '#0339a8',
        '#0345a8',
        '#0a4db1',
        '#0a50b1',
        '#1055b4',
        '#1e65c6',
        '#206fda',
        '#2e78db',
        '#3980de',
        '#49aced',
        '#6cbbef',
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
        '#f5d601',
        '#d4aa00',
        '#ffad2c',
        '#ffad2c',
        '#ff9c75',
        '#ffb16c'
    ],
    series: [
        {
            type:'pie',
            center:['65%','50%'],
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
                {value:randomData(), name:'59.255.211.11'},
                {value:randomData(), name:'59.255.211.12'},
                {value:randomData(), name:'59.255.121.3'},
                {value:randomData(), name:'59.255.188.8'},
                {value:randomData(), name:'59.255.211.13'},
                {value:randomData(), name:'59.255.121.27'},
                {value:randomData(), name:'59.255.121.26'},
                {value:randomData(), name:'59.255.3.140'},
                {value:randomData(), name:'59.255.60.1'},
                {value:randomData(), name:'59.255.56.23'},
                {value:randomData(), name:'59.255.121.2'},
                {value:randomData(), name:'59.255.70.147'},
                {value:randomData(), name:'59.255.121.87'},
                {value:randomData(), name:'59.255.121.22'},
                {value:randomData(), name:'59.255.67.252'},
                {value:randomData(), name:'59.255.121.16'},
                {value:randomData(), name:'59.255.216.1'},
                {value:randomData(), name:'59.255.70.215'},
                {value:randomData(), name:'59.255.61.29'},
                {value:randomData(), name:'59.255.13.66'},
                {value:randomData(), name:'59.255.121.17'},
                {value:randomData(), name:'59.255.211.4'},
                {value:randomData(), name:'59.255.56.150'},
                {value:randomData(), name:'59.255.68.61'},
                {value:randomData(), name:'59.255.69.100'},
                {value:randomData(), name:'59.255.70.211'},
                {value:randomData(), name:'59.255.89.253'},
                {value:randomData(), name:'59.255.70.240'},
                {value:randomData(), name:'59.255.33.250'},
                {value:randomData(), name:'59.255.121.6'},
                {value:randomData(), name:'59.255.8.133'},
                {value:randomData(), name:'59.255.70.138'},
                {value:randomData(), name:'59.255.70.205'},
                {value:randomData(), name:'59.255.70.129'},
                {value:randomData(), name:'59.255.121.14'},
                {value:randomData(), name:'59.255.50.26'}
            ]
        },
        {
            type:'pie',
            center:['65%','50%'],
            radius: ['49%', '50%'],
            avoidLabelOverlap: false,
            hoverAnimation:false,
            legendHoverLink:false,
            z:1,
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    textStyle: {
                        fontSize: '18',
                        fontWeight: 'bold',
                        color:'#616871'
                    },
                    formatter:'一级网IP统计'
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
_chart3.setOption(option3);