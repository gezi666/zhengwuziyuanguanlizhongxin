/**
 * Created by 魏阁 on 2017-10-25.
 */

$(function () {
    var t = $("#tree-con");
    var setting = {
        view: {
            dblClickExpand: true,
            showLine: true,
            selectedMulti: false
        },
        data: {
            simpleData: {
                enable: true,
                idKey: "id",
                pIdKey: "pId",
                rootPId: ""
            }
        }
    };
    var zNodes =[
        {id:1, pId:0, name:"基础信息资源目录", open:true , iconSkin:"diy01"},
        {id:2, pId:1, name:"全国人口基础信息", open:true , iconSkin:"diy01"},

        {id:3, pId:2, name:"公安部", iconSkin:"diy02"},
        {id:4, pId:2, name:"民政部", iconSkin:"diy02"},
        {id:5, pId:2, name:"卫计委", iconSkin:"diy02"},
        {id:6, pId:2, name:"教育部", iconSkin:"diy02"},

        {id:7, pId:0, name:"电子证照基础信息", iconSkin:"diy02"},

        {id:8, pId:0, name:"主题信息资源目录", open:true , iconSkin:"diy01"},
        {id:9, pId:8, name:"全民健康保障", iconSkin:"diy02"},
        {id:10, pId:8, name:"全民住房保障", iconSkin:"diy02"},
        {id:11, pId:8, name:"全民社会保障", iconSkin:"diy02"},
        {id:12, pId:8, name:"食品药品监督 ", iconSkin:"diy02"}
    ];

    t = $.fn.zTree.init(t, setting, zNodes);
})