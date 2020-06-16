import React, { Component } from 'react';
import genarateSignature from './Utils/signature';
import { ZoomMtg } from '@zoomus/websdk';
import "@zoomus/websdk/dist/css/bootstrap.css";
import "@zoomus/websdk/dist/css/react-select.css";

ZoomMtg.setZoomJSLib('https://source.zoom.us/1.7.8/lib', '/av');
ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

export default class ZoomSDK extends Component {

  componentDidMount() {
    let response = genarateSignature()
    if (response) {
      ZoomMtg.init({
        debug: true,
        leaveUrl: `http://localhost:3000/`,
        isSupportAV: true,
        success: (res) => {
          ZoomMtg.join({
            signature: response.signature,
            apiKey: response.zoomApiKey,
            meetingNumber: response.platformId,
            userName: 'Name Sirname',
            userEmail: 'name@gmail.com',
            passWord: response.platformPassword ? response.platformPassword : '',
            success: (res) => {
              console.log(res, 'Successfully joined webinar');
            },
            error: (res) => {
              console.log(res, 'Failed to join');
            }
          })
        },
        error: (res) => {
          console.log(res, 'Failed to initialise');
        }
      })
    }
  }

  render() {
    return (
      <div></div>
    )
  }

}