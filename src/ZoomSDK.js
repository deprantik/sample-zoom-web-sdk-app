import React, { Component } from 'react';
import { ZoomMtg } from '@zoomus/websdk';
// import "@zoomus/websdk/dist/css/bootstrap.css";
// import "@zoomus/websdk/dist/css/react-select.css";
const host = process.env.REACT_APP_BASE_URL;

ZoomMtg.setZoomJSLib('https://source.zoom.us/1.7.8/lib', '/av');
ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

export default class ZoomSDK extends Component {

  componenDidMount() {
    // ZoomMtg.init({
    //   // debug: true,
    //   leaveUrl: `http://localhost:3000/`,
    //   isSupportAV: true,
    //   success: (res) => {
    //     ZoomMtg.join({
    //       signature: response.signature,
    //       apiKey: response.apiKey,
    //       meetingNumber: platformId,
    //       userName: userName,
    //       userEmail: userEmail,
    //       passWord: platformPassword ? platformPassword : '',
    //       success: (res) => {
    //         webinarAttended(webinarId);
    //         console.log(res, 'Successfully joined webinar');
    //       },
    //       error: (res) => {
    //         console.log(res, 'Failed to join');
    //       }
    //     })
    //   },
    //   error: (res) => {
    //     console.log(res, 'Failed to initialise');
    //   }
    // })
  }

  render() {
    return (
      <div></div>
    )
  }

}