/**
 * Created by magicalcoder on 2017/2/5.
 */
function dateUtcY(viewTime) {
    if(viewTime){
        var ymd = viewTime.split(" ")[0];
        var ymdArr = ymd.split("-");
        return Date.UTC(parseInt(ymdArr[0]),0);
    }
    return null;
}
function dateUtcYm(viewTime) {
    if(viewTime){
        var ymd = viewTime.split(" ")[0];
        var ymdArr = ymd.split("-");
        return Date.UTC(parseInt(ymdArr[0]),parseInt(ymdArr[1])-1);
    }
    return null;
}
function dateUtcYmd(viewTime) {
    if(viewTime){
        var ymd = viewTime.split(" ")[0];
        var ymdArr = ymd.split("-");
        return Date.UTC(parseInt(ymdArr[0]),parseInt(ymdArr[1])-1,parseInt(ymdArr[2]));
    }
    return null;
}
function dateUtcYmdH(viewTime) {
    if(viewTime){
        var ymd = viewTime.split(" ")[0];
        var ymdArr = ymd.split("-");
        var hms = viewTime.split(" ")[1];
        var hmsArr = hms.split(":");
        return Date.UTC(parseInt(ymdArr[0]),parseInt(ymdArr[1])-1,parseInt(ymdArr[2]),parseInt(hmsArr[0]));
    }
    return null;
}
function dateUtcYmdHm(viewTime) {
    if(viewTime){
        var ymd = viewTime.split(" ")[0];
        var ymdArr = ymd.split("-");
        var hms = viewTime.split(" ")[1];
        var hmsArr = hms.split(":");
        return Date.UTC(parseInt(ymdArr[0]),parseInt(ymdArr[1])-1,parseInt(ymdArr[2]),parseInt(hmsArr[0]),parseInt(hmsArr[1]));
    }
    return null;
}
function dateUtcYmdHms(viewTime) {
    if(viewTime){
        var ymd = viewTime.split(" ")[0];
        var ymdArr = ymd.split("-");
        var hms = viewTime.split(" ")[1];
        var hmsArr = hms.split(":");
        return Date.UTC(parseInt(ymdArr[0]),parseInt(ymdArr[1])-1,parseInt(ymdArr[2]),parseInt(hmsArr[0]),parseInt(hmsArr[1]),parseInt(hmsArr[2]));
    }
    return null;
}
//统计图表
function groupDateCountToHighChartsData(integerDateList,groupDateCountByPrecision) {
    if(integerDateList && integerDateList.length>0){
        var data = [];
        for(var i=0;i<integerDateList.length;i++){
            var dateUtcValue
            switch (groupDateCountByPrecision){
                case 1:dateUtcValue = dateUtcY(integerDateList[i].viewTime);break;
                case 2:dateUtcValue = dateUtcYm(integerDateList[i].viewTime);break;
                case 3:dateUtcValue = dateUtcYmd(integerDateList[i].viewTime);break;
                case 4:dateUtcValue = dateUtcYmdH(integerDateList[i].viewTime);break;
                case 5:dateUtcValue = dateUtcYmdHm(integerDateList[i].viewTime);break;
                case 6:dateUtcValue = dateUtcYmdHms(integerDateList[i].viewTime);break;
            }
            if(dateUtcValue!=null){
                data.push([dateUtcValue,integerDateList[i].total])
            }
        }
        return data;
    }
    return []
}
//统计间隔图表
function groupDateIntervalToHighChartsData(integerDateList,groupDateIntervalByPrecision) {
    if(integerDateList && integerDateList.length>0){
        var precision = groupDateIntervalByPrecisionToRealSeconds(groupDateIntervalByPrecision)
        var data = [];
        for(var i=0;i<integerDateList.length;i++){
            var dateUtcValue = dateUtcYmdHms(integerDateList[i].viewTime)
            if(dateUtcValue!=null){
                var intervalSecond = 0;
                if(i>0){
                    var beforeUtcValue = dateUtcYmdHms(integerDateList[i-1].viewTime)
                    intervalSecond = dateUtcValue - beforeUtcValue
                }
                data.push([dateUtcValue,intervalSecond/precision])
            }
        }
        return data;
    }
    return []
}

function groupToHighChartsData(integerObjectList) {
    var data = [];
    if(integerObjectList && integerObjectList.length>0){
        for(var i=0;i<integerObjectList.length;i++){
            var item = integerObjectList[i];
            var obj = {name:item.object+"",data:[item.total]}
            data.push(obj)
        }
    }
    return data;
}
function groupDateIntervalByPrecisionToName(groupDateIntervalByPrecision) {
    switch (groupDateIntervalByPrecision){
        case 6:
            return "秒";
        case 5:
            return "分";
        case 4:
            return "时";
        case 3:
            return "日";
        case 2:
            return "月";
        case 1:
            return "年";
    }
    return "";
}
//类型转换成秒
function groupDateIntervalByPrecisionToRealSeconds(groupDateIntervalByPrecision) {
    switch (groupDateIntervalByPrecision){
        case 6:
            return 1000;
        case 5:
            return 60000;
        case 4:
            return 3600000;
        case 3:
            return 86400000;
        case 2:
            return 2592000000;
        case 1:
            return 946080000000;
    }
    return 1000;
}
//按照时间分组统计个数
function groupDateCountStatistics(tableName,divId,start,limit,reqParam) {
    Highcharts.setOptions({
        timezoneOffset: -8,
        lang: {
            printChart:"打印图表",
            downloadJPEG: "下载JPEG 图片" ,
            downloadPDF: "下载PDF文档"  ,
            downloadPNG: "下载PNG 图片"  ,
            downloadSVG: "下载SVG 矢量图" ,
            exportButtonTitle: "导出图片"
        }
    });

    var groupDateCountByPrecision = reqParam.groupDateCountByPrecision
    $.getJSON("admin/"+tableName+"/group_date_count_statistics/"+start+"/"+limit,reqParam,function (data) {
        $('#'+divId).highcharts({
            chart: {
                zoomType: 'x'
            },
            title: {
                text: '日期分组区域线形图'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                    '鼠标拖动可以进行缩放' : '手势操作进行缩放'
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {
                    millisecond: '%H:%M:%S.%L',
                    second: '%Y-%m-%d %H:%M:%S',
                    minute: '%Y-%m-%d %H:%M',
                    hour: '%Y-%m-%d %H',
                    day: '%Y-%m-%d',
                    week: '%m-%d',
                    month: '%Y-%m',
                    year: '%Y'
                }
            },
            tooltip: {
                dateTimeLabelFormats: {
                    millisecond: '%Y-%m-%d %H:%M:%S.%L',
                    second: '%Y-%m-%d %H:%M:%S',
                    minute: '%Y-%m-%d %H:%M',
                    hour: '%Y-%m-%d %H',
                    day: '%Y-%m-%d',
                    week: '%m-%d',
                    month: '%Y-%m',
                    year: '%Y'
                }
            },
            yAxis: {
                title: {
                    text: '数量（个）'
                }
            },
            legend: {
                enabled: false
            },
            exporting:{
                enabled:true
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            series: [{
                type: 'area',
                name: '数量',
                data: groupDateCountToHighChartsData(data.info,groupDateCountByPrecision)
            }]
        });
    })
}


function groupDateIntervalStatistics(tableName,divId,start,limit,reqParam,groupDateIntervalByPrecision) {
    Highcharts.setOptions({
     timezoneOffset: -8,
        lang: {
            printChart:"打印图表",
            downloadJPEG: "下载JPEG 图片" ,
            downloadPDF: "下载PDF文档"  ,
            downloadPNG: "下载PNG 图片"  ,
            downloadSVG: "下载SVG 矢量图" ,
            exportButtonTitle: "导出图片"
        }
     });

    $.getJSON("admin/"+tableName+"/group_date_interval_statistics/"+start+"/"+limit,reqParam,function (data) {
        $('#'+divId).highcharts({
            chart: {
                zoomType: 'x'
            },
            title: {
                text: '间隔频率区域线形图'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                    '鼠标拖动可以进行缩放' : '手势操作进行缩放'
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {
                    millisecond: '%H:%M:%S.%L',
                    second: '%Y-%m-%d %H:%M:%S',
                    minute: '%Y-%m-%d %H:%M:%S',
                    hour: '%Y-%m-%d %H:%M:%S',
                    day: '%Y-%m-%d',
                    week: '%m-%d',
                    month: '%Y-%m',
                    year: '%Y'
                }
            },
            tooltip: {
                dateTimeLabelFormats: {
                    millisecond: '%H:%M:%S.%L',
                    second: '%Y-%m-%d %H:%M:%S',
                    minute: '%Y-%m-%d %H:%M:%S',
                    hour: '%Y-%m-%d %H:%M:%S',
                    day: '%Y-%m-%d',
                    week: '%m-%d',
                    month: '%Y-%m',
                    year: '%Y'
                }
            },
            yAxis: {
                title: {
                    text: '间隔（'+groupDateIntervalByPrecisionToName(groupDateIntervalByPrecision)+'）'
                }
            },
            legend: {
                enabled: false
            },
            exporting:{
                enabled:true
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            series: [{
                type: 'area',
                name: '间隔',
                data: groupDateIntervalToHighChartsData(data.info,groupDateIntervalByPrecision)
            }]
        });
    })
}

function groupStatisticsDiv(tableName,divId,start,limit,reqParam,groupStatisticsName) {
    Highcharts.setOptions({
        timezoneOffset: -8,
        lang: {
            printChart:"打印图表",
            downloadJPEG: "下载JPEG 图片" ,
            downloadPDF: "下载PDF文档"  ,
            downloadPNG: "下载PNG 图片"  ,
            downloadSVG: "下载SVG 矢量图" ,
            exportButtonTitle: "导出图片"
        }
    });

    $.getJSON("admin/"+tableName+"/group_statistics/"+start+"/"+limit,reqParam,function (data) {
        if(data.code==0){
            $('#'+divId).highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: '自定义分组条形图'
                },
                subtitle: {
                    text: '根据自定义字段统计'
                },
                xAxis: {
                    categories: ['分类'],
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: '数量 (个)',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                tooltip: {
                    valueSuffix: ' 个'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    },
                    series: {
                        cursor: 'pointer',
                        events: {
                            click: function(e) {
                                $("#"+groupStatisticsName).text(e.point.series.name)
                            }
                        },
                    }
                },
                legend: {
                    layout: 'horizontal',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 100,
                    borderWidth: 1,
                    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                    shadow: true,
                    enabled: true

                },
                credits: {
                    enabled: false
                },
                series:  groupToHighChartsData(data.info)
            });
        }else {
            alert(data.message)
        }
    })
}