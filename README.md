# wx-dialog

小程序官方提供的alert弹窗 没法自定义，如果需要在上面修改，添加一个input 或者 textarea就没办法做到，因此出于此目的，封装了一套自己的弹窗控件，并且通过定义多个slot插槽来提供自定义
能实现功能
1. 点击弹出有spring动画
2. title和content都可以自定义
3. 提供插槽自定义额外内容
4. 事件按钮支持button功能，可以有获取用户信息功能 (open-type)
5. 按钮可以支持style修改
上图

<div style="text-align:left">
<img src="https://img2020.cnblogs.com/blog/950551/202006/950551-20200630144132258-1420885063.png" width="30%" height="30%">  <img src="https://img2020.cnblogs.com/blog/950551/202006/950551-20200630144141527-1343279880.png" width="30%" height="30%">  <img src="https://img2020.cnblogs.com/blog/950551/202006/950551-20200630144149116-2125836257.png" width="30%" height="30%"> 
</div>
<div style="text-align:left">
<img src="https://img2020.cnblogs.com/blog/950551/202006/950551-20200630144200212-474619109.png" width="30%" height="30%">  <img src="https://img2020.cnblogs.com/blog/950551/202006/950551-20200630144208125-1029658573.png" width="30%" height="30%">  <img src="https://img2020.cnblogs.com/blog/950551/202006/950551-20200630144222902-2073894139.png" width="30%" height="30%">
</div>

需要注意的是 如果想要使用按钮功能，需要对按钮的样式进行修改，需要到app.json中移除
```
"style": "v2",
```
使用代码
```
<view class="container">
    <view class="action-container" bind:tap="normalAction">普通弹窗</view>
    <view class="action-container" bind:tap="loginAction">登录弹窗</view>
    <view class="action-container" bind:tap="closeAction">关闭运单弹窗</view>
    <view class="action-container" bind:tap="mobileAction">输入手机号弹窗</view>
</view>

<!-- 普通弹窗 -->
<kz-dialog wx:if="{{showDialog}}" bind:onTap="onDialogTap" title="我是弹窗标题" content="我是弹窗内容我是弹弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容" actions="{{['取消','确定']}}" mark:key="normal"></kz-dialog>
<!-- <kz-dialog wx:if="{{showDialog}}" bind:onTap="onDialogTap" content="我是弹窗内容我是弹弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容" actions="{{['取消','确定']}}" mark:key="normal"></kz-dialog> -->
<!-- <kz-dialog wx:if="{{showDialog}}" bind:onTap="onDialogTap" title="我是弹窗标题" actions="{{['取消']}}" mark:key="normal"></kz-dialog> -->
<!-- <kz-dialog wx:if="{{showDialog}}" bind:onTap="onDialogTap" title="我是弹窗标题"  destructive="{{0}}" actions="{{['确定']}}" mark:key="normal"></kz-dialog> -->


<!-- 登录授权弹窗 -->
<kz-dialog wx:if="{{loginDialog}}" bind:onTap="onDialogTap" isAuth="{{true}}" bind:onAuth="onAuth" actions="{{['放弃授权','同意授权']}}" title="微信授权登录" content="您暂未授权获取您的信息，为了能正常使用小程序的功能，请允许我们获取您的信息。" mark:key="login"></kz-dialog>

<!-- 关闭运单弹窗 -->
<kz-dialog wx:if="{{showWaybill}}" bind:onTap="onDialogTap" actions="{{['取消','确认关闭']}}" title="关闭运单" content="关闭运单后，未送达的货物后被认定为丢失。您还要继续确认吗？" mark:key="bill">
    <view slot="content" class="input-container">
        <textarea name="textarea" bindinput="inputchange" placeholder="请说明关单原因" placeholder-style="color:red" auto-focus="{{true}}"></textarea>
    </view>
</kz-dialog>

<!-- 输入手机号弹窗 -->
<kz-dialog wx:if="{{showMobile}}" bind:onTap="onDialogTap" title="请输入手机号" mark:key="mobile">
    <view class="mobile-container">
        <input bindinput="inputMobilechange" placeholder="请输入手机号" auto-focus="{{true}}" maxlength="11" type="number"></input>
    </view>
</kz-dialog>

```

这里提供的集中dialog都是项目中用到的，如果你的项目中有其他样式需求，可以自行修改源代码
下载地址请前往本人github https://github.com/qqcc1388/wx-dialog

转载请标注来源：https://www.cnblogs.com/qqcc1388/p/13213686.html
