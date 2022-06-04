// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
// var ndxz23=require("Nanduxuanze");
// var ndxz = require('Nanduxuanze');
//道具次数为全局变量
window.Global = {
    djnum: 1,
    fenshu3: 0,
};
cc.Class({
    extends: cc.Component,

    properties: {
        
        pass:0,
        time:15,
        player: {
            default: null,
            type: cc.Node
        },
        jdt: {
            default: null,
            type: cc.Node
        },
        ex: {
            default: null,
            type: cc.Node
        },
        score: {
            default: null,
            type: cc.Node
        },
        daoju: {
            default: null,
            type: cc.Node
        },
        tips: {
            default: null,
            type: cc.Node
        },
        shuzu:new Array(),
        t:0,
        
    }, 
   
    onLoad: function() {
         //用于判断玩家选择的难度
        var ndxzt=Global.nandu;
        //进度条动画播放
        var animationComponent=this.jdt.getComponent(cc.Animation);
        animationComponent.play('进度条');
       
        var editbox = this.ex.getComponent(cc.EditBox); 
       

        var scores=this.score.getComponent(cc.Label);
        var fenshu=0;
        var fenshu2=0;
        var fs=0;
        
        var a=this.time;
        var label = this.getComponent(cc.Label); 
        //时间
    
    
        var dj=this.daoju.getComponent(cc.Label);
        Global.djnum=1;
      
       

        var arr1=["按图索骥","百废俱兴","波澜壮阔","朝思暮想","抽丝剥茧","愁肠寸断","触景生情","东山再起","奋起直追","感同身受","浑然一体","坚贞不屈","滥竽充数","流光溢彩","每况愈下","门可罗雀","妙手回春","名垂青史","起死回生","潜移默化","轻而易举","情不自禁","去伪存真","日积月累","融会贯通","身不由己","时过境迁","世风日下","寿终正寝","水乳交融","随波逐流","蔚然成风","冶于一炉","一孔之见","一览无余","一目了然","一贫如洗","一文不名","一应俱全","以偏概全","易如反掌","应有尽有","与日俱增","再接再厉","照猫画虎","自强不息"];
        var arr3=["抱令守律","尺璧寸阴","愁肠百结","踌躇满志","大刀阔斧","待字闺中","独树一帜","邯郸学步","及笄年华","兼容并蓄","接踵而至","狼狈为奸","鳞次栉比","路人皆知","络绎不绝","盘根错节","杞人忧天","跷足而待","深藏若虚","深孚众望","守正不阿","同室操戈","危言危行","物换星移","宵衣旰食","销声匿迹","信口雌黄","胸无城府","胸无点墨","偃旗息鼓","一见钟情","一语破的","懿言嘉行","因陋而简","鹦鹉学舌","志得意满","置若罔闻","钟灵毓秀"];
        var arr2=["博采众长","朝气蓬勃","出类拔萃","当务之急","耳濡目染","分崩离析","过眼烟云","海市蜃楼","魂牵梦萦","交口称誉","经久不息","脍炙人口","乐善好施","美不胜收","名列前茅","名噪一时","评头论足","浅尝辄止","全力以赴","声势浩大","顺水推舟","昙花一现","惟妙惟肖","娓娓动听","无疾而终","养尊处优","杳无音信","义正词严","缘木求鱼","斩钉截铁","终南捷径","重整旗鼓"];

        var filename1=["简单","复杂","困难"];
        var arr=new String();
        var tip=new String();
        var filename2=new String();
        

            
        if(ndxzt==1){
            arr=arr1;
            filename2=filename1[0];
            fs=1;
        }
        if(ndxzt==2){
            arr=arr2;
            filename2=filename1[1];
            fs=1.5;
        }
        if(ndxzt==3){
            arr=arr3;
            filename2=filename1[2];
            fs=2;        }
        
        var len=arr.length;
        //随机创建一个不重复数组 
        for(var i=0;i<len;i++)
     {
        var t=0;
        this.shuzu[i]=parseInt(Math.random()*(len+1)+0);
        if(i>=1)
        {
            for(var j=0;j<i;j++)
        {
            if(this.shuzu[j]==this.shuzu[i])
            {
                t=1;break;
            }

        }
        if(t)
        {
            i--;
        }
        }
    }

    var shuzu=this.shuzu;
        
        this.player.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(cc.url.raw("resources/成语/"+filename2+"/"+arr[shuzu[this.t]]+".png"));
        dj.string=Global.djnum;
        // this.player.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(cc.url.raw("resources/成语/简单/东山再起.png"));
        
        
        // label.string = shuzu[0].toString();
    // this.chengyu= function(){
    //     this.player.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(cc.url.raw("resources/"+shuzu[0]+".jpg"));

    // } 

   
 
        
        
    this.djs=  function (){           
            a=a-0.1;
            if(this.pass==1){
                this.pass=0;
                this.t++;
                this.player.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(cc.url.raw("resources/成语/"+filename2+"/"+arr[shuzu[this.t]]+".png"));
                
                animationComponent.play('进度条');
                editbox.string="";
                fenshu=fs+fenshu;
                fenshu2=fs+fenshu2;            
                // fenshu = fenshu.toFixed(2);
                scores.string=fenshu;
                a=15;
                var tips = this.tips.getComponent(cc.Label);      
                tips.string=" ";	
                
                
                dj.string=Global.djnum;
                //道具次数
                if(fenshu2>=5){
                    Global.djnum++;
                    fenshu2-=5;
                    dj.string=Global.djnum;
                }
            }
            a = a.toFixed(1);
            
            label.string = a;
            // label.string = ndxzt;
            
           
           
           
           
            if(a-0<0.01){
                this.unschedule(this.djs);
                cc.director.loadScene("Ending")
                Global.fenshu3=fenshu;
            }
         }
    this.schedule(this.djs, 0.1);
    this.TF=function(){
            var editbox = this.ex.getComponent(cc.EditBox); 
            if(editbox.string==arr[shuzu[this.t]]){
                this.pass=1;
                
    
            }
    }
    
    
    },
daoju12:function(){
		var tips = this.tips.getComponent(cc.Label); 
        var dj = this.daoju.getComponent(cc.Label); 
        var arr1=["按图索骥","百废俱兴","波澜壮阔","朝思暮想","抽丝剥茧","愁肠寸断","触景生情","东山再起","奋起直追","感同身受","浑然一体","坚贞不屈","滥竽充数","流光溢彩","每况愈下","门可罗雀","妙手回春","名垂青史","起死回生","潜移默化","轻而易举","情不自禁","去伪存真","日积月累","融会贯通","身不由己","时过境迁","世风日下","寿终正寝","水乳交融","随波逐流","蔚然成风","冶于一炉","一孔之见","一览无余","一目了然","一贫如洗","一文不名","一应俱全","以偏概全","易如反掌","应有尽有","与日俱增","再接再厉","照猫画虎","自强不息"];
        var arr3=["抱令守律","尺璧寸阴","愁肠百结","踌躇满志","大刀阔斧","待字闺中","独树一帜","邯郸学步","及笄年华","兼容并蓄","接踵而至","狼狈为奸","鳞次栉比","路人皆知","络绎不绝","盘根错节","杞人忧天","跷足而待","深藏若虚","深孚众望","守正不阿","同室操戈","危言危行","物换星移","宵衣旰食","销声匿迹","信口雌黄","胸无城府","胸无点墨","偃旗息鼓","一见钟情","一语破的","懿言嘉行","因陋而简","鹦鹉学舌","志得意满","置若罔闻","钟灵毓秀"];
        var arr2=["博采众长","朝气蓬勃","出类拔萃","当务之急","耳濡目染","分崩离析","过眼烟云","海市蜃楼","魂牵梦萦","交口称誉","经久不息","脍炙人口","乐善好施","美不胜收","名列前茅","名噪一时","评头论足","浅尝辄止","全力以赴","声势浩大","顺水推舟","昙花一现","惟妙惟肖","娓娓动听","无疾而终","养尊处优","杳无音信","义正词严","缘木求鱼","斩钉截铁","终南捷径","重整旗鼓"];
        var tip1=["指按照图上画的样子去寻找好马，比喻墨守成规办事；也比喻按照线索去寻求","许多原来荒废了的事情，都一下子兴办起来","比喻声势雄壮浩大（多用于诗文、群众运动等）","从早到晚思念不已。形容非常想念或经常想着某一件事","意思是丝得一根一根地抽，茧得一层一层地剥。形容分析事物极为细致，而且一步一步很有层次",
    "忧思萦绕的心肠。愁得肠子都断成一段段的。形容忧愁到了极点","受到眼前景物的触动，引起联想，产生某种感情","指退隐后再度出任要职。也比喻失势后重新恢复地位","意思是鸟类振翅起飞，形容振作起来，奋勇赶上，紧紧的追赶上去",
"意思是虽然没有亲身经历，但感受就像亲身经历过一样","融和成一个整体。形容完整不可分割","坚定而有尊严，绝不向邪恶势力屈服","比喻没有真才实学的人混在内行人之中，以次充好",":光像在流动，色彩像要溢出来","指情况越来越坏","形容为官者休官失势后，门庭冷落车马稀少；或形容事业由盛而衰，宾客稀少之况","医生医术高超，能把垂危的病人治愈",
"把姓名事迹记载在历史书籍上。形容功业巨大，永垂不朽。名声永留史册","使死人复活，多形容医术或技术高明","指人的思想或性格不知不觉受到感染、影响而发生了变化","形容事情容易做，不费力，省事","指自己控制不了自己的情感，比喻感情激动得不能控制","意思是辨别假事物，保留下真正的东西","指一天天地不断积累","指各方面的知识或道理融合贯穿起来，从而得到系统透彻的理解","身体不能由自己做主。指行为不能由自己支配","意思是随着时间的推移，情况发生变化","是指社会风气日趋败坏，一天不如一天",
"原指老死在家里。现比喻事物的灭亡","像水和乳汁那样融合在一起，比喻关系非常融洽或结合得很紧密","比喻没有坚定的立场，没有主见，盲目地随着别人行动","形容一件事情逐渐发展、盛行，形成一种风气","比喻多种事物相互间结合紧密,浑然一体,难分难解","从一个小窟窿里面所看到的。比喻狭隘片面的见解","一眼看去，所有的景物全看见了。形容建筑物的结构没有曲折变化，或诗文内容平淡，没有回味","一眼就能看得清清楚楚","形容穷得像被水冲洗过似的，一无所有","一个钱也没有","一切齐全，应有尽有","用片面的观点看待整体问题","比喻事情非常容易办，像翻一下手掌一样","应该有的全都有了，表示一切齐备","随着时间的推移，一天天地不断增长。 形容增长得很快","指公鸡相斗，每次交锋以前先磨一下嘴。后用以指一次又一次加倍努力","比喻照着样子模仿","指自己不懈地努力向上"];
        var tip3=["死守着律令，不知变通","日影移动一寸的时间价值比径尺的璧玉还要珍贵。极言时间可贵","忧愁苦闷的心肠好像凝结成了许多的疙瘩。形容愁绪郁结，难于排遣","形容对自己取得的成就心满意足","比喻办事果断而有魄力","留在闺房之中，等待许嫁。旧指女子成年待聘","也说别树一帜。单独树立起一面旗帜。比喻独闯一条路子，自成一家","比喻生搬硬套，机械地模仿别人，不但学不到别人的长处，反而会把自己原有的本事也丢掉","未订婚者二十而笄。指少女到了可以出嫁的年龄","把不同内容、不同性质的东西收下来，保存起来","指人们前脚跟着后脚，接连不断地来。形容来者很多，络绎不绝","比喻互相勾结做坏事","像鱼鳞和梳子的齿一样，一个挨着一个地排列着，多用来形容房屋等密集","比喻人所共知的野心","形容行人车马来来往往，接连不断","比喻事情繁难复杂，不易处理","比喻毫无必要的忧虑和担心",
"踮起脚跟等待。形容短时间内便能见到事情的结果","把宝贵的东西收藏起来，好像没有一样。后也用以比喻有知识才能但不爱在人前表现","深孚众望，释义在群众中享有威望，使大家信服，符合大家的期望","处理事情公平正直，不讲情面","比喻内部争斗","说正直的话，做正直的事","景物变化，星辰移位。形容时序变迁","天不亮就穿衣起来，天黑了才吃饭。形容政务忙碌","不再公开讲话，不再出头露面。形容隐藏起来或不公开出现","比喻不顾事实，随口乱说","形容待人接物坦率真诚，心口如一","形容读书太少，文化水平极低","放倒军旗，停敲战鼓。原指不暴露目标，秘密行军。也指停止战斗","一见面就产生了爱情","一句话就说中要害","有教育意义的好言语和好行为","是指就着原有的简陋条件办事","鹦鹉学人说话，比喻别人怎样说，他也跟着怎样说","志向实现，心满意足","好像没有听见似的，不加理睬","指美好的自然环境产生优秀的人物"];
        var tip2=["广泛地采纳各家的长处","形容精神振奋，斗志旺盛，充满生气","草丛生的样子，比喻成群的人或物","当前应做 的事情中最急需办的事","经常听到看到，不知不觉地受到影响","形容国家或集团四分五裂，不可收拾","原比喻身外之物，可以不加重视。后多用以比喻容易消逝的事物",".比喻虚幻不存在的东西","形容思念情切","大家同声称赞","经过长时间停不下来","比喻好的诗文为人们赞美和传诵","爱做好事，喜欢施舍","美好的东西太多，一时接受不完、看不过来","指名次列在前面","名声传扬于一个时期","指无聊的人随便谈论妇女的容貌","略微尝试一下就停下来，指对知识、问题等不作深入研究","把全部力量都投入进去","声威和气势非常壮大","比喻顺应趋势办事","比喻稀有的事物或显赫一时的人物出现不久就消逝","形容描写或模仿得非常好，非常逼真","话说得婉转生动，使人喜欢听",
        "指人因衰老而自然死亡。没有病就死了，比喻事物未受外力干扰就自行消灭了","处在优裕的地位或环境中，安于享乐","没有一点音信","道理正当，措辞严肃","比喻方向、方法不对，一定达不到目的","形容说话或行动坚决果断，毫不含糊","比喻最近便的升官门路。也泛指达到目的的便捷途径","指失败之后，重新集合力量再干"];



var ndxzt=Global.nandu;

var tip=new String();
var shuzu=this.shuzu;

if(ndxzt==1){
    
    tip=tip1;
}
if(ndxzt==2){

    tip=tip2;
}
if(ndxzt==3){

    tip=tip3;
}



if(Global.djnum-1>=0){
			Global.djnum--;
			tips.string=tip[shuzu[this.t]];	
            dj.string=Global.djnum;
        
		}

	},
  

   


});
