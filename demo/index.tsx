import { createElement, render } from 'rax';
import * as DriverDOM from 'driver-dom';
import * as DriverWeex from 'driver-weex';
import { isWeex } from 'universal-env';
import Embed from '../src/index';

render(<Embed src={'http://taobao.com'} useIframeInWeb={true} style={{
  height: 750,
  width: 750
}} />, document.body, { driver:isWeex ? DriverWeex : DriverDOM });
