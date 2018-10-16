import { action } from '@storybook/addon-actions';

const actions = {
  onRightBlockSwitch: action('onRightBlockSwitch'),
  durationToTime: action('durationToTime'),
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

//控制開關右邊顯示資料的block 待補齊action
/*actions.onRightBlockSwitch = (type) => {
  console.log(type);
}*/

/* 左邊補0 */
function padLeft(str, len) {
  str = '' + str;
  return str.length >= len ? str : new Array(len - str.length + 1).join("0") + str;
}

actions.durationToTime = (duration) => {
  let timeStr = padLeft(Math.floor(duration/60),2) + ":" + padLeft((duration%60),2)
  console.log(timeStr);
	return timeStr;
}

export {actions};