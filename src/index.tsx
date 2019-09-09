import { createElement, FunctionComponent } from 'rax';
import { isWeex, isWeb } from 'universal-env';
import cx from 'classnames';
import { Props } from './types';
import './index.css';

function isWeexUrl(url: string) {
  return /(_wx_tpl=[^\s&]|wh_weex=true)/.test(url);
}

function genFixedUrl(props: Props) {
  // handle android ios
  let fixedUrl = props.src;

  const prefix = fixedUrl.indexOf('?') >= 0 ? '&' : '?';

  if (typeof props.urlParam == 'string') {
    fixedUrl += prefix + props.urlParam;
  } else {
    let paramsStrArr = [];

    let assignUrlParam = Object.assign(
      {},
      props.urlParam,
      props.defaultUrlParam
    );
    for (let k in assignUrlParam) {
      paramsStrArr.push(k + '=' + assignUrlParam[k]);
    }

    fixedUrl += prefix + paramsStrArr.join('&');
  }

  return fixedUrl;
}

const defaultProps: Props = {
  defaultUrlParam: {
    // eslint-disable-next-line @typescript-eslint/camelcase
    _page_inside_embed_: 'true',
    // eslint-disable-next-line @typescript-eslint/camelcase
    _page_home_isweex_: isWeex,
    useIframeInWeb: false
  },
  urlParam: {},
  src: ''
};

const Embed: FunctionComponent<Props> = (props = defaultProps) => {
  const { useIframeInWeb, className, style } = props;
  const url = genFixedUrl(props);
  const cls = cx('rax-embed', className);
  if (useIframeInWeb && isWeb) {
    return (
      <iframe
        {...props}
        className={cls}
        type={isWeex ? 'weex' : ''}
        itemId={1}
        src={url}
        style={style}
      />
    );
  }

  if (isWeex && isWeexUrl(url) || isWeb) {
    return (
      <embed
        {...props}
        className={cls}
        style={style}
        type={isWeex ? 'weex' : ''}
        itemId={1}
        src={url}
      />
    );
  } else {
    return <web {...props} className={cls} style={style} src={url} />;
  }
};

export default Embed;
