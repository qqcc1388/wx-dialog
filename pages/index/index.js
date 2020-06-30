// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['全部', '进行中', '已送达'],
    menus: ['进行中', '待接单', '待揽件', '待转单', '待送达'],
    selectIndex: 1,
    menuIndex: 1,
    showWaybill: false,
    loginDialog: false,
    showMobile: false,
    showDialog: false,
  },

  normalAction() {
    this.setData({ showDialog: true });
  },

  loginAction() {
    this.setData({ loginDialog: true });
  },
  closeAction() {
    this.setData({ showWaybill: true });
  },
  mobileAction() {
    this.setData({ showMobile: true });

  },

  onBarTap(e) {
    console.log(e.detail);
  },


  //发起登录授权
  async onAuth(e) {
    this.setData({ loginDialog: false });
    var setting = await getSetting();
    //scope.userInfo = 1 表示用户同意授权
    if (setting.authSetting['scope.userInfo']) {
      //用户同意授权 保存用户登录信息
      var userInfo = e.detail.detail.userInfo;
      console.log(userInfo);
      wx.setStorage({
        key: dataConst.Key_UserInfo,
        data: userInfo,
      });

      //根据用户信息发起登录请求 返回code码
      const res = await login();
      console.log(res);
      this.setData({ userInfo });

      //微信登录请求完成 拿到code码向服务器发起请求 
      // const respons = await request();
      // //请求成功
      // if (respons.code == 0) {
      //   //用户给数据最终保存
      // } else {
      //   showToast(res.message);
      // }
    } else {
      //用户未同意授权
    }

  },

  //弹窗点击回调
  onDialogTap(e) {
    this.setData({ loginDialog: false });
    this.setData({ showWaybill: false });
    this.setData({ showDialog: false });
    if (e.mark.key === 'mobile') {
      //校验手机号
      //验证手机号 1开头 11位数字
      if (e.detail === 1) {
        if (!(/^[1]\d{10}$/.test(this.data.mobile))) {
          showToast('手机号不符合规范');
          return;
        }
        showToast('输入手机号码:' + this.data.mobile);
      }
      this.setData({ showMobile: false });
    }
  },


  //手机号输入
  inputMobilechange(e) {
    this.data.mobile = e.detail.value;
  },
})